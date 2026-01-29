import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";


export default function Contact() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0d050d] px-6 py-24">
            <div className="relative w-full max-w-[1200px] rounded-[3rem] p-[2px] bg-gradient-to-r from-[#7c3aed] via-[#d8b4fe] to-[#a78bfa] ">
                <div className="rounded-[3rem] bg-gradient-to-br from-[#0d050d]/90 to-[#0d050d]/90 p-10 md:p-20 relative overflow-hidden">

                    {/* Glow blobs */}
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-[120px]" />
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#a78bfa]/10 rounded-full blur-[120px]" />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                        {/* LEFT */}
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-6xl font-serif leading-tight text-white">
                                Let's Create <br />
                                Some{" "}
                                <span className="lavender-glow-effect italic">Magic.</span>
                            </h2>

                            <p className="text-white/60 max-w-md">
                                I am currently accepting select new projects. If you have a vision
                                for something elegant and aesthetic, reach out.
                            </p>

                            <div className="space-y-4 pt-6">
                                <div className="flex items-center gap-3 text-white/80">
                                    <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center">
                                        ✉️
                                    </div>
                                    <span>jagritichopra18@gmail.com</span>
                                </div>

                                <div className="flex items-center gap-3 text-white/80">
                                    <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center">
                                        📍
                                    </div>
                                    <span>India / Remote</span>
                                </div>

                                <div className="flex items-center gap-25 text-white/80">
                                    <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center">
                                        <a
                                            href="https://github.com/JagritiChopra"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#d8b4fe] hover:border-[#d8b4fe]/50 transition"
                                        >
                                            <FaGithub size={25} />
                                        </a>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center">
                                        <a
                                            href="https://linkedin.com/in/yourusername"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#d8b4fe] hover:border-[#d8b4fe]/50 transition"
                                        >
                                            <FaLinkedin size={25} />
                                        </a>

                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center">
                                        <a
                                            href="https://x.com/yourusername"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#d8b4fe] hover:border-[#d8b4fe]/50 transition"
                                        >
                                            <FaXTwitter size={25} />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/80 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full rounded-xl bg-white/5 border border-white/80 px-5 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#a78bfa]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/80 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="hello@example.com"
                                    className="w-full rounded-xl bg-white/5 border border-white/80 px-5 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#a78bfa]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/80 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell me about your dream project..."
                                    className="w-full rounded-xl bg-white/5 border border-white/80 px-5 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#a78bfa]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl border border-white/80 py-3 text-sm uppercase tracking-widest text-white hover:bg-white/10 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
