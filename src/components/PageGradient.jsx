import { motion } from "framer-motion";

export default function PageGradient() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-slate-900 to-indigo-500/20"></div>

      {/* Layer 1 */}
      <motion.div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-sky-400/30 rounded-full blur-[220px]"
        animate={{
          x: [0, 200, -150, 0],
          y: [0, 150, -100, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Layer 2 */}
      <motion.div
        className="absolute top-[30%] right-[-200px] w-[800px] h-[800px] bg-indigo-400/30 rounded-full blur-[240px]"
        animate={{
          x: [0, -220, 120, 0],
          y: [0, 200, -150, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Layer 3 */}
      <motion.div
        className="absolute bottom-[-250px] left-[30%] w-[900px] h-[900px] bg-cyan-400/30 rounded-full blur-[260px]"
        animate={{
          x: [0, 180, -120, 0],
          y: [0, -200, 160, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Light overlay (depth effect) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]"></div>

    </div>
  );
}