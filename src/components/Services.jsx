import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites built with modern technologies and scalable architecture.",
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "Clean, intuitive and visually engaging interfaces focused on user experience.",
  },
  {
    number: "03",
    title: "Frontend Development",
    description:
      "Interactive and responsive applications using React, Next.js and modern frameworks.",
  },
  {
    number: "04",
    title: "Backend Development",
    description:
      "Robust APIs, databases and server-side solutions for scalable applications.",
  },
  {
    number: "05",
    title: "E-Commerce",
    description:
      "Complete online stores with payments, dashboards, authentication and analytics.",
  },
  {
    number: "06",
    title: "SEO Optimization",
    description:
      "Performance optimization and search engine visibility to grow your business.",
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".service-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 120,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 45%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] text-white py-24 md:py-36 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-white/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
       <div className="mb-16 md:mb-24 text-left">
  <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/50">
    Services
  </span>

  <h2 className="mt-4 md:mt-6 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.9]">
    What I Can
    <br />
    Do For You
  </h2>

  <p className="max-w-2xl mt-6 text-white/60 text-sm md:text-base text-left">
    Creating premium digital experiences with modern technologies,
    stunning UI, scalable backend systems and performance-focused
    development.
  </p>
</div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="
                service-card
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-gradient-to-b
                from-white/[0.08]
                to-white/[0.03]
                backdrop-blur-xl
                p-6
                md:p-8
                transition-all
                duration-500
                hover:border-white/30
                hover:-translate-y-2
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
              </div>

              {/* Number */}
              <span className="text-white/30 text-sm">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-2xl md:text-3xl font-bold">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-white/60 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              {/* Footer */}
              <div className="mt-10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-white/40">
                  Explore
                </span>

                <div className="h-11 w-11 md:h-12 md:w-12 rounded-full border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;