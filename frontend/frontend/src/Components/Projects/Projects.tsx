import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-40 bg-plum-deep" id="projects">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
             
            </span>
            <h2 className="heading-serif text-6xl text-white italic leading-none">
              {" "}
              <span className="lavender-glow-effect"> Projects </span>
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm font-light">
           .
          </p>
        </div>

           <hr  className="lavender-glow-effect mt-6" />

        <h2 className="heading-serif text-5xl text-white italic leading-none mt-10">
              
              <span className="lavender-glow-effect block text-center"> Web Projects </span>
            </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-10">
          {/* Project Card 1 */}
          <ProjectCard
            title="Lumina Wellness"
            subtitle="UI/UX • Dark Mode Mobile App"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDUDVG4gur3EyknBTcha5hzCAJaZI7C_vcoNfmDE3Qk2ABY6-kD0rvieTtUseQQhZcFruGOyX54nOzfbQaNssFT-FGawqCujDzIEKiMIuzoIBsz9SIQS0tNKZB5Pf54cK1_k3u5vti5Hz4KU8GVMcKLStv73EHgbC3Z0AaOaayYGTc4s3P-oXS1Q_mSrrVpDh_ujYui4mFFfV2k9yAF4rYhHE38hKXlztEQ0xEYH16EgjlB_lKAVnFyzPIsQRk3quSdCePWxaNfei9p"
            hoverColor="lavender-glow"
          />

          {/* Project Card 2 */}
          <ProjectCard
            title="Velvet Bloom"
            subtitle="Branding • Luxury Lifestyle"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCoIaaQ3pqJV0rGa5iSgQzL6wJi6-MMc3-KftQshco2nv-zb2qKy_dYH7mbXjSDTDdftzUl0VvopE41OKIz3HGcvtH9jA1TYDtXjmwy4IFObew_wzrjP7kNE2eD1MMGWmUIJmVlnFQ3PgLXEmBi8wEL-RDnR1rbInS3c7s6FDXW-Saeu8sKLHYX5994RHYG5-mZGSOl55hXkvWu91rGdxK-wLXu2QirXLNUCmqAWEETTWGXo-YkoVECfbZAFiEjUebdtmTniuUPYu4m"
            hoverColor="dreamy-purple"
          />

          {/* Project Card 3 */}
          <ProjectCard
            title="Cyber Pastel Shop"
            subtitle="E-Commerce • Web Design"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDNtPhuI4swWrYmrw2yKHJ40XyX94CCZYr1W2ysvt8kSAp1tBG9oDZfHc_oxjVfn0s9o4CTpih-XukNpPM4EpC8-VvEgEvCi8ct6oZpA3ZA5vn0i9CsVCIquYkSu5MXsDJG6KU99SR2m6CEC4Z0YPeIJDhVZC1YiJ_CLwBMRitCiFKiDYhwR22GLqer5OOwwnxF_NH66nJjl2CTwfdyZj_sNxAf4vGzZYiImKLaj7nmm4EXz6i_dBCjqczScTFKSnH3NvgzTD8iTTbR"
            hoverColor="lavender-glow"
          />

          {/* Coming Soon Card */}
          <div className="group flex flex-col gap-8">
            <div className="thin-border-frame rounded-[2.5rem] overflow-hidden">
              <div className="aspect-[16/10] bg-plum-dark rounded-[2rem] flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                <span className="heading-serif text-white/10 text-6xl italic group-hover:text-white/20 transition-all">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="heading-serif text-3xl text-white/30">
                    Secret Project
                  </h3>
                  <p className="text-sm text-white/20 mt-1 font-light tracking-wide uppercase">
                    Confidential Branding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    
        <hr  className="lavender-glow-effect mt-6" />
        
        <h2 className="heading-serif text-5xl mt-10 text-white italic leading-none">
              
              <span className="lavender-glow-effect  block text-center "> App Projects </span>
            </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-10">
          {/* Project Card 1 */}
          <ProjectCard
            title="Lumina Wellness"
            subtitle="UI/UX • Dark Mode Mobile App"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDUDVG4gur3EyknBTcha5hzCAJaZI7C_vcoNfmDE3Qk2ABY6-kD0rvieTtUseQQhZcFruGOyX54nOzfbQaNssFT-FGawqCujDzIEKiMIuzoIBsz9SIQS0tNKZB5Pf54cK1_k3u5vti5Hz4KU8GVMcKLStv73EHgbC3Z0AaOaayYGTc4s3P-oXS1Q_mSrrVpDh_ujYui4mFFfV2k9yAF4rYhHE38hKXlztEQ0xEYH16EgjlB_lKAVnFyzPIsQRk3quSdCePWxaNfei9p"
            hoverColor="lavender-glow"
          />

          {/* Project Card 2 */}
          <ProjectCard
            title="Velvet Bloom"
            subtitle="Branding • Luxury Lifestyle"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCoIaaQ3pqJV0rGa5iSgQzL6wJi6-MMc3-KftQshco2nv-zb2qKy_dYH7mbXjSDTDdftzUl0VvopE41OKIz3HGcvtH9jA1TYDtXjmwy4IFObew_wzrjP7kNE2eD1MMGWmUIJmVlnFQ3PgLXEmBi8wEL-RDnR1rbInS3c7s6FDXW-Saeu8sKLHYX5994RHYG5-mZGSOl55hXkvWu91rGdxK-wLXu2QirXLNUCmqAWEETTWGXo-YkoVECfbZAFiEjUebdtmTniuUPYu4m"
            hoverColor="dreamy-purple"
          />

          {/* Project Card 3 */}
          <ProjectCard
            title="Cyber Pastel Shop"
            subtitle="E-Commerce • Web Design"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDNtPhuI4swWrYmrw2yKHJ40XyX94CCZYr1W2ysvt8kSAp1tBG9oDZfHc_oxjVfn0s9o4CTpih-XukNpPM4EpC8-VvEgEvCi8ct6oZpA3ZA5vn0i9CsVCIquYkSu5MXsDJG6KU99SR2m6CEC4Z0YPeIJDhVZC1YiJ_CLwBMRitCiFKiDYhwR22GLqer5OOwwnxF_NH66nJjl2CTwfdyZj_sNxAf4vGzZYiImKLaj7nmm4EXz6i_dBCjqczScTFKSnH3NvgzTD8iTTbR"
            hoverColor="lavender-glow"
          />

          {/* Coming Soon Card */}
          <div className="group flex flex-col gap-8">
            <div className="thin-border-frame rounded-[2.5rem] overflow-hidden">
              <div className="aspect-[16/10] bg-plum-dark rounded-[2rem] flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                <span className="heading-serif text-white/10 text-6xl italic group-hover:text-white/20 transition-all">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="heading-serif text-3xl text-white/30">
                    Secret Project
                  </h3>
                  <p className="text-sm text-white/20 mt-1 font-light tracking-wide uppercase">
                    Confidential Branding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>


    </section>
  );
};

// Reusable ProjectCard Component
interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  hoverColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  imageUrl,
  hoverColor,
}) => {
  return (
    <div className="group flex flex-col gap-8">
      <div className="thin-border-frame rounded-[2.5rem] overflow-hidden">
        <div
          className="aspect-[16/10] bg-cover bg-center rounded-[2rem] overflow-hidden transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div
            className={`w-full h-full bg-plum-deep/20 group-hover:bg-transparent transition-colors`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 px-4">
        <div className="flex justify-between items-start">
          <div>
            <h3
              className={`heading-serif text-3xl text-white group-hover:text-${hoverColor} transition-colors`}
            >
              {title}
            </h3>
            <p className="text-sm text-white/40 mt-1 font-light tracking-wide uppercase">
              {subtitle}
            </p>
          </div>
          <span
            className={`material-symbols-outlined text-white/20 group-hover:text-${hoverColor} group-hover:rotate-45 transition-all`}
          >
            arrow_outward
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
