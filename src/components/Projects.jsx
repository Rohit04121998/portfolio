import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaMedium } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl bg-transparent p-6 shadow-lg"
          >
            <div className="mb-4 h-52 w-full">
              <img
                className="h-full w-full rounded-3xl object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="flex-grow">
              <h6 className="mb-2 text-2xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-lg text-neutral-400">{project.description}</p>
            </div>
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
            <div className="flex flex-col">
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
              {project.tableau && (
                <a
                  href={project.tableau}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center text-purple-500"
                >
                  <SiTableau className="mr-2" /> View on Tableau
                </a>
              )}
              {project.medium && (
                <a
                  href={project.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center text-purple-500"
                >
                  <FaMedium className="mr-2" /> View blog
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
