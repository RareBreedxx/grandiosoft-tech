import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "DevOps Engineering",
    description:
      "CI/CD pipelines, release automation, and environment consistency for faster software delivery.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Cloud-ready systems designed for reliability, scale, and operational efficiency.",
  },
  {
    title: "Containerization",
    description:
      "Portable application packaging with Docker for predictable builds and deployments.",
  },
  {
    title: "Kubernetes Deployment",
    description:
      "Production-style orchestration, service exposure, and workload management.",
  },
  {
    title: "Monitoring & Reliability",
    description:
      "Operational visibility and health-focused engineering for stable systems.",
  },
  {
    title: "Web Platform Delivery",
    description:
      "Modern web platforms delivered from local development through production environments.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="Built for Modern Delivery"
          description="Grandiosoft Technologies provides engineering-focused services that help teams deploy faster, operate more reliably, and scale with confidence."
          center
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-lg shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
