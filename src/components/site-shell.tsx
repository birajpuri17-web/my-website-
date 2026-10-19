import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 text-sm font-black text-white shadow-lg shadow-violet-500/20">
            NS
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-slate-900">Your Studio</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Web design + build</div>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-violet-600"
          >
            Request a quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 text-sm font-black text-white shadow-lg shadow-violet-500/20">
              NS
            </div>
            <div>
              <div className="text-lg font-black text-white">Your Studio</div>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-300">
            Premium website design and development for businesses that need clarity, growth, and confident digital presentation.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Services</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>Website development</li>
            <li>Maintenance support</li>
            <li>Website redesign</li>
            <li>E-commerce solutions</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>Business email not configured</li>
            <li>Phone not configured</li>
            <li>Location not configured</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© Your Studio. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/contact" className="hover:text-white">Quote request</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
