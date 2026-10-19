import type { Metadata } from "next";
import { portfolioItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Work",
  description: "Verified, published website projects and portfolio work.",
};

export default function WorkPage() {
  const publishedItems = portfolioItems.filter((item) => item.published);

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Portfolio</div>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Selected recent work.</h1>
      </header>

      {publishedItems.length > 0 ? (
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {publishedItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <div className="h-52 bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400" />
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
                  <span>{item.category}</span>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">Published</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-8 text-slate-600">
          There are no published portfolio projects yet. Verified work will be added here when it is ready to share.
        </div>
      )}
    </div>
  );
}
