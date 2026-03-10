export default function Navbar() {
  return (
    <nav
      className="
      fixed top-4 left-1/2 -translate-x-1/2
      w-[90%] max-w-5xl
      px-6 py-3
      rounded-xl
      backdrop-blur-md
      bg-white/5
      border border-white/10
      flex justify-between items-center
      shadow-lg
      z-50
      "
    >
      <h1 className="font-bold text-lg tracking-wide">
        Salman Jubayeed
      </h1>

      <div className="space-x-6 text-sm">
        <a href="#about" className="hover:text-sky-400 transition">About</a>
        <a href="#skills" className="hover:text-sky-400 transition">Skills</a>
        <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
        <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
      </div>
    </nav>
  );
}