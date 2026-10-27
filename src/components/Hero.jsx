const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 text-white"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          Hi, I'm R.Sinthiya Rosalin
        </h1>

        <p className="text-slate-300 text-xl mb-6">
          FullStack Developer
        </p>

        <a
          href="#projects"
          className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;