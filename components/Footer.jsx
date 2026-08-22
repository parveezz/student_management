"use client";

import React from "react";
import { FaBookOpen, FaHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
      const pathname = usePathname();

      if (pathname === "/login" || pathname === "/register") {
            return null;
      }

      return (
            <footer className="w-full border-t border-gray-800/80 bg-[#05070e] text-white py-8 px-6 sm:px-10 mt-auto">
                  <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Left Brand Branding */}
                        <div className="flex items-center gap-2">
                              <FaBookOpen className="text-blue-400 text-lg sm:text-xl" />
                              <span className="text-base font-bold tracking-tight text-white">
                                    Book Hub
                              </span>
                        </div>

                        {/* Right Copyright & Tagline (No extra links for now) */}
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                              <span>Crafted with</span>
                              <FaHeart className="text-red-500 text-xs" />
                              <span>&copy; {new Date().getFullYear()} Book Hub Platform. All rights reserved.</span>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;
