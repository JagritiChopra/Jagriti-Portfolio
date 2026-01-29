import React from "react";

// ---------- Tailwind-like theme variables ----------
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

const SHADOWS = {
  lavenderGlow: "0 0 15px rgba(216, 180, 254, 0.4), 0 0 30px rgba(167, 139, 250, 0.2)",
};

const BORDERS = {
  thinLavender: "1px solid rgba(216, 180, 254, 0.15)",
  glassPanel: "1px solid rgba(255, 255, 255, 0.08)",
};

// ---------- Education Data ----------
const educationData = [
  {
    period: "2022 - 2026",
    degree: "B.Tech in Computer Science and Engineering",
    school: "University Institute of Engineering and Technology , Maharshi Dayanand University",
    description:
      "",
    icon: "school",
    iconColor: COLORS.lavenderGlow,
  },
  {
    period: "2020 - 2021",
    degree: "Senior Secondary Education",
    school: "ZAD Global School, Rohtak 124001 , Haryana ",
    description:
      "",
    icon: "palette",
    iconColor: COLORS.dreamyPurple,
  },
];

// ---------- React Component ----------
const Education: React.FC = () => {
  return (
    <section
      id="education"
      style={{ backgroundColor: COLORS.plumDark }}
      className="py-32 px-6 lg:px-40"
    >
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className="heading-serif text-5xl italic mb-4"
            style={{ fontFamily: FONTS.serif, color: "#fff" }}
          >
            Academic <span style={{ color: COLORS.dreamyPurple }}>Path</span>
          </h2>
          <p className="uppercase tracking-widest text-xs font-bold" style={{ color: "rgba(255,255,255,0.4)" }}>
            Foundation of My Creative Process
          </p>
        </div>

        {/* Education Items */}
        <div className="space-y-12">
          {educationData.map((item, index) => (
            <div className="flex gap-10 group" key={index}>
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    border: `1px solid rgba(255,255,255,0.1)`,
                    color: item.iconColor,
                  }}
                >
                  <span className="material-symbols-outlined text-sm font-light">
                    {item.icon}
                  </span>
                </div>
                {index === 0 && <div className="w-px h-full bg-white/10 mt-4"></div>}
              </div>
              <div className="pb-12">
                <span
                  className="text-[10px] font-bold tracking-widest uppercase"
                  style={{ color: item.iconColor + "b3" }} // 70% opacity
                >
                  {item.period}
                </span>
                <h3 className="heading-serif text-3xl mt-2" style={{ fontFamily: FONTS.serif, color: "#fff" }}>
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {item.school}
                </p>
                <p className="mt-4 font-light leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
