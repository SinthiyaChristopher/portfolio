const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Contact Me
      </h2>

      <div className="bg-slate-900 p-8 rounded-3xl">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-slate-800"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-slate-800"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-xl bg-slate-800"
          />

          <button className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-bold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;