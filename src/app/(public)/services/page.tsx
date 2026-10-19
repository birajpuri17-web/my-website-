import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Website development, redesign, maintenance, and e-commerce services.",
};

const serviceBlocks = [
  {
    title: "Website Development",
    icon: Globe,
    description:
      "Business websites, landing pages, and custom web experiences built around your offer, audience, and conversion goals.",
    points: ["Business websites", "Landing pages", "Responsive layouts", "Contact and enquiry forms"],
  },
  {
    title: "Website Maintenance",
    icon: ShieldCheck,
    description:
      "Monthly or ad hoc maintenance to keep your website updated, secure, and running smoothly as your business evolves.",
    points: ["Content and image updates", "Bug fixes", "Dependency and security checks", "Performance review"],
  },
  {
    title: "Website Redesign",
    icon: Sparkles,
    description:
      "A focused redesign service that can refresh visual direction, streamline messaging, and improve the user journey on your existing website.",
    points: ["Existing site assessment", "Usability improvements", "Responsive redesign", "Content migration"],
  },
  {
    title: "E-commerce Website Development",
    icon: ShoppingBag,
    description:
      "Shopfront builds that support clear product presentation, mobile-friendly purchase flows, and straightforward product management.",
    points: ["Product catalogues", "Shopping cart", "Checkout integration", "Payment gateway setup when configured"],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Services</div>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Support for your website at every stage.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          I offer website development, redesign, maintenance, and e-commerce support with clear scope, practical delivery, and a business-first approach.
        </p>
      </header>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {serviceBlocks.map(({ title, description, points, icon: Icon }) => (
          <article key={title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-5 inline-flex rounded-2xl bg-violet-50 p-3 text-violet-700">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] bg-slate-900 p-8 text-white md:p-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Need a tailored scope?</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Let’s talk about your project.</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-violet-100">
            Request a quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
