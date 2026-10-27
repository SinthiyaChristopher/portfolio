const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node JS",
  "Phython",
  "My SQL",
  "PHP",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-900 p-6 rounded-2xl text-center hover:-translate-y-2 transition"
          >
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;