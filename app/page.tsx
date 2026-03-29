import Link from "next/link";
import Services from "../components/Services";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Grandiosoft Technologies
          </p>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl xl:text-7xl">
            Cloud, DevOps, and Digital Infrastructure Built for Growth
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            We design and deliver reliable digital platforms, deployment pipelines,
            and scalable cloud-ready systems that help modern businesses launch,
            automate, and operate with confidence.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-slate-500"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h2 className="text-lg font-semibold">Automation</h2>
              <p className="mt-3 text-slate-300">
                Streamlined delivery workflows through CI/CD and infrastructure automation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h2 className="text-lg font-semibold">Scalability</h2>
              <p className="mt-3 text-slate-300">
                Containerized workloads and orchestration patterns designed for growth.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h2 className="text-lg font-semibold">Reliability</h2>
              <p className="mt-3 text-slate-300">
                Production-minded systems with operational discipline and clean architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Services />
    </main>
  );
}
