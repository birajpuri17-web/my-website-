import { dashboardNav } from "@/lib/site-data";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Dashboard</div>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Overview</h1>
        </div>
      </div>

      <div role="status" className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
        Dashboard data is unavailable until authentication and persistent storage are configured. No sample business metrics are shown.
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Recent activity</h2>
          <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
            No activity is available because there is no connected business database.
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Navigation</h2>
          <ul className="mt-5 space-y-2 text-sm text-slate-600">
            {dashboardNav.map((item) => (
              <li key={item} className="rounded-xl bg-slate-50 px-3 py-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
