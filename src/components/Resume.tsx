"use client";

import { ExperienceTabs, resumeData } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
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
                className=""
              >
                <span className="text-[#00ffd5] text-sm font-medium bg-[#00ffd5]/10 rounded-lg w-fit px-3 py-1">
                  {experience.period}
                </span>

                <h3 className="text-xl text-[#00ffd5] font-bold mt-2">
                  {experience.title}
                </h3>

                <p className="mt-1 font-bold">{experience.company}</p>
                <p className="text-gray-400 mt-2">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        );
      case "education":
        return "education";
      case "skills":
        return "skills";
      case "about":
        return "about";
      default:
        return "";
    }
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-10">
      <div className="max-w-5xl mx-auto px-2 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sidebar */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-8"
            >
              Por qual motivo me contratar?
            </motion.h2>

            <div className="space-y-3">
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
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-8"
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
