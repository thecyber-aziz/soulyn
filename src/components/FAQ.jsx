import { useState } from "react";

const faqData = [
  {
    q: "How long does a project take?",
    a: "Most projects take between 1–4 weeks depending on complexity, features and requirements.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. I provide post-launch support, maintenance and future updates when needed.",
  },
  {
    q: "What technologies do you use?",
    a: "I work with React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, GSAP and modern web technologies.",
  },
  {
    q: "Do you build full-stack applications?",
    a: "Absolutely. I develop complete full-stack solutions including frontend, backend, authentication, APIs and databases.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. I can redesign your existing website with a modern UI/UX while improving performance and responsiveness.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="py-20 md:py-32 bg-[#0a0a0a] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/50">
            FAQ
          </span>

          <h2 className="mt-4 md:mt-6 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95]">
            Frequently Asked
            <br />
            Questions
          </h2>

          <p className="mt-6 max-w-2xl text-white/60 text-sm md:text-base leading-relaxed">
            Everything you need to know about working with me,
            project timelines, technologies and support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">

          {faqData.map((item, i) => (
            <div
              key={i}
              className="
                group
                overflow-hidden
                rounded-[24px]
                border
                border-white/10
                bg-white/[0.03]
                hover:border-white/20
                transition-all
                duration-300
              "
            >
              <button
                onClick={() =>
                  setOpen(open === i ? null : i)
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  text-left
                  p-6
                  md:p-8
                "
              >
                <span className="text-lg md:text-xl font-bold">
                  {item.q}
                </span>

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-xl
                    transition-all
                    duration-300
                  "
                >
                  {open === i ? "−" : "+"}
                </div>
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    open === i
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-white/60 leading-relaxed">
                    {item.a}
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

export default FAQ;