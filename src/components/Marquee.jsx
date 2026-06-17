const skills = [
  "REACTJS",
  "MERN STACK",
  "REACT NATIVE",
  "GSAP",
  "UI/UX",
  "DESIGN",
  "SOFTWARE DEVELOPMENT",
  "DIGITAL MARKETING",
];

const Marquee = () => {
  return (
    <section className="overflow-hidden py-10 bg-white text-black">
      <div className="flex w-max animate-marquee">
        {[...skills, ...skills, ...skills].map((item, index) => (
          <span
            key={index}
            className="text-4xl md:text-5xl font-black mx-6 whitespace-nowrap"
          >
            {item} •
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;