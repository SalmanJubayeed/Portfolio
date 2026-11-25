import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { profile } from "../data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className="
        relative
        w-full max-w-5xl
        px-6 py-3.5
        rounded-2xl
        backdrop-blur-xl
        bg-slate-900/80
        border border-white/10
        flex justify-between items-center
        shadow-xl shadow-black/40
        "
      >
        {/* Brand Name */}
        <a
          href="#"
          className="font-bold text-lg tracking-wide text-white hover:text-sky-400 transition shrink-0"
        >
          {profile.name}
        </a>

        {/* Desktop Navigation (visible on lg screens 1024px+) */}
        <div className="hidden lg:flex items-center space-x-7 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-sky-400 font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile & Tablet Toggle Button (visible on screens < 1024px) */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="
              w-10 h-10 rounded-xl
              flex items-center justify-center
              bg-white/5 border border-white/10
              text-slate-200 hover:text-sky-400 hover:border-sky-400/40
              transition-all duration-200
            "
          >
            {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>

        {/* Mobile & Tablet Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="
                absolute top-full left-0 right-0 mt-3
                p-4 rounded-2xl
                bg-slate-900/95 backdrop-blur-2xl
                border border-white/15
                shadow-2xl shadow-black/80
                flex flex-col space-y-1.5
                lg:hidden
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    px-4 py-2.5 rounded-xl
                    text-sm font-medium text-slate-200
                    hover:bg-white/10 hover:text-sky-300
                    transition-all duration-150
                  "
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
