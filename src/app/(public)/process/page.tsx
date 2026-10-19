import type { Metadata } from "next";
import { processSteps } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Process",
  description: "A practical process from initial enquiry through launch and maintenance.",
};

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Process</div>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">A clear process from enquiry to launch.</h1>
      </header>

      <div className="mt-12 space-y-5">
        {processSteps.map((step, index) => (
          <div key={step} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">{index + 1}</div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{step}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Timelines, revisions, deliverables, and prices depend on the agreed project scope and business requirements.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
