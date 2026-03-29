import Services from "../components/Services";

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Grandiosoft Technologies
        </p>

        <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
          Engineering Reliable Digital Infrastructure
        </h1>

        <p className="mt-6 max-w-2xl text-slate-300">
          We build cloud-ready platforms, DevOps pipelines, scalable systems,
          and modern digital solutions for ambitious businesses.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/projects"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-slate-500"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Services />
    </main>
  );
}
