import React from "react";
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
  SiAmazon,
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
      { label: "AWS", icon: SiAmazon, color: "#FF9900" },
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


export default function Skills() {
  return (
    <section className="py-20 px-6 lg:px-40" id="skills">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-4 mb-20 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
            Capabilities
          </span>
          <h2 className="heading-serif text-6xl text-white italic leading-none">
            Skills &amp; <span className="lavender-glow-effect">Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_SECTIONS.map((section) => (
            <SkillCard key={section.title} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, skills }: { title: string; skills: Array<{ label: string; icon: React.ComponentType; color: string }> }) {
  return (
    <div className="glass-panel p-6 rounded-[1.2rem] border border-white/60 bg-white/[0.06] hover:bg-white/[0.14] backdrop-blur-xl shadow-xl hover:shadow-lg transform transition-all duration-300 ease-out hover:scale-[1.06] hover:-translate-y-2 hover:border-white/80 group">
      <h3 className="heading-serif text-xl text-white text-center mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <Skill key={skill.label} icon={skill.icon} label={skill.label} color={skill.color} />
        ))}
      </div>
    </div>
  );
}

function Skill({ icon: Icon, label, color }: { icon: React.ComponentType; label: string; color: string }) {
  return (
    <div className="relative group flex flex-col items-center">
      <div
        className=" text-3xl transition transform group-hover:scale-110"
        style={{ color }}
      >
        <Icon />
      </div>
      <span className="absolute -bottom-6 text-xs text-white opacity-0 group-hover:opacity-100 transition">
        {label}
      </span>
    </div>
  );
}
