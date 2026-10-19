import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the web design and development approach.",
};

const strengths = [
  "Brand-led design strategy",
  "Responsive, accessible interfaces",
  "High-converting website structure",
  "Ongoing maintenance support",
  "Business-focused communication",
  "Quality-first delivery",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">About</div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">I help businesses present themselves online with clarity.</h1>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            I’m a freelance web designer and developer focused on creating websites that feel polished, strategic, and easy for visitors to trust and act on.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600">
            My work blends business thinking with clean design, thoughtful UX, and careful technical implementation so you get a website that communicates clearly and supports your goals.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {strengths.map((strength) => (
          <div key={strength} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">{strength}</div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">My approach</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            I begin with business goals and audience needs, then shape the structure, messaging, and visuals around what will help people understand and choose you.
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Communication</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            I prefer clear, regular communication from initial enquiry through launch and ongoing support so progress feels straightforward and collaborative.
          </p>
        </article>
      </div>
    </div>
  );
}
