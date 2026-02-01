import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

// 🔹 Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section className="py-24 px-6 lg:px-40 bg-[#6f623e]" id="contact">
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
            Get In Touch
          </span>
          <h2 className="heading-serif text-6xl text-white italic leading-none">
            Let's Create <span className="lavender-glow-effect">Magic</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* LEFT INFO CARD */}
   <motion.div
  variants={itemVariants}
  className="
  p-10 rounded-[2rem]
  bg-gradient-to-br from-white/15 via-white/5 to-white/0
  backdrop-blur-2xl
  border border-white/20
  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
  hover:shadow-[0_30px_90px_rgba(216,180,254,0.25)]
  transition-all duration-300
  hover:scale-[1.035]
  relative overflow-hidden
"
>
  <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-6">
    Every project is a story waiting to be told. I’m open to a few select collaborations — if you have a vision that’s elegant, impactful, and unique, let’s start writing that story together.
  </p>

  <div className="space-y-4">
    <div className="flex items-center gap-3 text-white/80">
      <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
        ✉️
      </div>
      <span>jagritichopra18@gmail.com</span>
    </div>

    <div className="flex items-center gap-3 text-white/80">
      <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
        📍
      </div>
      <span>India / Remote</span>
    </div>

    <div className="flex items-center gap-6 mt-4 text-white/80">
      <a
        href="https://github.com/JagritiChopra"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-[#d8b4fe] hover:border-[#d8b4fe]/50 transition"
      >
        <FaGithub size={25} />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-[#d8b4fe] hover:border-[#d8b4fe]/50 transition"
      >
        <FaLinkedin size={25} />
      </a>
      <a
        href="https://x.com/yourusername"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-[#d8b4fe] hover:border-[#d8b4fe]/50 transition"
      >
        <FaXTwitter size={25} />
      </a>
    </div>
  </div>
</motion.div>


          {/* RIGHT FORM CARD */}
          <motion.form
            variants={itemVariants}
          className="
  p-10 rounded-[2rem]
  bg-gradient-to-br from-white/15 via-white/5 to-white/0
  backdrop-blur-2xl
  border border-white/20
  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
  hover:shadow-[0_30px_90px_rgba(216,180,254,0.25)]
  transition-all duration-300
  hover:scale-[1.035]
  relative overflow-hidden
"

          >
            <InputField label="Name" type="text" placeholder="Your Name" />
            <InputField label="Email" type="email" placeholder="hello@example.com" />
            <InputField label="Message" type="textarea" placeholder="Tell me about your dream project..." />

            <button
              type="submit"
              className="w-full rounded-xl border border-white/30 py-3 text-sm uppercase tracking-widest text-white hover:bg-white/10 transition"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

// 🔹 Input Field Component
function InputField({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
}) {
  const commonClasses =
    "w-full rounded-xl bg-white/5 border border-white/30 px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#a78bfa]";

  if (type === "textarea") {
    return (
      <div>
        <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">{label}</label>
        <textarea rows={4} placeholder={placeholder} className={commonClasses} />
      </div>
    );
  }
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">{label}</label>
      <input type={type} placeholder={placeholder} className={commonClasses} />
    </div>
  );
}
