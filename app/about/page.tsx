export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          About Us
        </p>
        <h1 className="text-4xl font-bold md:text-5xl">
          About Grandiosoft Technologies
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Grandiosoft Technologies is a modern technology brand focused on cloud,
          DevOps, automation, infrastructure delivery, and scalable digital
          solutions. We help businesses move faster by building reliable systems
          and deployment pipelines that support growth.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-slate-300">
              To engineer reliable, secure, and scalable digital infrastructure
              that helps businesses operate with confidence.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="mt-4 text-slate-300">
              To become a trusted technology partner for organizations seeking
              modern cloud and DevOps transformation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
