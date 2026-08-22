"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaUsers, FaSearch, FaTimes, FaStar } from "react-icons/fa";

const HeroLanding = () => {
      const [isSearchOpen, setIsSearchOpen] = useState(false);
      const [searchQuery, setSearchQuery] = useState("");
      const searchInputRef = useRef(null);
      const searchContainerRef = useRef(null);

      // Event listener to toggle search from Navbar button
      useEffect(() => {
            const handleToggle = () => {
                  setIsSearchOpen((prev) => {
                        const nextState = !prev;
                        if (nextState) {
                              setTimeout(() => {
                                    searchInputRef.current?.focus();
                              }, 100);
                        }
                        return nextState;
                  });
            };

            window.addEventListener("toggle-featured-search", handleToggle);
            return () => window.removeEventListener("toggle-featured-search", handleToggle);
      }, []);

      // Auto hide search input when clicking outside the search component
      useEffect(() => {
            const handleClickOutside = (event) => {
                  if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                        setIsSearchOpen(false);
                  }
            };

            if (isSearchOpen) {
                  document.addEventListener("mousedown", handleClickOutside);
            }

            return () => {
                  document.removeEventListener("mousedown", handleClickOutside);
            };
      }, [isSearchOpen]);

      return (
            <section className="relative w-full overflow-hidden bg-[#080b14] text-white px-6 py-12 pt-16 sm:px-10 sm:py-16 border-b border-gray-800/80">
                  {/* Subtle Grid / Glow Background Overlays */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500/15 blur-[120px]" />
                  <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px]" />

                  {/* Drop-down from top Search Container inside top Hero component */}
                  <div
                        className={`absolute top-16 left-0 z-30 w-full px-6 transition-all duration-300 ease-out ${isSearchOpen
                              ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
                              : "-translate-y-10 opacity-0 scale-95 pointer-events-none"
                              }`}
                  >
                        <div ref={searchContainerRef} className="mx-auto flex w-full sm:w-[75%] items-center justify-center">
                              <div className="relative flex w-full items-center overflow-hidden rounded-2xl border border-gray-300 bg-white p-1 shadow-2xl">
                                    <FaSearch className="pointer-events-none absolute inset-y-0 left-0 my-auto ml-4 text-gray-500 text-base" />
                                    <input
                                          ref={searchInputRef}
                                          type="text"
                                          value={searchQuery}
                                          onChange={(e) => setSearchQuery(e.target.value)}
                                          placeholder="Search books, authors, or categories..."
                                          className="w-full border-r border-gray-300 bg-white py-3.5 pl-12 pr-4 text-sm font-medium text-black placeholder-gray-500 outline-none"
                                    />
                                    <button
                                          type="button"
                                          onClick={() => setIsSearchOpen(false)}
                                          className="flex h-10 w-12 shrink-0 items-center justify-center text-gray-500 transition-colors hover:bg-gray-100 hover:text-black cursor-pointer"
                                          aria-label="Close search"
                                    >
                                          <FaTimes className="text-base" />
                                    </button>
                              </div>
                        </div>
                  </div>

                  <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">

                        {/* ================= LEFT CONTENT ================= */}
                        <div className="flex flex-col justify-between lg:col-span-7">

                              {/* Subtitle tag with two react-icons stars with shine effect */}
                              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-300 mb-6">
                                    <div className="flex items-center gap-1 text-yellow-400 animate-pulse">
                                          <FaStar className="text-xs drop-shadow-[0_0_10px_rgba(250,204,21,1)] text-yellow-300" />
                                          <FaStar className="text-[10px] drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] text-yellow-400" />
                                    </div>
                                    <span className="tracking-wide text-blue-200">Explore endless worlds through stories.</span>
                              </div>

                              {/* Main Headline */}
                              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05] uppercase">
                                    DISCOVER <br />
                                    NEW <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-200">CHAPTERS</span>
                              </h1>

                              {/* Lime Pill Action Button */}
                              <div className="mt-8">
                                    <button className="inline-flex items-center gap-2 rounded-full bg-[#b8f53c] px-7 py-3 text-sm font-extrabold text-black shadow-lg shadow-[#b8f53c]/20 transition-all hover:bg-[#a5e02f] hover:scale-105 active:scale-95 cursor-pointer">
                                          <span>Find a book</span>
                                    </button>
                              </div>

                              {/* MOBILE ONLY: IMAGE PLACED RIGHT AFTER FIND A BOOK BUTTON */}
                              <div className="block lg:hidden mt-8 relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-blue-950 to-indigo-950 shadow-2xl">
                                    <Image
                                          src="/reader-girl.jpg"
                                          alt="Reader discovering new books"
                                          fill
                                          sizes="(max-width: 1024px) 100vw, 50vw"
                                          className="object-cover"
                                          priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a112f] via-transparent to-transparent opacity-80" />
                                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/60 p-4 backdrop-blur-md border border-white/10">
                                          <p className="text-xs font-bold text-white">Reading gives us a place to go when we have to stay where we are.</p>
                                    </div>
                              </div>

                              {/* Bottom Widgets Row */}
                              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">

                                    {/* Left Featured Cover Card Widget */}
                                    <div className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#8ce62b] to-[#6cb81b] p-6 text-black shadow-xl min-h-[190px]">
                                          <span className="text-[11px] font-extrabold uppercase tracking-wider opacity-80">Featured Choice</span>
                                          <div>
                                                <h3 className="text-2xl font-extrabold leading-tight">Feel the Nature</h3>
                                                <p className="text-xs font-semibold mt-1 opacity-90">By Wild Nature</p>
                                          </div>
                                          <div className="flex justify-between items-center mt-3 pt-3 border-t border-black/10 text-xs font-bold">
                                                <span>Best Seller 2026</span>
                                                <span className="rounded-full bg-black/15 px-2.5 py-1">4.9 ★</span>
                                          </div>
                                    </div>

                                    {/* Right Stats Widget */}
                                    <div className="flex flex-col justify-between rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10 text-white min-h-[190px]">
                                          <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/30">
                                                      <FaUsers className="text-lg" />
                                                </div>
                                                <div>
                                                      <span className="block text-xs font-medium text-blue-200">The library readers believe in</span>
                                                      <span className="text-2xl font-extrabold text-white">4.9K+</span>
                                                </div>
                                          </div>
                                          <p className="text-xs text-gray-300 leading-relaxed mt-3">
                                                Join thousands of passionate readers discovering daily titles and academic literature.
                                          </p>
                                    </div>

                              </div>
                        </div>

                        {/* ================= DESKTOP ONLY: RIGHT IMAGE & ACTION CARD COLUMN ================= */}
                        <div className="flex flex-col justify-between lg:col-span-5 h-full space-y-6">

                              {/* DESKTOP READER IMAGE CARD */}
                              <div className="hidden lg:block relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-blue-950 to-indigo-950 shadow-2xl">
                                    <Image
                                          src="/reader-girl.jpg"
                                          alt="Reader discovering new books"
                                          fill
                                          sizes="40vw"
                                          className="object-cover transition-transform duration-700 hover:scale-105"
                                          priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a112f] via-transparent to-transparent opacity-80" />
                                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/60 p-4 backdrop-blur-md border border-white/10">
                                          <p className="text-xs font-bold text-white">"Reading gives us a place to go when we have to stay where we are."</p>
                                    </div>
                              </div>

                              {/* Interactive Loyalty Card Banner matching screenshot */}
                              <div className="relative overflow-hidden rounded-[28px] bg-blue-600 p-6 sm:p-7 text-white shadow-xl">
                                    <div className="flex items-center justify-between gap-4">
                                          <h4 className="text-[20px] sm:text-[24px] font-black tracking-tight leading-snug text-white">
                                                Let's turn pages together
                                          </h4>
                                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                                                <FaArrowRight className="text-sm" />
                                          </div>
                                    </div>
                                    <p className="mt-3 text-xs sm:text-sm font-medium text-blue-100/90 leading-relaxed">
                                          The more you read, the more you earn — collect points and win exclusive book gifts!
                                    </p>
                              </div>

                        </div>

                  </div>
            </section>
      );
};

export default HeroLanding;
