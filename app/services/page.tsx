export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Services
        </p>
        <h1 className="text-4xl font-bold md:text-5xl">What We Offer</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Grandiosoft Technologies delivers engineering-focused services designed
          to improve deployment speed, system reliability, and infrastructure
          scalability.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">DevOps Engineering</h2>
            <p className="mt-3 text-slate-300">
              CI/CD automation, deployment workflows, and environment consistency.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Cloud Infrastructure</h2>
            <p className="mt-3 text-slate-300">
              Cloud-ready architecture, server provisioning, and scalable hosting.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Containerization</h2>
            <p className="mt-3 text-slate-300">
              Docker-based packaging for consistent builds across environments.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Kubernetes Deployment</h2>
            <p className="mt-3 text-slate-300">
              Orchestration, scaling, and service exposure for production workloads.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Monitoring & Reliability</h2>
            <p className="mt-3 text-slate-300">
              Observability practices to keep systems healthy and measurable.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Web Platform Delivery</h2>
            <p className="mt-3 text-slate-300">
              Modern website and platform deployment from development to production.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
