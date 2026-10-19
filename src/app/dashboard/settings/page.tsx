export default function SettingsPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Settings</div>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Business settings</h1>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Profile</h2>
          <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            No settings are saved yet. Configure the database and administrator access before editing business information.
          </div>
        </section>

        <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Business preferences</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-700">
            <div className="rounded-xl bg-slate-50 p-3">Default currency: Not configured</div>
            <div className="rounded-xl bg-slate-50 p-3">Timezone: Not configured</div>
            <div className="rounded-xl bg-slate-50 p-3">Quote validity: Not configured</div>
          </div>
        </section>
      </div>
    </div>
  );
}
