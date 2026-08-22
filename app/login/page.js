"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
      FaBookOpen,
      FaEye,
      FaEyeSlash,
      FaArrowLeft,
      FaEnvelope,
      FaLock,
      FaShieldAlt,
} from "react-icons/fa";

const Page = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [showPassword, setShowPassword] = useState(false);

      const handleSubmit = (e) => {
            e.preventDefault();

            console.log({
                  email,
                  password,
            });
      };

      return (
            <main className="relative h-screen w-full overflow-hidden bg-[#070913] text-white">
                  {/* Ambient background glow spheres */}
                  <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#b8f53c]/15 blur-[120px]" />
                  <div className="pointer-events-none absolute -bottom-20 right-1/3 h-96 w-96 rounded-full bg-[#b8f53c]/10 blur-[140px]" />

                  <div className="grid h-screen w-full grid-cols-1 lg:grid-cols-2">

                        {/* ================= LEFT SECTION: FORM ================= */}
                        <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 sm:px-12 lg:px-16 overflow-y-auto">

                              {/* Navigation Top Header */}
                              <div className="flex items-center justify-between">
                                    <Link
                                          href="/"
                                          className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-gray-300 backdrop-blur-md transition-all hover:border-[#b8f53c]/40 hover:bg-[#b8f53c]/10 hover:text-white"
                                    >
                                          <FaArrowLeft className="text-xs transition-transform duration-200 group-hover:-translate-x-1" />
                                          <span>Back to Home</span>
                                    </Link>

                                    <div className="flex items-center gap-2">
                                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b8f53c]/20 text-[#b8f53c] border border-[#b8f53c]/30">
                                                <FaBookOpen className="text-sm" />
                                          </div>
                                          <span className="text-sm font-bold tracking-wider text-white">
                                                BOOK HUB
                                          </span>
                                    </div>
                              </div>

                              {/* Form Card Container */}
                              <div className="my-auto py-6 w-full max-w-md mx-auto">
                                    <div className="mb-8">
                                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#b8f53c]/10 px-3 py-1 text-xs font-semibold text-[#b8f53c] border border-[#b8f53c]/20">
                                                <FaShieldAlt className="text-[10px]" />
                                                Secure Member Login
                                          </span>

                                          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                                Welcome back
                                          </h1>

                                          <p className="mt-2 text-sm text-gray-400">
                                                Don't have an account yet?{" "}
                                                <Link
                                                      href="/register"
                                                      className="font-semibold text-[#b8f53c] transition hover:text-[#a5e02f] hover:underline"
                                                >
                                                      Create an account
                                                </Link>
                                          </p>
                                    </div>

                                    {/* Login Form */}
                                    <form onSubmit={handleSubmit} className="space-y-5">

                                          {/* Email Input */}
                                          <div>
                                                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                                                      Email Address
                                                </label>
                                                <div className="relative">
                                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                                                            <FaEnvelope className="text-sm" />
                                                      </div>
                                                      <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            required
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            placeholder="you@university.edu"
                                                            className="w-full rounded-xl border border-gray-800 bg-[#0f1424]/90 py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-[#b8f53c]/80 focus:bg-[#12192e] focus:ring-4 focus:ring-[#b8f53c]/15"
                                                      />
                                                </div>
                                          </div>

                                          {/* Password Input */}
                                          <div>
                                                <div className="flex items-center justify-between mb-2">
                                                      <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                                                            Password
                                                      </label>
                                                      <Link
                                                            href="/forgot-password"
                                                            className="text-xs font-semibold text-[#b8f53c] transition hover:text-[#a5e02f] hover:underline"
                                                      >
                                                            Forgot password?
                                                      </Link>
                                                </div>
                                                <div className="relative">
                                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                                                            <FaLock className="text-sm" />
                                                      </div>
                                                      <input
                                                            id="password"
                                                            name="password"
                                                            type={showPassword ? "text" : "password"}
                                                            required
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            placeholder="••••••••"
                                                            className="w-full rounded-xl border border-gray-800 bg-[#0f1424]/90 py-3.5 pl-11 pr-11 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-[#b8f53c]/80 focus:bg-[#12192e] focus:ring-4 focus:ring-[#b8f53c]/15"
                                                      />
                                                      <button
                                                            type="button"
                                                            onClick={() => setShowPassword((prev) => !prev)}
                                                            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 transition hover:text-white"
                                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                                      >
                                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                      </button>
                                                </div>
                                          </div>

                                          {/* Submit Button */}
                                          <button
                                                type="submit"
                                                className="w-full cursor-pointer rounded-xl bg-[#b8f53c] py-3.5 text-sm font-extrabold text-black shadow-lg shadow-[#b8f53c]/20 transition-all duration-200 hover:bg-[#a5e02f] hover:scale-[1.01] active:scale-[0.98]"
                                          >
                                                Sign In
                                          </button>
                                    </form>
                              </div>

                              {/* Footer note */}
                              <div className="text-center text-xs text-gray-500 lg:text-left">
                                    &copy; {new Date().getFullYear()} Book Management Solution. All rights reserved.
                              </div>
                        </div>

                        {/* ================= RIGHT SECTION: FULL HEIGHT 1/2 SCREEN IMAGE ================= */}
                        <div className="relative hidden h-full w-full lg:block bg-[#0a0d18] overflow-hidden">
                              <Image
                                    src="/login-cover.jpg"
                                    alt="Cozy library reading room"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                              />
                        </div>

                  </div>
            </main>
      );
};

export default Page;