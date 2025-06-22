"use client";

import { services } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="min-h-screen bg-gray-950/80 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="group relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#00ffd5] transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-4xl font-bold text-[#00ffd5]/30 hover:text-[#00ffd5]/80 transition-all">
                {service.number}
              </div>
              
              <div className="text-[#00ffd5] mb-6 p-3 bg-[#00ffd5]/10 rounded-lg w-fit">{service.icon}</div>

              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, index) => (
                  <span key={index} className="px-3 py-1 text-sm bg-[#00ffd5]/10 text-[#00ffd5] rounded-full">
                    {feature}
                  </span>
                ))}
              </div>

              <div className='absolute bottom-0 left-0 h-1 bg-[#00ffd5]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
