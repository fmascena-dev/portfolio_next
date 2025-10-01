"use client";

import { ExperienceTabs, resumeData, skillsData } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="grid md:grid-cols-2 gap-8 px-2">
            {resumeData.experience.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#00ffd5] before:rounded-full"
              >
                <span className="text-[#00ffd5] text-sm font-medium bg-[#00ffd5]/10 rounded-lg w-fit px-3 py-1">
                  {experience.period}
                </span>

                <h3 className="text-xl font-bold mt-2">{experience.title}</h3>

                <p className="mt-1 text-sm font-bold text-[#00ffd5]/80">
                  {experience.company}
                </p>
                <p className="text-gray-400 mt-2">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        );

      case "education":
        return (
          <div className="grid md:grid-cols-2 gap-8 px-2">
            {resumeData.education.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#00ffd5] before:rounded-full"
              >
                <span className="text-[#00ffd5] text-sm font-medium bg-[#00ffd5]/10 rounded-lg w-fit px-3 py-1">
                  {education.period}
                </span>

                <h3 className="text-xl font-bold mt-2">{education.title}</h3>

                <p className="mt-1 text-sm font-bold text-[#00ffd5]/80">
                  {education.institution}
                </p>
                <p className="text-gray-400 mt-2">{education.description}</p>
              </motion.div>
            ))}
          </div>
        );
      case "skills":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-8 gap-4 mt-10 lg:mt-12">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#00ffd5]/10 p-8 rounded-xl border border-[#00ffd5]/20 hover:border-[#00ffd5] transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    title={skill.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute bottom-0 left-0 bg-[#00ffd5]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
              </motion.div>
            ))}
          </div>
        );
      case "about":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="p-4 rounded-xl border border-[#00ffd5]/30 hover:border-[#00ffd5]">
              <h3 className="text-xl font-bold mb-4">Sobre mim</h3>

              <p className="text-[#00ffd5] text-sm">
                {resumeData.about.description}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#00ffd5]/30 hover:border-[#00ffd5]">
              <h3 className="text-xl font-bold mb-4">Interesses</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.about.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-[#00ffd5] rounded-full text-sm border border-[#00ffd5] cursor-pointer hover:bg-[#00ffd5]/50 transition-colors duration-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      default:
        return "";
    }
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-10">
      <div className="max-w-5xl mx-auto px-2 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] lg:gap-8">
          {/* Sidebar */}
          <div className="space-y-3 mr-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-bold mb-9"
            >
              Por qual motivo me contratar?
            </motion.h2>

            <div className="space-y-3 mb-8">
              {ExperienceTabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full p-4 text-left text-lg rounded-lg transition-colors ${
                    tab.id === activeTab
                      ? "bg-[#00ffd5]/90 text-gray-900"
                      : "bg-gray-900 text-gray-400 border border-gray-900 hover:text-[#00ffd5] hover:border hover:border-[#00ffd5]"
                  }`}
                >
                  {tab.title}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-bold mb-8"
            >
              <span className="text-[#00ffd5] font-bold">|</span>
              {ExperienceTabs.find((tab) => tab.id === activeTab)?.title}
            </motion.h2>

            <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
