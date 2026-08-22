"use client";

import React from "react";
import Image from "next/image";
import { FaBookOpen, FaShoppingCart } from "react-icons/fa";

const FeaturedBook = () => {
      return (
            <section className="relative w-full overflow-hidden px-6 pt-14 pb-10 sm:px-10 sm:pt-16 lg:pt-20">
                  {/* Atmospheric Background Image Overlay */}
                  <div
                        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 blur-2xl scale-110 pointer-events-none"
                        style={{ backgroundImage: "url('/origin.jpg')" }}
                        aria-hidden="true"
                  />
                  <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#080b14]/70 via-[#080b14]/50 to-[#080b14] pointer-events-none" />

                  <div className="relative z-10 grid min-h-[520px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

                        {/* Book Image - Top on Mobile, Right on Desktop */}
                        <div className="relative flex items-center justify-center overflow-hidden py-4 sm:py-8 sm:overflow-visible order-first lg:order-last">
                              {/* Background tilted shadow cover */}
                              <div
                                    className="absolute z-0 hidden h-[320px] w-[210px] translate-x-10 translate-y-3 rotate-[20deg] scale-105 bg-cover bg-center opacity-25 blur-[1px] sm:block sm:h-[460px] sm:w-[300px] sm:translate-x-14 sm:rotate-[25deg]"
                                    style={{ backgroundImage: "url('/origin.jpg')" }}
                                    aria-hidden="true"
                              />

                              {/* Main book cover */}
                              <div className="relative z-10 h-[320px] w-[210px] overflow-hidden rounded-lg shadow-2xl sm:h-[460px] sm:w-[300px]">
                                    <Image
                                          src="/origin.jpg"
                                          alt="Origin by Dan Brown"
                                          fill
                                          sizes="(max-width: 640px) 210px, (max-width: 1024px) 300px, 300px"
                                          className="object-cover"
                                          priority
                                    />
                              </div>
                        </div>

                        {/* Book Information */}
                        <div className="flex flex-col justify-center py-2 sm:py-10 order-last lg:order-first">
                              {/* Book Title */}
                              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                                    Origin
                              </h1>

                              {/* Metadata Row 1: Author */}
                              <div className="mt-4 text-sm sm:text-base text-gray-400">
                                    <span>
                                          By{" "}
                                          <strong className="text-base font-semibold text-gray-200 sm:text-lg">
                                                Dan Brown
                                          </strong>
                                    </span>
                              </div>

                              {/* Metadata Row 2: Category & Rating in Next Row */}
                              <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm sm:text-base text-gray-400">
                                    <span>
                                          Category:{" "}
                                          <strong className="text-base font-semibold text-gray-200 sm:text-lg">
                                                Thriller / Suspense
                                          </strong>
                                    </span>

                                    <span className="text-base sm:text-lg font-medium text-amber-400">
                                          Rating 4.5/5 ★
                                    </span>
                              </div>

                              {/* Metadata Row 3: Stock Counts */}
                              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm sm:mt-7 sm:gap-x-10 sm:text-base text-gray-400">
                                    <span>
                                          Total books:{" "}
                                          <strong className="text-base text-gray-200 sm:text-lg">
                                                100
                                          </strong>
                                    </span>

                                    <span>
                                          Available books:{" "}
                                          <strong className="text-base text-gray-200 sm:text-lg">
                                                42
                                          </strong>
                                    </span>
                              </div>

                              {/* Expanded Paragraph Description */}
                              <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-300 sm:mt-7 sm:text-base sm:leading-7">
                                    Origin is a 2017 mystery-thriller novel by American author Dan Brown.
                                    It marks the high-stakes fifth installment in the iconic Robert Langdon
                                    series, following acclaimed international bestsellers such as
                                    <em> The Da Vinci Code</em>, <em>Angels &amp; Demons</em>, and <em>Inferno</em>.
                                    In this gripping adventure set across Spain—from the Guggenheim Museum
                                    Bilbao to Barcelona’s Sagrada Família—symbologist Robert Langdon navigates
                                    a trail of cryptic codes and modern science to answer two of humanity
                                    most profound existential questions: <em>Where do we come from?</em> and
                                    <em> Where are we going?</em>
                              </p>

                              {/* Action Buttons */}
                              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
                                    <button className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-purple-600/20 transition hover:from-purple-500 hover:to-indigo-500 active:scale-[0.99] sm:w-fit cursor-pointer">
                                          <FaShoppingCart className="text-white" />
                                          <span>BUY BOOK ($24.99)</span>
                                    </button>

                                    <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-gray-200 active:scale-[0.99] sm:w-fit cursor-pointer">
                                          <FaBookOpen className="text-gray-800" />
                                          <span>BORROW BOOK REQUEST</span>
                                    </button>
                              </div>

                              {/* Tag Badges */}
                              <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                                    <span className="rounded bg-blue-600 px-3 py-1.5 text-xs font-medium text-white sm:text-sm">
                                          217 Hug
                                    </span>
                                    <span className="rounded bg-blue-600 px-3 py-1.5 text-xs font-medium text-white sm:text-sm">
                                          54 Hug
                                    </span>
                               </div>
                        </div>

                  </div>
            </section>
      );
};

export default FeaturedBook;