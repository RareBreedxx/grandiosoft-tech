import SectionHeading from "../../components/SectionHeading";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Us"
          title="Engineering with Clarity, Reliability, and Scale"
          description="Grandiosoft Technologies is a modern technology brand focused on cloud delivery, DevOps practices, automation, and scalable digital systems."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-4 leading-8 text-slate-300">
              To build reliable, secure, and scalable digital infrastructure that
              helps businesses move faster and operate with confidence.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="mt-4 leading-8 text-slate-300">
              To become a trusted partner for teams seeking modern cloud,
              automation, and DevOps transformation.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-semibold">How We Work</h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            We approach delivery with a systems mindset, combining engineering
            discipline, automation, and production-focused thinking. From
            application structure to deployment workflows, our goal is to create
            solutions that are maintainable, observable, and ready to grow.
          </p>
        </div>
      </div>
    </main>
  );
}
