const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Startup",
    review:
      "Amazing work, modern design and excellent communication throughout the project. The final product exceeded our expectations.",
  },
  {
    name: "Sarah Johnson",
    role: "Founder, SaaS Company",
    review:
      "Professional, creative and highly skilled developer. Delivered everything on time with outstanding quality.",
  },
  {
    name: "Michael Brown",
    role: "Business Owner",
    review:
      "Excellent experience from start to finish. The website looks premium and performs incredibly fast.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/50">
            Testimonials
          </span>

          <h2 className="mt-4 md:mt-6 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95]">
            What Clients
            <br />
            Say About Me
          </h2>

          <p className="mt-6 max-w-2xl text-white/60 text-sm md:text-base leading-relaxed">
            Feedback from clients and businesses I've worked with on
            websites, web applications and digital experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                hover:border-white/20
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/10 blur-3xl rounded-full" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 text-lg">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </div>

              {/* Review */}
              <p className="mt-6 text-white/70 leading-relaxed">
                "{item.review}"
              </p>

              {/* Client */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-white/40">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;