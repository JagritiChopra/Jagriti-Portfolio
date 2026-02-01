import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Hero", path: "/hero" },
    { name: "Skills", path: "/skills" },
    { name: "Work", path: "/work" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-plum-deep/80 backdrop-blur-lg px-6 lg:px-40 py-5">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3">
          <Link to="/" className="heading-serif text-2xl tracking-tight text-white italic">
            Jagriti Chopra
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <button
              type="button"
              key={item.name}
              onClick={() => navigate(item.path)}
              className="text-sm font-semibold tracking-widest text-white/60 transition-colors hover:text-white/90"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;