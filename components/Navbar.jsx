"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookOpen, FaSearch } from "react-icons/fa";

const Navbar = () => {
      const pathname = usePathname();
      const [isOpen, setIsOpen] = useState(false);

      if (pathname === "/login" || pathname === "/register") {
            return null;
      }

      const handleSearchClick = () => {
            window.dispatchEvent(new CustomEvent("toggle-featured-search"));
      };

      return (
            <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
                  <nav className="mx-auto max-w-7xl px-4 sm:px-6">
                        {/* Top Navbar Header (Grey / White Theme) */}
                        <div className="flex h-12 items-center justify-between gap-4">
                              {/* Logo (Left Side) */}
                              <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className="flex min-w-0 items-center gap-2 text-sm font-semibold text-black sm:text-lg"
                              >
                                    <FaBookOpen className="shrink-0 text-black text-base sm:text-lg" />
                                    <span className="truncate max-w-[180px] sm:max-w-none font-bold tracking-tight">
                                          Book Hub
                                    </span>
                              </Link>

                              {/* Desktop Navigation */}
                              <div className="hidden items-center gap-5 md:flex">
                                    {/* Interactive Search Trigger Button */}
                                    <button
                                          type="button"
                                          onClick={handleSearchClick}
                                          className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50/80 px-2.5 py-1 text-xs sm:text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-100 hover:text-black cursor-pointer"
                                    >
                                          <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white text-gray-600 transition-colors group-hover:border-black group-hover:text-black">
                                                <FaSearch className="text-[10px]" />
                                          </div>
                                          <span>Search</span>
                                    </button>

                                    <span className="h-4 w-px bg-gray-200" aria-hidden="true" />

                                    <Link
                                          href="/login"
                                          className="rounded-md px-3 py-1 text-xs sm:text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
                                    >
                                          Log in
                                    </Link>
                                    <Link
                                          href="/register"
                                          className="rounded-md bg-black px-3.5 py-1 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
                                    >
                                          Register
                                    </Link>
                              </div>

                              {/* Mobile Navigation Icons */}
                              <div className="flex items-center gap-2 md:hidden">
                                    <button
                                          type="button"
                                          onClick={handleSearchClick}
                                          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 active:bg-gray-100 cursor-pointer"
                                          aria-label="Toggle search"
                                    >
                                          <FaSearch className="text-base" />
                                    </button>

                                    <button
                                          type="button"
                                          onClick={() => setIsOpen((prev) => !prev)}
                                          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md p-2 active:bg-gray-100 cursor-pointer"
                                          aria-label="Toggle menu"
                                          aria-expanded={isOpen}
                                    >
                                          <span
                                                className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"
                                                      }`}
                                          />
                                          <span
                                                className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                                                      }`}
                                          />
                                          <span
                                                className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"
                                                      }`}
                                          />
                                    </button>
                              </div>
                        </div>

                        {/* Mobile Navigation Dropdown */}
                        <div
                              className={`grid transition-all duration-300 ease-in-out md:hidden ${isOpen
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0 pointer-events-none"
                                    }`}
                        >
                              <div className="overflow-hidden">
                                    <div className="flex flex-col gap-1 border-t border-gray-100 py-3">
                                          {/* Mobile Auth Actions */}
                                          <div className="flex flex-col gap-2 pt-1">
                                                <Link
                                                      href="/login"
                                                      onClick={() => setIsOpen(false)}
                                                      className="flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-800 transition active:bg-gray-100"
                                                >
                                                      Log in
                                                </Link>
                                                <Link
                                                      href="/register"
                                                      onClick={() => setIsOpen(false)}
                                                      className="flex items-center justify-center rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white transition active:bg-gray-800"
                                                >
                                                      Register
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </nav>
            </header>
      );
};

export default Navbar;