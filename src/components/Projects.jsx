import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Featured() {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      thumbnail: "/voris.webp",
      title: "Voris",
      desc: "Voris - Your Personal AI Assistant | MERN | GEMINI",
      url: "https://voris-ai.vercel.app",
      date: "Apr 2026 - Apr 2026",
    },
    {
      thumbnail: "/larder.webp",
      title: "The Larder House Restaurant",
      desc: "Restaurant | MERN",
      url: "https://thelarderhouse.vercel.app",
      date: "Jun 2026 - Jun 2026",
    },
    {
      thumbnail: "/lelin-projects.png",
      title: "Lelin",
      desc: "E-commerce with admin panel, SEO | ADS | MERN",
      url: "https://lelin.vercel.app",
      date: "Mar 2025 - Apr 2025",
    },
    {
      thumbnail: "/chemist.webp",
      title: "Chemist-Shop",
      desc: "Medical Medicine - Admin panel | MERN",
      url: "https://chemist-shop.vercel.app/",
      date: "Mar 2026 - Apr 2026",
    },
    {
      thumbnail: "/webnexa.webp",
      title: "WebNexa",
      desc: "Digital Marketing | MERN",
      url: "https://webnexa-six.vercel.app/",
      date: "Aug 2025 - Oct 2025",
    },
    {
      thumbnail: "/expense.webp",
      title: "Expense Tracker",
      desc: "Daily Expenses Tracker | MERN",
      url: "https://expense-1.vercel.app/",
      date: "Jan 2026 - Feb 2026",
    },
    {
      thumbnail: "/nike-shoes.jpg",
      title: "Nike Shoes",
      desc: "Frontend Project | React | GSAP | UI/UX",
      url: "#",
      date: "Nov 2024 - Dec 2024",
    },
    {
      thumbnail: "/gym.jpg",
      title: "Gym Website",
      desc: "Frontend Project | React | GSAP | UI/UX",
      url: "#",
      date: "Jun 2024 - Jul 2024",
    },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");

    gsap.fromTo(
      cards,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#0a0a0a] text-white py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-left">
          <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/50">
            Projects
          </span>

          <h2 className="mt-4 md:mt-6 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95]">
            Featured
            <br />
            Projects
          </h2>

          <p className="mt-6 max-w-2xl text-white/60 text-sm md:text-base leading-relaxed">
            A collection of selected projects focused on performance,
            user experience, modern design and scalable development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-700">
          {(showAll ? projects : projects.slice(0, 3)).map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] h-[240px] md:h-[280px]">
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                  <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/10 blur-3xl rounded-full" />
                </div>

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 group-hover:bg-black/40 transition duration-500" />
              </div>

              {/* Content */}
              <div className="mt-4">
                <div className="flex justify-between items-center gap-4">
                  <h3 className="font-bold text-lg md:text-xl">
                    {item.title}
                  </h3>

                  <span className="text-[10px] md:text-xs text-white/40 whitespace-nowrap">
                    {item.date}
                  </span>
                </div>

                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-white/40">
                    View Project
                  </span>

                  <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:translate-x-1 transition duration-300">
                    →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-300"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      </div>
    </section>
  );
}