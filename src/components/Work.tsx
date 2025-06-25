"use client";
import { projects } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-10">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* TEXTO */}
            <div className="">
              <div className="text-8xl font-bold text-[#00ffd5]/10">
                {project.number}
              </div>

              <h2 className="text-4xl font-bold mb-4 text-[#00ffd5]">
                {project.title}
              </h2>

              <p className="text-gray-400 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#00ffd5]/10 text-[#00ffd5] rounded-full text-sm font-medium inline-block"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                >
                  <IoArrowRedoOutline size={32} color="#00ffd5" />
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                >
                  <FaGithub size={32} color="#00ffd5" />
                </motion.a>
              </div>
            </div>

            {/* IMAGEM */}
            <motion.div></motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTROLE DO SLIDE */}
      <div className="flex justify-end gap-4 mt-8"></div>
    </section>
  );
}
