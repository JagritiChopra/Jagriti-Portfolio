import React from "react";

// Define your variables at the top of the file
const COLORS = {
  plumDark: "#1a0b1a",
  plumDeep: "#0d050d",
  lavenderGlow: "#d8b4fe",
  softLavender: "#e9d5ff",
  deepViolet: "#7c3aed",
  dreamyPurple: "#a78bfa",
};

const FONTS = {
  serif: '"DM Serif Display", serif',
  sans: '"Inter", sans-serif',
  display: '"Plus Jakarta Sans", sans-serif',
};

const Footer: React.FC = () => {
  return (
    <footer
      className="py-20 px-6 lg:px-40 border-t text-center"
      style={{
        backgroundColor: COLORS.plumDeep,
        borderColor: "rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10">
        <hr  />
        <span
          className="text-3xl italic text-white/80"
          style={{ fontFamily: FONTS.serif }}
        >
          Evelyn Bloom
        </span>
        <div className="flex gap-12 text-xs font-bold uppercase tracking-widest text-white/40">
          {["Behance", "Dribbble", "Instagram"].map((item) => (
            <a
              key={item}
              href="#"
              className="transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = COLORS.lavenderGlow)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
              }
            >
              {item}
            </a>
          ))}
        </div>
        <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
          © 2024 Lavender Midnight Studio • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
