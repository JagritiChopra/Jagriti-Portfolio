import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const COLORS = {
  plumDeep: "#0d050d",
  lavenderGlow: "#d8b4fe",
  dreamyPurple: "#a78bfa",
};

const FONTS = {
  serif: '"DM Serif Display", serif',
};

const educationData = [
  {
    period: "2022 - 2026",
    degree: "B.Tech in Computer Science and Engineering",
    school: "University Institute of Engineering and Technology, Maharshi Dayanand University",
    icon: "school",
    iconColor: COLORS.lavenderGlow,
  },
  {
    period: "2020 - 2021",
    degree: "Senior Secondary Education",
    school: "ZAD Global School, Rohtak 124001, Haryana",
    icon: "palette",
    iconColor: COLORS.dreamyPurple,
  },
];

// ✅ Variants typed correctly
const cardVariants: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="py-32 px-6 lg:px-40 bg-plumDeep"
    >
      <div className="max-w-[900px] mx-auto">
        {/* Glass Card */}
        <motion.div
          className="rounded-[2rem] p-10 bg-plumDeep/80 border border-white/10 backdrop-blur-xl shadow-xl"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            variants={itemVariants}
          >
            <h2
              className="heading-serif text-5xl italic mb-4"
              style={{ fontFamily: FONTS.serif, color: "#fff" }}
            >
              Academic <span style={{ color: COLORS.dreamyPurple }}>Path</span>
            </h2>
            <p
              className="uppercase tracking-widest text-xs font-bold"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Foundation of My Creative Process
            </p>
          </motion.div>

          {/* Education Items */}
          <motion.div className="relative pl-12 space-y-18">
            {/* Vertical line */}
            <div className="absolute left-16 top-10 bottom-0 w-px bg-white/10"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-8 relative z-10"
                variants={itemVariants}
              >
                {/* Icon */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                    style={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: item.iconColor,
                    }}
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="pb-12">
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{ color: item.iconColor + "b3" }}
                  >
                    {item.period}
                  </span>
                  <h3
                    className="heading-serif text-3xl mt-2"
                    style={{ fontFamily: FONTS.serif, color: "#fff" }}
                  >
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {item.school}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
