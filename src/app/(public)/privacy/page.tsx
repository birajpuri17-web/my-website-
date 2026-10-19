import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for project and quote enquiries.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <header className="mb-10">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Privacy</div>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Privacy policy and terms.</h1>
      </header>

      <div className="space-y-8 text-slate-600">
        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">What information is collected</h2>
          <p className="mt-4 leading-7">
            Contact forms may collect your name, email address, business details, project description, and optional information you provide as part of a quote request.
          </p>
        </section>

        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">How it is used</h2>
          <p className="mt-4 leading-7">
            Once enquiry storage is configured, submitted information will be used to respond to enquiries, assess project requirements, arrange follow-up, and maintain business records related to client communication and project administration.
          </p>
        </section>

        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Record handling</h2>
          <p className="mt-4 leading-7">
            Enquiry storage is not currently configured. Records will need to be managed securely once persistence is enabled. Legal terms should be reviewed before a public launch.
          </p>
        </section>
      </div>
    </div>
  );
}
