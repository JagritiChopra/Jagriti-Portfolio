import React from 'react';

// Define types for component props
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface SkillCardProps {
  icon: string;
  title: string;
  skills: string[];
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  accentColor?: string;
  isComingSoon?: boolean;
}

interface EducationItemProps {
  years: string;
  degree: string;
  institution: string;
  description: string;
  icon: string;
  color: string;
}

// Reusable Components
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    className="text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-lavender-glow transition-colors"
    href={href}
  >
    {children}
  </a>
);

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => (
  <div className="glass-panel p-10 rounded-[2.5rem] border-white/5 hover:border-lavender-accent/30 transition-colors group">
    <div className="w-12 h-12 rounded-2xl bg-lavender-accent/10 flex items-center justify-center mb-8">
      <span className="material-symbols-outlined text-lavender-accent">{icon}</span>
    </div>
    <h3 className="heading-serif text-2xl text-white mb-6">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="skill-pill">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  imageUrl,
  accentColor = 'lavender-glow',
  isComingSoon = false,
}) => (
  <div className="group flex flex-col gap-8">
    <div className="thin-border-frame rounded-[2.5rem] overflow-hidden">
      {isComingSoon ? (
        <div className="aspect-[16/10] bg-plum-dark rounded-[2rem] flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
          <span className="heading-serif text-white/10 text-6xl italic group-hover:text-white/20 transition-all">
            Coming Soon
          </span>
        </div>
      ) : (
        <div
          className="aspect-[16/10] bg-cover bg-center rounded-[2rem] overflow-hidden transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        >
          <div className="w-full h-full bg-plum-deep/20 group-hover:bg-transparent transition-colors"></div>
        </div>
      )}
    </div>
    <div className="flex flex-col gap-3 px-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className={`heading-serif text-3xl text-white group-hover:text-${accentColor} transition-colors`}>
            {title}
          </h3>
          <p className="text-sm text-white/40 mt-1 font-light tracking-wide uppercase">
            {subtitle}
          </p>
        </div>
        {!isComingSoon && (
          <span className={`material-symbols-outlined text-white/20 group-hover:text-${accentColor} group-hover:rotate-45 transition-all`}>
            arrow_outward
          </span>
        )}
      </div>
    </div>
  </div>
);

const EducationItem: React.FC<EducationItemProps> = ({
  years,
  degree,
  institution,
  description,
  icon,
  color,
}) => (
  <div className="flex gap-10 group">
    <div className="flex flex-col items-center">
      <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-${color} group-hover:border-${color} transition-colors`}>
        <span className="material-symbols-outlined text-sm font-light">{icon}</span>
      </div>
      <div className="w-px h-full bg-white/10 mt-4"></div>
    </div>
    <div className="pb-12">
      <span className={`text-[10px] font-bold text-${color}/70 tracking-widest uppercase`}>
        {years}
      </span>
      <h3 className="heading-serif text-3xl text-white mt-2">{degree}</h3>
      <p className="text-white/40 mt-1 text-sm">{institution}</p>
      <p className="text-white/60 mt-4 font-light leading-relaxed max-w-xl">
        {description}
      </p>
    </div>
  </div>
);

// Main Portfolio Component
const LavenderMidnightPortfolio: React.FC = () => {
  const frontEndSkills = ['React', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'Next.js'];
  const backEndSkills = ['Node.js', 'Python', 'Django', 'Go', 'Express'];
  const databaseSkills = ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'];
  const cloudSkills = ['AWS', 'Vercel', 'Docker', 'Stripe API', 'Firebase'];
  const programmingLanguages = ['JavaScript (ES6+)', 'Python', 'Rust', 'C++', 'Swift', 'PHP'];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-plum-deep text-white/90">
      {/* Background gradient blobs */}
      <div className="fixed top-[-10%] left-[-5%] w-[50%] h-[50%] bg-deep-violet/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-soft-lavender/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-plum-deep/80 backdrop-blur-lg px-6 lg:px-40 py-5">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3">
            <span className="heading-serif text-2xl tracking-tight text-white italic">
              Evelyn Bloom
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Work</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button className="bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-deep-violet transition-all">
              Let's Chat
            </button>
          </nav>
          <div className="md:hidden">
            <span className="material-symbols-outlined cursor-pointer text-white/70">
              menu_open
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-6 lg:px-40" id="home">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-7/12 flex flex-col gap-10 order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-lavender-glow/50"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-lavender-glow">
                  Full Stack Engineer &amp; Designer
                </span>
              </div>
              <h1 className="heading-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.9] text-white italic">
                The <span className="lavender-glow-effect text-soft-lavender">Midnight</span> <br />
                <span className="not-italic">Aesthetic.</span>
              </h1>
              <p className="text-lg text-white/50 max-w-lg leading-relaxed font-light">
                Creating modern digital experiences with a touch of feminine elegance. Where dark
                plum shadows meet ethereal lavender light.
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
                Our Story{' '}
                <span className="material-symbols-outlined text-xs group-hover:translate-x-2 transition-transform">
                  east
                </span>
              </a>
            </div>
          </div>
          <div className="lg:w-5/12 order-1 lg:order-2">
            <div className="thin-border-frame rounded-[2.5rem]">
              <div
                className="aspect-[4/5] bg-cover bg-center rounded-[2rem] shadow-2xl"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABqhpvuA5OH6UuGHJCdPvd3B6-s6s8bOEpGi3FuMdzrsOcU0QQsmcOnnTy0aiykd7QNDklMvQOT1Q_YJVx0X72NiJfpy9g6TwahqfbGcTarnPDJLrmqeOHt_TOS4SXVF0-YbpIDgrYhkWckNF7A0GQDmBA_Tv_Nf9H5s0qIkVyCKmO_rd6Yq5z9cP9Pnf7aVwYZqzNZPyrjOpfL7p65Kdx3F5l_SNg1ImyZqS71E7rOqFP-fEOoedeMA_ltXvGzQvpnVW0o879n-Yj")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-plum-dark border-y border-white/5 py-32 px-6 lg:px-40" id="about">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="thin-border-frame rounded-[3rem] w-4/5 ml-auto">
                <div
                  className="aspect-[3/4] bg-cover bg-center rounded-[2.5rem]"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBo8rAO1KYF0pmiSX7vyyuq6Z5NMNfmws7BPRWMLnE54BNhGe4kJwli6GCBsuJSGPW0xmZI84JsXri8AKmuQ6lQCqlCLeFHotsTRoVYJTCpABTWihLMyyqfGOcdvmMYIgkdowVMgsyDqJCmyNgJFJ2OftaVidW2y-CR_G_ylW9gEISEYA1Q-yuA6k88QnBFoofyBhuJhNnAWt9xCg3idqx_AyeSW3dUEaR7tsXP_qLLs2mpSK3VPA8AyhP6dtRfaK02zPhzRwDfBQo0")',
                  }}
                ></div>
              </div>
              <div className="absolute -bottom-10 -left-4 bg-plum-deep/90 border border-white/10 p-8 rounded-3xl backdrop-blur-xl max-w-[200px]">
                <span className="heading-serif text-5xl text-lavender-glow italic">08+</span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-2">
                  Years Crafting Experiences
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="heading-serif text-5xl md:text-6xl text-white italic">
                Soft <span className="text-dreamy-purple">Elegance</span>, Darker Soul
              </h2>
              <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
                <p>
                  I specialize in high-contrast interfaces that blend the moody allure of night
                  with soft, violet details. My work is defined by bold typography and glowing
                  accents.
                </p>
                <p>
                  Every project is an exploration of "Lavender-Cyber" aesthetic—where technology
                  feels intimate, luxurious, and unmistakably modern.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-lavender-glow font-light">
                    auto_fix_high
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-white">Visual Identity</h4>
                    <p className="text-xs text-white/40 mt-1">Branding that sparkles</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-dreamy-purple font-light">
                    language
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-white">UI Design</h4>
                    <p className="text-xs text-white/40 mt-1">Web interfaces that glow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 lg:px-40" id="skills">
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
            <SkillCard icon="html" title="Front End" skills={frontEndSkills} />
            <SkillCard icon="settings_ethernet" title="Back End" skills={backEndSkills} />
            <SkillCard icon="database" title="Databases" skills={databaseSkills} />
            <SkillCard icon="cloud" title="SaaS &amp; Cloud" skills={cloudSkills} />
            <div className="glass-panel p-10 rounded-[2.5rem] border-white/5 hover:border-lavender-accent/30 transition-colors group lg:col-span-2">
              <div className="w-12 h-12 rounded-2xl bg-lavender-accent/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-lavender-accent">code</span>
              </div>
              <h3 className="heading-serif text-2xl text-white mb-6">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang, index) => (
                  <span key={index} className="skill-pill">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-6 lg:px-40" id="projects">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                Portfolio
              </span>
              <h2 className="heading-serif text-6xl text-white italic leading-none">
                Curated <span className="lavender-glow-effect">Works</span>
              </h2>
            </div>
            <p className="text-white/40 max-w-xs text-sm font-light">
              A selection of premium digital assets and brand identities crafted for the modern
              era.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <ProjectCard
              title="Lumina Wellness"
              subtitle="UI/UX • Dark Mode Mobile App"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDUDVG4gur3EyknBTcha5hzCAJaZI7C_vcoNfmDE3Qk2ABY6-kD0rvieTtUseQQhZcFruGOyX54nOzfbQaNssFT-FGawqCujDzIEKiMIuzoIBsz9SIQS0tNKZB5Pf54cK1_k3u5vti5Hz4KU8GVMcKLStv73EHgbC3Z0AaOaayYGTc4s3P-oXS1Q_mSrrVpDh_ujYui4mFFfV2k9yAF4rYhHE38hKXlztEQ0xEYH16EgjlB_lKAVnFyzPIsQRk3quSdCePWxaNfei9p"
            />
            <ProjectCard
              title="Velvet Bloom"
              subtitle="Branding • Luxury Lifestyle"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCoIaaQ3pqJV0rGa5iSgQzL6wJi6-MMc3-KftQshco2nv-zb2qKy_dYH7mbXjSDTDdftzUl0VvopE41OKIz3HGcvtH9jA1TYDtXjmwy4IFObew_wzrjP7kNE2eD1MMGWmUIJmVlnFQ3PgLXEmBi8wEL-RDnR1rbInS3c7s6FDXW-Saeu8sKLHYX5994RHYG5-mZGSOl55hXkvWu91rGdxK-wLXu2QirXLNUCmqAWEETTWGXo-YkoVECfbZAFiEjUebdtmTniuUPYu4m"
              accentColor="dreamy-purple"
            />
            <ProjectCard
              title="Cyber Pastel Shop"
              subtitle="E-Commerce • Web Design"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDNtPhuI4swWrYmrw2yKHJ40XyX94CCZYr1W2ysvt8kSAp1tBG9oDZfHc_oxjVfn0s9o4CTpih-XukNpPM4EpC8-VvEgEvCi8ct6oZpA3ZA5vn0i9CsVCIquYkSu5MXsDJG6KU99SR2m6CEC4Z0YPeIJDhVZC1YiJ_CLwBMRitCiFKiDYhwR22GLqer5OOwwnxF_NH66nJjl2CTwfdyZj_sNxAf4vGzZYiImKLaj7nmm4EXz6i_dBCjqczScTFKSnH3NvgzTD8iTTbR"
            />
            <ProjectCard
              title="Secret Project"
              subtitle="Confidential Branding"
              imageUrl=""
              isComingSoon={true}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-32 px-6 lg:px-40 bg-plum-dark/50" id="education">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="heading-serif text-5xl text-white italic mb-4">
              Academic <span className="text-dreamy-purple">Path</span>
            </h2>
            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">
              Foundation of My Creative Process
            </p>
          </div>
          <div className="space-y-12">
            <EducationItem
              years="2020 - 2022"
              degree="MFA in Digital Media Design"
              institution="School of Visual Arts, New York City"
              description="Specialized in sensory design and digital atmosphere, focusing on how color and light influence user psychology in dark interfaces."
              icon="school"
              color="lavender-glow"
            />
            <EducationItem
              years="2016 - 2020"
              degree="BFA in Graphic Design"
              institution="Parsons School of Design"
              description="Deep dive into classic typography, color theory, and minimalist brand identity for boutique fashion and lifestyle labels."
              icon="palette"
              color="dreamy-purple"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 lg:px-40" id="contact">
        <div className="max-w-[1200px] mx-auto bg-plum-dark border border-white/10 rounded-[4rem] p-10 md:p-20 relative overflow-hidden glass-panel">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-deep-violet/10 rounded-full blur-[100px]"></div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-10">
              <h2 className="heading-serif text-6xl md:text-7xl text-white italic leading-tight">
                Let's Create <br />
                Something <span className="lavender-glow-effect text-soft-lavender">Magic.</span>
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                I am currently accepting select new projects. If you have a vision for something
                elegant and aesthetic, reach out.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-lavender-glow transition-colors">
                    <span className="material-symbols-outlined font-light">mail</span>
                  </div>
                  <a
                    className="text-xl font-medium text-white hover:text-lavender-glow transition-colors"
                    href="mailto:hello@bloom.studio"
                  >
                    hello@bloom.studio
                  </a>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-dreamy-purple transition-colors">
                    <span className="material-symbols-outlined font-light">location_on</span>
                  </div>
                  <span className="text-xl font-medium text-white">NYC / Remote</span>
                </div>
              </div>
              <div className="flex gap-6 mt-6">
                <a className="text-white/30 hover:text-lavender-glow transition-colors" href="#">
                  <span className="material-symbols-outlined">camera</span>
                </a>
                <a className="text-white/30 hover:text-dreamy-purple transition-colors" href="#">
                  <span className="material-symbols-outlined">alternate_email</span>
                </a>
                <a className="text-white/30 hover:text-deep-violet transition-colors" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
              </div>
            </div>
            <form className="flex flex-col gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">
                  Name
                </label>
                <input
                  className="w-full bg-white/5 border-white/10 rounded-2xl p-5 text-white placeholder:text-white/10 focus:ring-deep-violet/50 focus:border-deep-violet transition-all outline-none"
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">
                  Email
                </label>
                <input
                  className="w-full bg-white/5 border-white/10 rounded-2xl p-5 text-white placeholder:text-white/10 focus:ring-deep-violet/50 focus:border-deep-violet transition-all outline-none"
                  placeholder="hello@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">
                  Message
                </label>
                <textarea
                  className="w-full bg-white/5 border-white/10 rounded-2xl p-5 text-white placeholder:text-white/10 focus:ring-deep-violet/50 focus:border-deep-violet transition-all outline-none"
                  placeholder="Tell me about your dream project..."
                  rows={4}
                />
              </div>
              <button className="bg-white/5 border border-white/10 hover:bg-deep-violet hover:border-deep-violet text-white font-bold py-5 rounded-2xl transition-all shadow-xl hover:shadow-deep-violet/20 uppercase tracking-widest text-xs">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 lg:px-40 border-t border-white/5 bg-plum-deep text-center">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10">
          <span className="heading-serif text-3xl italic text-white/80">Evelyn Bloom</span>
          <div className="flex gap-12 text-xs font-bold uppercase tracking-widest text-white/40">
            <a className="hover:text-lavender-glow transition-colors" href="#">
              Behance
            </a>
            <a className="hover:text-lavender-glow transition-colors" href="#">
              Dribbble
            </a>
            <a className="hover:text-lavender-glow transition-colors" href="#">
              Instagram
            </a>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
            © 2024 Lavender Midnight Studio • All Rights Reserved
          </p>
        </div>
      </footer>

      {/* Styles - Note: In a real TSX project, these would typically be in a separate CSS file */}
      <style jsx>{`
        .heading-serif {
          font-family: 'DM Serif Display', serif;
        }
        .lavender-glow-effect {
          text-shadow: 0 0 15px rgba(216, 180, 254, 0.4), 0 0 30px rgba(167, 139, 250, 0.2);
        }
        .thin-border-frame {
          border: 1px solid rgba(216, 180, 254, 0.15);
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .skill-pill {
          @apply px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wide text-white/70 hover:border-lavender-accent hover:text-white transition-all duration-300;
        }
      `}</style>
    </div>
  );
};

export default LavenderMidnightPortfolio;
