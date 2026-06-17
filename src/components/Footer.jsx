import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/10 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-white/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <a href="#home">
            <h2 className="text-3xl md:text-4xl font-black tracking-wider">
              SOULYN.
            </h2>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/thecyber-aziz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03]
              flex items-center justify-center text-lg
              hover:bg-white hover:text-black hover:scale-110
              transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/aziz03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03]
              flex items-center justify-center text-lg
              hover:bg-white hover:text-black hover:scale-110
              transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://instagram.com/aziz-ansari-03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03]
              flex items-center justify-center text-lg
              hover:bg-white hover:text-black hover:scale-110
              transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:@gmail.com"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03]
              flex items-center justify-center text-lg
              hover:bg-white hover:text-black hover:scale-110
              transition-all duration-300"
            >
              <HiOutlineMail />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">

          <p>
            © 2026 SOULYN. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#projects"
              className="hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;