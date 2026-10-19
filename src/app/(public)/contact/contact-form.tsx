"use client";

import { type FormEvent, useState } from "react";

const initialValues = {
  name: "",
  businessName: "",
  email: "",
  country: "",
  website: "",
  service: "Website Development",
  budget: "",
  timeline: "",
  projectDescription: "",
  contactMethod: "Email",
  privacy: false,
};

export function ContactForm() {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({ type: "idle", message: "" });

  const serviceOptions = ["Website Development", "Website Maintenance", "Website Redesign", "E-commerce Website Development"];

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) nextErrors.name = "Please share your name.";
    if (!form.email.trim()) nextErrors.email = "Please provide an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = "Please enter a valid email address.";
    if (form.website.trim()) {
      try {
        const url = new URL(form.website.trim());
        if (url.protocol !== "http:" && url.protocol !== "https:") throw new Error();
      } catch {
        nextErrors.website = "Enter a valid website address beginning with http:// or https://.";
      }
    }
    if (form.projectDescription.trim().length < 10) {
      nextErrors.projectDescription = "Please add at least 10 characters describing your project.";
    }
    if (!form.privacy) nextErrors.privacy = "Please confirm you agree to the privacy notice.";

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "error", message: "Please fix the highlighted fields before submitting." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "Submitting your enquiry…" });

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your enquiry right now.");
      }

      setStatus({ type: "success", message: data.message || "Your enquiry was received." });
      setForm(initialValues);
      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your enquiry right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Contact</div>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Request a quote.</h1>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
              <input id="name" autoComplete="name" required maxLength={120} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100" />
              {errors.name ? <span id="name-error" className="mt-2 block text-sm text-red-600">{errors.name}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Business name (optional)</span>
              <input id="businessName" autoComplete="organization" maxLength={160} value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email address</span>
              <input id="email" type="email" autoComplete="email" required maxLength={200} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100" />
              {errors.email ? <span id="email-error" className="mt-2 block text-sm text-red-600">{errors.email}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Country (optional)</span>
              <input id="country" autoComplete="country-name" maxLength={120} value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Website URL (optional)</span>
              <input id="website" type="url" autoComplete="url" maxLength={200} aria-invalid={Boolean(errors.website)} aria-describedby={errors.website ? "website-error" : undefined} value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100" />
              {errors.website ? <span id="website-error" className="mt-2 block text-sm text-red-600">{errors.website}</span> : null}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Requested service</span>
              <select id="service" required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100">
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Approximate budget range (optional)</span>
              <input id="budget" maxLength={60} value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Desired timeline (optional)</span>
              <input id="timeline" maxLength={80} value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100" />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Project description</span>
            <textarea id="projectDescription" required minLength={10} maxLength={2500} aria-invalid={Boolean(errors.projectDescription)} aria-describedby={errors.projectDescription ? "projectDescription-error" : undefined} value={form.projectDescription} onChange={(e) => setForm({ ...form, projectDescription: e.target.value })} rows={6} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100" />
            {errors.projectDescription ? <span id="projectDescription-error" className="mt-2 block text-sm text-red-600">{errors.projectDescription}</span> : null}
          </label>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Preferred contact method</span>
              <select id="contactMethod" required value={form.contactMethod} onChange={(e) => setForm({ ...form, contactMethod: e.target.value })} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100">
                <option>Email</option>
                <option>Phone</option>
                <option>Video call</option>
              </select>
            </label>
          </div>

          <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <input id="privacy" type="checkbox" required aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "privacy-error" : undefined} checked={form.privacy} onChange={(e) => setForm({ ...form, privacy: e.target.checked })} className="mt-1 h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500" />
            <span>I acknowledge the privacy notice and consent to use of my details to respond to this enquiry.</span>
          </label>
          {errors.privacy ? <span id="privacy-error" className="block text-sm text-red-600">{errors.privacy}</span> : null}

          {status.message ? (
            <div role={status.type === "error" ? "alert" : "status"} aria-live={status.type === "error" ? "assertive" : "polite"} className={status.type === "success" ? "rounded-2xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-800" : status.type === "error" ? "rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800" : "rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700"}>
              {status.message}
            </div>
          ) : null}

          <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? "Submitting…" : "Send enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
