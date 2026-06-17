const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "Understanding your goals, requirements and project vision before starting the design process.",
    },
    {
      number: "02",
      title: "Design",
      desc: "Creating modern UI/UX wireframes and visual concepts focused on user experience.",
    },
    {
      number: "03",
      title: "Development",
      desc: "Building fast, scalable and responsive applications using modern technologies.",
    },
    {
      number: "04",
      title: "Launch",
      desc: "Testing, deployment and optimization to ensure a smooth and successful launch.",
    },
  ];

  return (
    <section
      id="process"
      className="py-20 md:py-32 bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/50">
            Process
          </span>

          <h2 className="mt-4 md:mt-6 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95]">
            How I
            <br />
            Work
          </h2>

          <p className="mt-6 max-w-2xl text-white/60 text-sm md:text-base leading-relaxed">
            A structured workflow that transforms ideas into premium
            digital experiences with modern design, development and
            seamless delivery.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {steps.map((step) => (
            <div
              key={step.number}
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
                transition-all
                duration-500
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/10 blur-3xl rounded-full" />
              </div>

              {/* Big Number */}
              <span className="absolute top-4 right-5 text-6xl font-black text-white/[0.05]">
                {step.number}
              </span>

              {/* Step */}
              <span className="text-xs uppercase tracking-widest text-white/40">
                Step {step.number}
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-white/60 leading-relaxed text-sm">
                {step.desc}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-white/40">
                  Process
                </span>

                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:translate-x-1 transition duration-300">
                  →
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Process;