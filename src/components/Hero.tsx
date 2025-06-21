"use client";

import { socialLinks } from "@/lib/constants";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import meuAvatar from "../assets/my_avatar.png"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-800 text-white pt-6">
      <div className="max-w-5xl mx-auto px-6 py-12 flex gap-14">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gray-400 mb-4 block text-center lg:text-left">
              Desenvolvedor FullStack
            </span>
            <h1 className="text-5xl font-bold mb-4 text-center lg:text-left">
              Olá, Eu sou
              <span className="block text-[#2DD4B8] mt-2">Felipe Mascena</span>
            </h1>

            <p className="text-gray-400 mb-8 text-center lg:text-left">
              Especializado em criar experiências digitais elegantes e
              profissionais em diversas linguagens de programação e tecnologias.
            </p>

            <div className="flex flex-col items-center lg:flex-row gap-4">
              <motion.a
                href="/curriculo.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className=" w-full lg:w-auto bg-[#2DD4B8] text-gray-900 py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#5EEDCD] transition-colors duration-300"
              >
                <Download size={20} />
                Download
              </motion.a>

              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:text-[#2DD4B8] hover:border-[#2DD4B8] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
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
          <div className="w-[350px] h-[450px] relative mx-auto">
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
              className="absolute inset-0 rounded-full border-2 border-[#2DD4B8] shadow shadow-[#2DD4B8]"
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
              className="absolute inset-[-5px] rounded-full border-2 border-[#2DD4B8]/30"
            />

            <Image
              src={meuAvatar}
              alt="My Avatar"
              fill
              className="object-cover rounded-full p-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
