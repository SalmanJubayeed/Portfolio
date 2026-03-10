import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "../data/profile";
import { SiGmail } from "react-icons/si";
import { FaCheck } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 py-24 px-6 flex justify-center"
    >
      <Reveal>
        <div
          className="
          max-w-xl w-full
          p-10
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
 <div className="text-center mb-12">

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

          <p className="text-slate-300 mb-8">
            Feel free to reach out for collaboration or project discussion.
          </p>

          <button
            onClick={copyEmail}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`
            flex items-center justify-center gap-3
            mx-auto
            px-6 py-3
            rounded-xl
            border
            backdrop-blur-md
            transition-all duration-300

            ${
              copied
                ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-300"
                : "bg-white/5 border-white/10 text-slate-200 hover:border-sky-400/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"
            }
            `}
          >
            {copied ? (
              <>
                <FaCheck />
                Email Copied
              </>
            ) : (
              <>
                <SiGmail className="text-red-400 text-xl" />
                {hover ? "Click to copy email" : profile.email}
              </>
            )}
          </button>
        </div>
      </Reveal>
    </section>
  );
}