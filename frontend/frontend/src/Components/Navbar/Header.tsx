import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-plum-deep/80 backdrop-blur-lg px-6 lg:px-40 py-5">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3">
          <span className="heading-serif text-2xl tracking-tight text-white italic">Evelyn Bloom</span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "About", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-lavender-glow transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-deep-violet transition-all">
            Let's Chat
          </button>
        </nav>
        <div className="md:hidden">
          <span className="material-symbols-outlined cursor-pointer text-white/70">menu_open</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
