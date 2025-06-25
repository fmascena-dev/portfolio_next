"use client";

import { menuItems } from "@/lib/constants";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-[100%] z-50 bg-gray-950 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-300"
            >
              fmascena<span className="text-[#00ffd5]">.</span>dev
            </motion.div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8 ">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={item.path}
                  className={`${
                    pathname === item.path ? "text-[#00ffd5]" : "text-white"
                  } hover:text-[#00ffd5] transition-colors relative group`}
                >
                  {item.title}
                  {pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00ffd5]"></span>
                  )}

                  {pathname !== item.path && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00ffd5] transition-all duration-300 group-hover:w-full"></span>
                  )}
                </Link>
              </motion.div>
            ))}

            <motion.button
              className="bg-[#00ffd5] text-gray-900 py-1 px-4 rounded-full font-bold hover:bg-[#00ffd5]/70 transition-colors duration-300 hover:ease-in-out hover:cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Me Contrate
            </motion.button>
          </div>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden text-[#00ffd5] hover:cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden p-3"
        >
          {menuItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={`block py-1 ${
                pathname === item.path ? "text-[#00ffd5]" : "text-gray-300"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}

          <button className="w-full bg-[#00ffd5] text-gray-900 py-1 px-4 rounded-full font-bold mt-4 hover:bg-[#00ffd5]/70 transition-colors duration-300 hover:ease-in-out hover:cursor-pointer">
            Me Contrate
          </button>
        </motion.div>
      )}
    </nav>
  );
}
