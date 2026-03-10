export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center py-10 px-6">

      <div
        className="
        px-8 py-4
        rounded-xl

        bg-white/5
        backdrop-blur-xl
        border border-white/10

        shadow-lg
        text-slate-300 text-sm
        hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]
transition
        "
      >
        © {year} Salman Jubayeed
      </div>

    </footer>
  );
}