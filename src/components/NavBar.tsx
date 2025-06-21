"use client";

import { menuItems } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white"
            >
              fmascena<span className="text-[#00ffd5]">.</span>dev
            </motion.div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6 ">
            {menuItems.map((item, index) => (
              <motion.div key={index}>
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
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Botão Menu Mobile */}
          <button></button>
        </div>
      </div>
    </nav>
  );
}
