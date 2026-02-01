import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32 px-6 lg:px-40" id="Hero">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Content */}
        <motion.div
          className="lg:w-7/12 flex flex-col gap-10 order-2 lg:order-1"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-lavender-glow/50" />
            </div>

            <h1 className="heading-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.9] text-white italic">
              Hi, I'm{" "}
              <span className="lavender-glow-effect not-italic text-soft-lavender">
                Jagriti
              </span>
              <br />
              <span className="not-italic text-2xl">
                | Full Stack Web and App Developer |
              </span>
            </h1>

            <p className="text-lg text-white/50 max-w-lg leading-relaxed font-light">
              I craft elegant, high-performance web applications with modern
              technologies and a focus on user experience.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <button
              type="button"
              className="bg-[#6f623e] text-white px-10 py-5 hover:bg-[#4d442c] rounded-2xl font-bold text-lg tracking-wide shadow-2xl shadow-deep-violet/20 hover:-translate-y-1 transition-all"
            >
              Explore Portfolio
            </button>

            <button
              type="button"
              className="bg-[#6f623e] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#4d442c]tracking-wide shadow-2xl shadow-deep-violet/20 hover:-translate-y-1 transition-all"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:w-5/12 order-1 lg:order-2"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="thin-border-frame rounded-[2.5rem]">
            <div
              className="aspect-[4/5] bg-cover bg-center rounded-[2rem] shadow-2xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABqhpvuA5OH6UuGHJCdPvd3B6-s6s8bOEpGi3FuMdzrsOcU0QQsmcOnnTy0aiykd7QNDklMvQOT1Q_YJVx0X72NiJfpy9g6TwahqfbGcTarnPDJLrmqeOHt_TOS4SXVF0-YbpIDgrYhkWckNF7A0GQDmBA_Tv_Nf9H5s0qIkVyCKmO_rd6Yq5z9cP9Pnf7aVwYZqzNZPyrjOpfL7p65Kdx3F5l_SNg1ImyZqS71E7rOqFP-fEOoedeMA_ltXvGzQvpnVW0o879n-Yj")',
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
