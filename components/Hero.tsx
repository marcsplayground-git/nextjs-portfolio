import Link from "next/link";

export function Hero() {
  return (
    <section className="section container grid lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 space-y-6">
        <p className="eyebrow">Software Engineer</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Marc Jason Yu
        </h1>
        <p className="text-slate-600 max-w-prose">
          Software Engineer with ~4 years of experience specializing in Power
          Platform, with experience in Microsoft Azure and cloud-based
          solutions. Proven track record of enhancing business processes,
          delivering innovative solutions, and collaborating effectively with
          cross-functional teams.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            Contact Me
          </Link>
          <a href="/Marc-Jason-Yu-CV.pdf" className="btn btn-outline">
            Download CV
          </a>
        </div>
        <div className="text-sm text-slate-600">
          <span className="mr-4">Cebu City, Philippines</span>
          <a className="link" href="mailto:yu.marcjason@outlook.com">
            yu.marcjason@outlook.com
          </a>
        </div>
      </div>
      <div className="lg:col-span-5">
        <div className="card h-64 bg-gradient-to-br from-indigo-500/20 to-sky-500/20 flex items-center justify-center">
          <div className="text-slate-600">Hero Art Placeholder</div>
        </div>
      </div>
    </section>
  );
}
