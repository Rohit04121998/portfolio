import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <div className="pb-4" id="projects">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl font-semibold"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-auto flex-wrap items-center py-4 lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="mx-15 mb-6 w-full px-6 py-3 lg:w-1/4"
            >
              <img className="rounded-3xl" src={project.image} alt={project.title}></img>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="mx-10 w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-2xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-lg text-neutral-400">{project.description}</p>
              <div className="mb-4 flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mb-2 mr-2 rounded bg-neutral-900 px-2 py-1 text-lg font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-500"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
