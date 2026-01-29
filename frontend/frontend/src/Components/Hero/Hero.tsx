import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative pt-44 pb-32 px-6 lg:px-40"
      id="Hero"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="lg:w-7/12 flex flex-col gap-10 order-2 lg:order-1">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-lavender-glow/50" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-lavender-glow">
                Creative Director &amp; Designer
              </span>
            </div>

            <h1 className="heading-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.9] text-white italic">
              The{" "}
              <span className="lavender-glow-effect text-soft-lavender">
                Midnight
              </span>
              <br />
              <span className="not-italic">Aesthetic.</span>
            </h1>

            <p className="text-lg text-white/50 max-w-lg leading-relaxed font-light">
              Creating modern digital experiences with a touch of feminine
              elegance. Where dark plum shadows meet ethereal lavender light.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <button className="bg-deep-violet text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-wide shadow-2xl shadow-deep-violet/20 hover:-translate-y-1 transition-all">
              Explore Portfolio
            </button>

            <a
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all"
              href="#"
            >
              Our Story
              <span className="material-symbols-outlined text-xs group-hover:translate-x-2 transition-transform">
                east
              </span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-5/12 order-1 lg:order-2">
          <div className="thin-border-frame rounded-[2.5rem]">
            <div
              className="aspect-[4/5] bg-cover bg-center rounded-[2rem] shadow-2xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABqhpvuA5OH6UuGHJCdPvd3B6-s6s8bOEpGi3FuMdzrsOcU0QQsmcOnnTy0aiykd7QNDklMvQOT1Q_YJVx0X72NiJfpy9g6TwahqfbGcTarnPDJLrmqeOHt_TOS4SXVF0-YbpIDgrYhkWckNF7A0GQDmBA_Tv_Nf9H5s0qIkVyCKmO_rd6Yq5z9cP9Pnf7aVwYZqzNZPyrjOpfL7p65Kdx3F5l_SNg1ImyZqS71E7rOqFP-fEOoedeMA_ltXvGzQvpnVW0o879n-Yj")',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
