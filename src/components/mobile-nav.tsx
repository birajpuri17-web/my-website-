"use client";

import Link from "next/link";
import { type KeyboardEvent, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/site-data";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeOnEscape = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      setOpen(false);
      triggerRef.current?.focus();
    }
  };

  return (
    <div className="relative md:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        onKeyDown={closeOnEscape}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute right-0 top-[calc(100%+0.75rem)] z-50 grid w-[min(20rem,calc(100vw-2rem))] gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl"
          onKeyDown={closeOnEscape}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-600"
          >
            Request a quote
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
