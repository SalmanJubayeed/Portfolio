import { FaDownload } from "react-icons/fa";
import { profile } from "../data/profile";

export default function Navbar() {
  return (
    <nav
      className="
      fixed top-4 left-1/2 -translate-x-1/2
      w-[94%] max-w-5xl
      px-5 py-3
      rounded-xl
      backdrop-blur-md
      bg-white/5
      border border-white/10
      flex justify-between items-center
      shadow-lg
      z-50
      "
    >
      <a href="#" className="font-bold text-lg tracking-wide hover:text-sky-400 transition shrink-0">
        {profile.name}
      </a>

      <div className="flex items-center space-x-3 sm:space-x-5 text-sm overflow-x-auto no-scrollbar">
        <a href="#about" className="hover:text-sky-400 transition whitespace-nowrap">About</a>
        <a href="#education" className="hover:text-sky-400 transition whitespace-nowrap">Education</a>
        <a href="#skills" className="hover:text-sky-400 transition whitespace-nowrap">Skills</a>
        <a href="#certifications" className="hover:text-sky-400 transition whitespace-nowrap">Certifications</a>
        <a href="#projects" className="hover:text-sky-400 transition whitespace-nowrap">Projects</a>
        <a href="#contact" className="hover:text-sky-400 transition whitespace-nowrap">Contact</a>

        <a
          href={profile.resumeUrl || "/Salman_Jubayeed_CV.pdf"}
          download="Salman_Jubayeed_CV.pdf"
          className="
            inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
            bg-sky-500/15 border border-sky-400/30 text-sky-400
            hover:bg-sky-500/25 hover:border-sky-300 hover:text-white
            transition-all text-xs font-medium shadow-[0_0_15px_rgba(56,189,248,0.2)] shrink-0
          "
        >
          <FaDownload size={11} />
          <span>CV</span>
        </a>
      </div>
    </nav>
  );
}
