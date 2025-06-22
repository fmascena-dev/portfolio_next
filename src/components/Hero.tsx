"use client";

import { socialLinks, stats } from "@/lib/constants";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import meuAvatar from "../assets/my_avatar.png";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col bg-gray-950/80 text-white pt-20 lg:pt-8">
      <div className="flex flex-col mx-auto px-6 gap-10 lg:gap-5 lg:pt-8">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row gap-14">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gray-300 mb-4 block text-center lg:text-left">
                Desenvolvedor FullStack
              </span>
              <h1 className="text-5xl font-bold mb-4 text-center lg:text-left">
                Olá, Eu sou
                <span className="block text-[#00ffd5] mt-2">
                  Felipe Mascena
                </span>
              </h1>

              <p className="text-gray-300 mb-8 text-center lg:text-left">
                Especializado em criar experiências digitais elegantes e
                profissionais em diversas linguagens de programação e
                tecnologias.
              </p>

              <div className="flex flex-col items-center lg:flex-row gap-4">
                <motion.a
                  href="/Cv-Felipe.Seabra.pdf"
                  download
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className=" w-full lg:w-auto bg-[#00ffd5] text-gray-900 py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#00ffd5]/80 transition-colors duration-300 hover:ease-in-out font-bold"
                >
                  <Download size={20} />
                  Download
                </motion.a>

                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      title={social.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:text-[#00ffd5] hover:border-[#00ffd5] transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 1.3 }}
                      transition={{ duration: 0.3 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="relative flex-1"
          >
            <div className="md:block w-[350px] h-[430px] relative mx-auto">
              <motion.div
                // animate={{
                //   rotate: 360,
                //   scale: [1, 1.05, 1],
                // }}
                // transition={{
                //   duration: 8,
                //   ease: "linear",
                //   repeat: Infinity,
                // }}
                className="absolute inset-0 rounded-full border-2 border-[#00ffd5] shadow shadow-[#00ffd5]"
              />

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute inset-[-5px] rounded-full border-2 border-[#00ffd5]/30"
              />

              <Image
                src={meuAvatar}
                alt="My Avatar"
                fill
                className="order-1 md:order-2 lg:order-2 md:block object-cover rounded-full p-2"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <h2 className="text-4xl font-bold text-[#00ffd5]">
                <CountUp value={Number(stat.number)} />
              </h2>
              <p>
                <span className="text-gray-300 text-sm">{stat.text}</span>
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
