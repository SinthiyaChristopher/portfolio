const projects = [
  {
    title: "E-Commerce App",
    desc: "Built using React and Tailwind."
  },
  {
    title: "Task Manager",
    desc: "Manage daily tasks efficiently."
  },
  {
    title: "Portfolio Website",
    desc: "Personal branding website."
  },
  {
    title: "Mercentile Cart",
    desc: "Shopping App for Steel Utensils"
  },
  {
    title:"Steganography",
    desc:"Hidden text,image,music Reading"
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900 p-6 rounded-3xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-2">
              {project.title}
            </h3>

            <p className="text-slate-300">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;