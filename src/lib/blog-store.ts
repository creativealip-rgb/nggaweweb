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
  readTime: string;
  status: "draft" | "published";
  content: string;
};

const DB_PATH = path.join(process.cwd(), "data", "blog.json");

function ensureDir() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

export function getAllPosts(): BlogPost[] {
  ensureDir();
  if (!fs.existsSync(DB_PATH)) return [];
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter((p) => p.status === "published");
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getPublishedPosts().find((p) => p.slug === slug);
}

export function getPostById(id: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.id === id);
}

export function createPost(data: Omit<BlogPost, "id">): BlogPost {
  const posts = getAllPosts();
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const post: BlogPost = { id, ...data };
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
