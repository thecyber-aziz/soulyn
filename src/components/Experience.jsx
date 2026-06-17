import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const experiences = [
  {
    year: "2026",
    role: "Senior Frontend Developer",
    company: "Creative Studio",
    description:
      "Led the development of high-performance web applications and design systems using React, Next.js, and modern frontend technologies.",
  },
  {
    year: "2025",
    role: "Frontend Developer",
    company: "Digital Agency",
    description:
      "Built responsive websites, landing pages, and interactive user interfaces focused on performance and accessibility.",
  },
  {
    year: "2024",
    role: "Freelance Developer",
    company: "Self Employed",
    description:
      "Worked with international clients to design and develop custom websites, e-commerce platforms, and admin dashboards.",
  },
  {
    year: "2023",
    role: "UI / UX Designer",
    company: "Startup Company",
    description:
      "Created modern user experiences, wireframes, prototypes, and scalable design systems for digital products.",
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".timeline-item");

    gsap.from(items, {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section id="experience"
      ref={sectionRef}
      className="bg-[#0a0a0a] text-white py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="text-sm uppercase tracking-[0.35em] text-white/50">
            Experience
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
            Career
            <br />
            Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 top-0 h-full w-px bg-white/10" />

          {experiences.map((item, index) => (
            <div
              key={index}
              className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center mb-20 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className="md:w-1/2 px-12">
                <div className="group p-8 rounded-[28px] border border-white/10 bg-white/[0.03] hover:border-white/20 transition duration-500">
                  <span className="text-sm text-white/40">
                    {item.company}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold">
                    {item.role}
                  </h3>

                  <p className="mt-4 text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-[#0a0a0a]" />

              {/* Year */}
              <div className="md:w-1/2 px-12 mt-6 md:mt-0">
                <h4 className="text-4xl md:text-6xl font-black text-white/20">
                  {item.year}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-300">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;