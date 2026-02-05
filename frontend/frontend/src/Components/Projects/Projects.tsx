import React from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";


const Projects: React.FC = () => {
// Container variant for header + web projects
const webContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// Container variant for app projects
const appContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// Animation for each element/card
const itemVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // easeOut curve (typed-safe)
    },
  },
};

  return (
    <section className="py-32 px-6 lg:px-40 bg-plum-deep" id="projects">
      <motion.div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30"></span>
            <h2 className="heading-serif text-6xl text-white italic leading-none">
              <span className="lavender-glow-effect"> Projects </span>
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm font-light">.</p>
        </motion.div>

        <motion.hr className="my-12 border-white/40" variants={itemVariants} />

        {/* Web Projects Title */}
        <motion.h2
          className="heading-serif text-5xl text-white italic leading-none mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <span className="lavender-glow-effect block text-center"> Web Projects </span>
        </motion.h2>

        {/* Web Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={webContainerVariants}
        >
          <ProjectCard title="Bhaav-Book" subtitle="Journal & Mood Tracker" imageUrl="/bhaavBook.png" liveUrl="https://mind-echo-xxlv.vercel.app" githubUrl="https://github.com/JagritiChopra/Mind-Echo" variants={itemVariants} />
          <ProjectCard title="FinAura" subtitle="Finance Advisor" imageUrl="/finAura.png" liveUrl="https://finaura-pi.vercel.app" githubUrl="https://github.com/JagritiChopra/finAura" variants={itemVariants} />
          <ProjectCard title="Remote Interview Platform" subtitle="Interview Platform" imageUrl="/resumeMate.png" liveUrl="https://resume-mate-rd85-92g76riw8-jagritis-projects-319bdbb0.vercel.app/" githubUrl="https://github.com/JagritiChopra/ResumeMate" variants={itemVariants} />
          <ProjectCard title="Explore More Projects" subtitle="Explore More on Github" imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDNtPhuI4swWrYmrw2yKHJ40XyX94CCZYr1W2ysvt8kSAp1tBG9oDZfHc_oxjVfn0s9o4CTpih-XukNpPM4EpC8-VvEgEvCi8ct6oZpA3ZA5vn0i9CsVCIquYkSu5MXsDJG6KU99SR2m6CEC4Z0YPeIJDhVZC1YiJ_CLwBMRitCiFKiDYhwR22GLqer5OOwwnxF_NH66nJjl2CTwfdyZj_sNxAf4vGzZYiImKLaj7nmm4EXz6i_dBCjqczScTFKSnH3NvgzTD8iTTbR" liveUrl="https://github.com/JagritiChopra/" githubUrl="https://github.com/JagritiChopra" variants={itemVariants} />
        </motion.div>

        <motion.hr className="my-12 border-white/40" variants={itemVariants} />


                {/* Frontend Projects Title */}
        <motion.h2
          className="heading-serif text-5xl mt-10 text-white italic leading-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <span className="lavender-glow-effect block text-center"> Frontend Projects </span>
        </motion.h2>

        {/* App Project Grid with separate animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={appContainerVariants} // separate container
        >
          <ProjectCard title="MyyGlam" subtitle="Ecommerce Mobile App" imageUrl="/myyglam.png" liveUrl="https://myyyyy-glam.vercel.app/" githubUrl="https://github.com/JagritiChopra/myyyyy-glam" variants={itemVariants} />
          <ProjectCard title="Aurora" subtitle="Ecommerce Website of Norway theme" imageUrl="/Aurora.png" liveUrl="https://aurura.vercel.app/" githubUrl="https://github.com/JagritiChopra/Aurura" variants={itemVariants} />
           </motion.div>
      </motion.div>


        <motion.hr className="my-12 border-white/40" variants={itemVariants} />



        {/* App Projects Title */}
        <motion.h2
          className="heading-serif text-5xl mt-10 text-white italic leading-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <span className="lavender-glow-effect block text-center"> App Projects </span>
        </motion.h2>

        {/* App Project Grid with separate animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={appContainerVariants} // separate container
        >
          <ProjectCard title="VibeMart" subtitle="Ecommerce Mobile App" imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDUDVG4gur3EyknBTcha5hzCAJaZI7C_vcoNfmDE3Qk2ABY6-kD0rvieTtUseQQhZcFruGOyX54nOzfbQaNssFT-FGawqCujDzIEKiMIuzoIBsz9SIQS0tNKZB5Pf54cK1_k3u5vti5Hz4KU8GVMcKLStv73EHgbC3Z0AaOaayYGTc4s3P-oXS1Q_mSrrVpDh_ujYui4mFFfV2k9yAF4rYhHE38hKXlztEQ0xEYH16EgjlB_lKAVnFyzPIsQRk3quSdCePWxaNfei9p" liveUrl="https://lumina-wellness.vercel.app" githubUrl="https://github.com/JagritiChopra/E-Commerce-Mobile-App" variants={itemVariants} />
          <ProjectCard title="RailYatri" subtitle="Train Search Mobile App" imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCoIaaQ3pqJV0rGa5iSgQzL6wJi6-MMc3-KftQshco2nv-zb2qKy_dYH7mbXjSDTDdftzUl0VvopE41OKIz3HGcvtH9jA1TYDtXjmwy4IFObew_wzrjP7kNE2eD1MMGWmUIJmVlnFQ3PgLXEmBi8wEL-RDnR1rbInS3c7s6FDXW-Saeu8sKLHYX5994RHYG5-mZGSOl55hXkvWu91rGdxK-wLXu2QirXLNUCmqAWEETTWGXo-YkoVECfbZAFiEjUebdtmTniuUPYu4m" liveUrl="https://lumina-wellness.vercel.app" githubUrl="https://github.com/JagritiChopra/RailYatri" variants={itemVariants} />
           </motion.div>
      </motion.div>







    </section>
  );
};

// ProjectCard updated for motion
interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
variants?: Variants; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, imageUrl, liveUrl, githubUrl, variants }) => {
  return (
    <motion.div className="group flex flex-col gap-8" variants={variants}>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-8 cursor-pointer">
        <div className="thin-border-frame rounded-[2.5rem] overflow-hidden">
          <div className="aspect-[16/10] bg-cover bg-center rounded-[2rem] overflow-hidden transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className={`w-full h-full bg-plum-deep/20 group-hover:bg-transparent transition-colors`} />
          </div>
        </div>
        <div className="flex flex-col gap-3 px-4">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="heading-serif text-3xl text-white group-hover:text-[#d8b4fe] transition-colors">{title}</h3>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-white/40 hover:text-[#d8b4fe] transition">
                  <Github size={20} />
                </a>
                <ArrowUpRight className="text-white/30 group-hover:text-[#d8b4fe] group-hover:rotate-45 transition-all" size={22} />
              </div>
              <p className="text-sm text-white/40 font-light tracking-wide uppercase">{subtitle}</p>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default Projects;
