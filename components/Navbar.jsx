"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
            <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
                  <nav className="mx-auto max-w-7xl px-4 sm:px-6">
                        {/* Top Navbar */}
                        <div className="flex h-16 items-center justify-between">
                              {/* Logo */}
                              <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className="flex min-w-0 items-center gap-2 text-base font-semibold text-black sm:text-xl"
                              >
                                    <FaBookOpen className="shrink-0 text-black text-lg sm:text-xl" />
                                    <span className="truncate max-w-[200px] sm:max-w-none">
                                          Book Management
                                    </span>
                              </Link>

                              {/* Desktop Navigation */}
                              <div className="hidden items-center gap-8 md:flex">
                                    <Link
                                          href="/"
                                          className="text-base font-semibold tracking-wide text-black transition hover:text-gray-500"
                                    >
                                          Home
                                    </Link>
                                    <Link
                                          href="/search"
                                          className="text-base font-semibold tracking-wide text-black transition hover:text-gray-500"
                                    >
                                          Search
                                    </Link>
                              </div>

                              {/* Mobile 3-Bar Button */}
                              <button
                                    type="button"
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md p-2 active:bg-gray-100 md:hidden"
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

                        {/* Mobile Navigation Dropdown */}
                        <div
                              className={`grid transition-all duration-300 ease-in-out md:hidden ${isOpen
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0 pointer-events-none"
                                    }`}
                        >
                              <div className="overflow-hidden">
                                    <div className="flex flex-col gap-1 border-t border-gray-100 py-3">
                                          <Link
                                                href="/"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center rounded-lg px-4 py-3 text-base font-semibold text-black active:bg-gray-100"
                                          >
                                                Home
                                          </Link>
                                          <Link
                                                href="/search"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center rounded-lg px-4 py-3 text-base font-semibold text-black active:bg-gray-100"
                                          >
                                                Search
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </nav>
            </header>
      );
};

export default Navbar;