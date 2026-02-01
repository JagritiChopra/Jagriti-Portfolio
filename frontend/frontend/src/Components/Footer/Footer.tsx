import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// Tailwind + custom colors
const COLORS = {
  plumDeep: "#0d050d",
  lavenderGlow: "#d8b4fe",
  deepViolet: "#7c3aed",
};

const FONTS = {
  serif: '"DM Serif Display", serif',
};

const Footer: React.FC = () => {
  return (
    <footer className="relative py-20 px-6 lg:px-40">
      <div className="max-w-[1200px] mx-auto">

        {/* Single glassy card like header */}
        <div className="rounded-[2rem] p-10 bg-plumDeep/80 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Info */}
          <div className="flex flex-col items-start text-left">
            <span
              className="text-5xl text-white/80"
              style={{ fontFamily: FONTS.serif }}
            >
              Jagriti
            </span>
            <span
              className="text-2xl pt-2 text-white/70"
              style={{ fontFamily: FONTS.serif }}
            >
              Creating Beautiful Web Experiences
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <SocialIcon icon={<FaLinkedinIn />} color="#0A66C2" link="https://linkedin.com" />
            <SocialIcon icon={<FaGithub />} color="#181717" link="https://github.com" />
            <SocialIcon icon={<FaInstagram />} color="#E4405F" link="https://instagram.com" />
            <SocialIcon icon={<FaTwitter />} color="#1DA1F2" link="https://twitter.com" />
            <SocialIcon icon={<FaYoutube />} color="#FF0000" link="https://youtube.com" />
          </div>

        </div>

        {/* Divider */}
        <hr className="w-full h-px bg-white/10 border-0 my-8" />

        {/* Footer Text */}
        <p className="text-[18px] text-white/60 text-center font-semibold">
          Code By Me, For You © 2024 Jagriti • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

// Social Icon Component
function SocialIcon({ icon, color, link }: { icon: React.ReactNode; color: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-md transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 active:scale-125"
      style={{ color }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.lavenderGlow)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
    >
      <span className="text-xl">{icon}</span>
    </a>
  );
}

export default Footer;
