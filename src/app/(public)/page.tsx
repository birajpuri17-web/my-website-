import Link from "next/link";
import { ArrowRight, BadgeCheck, Briefcase, Palette, ShieldCheck } from "lucide-react";
import { coreServices, faqs, portfolioItems, processSteps } from "@/lib/site-data";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.20),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.20),transparent_25%),linear-gradient(180deg,#fff_0%,#eef4ff_100%)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
              Website development partner
            </div>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Refined websites that help your business grow.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              I design and build premium websites that               turn attention into trust and meaningful enquiries through thoughtful design and reliable development.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-600">
                Request a quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/work" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-violet-200 hover:bg-violet-50">
                View my work
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-500" /> Tailored websites</div>
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-500" /> Maintenance support</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-cyan-300/40 blur-3xl" />
            <div className="absolute -right-8 bottom-6 h-44 w-44 rounded-full bg-violet-400/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Focus</div>
                  <div className="mt-2 text-2xl font-bold text-slate-900">Business growth</div>
                </div>
                <div className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">Project-based</div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
                    <span>Website build</span>
                    <span>Phase 01</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-200">
                    <div className="h-2.5 w-4/5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-violet-50 p-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-violet-600">Timeline</div>
                    <div className="mt-2 text-xl font-black text-slate-900">Scoped</div>
                    <div className="text-sm text-slate-600">to your project</div>
                  </div>
                  <div className="rounded-2xl bg-cyan-50 p-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-cyan-700">Next step</div>
                    <div className="mt-2 text-xl font-black text-slate-900">Enquiry</div>
                    <div className="text-sm text-slate-600">start with a conversation</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-900 p-4 text-white">
                  <div className="text-sm text-slate-300">Designed for clarity and conversion</div>
                  <div className="mt-2 text-xl font-semibold">Business websites, redesigns, and e-commerce experiences</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Services</div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">A focused service menu for modern businesses.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {coreServices.map((service) => (
            <article key={service.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-violet-100 via-indigo-50 to-cyan-50 p-3 text-violet-700">
                <Palette className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-500" />{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Work</div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Selected project work.</h2>
          </div>
          {portfolioItems.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-3">
              {portfolioItems.filter((item) => item.published).map((item) => (
                <article key={item.title} className="rounded-[1.75rem] border border-slate-700 bg-slate-800 p-6 shadow-lg shadow-slate-900/30">
                  <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                    <span>{item.category}</span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-300">Published</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span key={tech} className="rounded-full bg-slate-700 px-2.5 py-1 text-xs text-slate-200">{tech}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.75rem] border border-dashed border-slate-600 bg-slate-800/60 p-8 text-slate-300">
              Portfolio projects will appear here once verified work is ready to publish.
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Process</div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">A practical, collaborative process.</h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              Every project is shaped around your goals, your existing materials, and the business realities you need to succeed online.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">0{index + 1}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                </div>
                <div className="text-lg font-semibold text-slate-900">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-violet-50 via-white to-cyan-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Why work with me</div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Clear communication, strategic design, and reliable delivery.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-violet-100 bg-white p-6 shadow-sm">
              <Briefcase className="mb-4 h-8 w-8 text-violet-600" />
              <h3 className="text-xl font-bold text-slate-900">Business-first thinking</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Every design choice supports your user journey, enquiry flow, and real business goals.</p>
            </div>
            <div className="rounded-[1.5rem] border border-cyan-100 bg-white p-6 shadow-sm">
              <ShieldCheck className="mb-4 h-8 w-8 text-cyan-600" />
              <h3 className="text-xl font-bold text-slate-900">A thoughtful build</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Performance, accessibility, and maintainability are designed in from the start instead of bolted on later.</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-6 shadow-sm">
              <Palette className="mb-4 h-8 w-8 text-amber-600" />
              <h3 className="text-xl font-bold text-slate-900">A premium experience</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Elegant interfaces, clear messaging, and confident details help your business feel established from day one.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Maintenance</div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Keep your business website healthy after launch.</h2>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3"><BadgeCheck className="mt-1 h-5 w-5 text-emerald-500" /> Content updates, image refreshing, and minor improvements.</li>
              <li className="flex items-start gap-3"><BadgeCheck className="mt-1 h-5 w-5 text-emerald-500" /> Dependency, plugin, and security checks for healthy ongoing operation.</li>
              <li className="flex items-start gap-3"><BadgeCheck className="mt-1 h-5 w-5 text-emerald-500" /> Accessibility, performance reviews, and troubleshooting for changes over time.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">FAQs</div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Questions clients often ask.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-r from-slate-900 via-violet-900 to-indigo-950 p-8 text-white shadow-[0_30px_80px_rgba(79,70,229,0.3)] sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Start today</div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Tell me about your next website project.</h2>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-violet-100">
              Request a quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
