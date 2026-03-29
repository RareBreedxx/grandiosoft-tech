export default function Services() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-4 text-slate-400">
          We provide modern infrastructure and DevOps solutions.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-slate-700 p-6">
            <h3 className="text-xl font-semibold">DevOps Engineering</h3>
            <p className="mt-3 text-slate-400">
              CI/CD pipelines, automation, and scalable deployments.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 p-6">
            <h3 className="text-xl font-semibold">Cloud Infrastructure</h3>
            <p className="mt-3 text-slate-400">
              AWS-based infrastructure and cloud-native architecture.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 p-6">
            <h3 className="text-xl font-semibold">Kubernetes Deployment</h3>
            <p className="mt-3 text-slate-400">
              Container orchestration and production-ready systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
