// components/HeroCodeOverlay.tsx
import { profile } from "@/lib/profile";

export function HeroCodeOverlay() {
  return (
    <section className="section container grid lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 space-y-6">
        <p className="eyebrow">{profile.title}</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          {profile.name}
        </h1>

        <p className="text-slate-600 max-w-prose">{profile.summary}</p>

        <a href="/contact" className="btn btn-primary">
          Contact Me
        </a>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <span>{profile.location}</span>
          <a className="link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        <div
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-indigo-500/20 via-sky-400/10 to-violet-500/20 blur-2xl"
          aria-hidden="true"
        />

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-violet-500">
            <div className="rounded-2xl bg-white/75 dark:bg-slate-900/70 backdrop-blur p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                <span className="ml-2 text-xs text-slate-500">
                  ~/portfolio/welcome.ts
                </span>
              </div>

              <pre className="overflow-x-auto text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                <code className="block min-w-max">
                  {`// Welcome to my digital workspace
console.log("Hello there, I'm Marc 👋");

// Explore my projects below 🚀`}
                </code>
              </pre>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
              <p className="mt-3 text-xs text-slate-500">
                This greeting snippet reflects my coding roots — simple, clear,
                and scalable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
