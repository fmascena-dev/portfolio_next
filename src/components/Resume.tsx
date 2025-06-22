"use client";

import { ExperienceTabs } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="min-h-screen bg-gray-950 text-white pt-10">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[300px,1fr] gap-12">
          {/* Sidebar */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-8"
            >
                Por qual motivo devo ser contratado?
            </motion.h2>

            <div className='space-y-2'>
                {ExperienceTabs.map((tab, index) => (
                    <motion.button key={index}>
                        {tab.title}
                    </motion.button>
                ))}
            </div>
          </div>

          {/* Content */}
          <div>

          </div>
        </div>
      </div>
    </section>
  );
}
