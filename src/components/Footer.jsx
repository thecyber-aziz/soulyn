import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

import RobotScene from "./RobotScene";

const Footer = () => {
  return (
    <footer
      className="
      relative
      bg-[var(--bg)]
      text-[var(--text)]
      border-t
      border-[var(--border)]
      overflow-hidden
    "
    >
      {/* 3D Model */}
         <RobotScene />

      {/* Glow */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[200px]
        bg-white/10
        blur-[120px]
      "
      />

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <a href="#home">
            <h2 className="text-3xl md:text-4xl font-black tracking-wider">
              SOULYN.
            </h2>
          </a>

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/thecyber-aziz"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-12 h-12
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--card)]
              flex
              items-center
              justify-center
              text-lg
              hover:scale-110
              transition-all
            "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/aziz03"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-12 h-12
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--card)]
              flex
              items-center
              justify-center
              text-lg
              hover:scale-110
              transition-all
            "
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://instagram.com/aziz-ansari-03"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-12 h-12
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--card)]
              flex
              items-center
              justify-center
              text-lg
              hover:scale-110
              transition-all
            "
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:abdulaziz86723@gmail.com"
              className="
              w-12 h-12
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--card)]
              flex
              items-center
              justify-center
              text-lg
              hover:scale-110
              transition-all
            "
            >
              <HiOutlineMail />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-[var(--border)]" />

        {/* Bottom */}
        <div
          className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          text-sm
        "
        >
          <p>
            © 2026 SOULYN. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="#home"
              className="hover:opacity-70 transition"
            >
              Home
            </a>

            <a
              href="#projects"
              className="hover:opacity-70 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:opacity-70 transition"
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