export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">Grandiosoft Technologies</p>
          <p className="mt-1 text-sm text-slate-400">
            Cloud, DevOps, and digital infrastructure for modern delivery.
          </p>
        </div>

        <p className="text-sm">© {new Date().getFullYear()} Grandiosoft Technologies</p>
      </div>
    </footer>
  );
}
