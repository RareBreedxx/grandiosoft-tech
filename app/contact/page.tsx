export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>
        <h1 className="text-4xl font-bold md:text-5xl">Let’s Build Something Great</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Reach out to discuss cloud infrastructure, DevOps automation,
          deployment pipelines, or digital platform delivery.
        </p>

        <form className="mt-12 space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div>
            <label className="mb-2 block text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Message</label>
            <textarea
              rows={6}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Tell us about your project or inquiry"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
