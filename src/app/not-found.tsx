import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="mb-6 text-6xl font-black text-violet-500">404</div>
      <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">This page could not be found.</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
        The page you requested may have moved or is no longer available.
      </p>
      <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-violet-600">
        Return home
      </Link>
    </div>
  );
}
