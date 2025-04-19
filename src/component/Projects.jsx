import { projects } from "./Data";

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-gray-800 py-20 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) =>index<4 && (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 text-left"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 line-clamp-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
        
      </div>
      <div className="text-center mt-10 bg-gray-800 hover:bg-gray-700 p-2 rounded-lg shadow-md">
        <a href="/allproject" className="text-white  ">View More Projects</a>
      </div>

    </section>
  );
};

export default Projects;
