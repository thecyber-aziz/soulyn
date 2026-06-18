import { useEffect, useRef } from "react";
import { gsap } from "gsap";



const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef([]);
  const textRef = useRef(null);
  const btnRef = useRef(null);

   const handleWhatsApp = () => {
    const message = "Hi Abdul Aziz Ansari, I would like to book a project.";
    window.open(
      `https://wa.me/918920648418?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 120,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
    })
      .from(
        textRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        btnRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

    gsap.to(".blob-1", {
      y: -40,
      x: 30,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".blob-2", {
      y: 40,
      x: -30,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen  flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white pt-24 md:pt-0"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob-1 absolute top-20 left-10 w-40 h-40 md:w-72 md:h-72 bg-white/5 rounded-full blur-[120px]" />

        <div className="blob-2 absolute bottom-20 right-10 w-56 h-56 md:w-96 md:h-96 bg-white/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] md:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Tag */}
        <div className="mb-8 mt-10">
          <span className="px-4 md:px-5 py-2 border border-white/10 rounded-full text-[10px] sm:text-xs md:text-sm tracking-[0.15em] md:tracking-[0.3em] uppercase text-white/60">
            Creative Developer & Designer
          </span>
        </div>

        {/* Heading */}
        <div className="overflow-hidden">
          <h1
            ref={(el) => (titleRef.current[0] = el)}
            className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[9rem] font-black uppercase leading-[0.9]"
          >
            Build
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1
            ref={(el) => (titleRef.current[1] = el)}
            className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[9rem] font-black uppercase leading-[0.9] text-white/70"
          >
            Digital
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1
            ref={(el) => (titleRef.current[2] = el)}
            className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[9rem] font-black uppercase leading-[0.9]"
          >
            Experiences
          </h1>
        </div>

        {/* Description */}
        <p
          ref={textRef}
          className="max-w-xl mx-auto mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-white/60 leading-relaxed px-2"
        >
          I design and develop modern digital experiences with premium
          UI, smooth interactions, and high-performance web
          applications.
        </p>

        {/* Buttons */}
<div
  ref={btnRef}
  className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 md:mt-10"
>

<button
  onClick={handleWhatsApp}
  className="group flex items-center gap-3 px-5 py-2 rounded-full bg-green-700 text-white text-sm md:text-base font-semibold overflow-hidden transition-all duration-300 hover:bg-green-600"
>
  {/* Icon Circle */}
  <div className="relative w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center bg-green-500 rounded-full overflow-hidden">

    {/* Icon 1 */}
    <span
      className="
        absolute inset-0
        flex items-center justify-center
        z-10
        transition-all duration-500
        group-hover:translate-x-full
        group-hover:opacity-0
      "
    >
      <svg
        className="w-5 h-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
        />
        <path d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
      </svg>
    </span>

    {/* Icon 2 */}
    <span
      className="
        absolute inset-0
        flex items-center justify-center
        z-10
        -translate-x-full
        opacity-0
        transition-all duration-500
        group-hover:translate-x-0
        group-hover:opacity-100
      "
    >
      <svg
        className="w-5 h-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
        />
        <path d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
      </svg>
    </span>
  </div>

  <span className="whitespace-nowrap">
    Book via WhatsApp
  </span>
</button>

  {/* Let's Talk Button */}
 <a
  href="#contact"
  className="group px-5 py-2 flex items-center gap-3 rounded-full border border-white/20 text-white text-sm font-semibold overflow-hidden hover:bg-white/5 transition"
>
  <div className="relative w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center bg-white/10 rounded-full overflow-hidden">

    {/* Icon 1 */}
    <span
      className="
        absolute inset-0
        flex items-center justify-center
        transition-transform duration-500
        group-hover:translate-x-full
      "
    >
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path strokeWidth="2" d="M4 6h16v12H4z" />
        <path strokeWidth="2" d="m4 6 8 7 8-7" />
      </svg>
    </span>

    {/* Icon 2 */}
    <span
      className="
        absolute inset-0
        flex items-center justify-center
        -translate-x-full
        transition-transform duration-500
        group-hover:translate-x-0
      "
    >
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path strokeWidth="2" d="M4 6h16v12H4z" />
        <path strokeWidth="2" d="m4 6 8 7 8-7" />
      </svg>
    </span>

  </div>

  <span>Start Your Project</span>
</a>
</div>

        {/* Bottom Info */}
        <div className="mt-12 md:mt-20 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white/40 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-widest">
          <span>Fullstack Developer</span>
          <span>UI / UX Designer</span>
          <span>Freelancer</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/40">
            Scroll
          </span>

          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <div className="w-full h-6 bg-white animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;