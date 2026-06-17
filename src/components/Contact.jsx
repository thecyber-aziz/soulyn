import { useState } from "react";

const Contact = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-28 md:py-32 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20 text-left">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/50">
            Contact
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95]">
            Get in touch
            <br />
            with us now.
          </h2>

          <p className="mt-6 max-w-2xl text-white/60 text-sm md:text-base leading-relaxed">
            Have an idea, project, or collaboration in mind? Let’s build
            something amazing together.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto w-full bg-white text-black rounded-[32px] p-6 md:p-10 transition-all duration-500">

          {/* Before Click */}
          {!openForm && (
            <div className="flex flex-col items-center justify-center py-10 md:py-14">

              <p className="text-2xl md:text-4xl font-black text-center leading-snug">
                Hey there! 👋
                <br />
                How can we assist you today?
              </p>

              <p className="mt-4 text-center text-gray-500 max-w-lg">
                Whether you need a website, web app, mobile application,
                UI/UX design, SEO or a complete digital solution,
                we'd love to hear about your project.
              </p>

              <button
                onClick={() => setOpenForm(true)}
                className="mt-8 px-7 py-3 bg-black text-white rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                Say Hi 👋
              </button>
            </div>
          )}

          {/* Form */}
          {openForm && (
            <form className="space-y-4">

              <div className="mb-8 text-center">
                <h3 className="text-2xl md:text-3xl font-black">
                  Say hi 👋
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Give us more deets, please!
                </p>
              </div>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-200 rounded-xl bg-gray-100 outline-none focus:border-black transition"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-200 rounded-xl bg-gray-100 outline-none focus:border-black transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border border-gray-200 rounded-xl bg-gray-100 outline-none focus:border-black transition"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full p-4 border border-gray-200 rounded-xl bg-gray-100 outline-none focus:border-black transition resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 bg-black text-white rounded-full font-semibold hover:scale-[1.02] transition-all duration-300"
              >
                Send Message 🚀
              </button>

              <button
                type="button"
                onClick={() => setOpenForm(false)}
                className="w-full text-sm text-gray-500 hover:text-black transition"
              >
                ← Back
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default Contact;