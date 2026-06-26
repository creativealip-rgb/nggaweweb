import fs from "fs";
import path from "path";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  status: "draft" | "published";
  content: string;
  author?: string;
  image?: string;
  views?: number;
  scheduledAt?: string;
  // SEO fields
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  focusKeyword?: string;
};

const DB_PATH = path.join(process.cwd(), "data", "blog.json");
const CATEGORIES_PATH = path.join(process.cwd(), "data", "categories.json");

const DEFAULT_CATEGORIES = ["Website", "SEO", "Automation", "Tips", "Tutorial"];

function ensureDir() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ── Posts ──


export function getWordCount(content: string): number {
  return content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
}

export function isPostLive(post: BlogPost, now = new Date()): boolean {
  if (post.status !== "published") return false;
  const isoNow = now.toISOString();
  if (post.scheduledAt && post.scheduledAt > isoNow) return false;
  if (post.publishedAt && new Date(post.publishedAt) > now) return false;
  return true;
}

export function isPostIndexable(post: BlogPost, now = new Date()): boolean {
  return isPostLive(post, now) && getWordCount(post.content || "") >= 800;
}

export function getIndexablePosts(): BlogPost[] {
  const now = new Date();
  return getAllPosts().filter((post) => isPostIndexable(post, now));
}

export function getAllPosts(): BlogPost[] {
  ensureDir();
  if (!fs.existsSync(DB_PATH)) return [];
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

export function getPublishedPosts(): BlogPost[] {
  const now = new Date();
  return getAllPosts().filter((post) => isPostLive(post, now));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostById(id: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.id === id);
}

export function createPost(data: Omit<BlogPost, "id">): BlogPost {
  const posts = getAllPosts();
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const post: BlogPost = { id, views: 0, author: "Admin", ...data };
  posts.push(post);
  fs.writeFileSync(DB_PATH, JSON.stringify(posts, null, 2));
  return post;
}

export function updatePost(
  id: string,
  data: Partial<Omit<BlogPost, "id">>
): BlogPost | null {
  const posts = getAllPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], ...data };
  fs.writeFileSync(DB_PATH, JSON.stringify(posts, null, 2));
  return posts[idx];
}

export function deletePost(id: string): boolean {
  const posts = getAllPosts();
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length === posts.length) return false;
  fs.writeFileSync(DB_PATH, JSON.stringify(filtered, null, 2));
  return true;
}

export function incrementViews(id: string): void {
  const posts = getAllPosts();
  const post = posts.find((p) => p.id === id);
  if (post) {
    post.views = (post.views || 0) + 1;
    fs.writeFileSync(DB_PATH, JSON.stringify(posts, null, 2));
  }
}

// ── Categories ──

export function getCategories(): string[] {
  ensureDir();
  if (!fs.existsSync(CATEGORIES_PATH)) {
    fs.writeFileSync(CATEGORIES_PATH, JSON.stringify(DEFAULT_CATEGORIES, null, 2));
    return DEFAULT_CATEGORIES;
  }
  return JSON.parse(fs.readFileSync(CATEGORIES_PATH, "utf-8"));
}

export function setCategories(categories: string[]): void {
  ensureDir();
  fs.writeFileSync(CATEGORIES_PATH, JSON.stringify(categories, null, 2));
}

// ── Backup / Export ──

export function exportAll(): string {
  const posts = getAllPosts();
  const categories = getCategories();
  return JSON.stringify({ posts, categories, exportedAt: new Date().toISOString() }, null, 2);
}
