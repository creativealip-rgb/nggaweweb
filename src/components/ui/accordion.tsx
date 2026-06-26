'use client';

import { ChevronDown } from 'lucide-react';
import { useState, type ReactNode } from 'react';

export function Accordion({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <details
      className="rounded-2xl border border-slate-200 bg-white/70 overflow-hidden"
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-slate-900 list-none">
        {title}
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </summary>
      <div className="px-6 pb-6 text-slate-600 leading-7">{children}</div>
    </details>
  );
}
