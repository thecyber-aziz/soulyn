import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as SiIcons from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Icon = (Comp, color) =>
  Comp ? <Comp color={color} /> : <span>🎯</span>;

const skills = {
  Frontend: [
    { name: "HTML", icon: Icon(SiIcons.SiHtml5, "#e34c26") },
    { name: "CSS", icon: Icon(SiIcons.SiCss3, "#264de4") },
    { name: "JavaScript", icon: Icon(SiIcons.SiJavascript, "#f7df1e") },
    { name: "React", icon: Icon(SiIcons.SiReact, "#61dbfb") },
    { name: "Vue", icon: Icon(SiIcons.SiVuedotjs, "#42B883") },
    { name: "Tailwind", icon: Icon(SiIcons.SiTailwindcss, "#38bdf8") },
    { name: "Redux", icon: Icon(SiIcons.SiRedux, "#764abc") },
  ],

  Backend: [
    { name: "Node.js", icon: Icon(SiIcons.SiNodedotjs, "#3c873a") },
    { name: "Express", icon: Icon(SiIcons.SiExpress) },
    { name: "MongoDB", icon: Icon(SiIcons.SiMongodb, "#47a248") },
    { name: "Socket.IO", icon: Icon(SiIcons.SiSocketdotio) },
    { name: "JWT", icon: Icon(SiIcons.SiJsonwebtokens) },
  ],

  Tools: [
    { name: "Git", icon: Icon(SiIcons.SiGit, "#f1502f") },
    { name: "GitHub", icon: Icon(SiIcons.SiGithub) },
    { name: "Postman", icon: Icon(SiIcons.SiPostman, "#ff6c37") },
    { name: "Vercel", icon: Icon(SiIcons.SiVercel) },
    { name: "Firebase", icon: Icon(SiIcons.SiFirebase, "#ffca28") },
  ],
};

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".skill-item");

    gsap.from(items, {
      y: 60,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="skills"
      ref={sectionRef}
      className="bg-[#0a0a0a] text-white py-28 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-20">

        <h1 className="text-5xl md:text-7xl font-black">
          Skills
        </h1>

        {Object.entries(skills).map(([cat, list]) => {

          // 🔥 direction control
          const direction =
            cat === "Backend"
              ? "animate-[marqueeRight_12s_linear_infinite]"
              : "animate-[marqueeLeft_12s_linear_infinite]";

          return (
            <div key={cat}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white/80">
                {cat}
              </h2>

              <div className="overflow-hidden">
                <div className={`flex gap-10 whitespace-nowrap ${direction}`}>

                  {[...list, ...list].map((item, i) => (
                    <div
                      key={i}
                      className="skill-item flex flex-col items-center min-w-[90px]"
                    >
                      <div className="text-4xl hover:scale-125 transition">
                        {item.icon}
                      </div>
                      <span className="text-xs mt-2 text-white/60">
                        {item.name}
                      </span>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes marqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </section>
  );
}