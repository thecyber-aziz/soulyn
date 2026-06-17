import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.querySelectorAll(".reveal"), {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section id="about"
      ref={sectionRef}
      className="bg-[#0a0a0a] text-white py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="reveal text-sm uppercase tracking-[0.3em] text-white/50">
            About Me
          </span>

          <h2 className="reveal mt-6 text-5xl md:text-7xl font-black leading-tight">
            Creating Digital
            <br />
            Products That Matter.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal">
            <div className="relative overflow-hidden rounded-[40px]">
              <img
                src="/me.webp"
                alt="Profile"
                className="w-full h-[550px] object-cover"
              />

              <div  />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="reveal text-lg text-white/60 leading-relaxed">
              I specialize in building modern websites, web applications,
              and digital experiences that combine aesthetics with
              performance.
            </p>

            <p className="reveal mt-6 text-lg text-white/60 leading-relaxed">
              My focus is creating scalable products with beautiful UI,
              smooth animations, and excellent user experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="reveal">
                <h3 className="text-5xl font-black">50+</h3>
                <p className="mt-2 text-white/50">Projects Completed</p>
              </div>

              <div className="reveal">
                <h3 className="text-5xl font-black">5+</h3>
                <p className="mt-2 text-white/50">Years Experience</p>
              </div>

              <div className="reveal">
                <h3 className="text-5xl font-black">30+</h3>
                <p className="mt-2 text-white/50">Happy Clients</p>
              </div>

              <div className="reveal">
                <h3 className="text-5xl font-black">100%</h3>
                <p className="mt-2 text-white/50">Client Satisfaction</p>
              </div>
            </div>

            <button className="reveal mt-12 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;