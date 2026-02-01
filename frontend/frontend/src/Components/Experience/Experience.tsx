import  { useRef } from "react";
import { motion, useInView, easeOut } from "framer-motion";

const experiences = [
  {
    role: "TheCakeSmith",
    company: "",
    period: "Dec 2025 - Jan 2025",
    points: [
      "Built CakeSmith, an end-to-end e-commerce web platform for a custom cake startup, with support for product browsing, order placement, and secure online payments. Owned the full lifecycle from product design in Figma to application logic in React with global state management and third-party service integration.",
    ],
    images: ["/smith.png"],
    layout: "single",
    link: ["https://cake-smithin.vercel.app/"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leftVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section
      id="experience"
      className="py-32 px-6 lg:px-40 h-[100vh] bg-plum-dark/30"
      ref={ref}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.header
          className="flex flex-col gap-4 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="heading-serif text-6xl text-white italic leading-none">
            <span className="lavender-glow-effect text-soft-lavender">
              Professional Journey
            </span>
          </h2>
        </motion.header>

        {/* Experiences */}
        <div className="flex flex-col gap-24">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Dot */}
              <div className="flex-none mb-6 lg:mb-0">
                <div className="w-10 h-10 rounded-full bg-plum-deep border border-white/40 flex items-center justify-center shadow-lg shadow-lavender-accent/10">
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                </div>
              </div>

              {/* Left: Text */}
              <motion.div
                className="flex-1 flex flex-col gap-4"
                variants={leftVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="heading-serif text-3xl text-white group-hover:text-lavender-glow transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lavender-accent font-medium tracking-wide">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-white/40 tracking-[0.2em] uppercase bg-white/5 px-4 py-2 rounded-full border border-white/5 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-4 mt-2">
                  {exp.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-4 items-start text-white/60 font-light leading-relaxed"
                    >
                      <span className="material-symbols-outlined text-[#9a78c2] text-sm mt-1"></span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right: Image */}
              <motion.a
                href={exp.link[0]}
                className="flex-1 flex items-center justify-center"
                variants={rightVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {exp.layout === "single" && (
                  <div
                    className="w-full aspect-[16/9] bg-cover bg-center rounded-[2.5rem] preview-glow border border-white/10"
                    style={{ backgroundImage: `url(${exp.images[0]})` }}
                  />
                )}
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
