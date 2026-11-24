import Reveal from "./Reveal";
import { profile } from "../data/profile";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 py-24 px-6 flex justify-center"
    >
      <Reveal>
        <div
          className="
          max-w-xl w-full
          p-8 md:p-12
          rounded-2xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-lg
          hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]
          text-center
          transition-all duration-300
          "
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Contact
            </h2>

            <div
              className="
              h-[2px] w-20 mx-auto mt-3
              bg-gradient-to-r
              from-transparent
              via-sky-400
              to-transparent
              animate-pulse
              "
            />
          </div>

          <p className="text-slate-300 mb-8 leading-relaxed max-w-md mx-auto text-sm md:text-base">
            Feel free to reach out directly via Email or WhatsApp for project discussions, collaborations, or opportunities.
          </p>

          {/* Square Icon Buttons with text hidden */}
          <div className="flex items-center justify-center gap-6">
            {/* Square Email Button */}
            <a
              href={`mailto:${profile.email}`}
              title={`Send Email to ${profile.email}`}
              aria-label="Send Email"
              className="
              group
              w-16 h-16
              rounded-2xl
              flex items-center justify-center
              bg-white/5
              border border-white/10
              backdrop-blur-md
              hover:border-red-400/50 hover:bg-red-500/10
              hover:shadow-[0_0_25px_rgba(248,113,113,0.3)]
              hover:scale-110 active:scale-95
              transition-all duration-300
              "
            >
              <SiGmail className="text-2xl text-red-400 group-hover:scale-110 transition-transform" />
            </a>

            {/* Square WhatsApp Button */}
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
              className="
              group
              w-16 h-16
              rounded-2xl
              flex items-center justify-center
              bg-white/5
              border border-white/10
              backdrop-blur-md
              hover:border-emerald-400/50 hover:bg-emerald-500/10
              hover:shadow-[0_0_25px_rgba(52,211,153,0.3)]
              hover:scale-110 active:scale-95
              transition-all duration-300
              "
            >
              <FaWhatsapp className="text-2xl text-emerald-400 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
