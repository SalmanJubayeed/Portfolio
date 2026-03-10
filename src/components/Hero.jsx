import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";



export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 px-6 text-center">

      

<div className="relative inline-block">

  {/* Glow behind name */}
  <div
    className="
    absolute inset-0
    blur-3xl
    bg-gradient-to-r
    from-sky-500/30
    via-cyan-400/30
    to-indigo-500/30
    opacity-70
    animate-pulse
    "
  />

<div className="relative inline-block">
  {/* Floating glow behind the name */}
  <div
    className="
    absolute inset-0
    scale-150
    rounded-full
    bg-gradient-to-r
    from-sky-500/35
    via-cyan-400/30
    to-indigo-500/35
    blur-3xl
    animate-pulse
    pointer-events-none
    "
  />

  {/* White name text */}
  <motion.h1
    className="relative text-5xl md:text-6xl font-bold text-white"
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
  >
    {profile.name}
  </motion.h1>
</div>

</div>

      <motion.p
        className="mt-4 text-xl md:text-2xl font-medium text-sky-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        {profile.title}
      </motion.p>

      <motion.p
        className="max-w-2xl mx-auto mt-6 text-slate-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {profile.bio}
      </motion.p>

      {/* Social Media */}
      <div className="mt-12">

<div className="flex items-center justify-center gap-6 mb-10">

  <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent"></div>

  <p className="text-sky-300 text-xs md:text-sm tracking-[0.25em] uppercase font-semibold">
    Find me on social media
  </p>

  <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent"></div>

</div>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href={profile.facebook}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center w-14 h-14 rounded-full
            bg-white/5 backdrop-blur-md border border-white/10
            hover:bg-blue-500/20 hover:border-blue-400/40
            transition-all duration-300 hover:scale-110"
          >
            <FaFacebook className="text-xl group-hover:text-blue-400" />
          </a>

          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center w-14 h-14 rounded-full
            bg-white/5 backdrop-blur-md border border-white/10
            hover:bg-pink-500/20 hover:border-pink-400/40
            transition-all duration-300 hover:scale-110"
          >
            <FaInstagram className="text-xl group-hover:text-pink-400" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center w-14 h-14 rounded-full
            bg-white/5 backdrop-blur-md border border-white/10
            hover:bg-blue-500/20 hover:border-blue-400/40
            transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin className="text-xl group-hover:text-blue-400" />
          </a>

          <a
            href={profile.youtube}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center w-14 h-14 rounded-full
            bg-white/5 backdrop-blur-md border border-white/10
            hover:bg-red-500/20 hover:border-red-400/40
            transition-all duration-300 hover:scale-110"
          >
            <FaYoutube className="text-xl group-hover:text-red-400" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center w-14 h-14 rounded-full
            bg-white/5 backdrop-blur-md border border-white/10
            hover:bg-gray-500/20 hover:border-gray-400/40
            transition-all duration-300 hover:scale-110"
          >
            <FaGithub className="text-xl group-hover:text-gray-300" />
          </a>

        </div>
      </div>

    </section>
  );
}