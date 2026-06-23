"use client";

import { useState, useRef, useCallback } from "react";

interface HtmlEditorProps {
  value: string;
  onChange: (val: string) => void;
}

const TOOLBAR_ITEMS = [
  { label: "H2", wrap: ["<h2 class=\"text-2xl font-bold text-white mt-8 mb-4\">", "</h2>"] },
  { label: "H3", wrap: ["<h3 class=\"text-xl font-bold text-white mt-6 mb-3\">", "</h3>"] },
  { label: "P", wrap: ["<p class=\"text-slate-300 leading-7 mb-4\">", "</p>"] },
  { label: "Bold", wrap: ["<strong class=\"text-white font-semibold\">", "</strong>"] },
  { label: "Italic", wrap: ["<em>", "</em>"] },
  { label: "Link", wrap: ['<a href="#" class="text-cyan-400 underline hover:text-cyan-300">', "</a>"] },
  { label: "UL", wrap: ["<ul class=\"list-disc pl-6 space-y-2 text-slate-300 mb-4\">\n  <li>", "</li>\n</ul>"] },
  { label: "OL", wrap: ["<ol class=\"list-decimal pl-6 space-y-2 text-slate-300 mb-4\">\n  <li>", "</li>\n</ol>"] },
  { label: "LI", wrap: ["<li>", "</li>"] },
  { label: "Quote", wrap: ["<blockquote class=\"border-l-4 border-cyan-500 pl-4 italic text-slate-400 my-6\">", "</blockquote>"] },
  { label: "Code", wrap: ["<code class=\"bg-slate-800 px-2 py-1 rounded text-cyan-300 text-sm\">", "</code>"] },
  { label: "Card", wrap: ['<div class="rounded-2xl border border-white/10 bg-slate-900/70 p-6 my-6">\n  ', "\n</div>"] },
  { label: "CTA", wrap: ['<div class="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 p-6 my-6 text-white">\n  ', "\n</div>"] },
  { label: "HR", wrap: ["\n<hr class=\"border-white/10 my-8\" />\n", ""] },
];

export default function HtmlEditor({ value, onChange }: HtmlEditorProps) {
  const [showPreview, setShowPreview] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertWrap = useCallback(
    (open: string, close: string) => {
      const ta = textareaRef.current;
      if (!ta) return;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const selected = value.substring(start, end) || "teks";
      const newVal = value.substring(0, start) + open + selected + close + value.substring(end);
      onChange(newVal);
      // Restore cursor
      setTimeout(() => {
        ta.focus();
        ta.setSelectionRange(start + open.length, start + open.length + selected.length);
      }, 0);
    },
    [value, onChange]
  );

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 bg-slate-800 rounded-lg border border-slate-700">
        {TOOLBAR_ITEMS.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => insertWrap(item.wrap[0], item.wrap[1])}
            className="px-2 py-1 text-xs font-medium bg-slate-700 hover:bg-slate-600 text-slate-200 rounded transition"
          >
            {item.label}
          </button>
        ))}
        <div className="border-l border-slate-600 mx-1" />
        <button
          type="button"
          onClick={() => setShowPreview(!showPreview)}
          className={`px-3 py-1 text-xs font-medium rounded transition ${
            showPreview ? "bg-cyan-600 text-white" : "bg-slate-700 hover:bg-slate-600 text-slate-200"
          }`}
        >
          {showPreview ? "✏️ Edit" : "👁️ Preview"}
        </button>
      </div>

      {/* Editor / Preview */}
      {showPreview ? (
        <div className="grid grid-cols-2 gap-3">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={20}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-cyan-500 resize-y"
          />
          <div
            className="prose prose-invert prose-slate max-w-none px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg overflow-auto"
            style={{ maxHeight: "500px" }}
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>
      ) : (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={20}
          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-cyan-500 resize-y"
          placeholder='<p class="text-slate-300 leading-7">Tulis konten...</p>'
        />
      )}
    </div>
  );
}
