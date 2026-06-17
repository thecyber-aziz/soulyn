import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);
  const menuRef = useRef(null);
  const { darkMode, setDarkMode } = useTheme();

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "SERVICES", id: "services" },
    { name: "PROJECTS", id: "projects" },
    { name: "EXPERIENCE", id: "experience" },
    { name: "SKILLS", id: "skills" },
    { name: "CONTACT", id: "contact" },
  ];

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    gsap.to(menuRef.current, {
      x: isOpen ? 0 : "100%",
      duration: 0.6,
      ease: isOpen ? "power4.out" : "power4.inOut",
    });
  }, [isOpen]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5"
      >
        <div className="flex items-center justify-between">
        <a href="#home" className="inline-block">
  <h1 className="text-white text-4xl md:text-4xl font-black tracking-wider">
    SOULYN.
  </h1>
</a>

          <button
  onClick={() => setIsOpen(!isOpen)}
  className="group flex items-center justify-between px-5 text-black bg-white h-12 w-44 hover:w-48 hover:scale-105 rounded-[100px] transition-all duration-500 cursor-pointer"
>
  <div className="relative h-6 w-16 overflow-hidden">
    <span
      className={`absolute left-0 top-0 transition-all duration-300 ${
        isOpen
          ? "-translate-y-6 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      MENU
    </span>

    <span
      className={`absolute left-0 top-0 transition-all duration-300 ${
        isOpen
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
    >
      CLOSE
    </span>
  </div>

  {/* Circle */}
  <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
    
    {/* Rotating Wrapper */}
    <div className="relative w-4 h-4 transition-transform duration-700 group-hover:rotate-180">
      
      <span
        className={`absolute w-1.5 h-1.5 bg-white rounded-full transition-all duration-500 ${
          isOpen
            ? "left-1/2 top-0 -translate-x-1/2"
            : "left-0 top-1/2 -translate-y-1/2"
        }`}
      />

      <span
        className={`absolute w-1.5 h-1.5 bg-white rounded-full transition-all duration-500 ${
          isOpen
            ? "left-1/2 bottom-0 -translate-x-1/2"
            : "right-0 top-1/2 -translate-y-1/2"
        }`}
      />

    </div>

  </div>
</button>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <div
        ref={menuRef}
        className="fixed top-0  right-0 w-full h-screen bg-black text-white z-40 translate-x-full"
      >
        <div className="h-full flex flex-col justify-center items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-5xl md:text-6xl font-black hover:text-white/60 transition-all duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;