import React from "react";

const About: React.FC = () => {
  return (
    <section
      className="bg-[#160115] border-y border-white/5 py-32 px-6 lg:px-40"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="thin-border-frame rounded-[3rem] w-4/5 ml-auto">
              <div
                className="aspect-[3/4] bg-cover bg-center rounded-[2.5rem]"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBo8rAO1KYF0pmiSX7vyyuq6Z5NMNfmws7BPRWMLnE54BNhGe4kJwli6GCBsuJSGPW0xmZI84JsXri8AKmuQ6lQCqlCLeFHotsTRoVYJTCpABTWihLMyyqfGOcdvmMYIgkdowVMgsyDqJCmyNgJFJ2OftaVidW2y-CR_G_ylW9gEISEYA1Q-yuA6k88QnBFoofyBhuJhNnAWt9xCg3idqx_AyeSW3dUEaR7tsXP_qLLs2mpSK3VPA8AyhP6dtRfaK02zPhzRwDfBQo0")',
                }}
              />
            </div>

            {/* Years Badge */}
            <div className="absolute -bottom-10 -left-4 bg-plum-deep/90 border border-white/10 p-8 rounded-3xl backdrop-blur-xl max-w-[200px]">
              <span className="heading-serif text-5xl text-lavender-glow italic">
                08+
              </span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-2">
                Years Crafting Experiences
              </p>
            </div>
          </div>

          {/* Right Text */}
          <div className="flex flex-col gap-8">
            <h2 className="heading-serif text-5xl md:text-6xl text-white italic">
              Soft <span className="text-dreamy-purple">Elegance</span>, Darker
              Soul
            </h2>

            <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
              <p>
                I specialize in high-contrast interfaces that blend the moody
                allure of night with soft, violet details. My work is defined by
                bold typography and glowing accents.
              </p>
              <p>
                Every project is an exploration of "Lavender-Cyber"
                aesthetic—where technology feels intimate, luxurious, and
                unmistakably modern.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <Skill
                icon="auto_fix_high"
                title="Visual Identity"
                description="Branding that sparkles"
                color="text-lavender-glow"
              />
              <Skill
                icon="language"
                title="UI Design"
                description="Web interfaces that glow"
                color="text-dreamy-purple"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Skill component
interface SkillProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const Skill: React.FC<SkillProps> = ({ icon, title, description, color }) => (
  <div className="flex items-start gap-4">
    <span className={`material-symbols-outlined ${color} font-light`}>
      {icon}
    </span>
    <div>
      <h4 className="font-bold text-sm text-white">{title}</h4>
      <p className="text-xs text-white/40 mt-1">{description}</p>
    </div>
  </div>
);

export default About;
