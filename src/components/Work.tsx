"use client";
import { projects } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
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
    <section className="min-h-screen bg-gray-950 text-white pt-8 flex items-center justify-center">
      {/* Container principal para o conteúdo e as setas */}
      <div className="relative max-w-4xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-center">
        {/* Setas para telas grandes (ao lado do conteúdo) - visíveis apenas em lg e maiores */}
        <motion.button
          onClick={prevProject}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden lg:flex absolute -left-16 z-10 w-12 h-12 bg-[#00ffd5]/30 rounded-full items-center justify-center text-[#00ffd5] hover:bg-[#00ffd5]/10 transition-colors focus:outline-none"
        >
          <ChevronLeft size={32} />
        </motion.button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center p-2 rounded-lg"
          >
            {/* TEXTO */}
            <div className="">
              <div className="text-7xl font-bold text-[#00ffd5]/10">
                {project.number}
              </div>

              <h2 className="text-3xl font-bold mb-3 text-[#00ffd5]">
                {project.title}
              </h2>

              <p className="text-gray-400 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-[#00ffd5]/10 text-[#00ffd5] rounded-full text-xs inline-block"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ y: -3 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#00ffd5]/10 transition-colors"
                >
                  <IoArrowRedoOutline size={28} color="#00ffd5" />
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ y: -3 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#00ffd5]/10 transition-colors"
                >
                  <FaGithub size={28} color="#00ffd5" />
                </motion.a>
              </div>
            </div>

            {/* IMAGEM */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[5/4] rounded-xl overflow-hidden bg-[#00ffd5]/10 "
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover border"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Setas para telas grandes (ao lado do conteúdo) - visíveis apenas em lg e maiores */}
        <motion.button
          onClick={nextProject}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden lg:flex absolute -right-16 z-10 w-12 h-12 bg-[#00ffd5]/30 rounded-full items-center justify-center text-[#00ffd5] hover:bg-[#00ffd5]/10 transition-colors focus:outline-none"
        >
          <ChevronRight size={32} />
        </motion.button>

        {/* CONTROLE DO SLIDE (mobile e md) - visível em md e menores, abaixo do conteúdo */}
        <div className="flex justify-center mt-8 gap-4 md:flex lg:hidden">
          {" "}
          {/* visível de md para baixo, oculto em lg */}
          <motion.button
            onClick={prevProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-[#00ffd5]/30 rounded-full flex items-center justify-center text-[#00ffd5] hover:bg-[#00ffd5]/10 transition-colors focus:outline-none"
          >
            <ChevronLeft size={32} />
          </motion.button>
          <motion.button
            onClick={nextProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-[#00ffd5]/30 rounded-full flex items-center justify-center text-[#00ffd5] hover:bg-[#00ffd5]/10 transition-colors focus:outline-none"
          >
            <ChevronRight size={32} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
