export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>
        <h1 className="text-4xl font-bold md:text-5xl">Selected Work</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          A growing collection of engineering projects focused on automation,
          deployment, infrastructure, and cloud-native delivery.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Jenkins CI/CD Pipeline</h2>
            <p className="mt-4 text-slate-300">
              Automated pipeline for building, packaging, and deploying applications
              using Jenkins, Docker, and Kubernetes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Grandiosoft Website Deployment</h2>
            <p className="mt-4 text-slate-300">
              End-to-end deployment of a professional company website through a
              full DevOps lifecycle.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Kubernetes Workload Delivery</h2>
            <p className="mt-4 text-slate-300">
              Containerized application deployment with services, ingress, and
              environment-based rollout management.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">AWS Infrastructure Provisioning</h2>
            <p className="mt-4 text-slate-300">
              Cloud infrastructure setup using AWS services and infrastructure
              automation practices.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
