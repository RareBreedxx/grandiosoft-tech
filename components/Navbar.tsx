import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-wide">
          Grandiosoft Tech
        </Link>

        <div className="hidden gap-6 md:flex">
          <Link href="/" className="hover:text-cyan-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-cyan-400">
            About
          </Link>
          <Link href="/services" className="hover:text-cyan-400">
            Services
          </Link>
          <Link href="/projects" className="hover:text-cyan-400">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-cyan-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
