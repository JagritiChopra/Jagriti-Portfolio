
import { motion, type Variants } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiMysql,
  SiFirebase,
  SiSupabase,
 
  SiVercel,
  SiPostman,
  SiFigma,
  SiCplusplus,
} from "react-icons/si";

const SKILL_SECTIONS = [
  {
    title: "Front End",
    skills: [
      { label: "React.js", icon: FaReact, color: "#61DAFB" },
      { label: "React Native", icon: FaReact, color: "#61DAFB" },
      { label: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { label: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { label: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
    ],
  },
  {
    title: "Back End",
    skills: [
      { label: "Python", icon: FaPython, color: "#FFD43B" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "Express.js", icon: FaNodeJs, color: "#339933" },
      { label: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { label: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { label: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { label: "Redis", icon: SiRedis, color: "#DC382D" },
      { label: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "SaaS & Cloud",
    skills: [
      
      { label: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { label: "Docker", icon: SiDocker, color: "#2496ED" },
      { label: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { label: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { label: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
      { label: "Python", icon: FaPython, color: "#FFD43B" },
      { label: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },
  {
    title: "Others",
    skills: [
      { label: "Git", icon: FaGitAlt, color: "#F05032" },
      { label: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { label: "Postman", icon: SiPostman, color: "#FF6C37" },
      { label: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

// Container for the skill section
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

// Each card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};



// // 🔹 Animation Variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.12 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: -40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

export default function Skills() {
  return (
    <section className="py-20 px-6 lg:px-40" id="skills">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <motion.div
          className="flex flex-col gap-4 mb-20 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
            Capabilities
          </span>
          <h2 className="heading-serif text-6xl text-white italic leading-none">
            Skills &amp; <span className="lavender-glow-effect">Expertise</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SKILL_SECTIONS.map((section) => (
            <SkillCard key={section.title} {...section} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: Array<{ label: string; icon: React.ComponentType; color: string }>;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="glass-panel p-6 rounded-[1.2rem] border border-white/60 bg-white/[0.06] hover:bg-white/[0.14] backdrop-blur-xl shadow-xl hover:shadow-lg transform transition-all duration-300 ease-out hover:scale-[1.06] hover:-translate-y-2 hover:border-white/80 group"
    >
      <h3 className="heading-serif text-xl text-white text-center mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <Skill key={skill.label} {...skill} />
        ))}
      </div>
    </motion.div>
  );
}
function Skill({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ComponentType;
  label: string;
  color: string;
}) {
  return (
    <motion.div
      className="
        relative flex flex-col items-center justify-center
        w-10 h-10 rounded-xl
        bg-white/[0.05] backdrop-blur-md shadow-md
        border border-transparent
      "
      whileHover={{
        scale: 1.2,
        y: -8,
        boxShadow: "0px 10px 20px rgba(255,255,255,0.2)",
        backgroundColor: "rgba(255,255,255,0.12)",
        borderColor: "rgba(255,255,255,0.3)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 18,
      }}
    >
      <motion.div
        className="text-3xl"
        style={{ color }}
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <Icon />
      </motion.div>
      <motion.span
        className="absolute -bottom-6 text-xs text-white"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
