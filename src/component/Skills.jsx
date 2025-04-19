import { skills } from "./Data";

const Skills = () => {
  return (
    <section id="skills" className="bg-white text-gray-800 py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          My Skills
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Here are some of the technologies and frameworks I work with:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm md:text-base font-semibold shadow hover:bg-gray-300 transition space-x-2"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
