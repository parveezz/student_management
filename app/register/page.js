"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
      FaBookOpen,
      FaEye,
      FaEyeSlash,
      FaUpload,
      FaArrowLeft,
      FaUser,
      FaEnvelope,
      FaIdCard,
      FaLock,
      FaUserPlus,
} from "react-icons/fa";

const Page = () => {
      const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            universityId: "",
            password: "",
      });

      const [file, setFile] = useState(null);
      const [fileName, setFileName] = useState("");
      const [showPassword, setShowPassword] = useState(false);

      const handleChange = (e) => {
            setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
            }));
      };

      const handleFileChange = (e) => {
            const selectedFile = e.target.files?.[0];

            if (selectedFile) {
                  setFile(selectedFile);
                  setFileName(selectedFile.name);
            }
      };

      const handleSubmit = (e) => {
            e.preventDefault();

            console.log({
                  ...formData,
                  file,
            });
      };

      return (
            <main className="relative h-screen w-full overflow-hidden bg-[#070913] text-white">
                  {/* Ambient background glow spheres */}
                  <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />
                  <div className="pointer-events-none absolute -bottom-20 right-1/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />

                  <div className="grid h-screen w-full grid-cols-1 lg:grid-cols-2">

                        {/* ================= LEFT SECTION: FORM ================= */}
                        <div className="relative z-10 flex h-full flex-col justify-between px-6 py-6 sm:px-12 lg:px-16 overflow-hidden">

                              {/* Navigation Top Header */}
                              <div className="flex items-center justify-between">
                                    <Link
                                          href="/"
                                          className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-gray-300 backdrop-blur-md transition-all hover:border-blue-500/40 hover:bg-blue-600/10 hover:text-white"
                                    >
                                          <FaArrowLeft className="text-xs transition-transform duration-200 group-hover:-translate-x-1" />
                                          <span>Back to Home</span>
                                    </Link>

                                    <div className="flex items-center gap-2">
                                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                                                <FaBookOpen className="text-sm" />
                                          </div>
                                          <span className="text-sm font-bold tracking-wider text-white">
                                                BOOK HUB
                                          </span>
                                    </div>
                              </div>

                              {/* Form Container */}
                              <div className="my-auto py-2 w-full max-w-md mx-auto">
                                    <div className="mb-5">
                                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#b8f53c]/10 px-3 py-1 text-xs font-semibold text-[#b8f53c] border border-[#b8f53c]/20">
                                                <FaUserPlus className="text-[10px]" />
                                                Student Registration
                                          </span>

                                          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                                                Create an account
                                          </h1>

                                          <p className="mt-1 text-xs text-gray-400">
                                                Already have an account?{" "}
                                                <Link
                                                      href="/login"
                                                      className="font-semibold text-[#b8f53c] transition hover:text-[#a5e02f] hover:underline"
                                                >
                                                      Sign in
                                                </Link>
                                          </p>
                                    </div>

                                    {/* Register Form */}
                                    <form onSubmit={handleSubmit} className="space-y-3">

                                          {/* First Name & Last Name (Single Row) */}
                                          <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                      <label htmlFor="firstName" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                                                            First Name
                                                      </label>
                                                      <div className="relative">
                                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                                                                  <FaUser className="text-xs" />
                                                            </div>
                                                            <input
                                                                  id="firstName"
                                                                  name="firstName"
                                                                  type="text"
                                                                  required
                                                                  value={formData.firstName}
                                                                  onChange={handleChange}
                                                                  placeholder="John"
                                                                  className="w-full rounded-xl border border-gray-800 bg-[#0f1424]/90 py-2.5 pl-10 pr-3 text-xs text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-[#b8f53c]/80 focus:bg-[#12192e] focus:ring-4 focus:ring-[#b8f53c]/15"
                                                            />
                                                      </div>
                                                </div>

                                                <div>
                                                      <label htmlFor="lastName" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                                                            Last Name
                                                      </label>
                                                      <div className="relative">
                                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                                                                  <FaUser className="text-xs" />
                                                            </div>
                                                            <input
                                                                  id="lastName"
                                                                  name="lastName"
                                                                  type="text"
                                                                  required
                                                                  value={formData.lastName}
                                                                  onChange={handleChange}
                                                                  placeholder="Doe"
                                                                  className="w-full rounded-xl border border-gray-800 bg-[#0f1424]/90 py-2.5 pl-10 pr-3 text-xs text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-[#b8f53c]/80 focus:bg-[#12192e] focus:ring-4 focus:ring-[#b8f53c]/15"
                                                            />
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Email Address */}
                                          <div>
                                                <label htmlFor="email" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                                                      Email Address
                                                </label>
                                                <div className="relative">
                                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                                                            <FaEnvelope className="text-xs" />
                                                      </div>
                                                      <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="you@university.edu"
                                                            className="w-full rounded-xl border border-gray-800 bg-[#0f1424]/90 py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-[#b8f53c]/80 focus:bg-[#12192e] focus:ring-4 focus:ring-[#b8f53c]/15"
                                                      />
                                                </div>
                                          </div>

                                          {/* University ID */}
                                          <div>
                                                <label htmlFor="universityId" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                                                      University ID Card Number
                                                </label>
                                                <div className="relative">
                                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                                                            <FaIdCard className="text-xs" />
                                                      </div>
                                                      <input
                                                            id="universityId"
                                                            name="universityId"
                                                            type="text"
                                                            required
                                                            value={formData.universityId}
                                                            onChange={handleChange}
                                                            placeholder="STU-12345"
                                                            className="w-full rounded-xl border border-gray-800 bg-[#0f1424]/90 py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-[#b8f53c]/80 focus:bg-[#12192e] focus:ring-4 focus:ring-[#b8f53c]/15"
                                                      />
                                                </div>
                                          </div>

                                          {/* Password */}
                                          <div>
                                                <label htmlFor="password" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                                                      Password
                                                </label>
                                                <div className="relative">
                                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                                                            <FaLock className="text-xs" />
                                                      </div>
                                                      <input
                                                            id="password"
                                                            name="password"
                                                            type={showPassword ? "text" : "password"}
                                                            required
                                                            value={formData.password}
                                                            onChange={handleChange}
                                                            placeholder="••••••••"
                                                            className="w-full rounded-xl border border-gray-800 bg-[#0f1424]/90 py-2.5 pl-10 pr-10 text-xs text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-[#b8f53c]/80 focus:bg-[#12192e] focus:ring-4 focus:ring-[#b8f53c]/15"
                                                      />
                                                      <button
                                                            type="button"
                                                            onClick={() => setShowPassword((prev) => !prev)}
                                                            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 transition hover:text-white text-xs"
                                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                                      >
                                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                      </button>
                                                </div>
                                          </div>

                                          {/* ID Card Upload */}
                                          <div>
                                                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                                                      Upload Student ID Card
                                                </label>
                                                <label className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-gray-700/80 bg-[#0f1424]/60 px-3.5 py-2.5 transition-all hover:border-[#b8f53c]/80 hover:bg-[#12192e]">
                                                      <div className="flex items-center gap-2 truncate">
                                                            <FaUpload className="text-[#b8f53c] text-xs shrink-0" />
                                                            <span className="truncate text-xs text-gray-300">
                                                                  {fileName || "Upload Card (PNG, JPG, PDF)"}
                                                            </span>
                                                      </div>
                                                      <span className="rounded bg-[#b8f53c]/20 px-2 py-0.5 text-[10px] font-semibold text-[#b8f53c] shrink-0 border border-[#b8f53c]/30">
                                                            Browse
                                                      </span>
                                                      <input
                                                            type="file"
                                                            accept="image/*,.pdf"
                                                            onChange={handleFileChange}
                                                            className="hidden"
                                                      />
                                                </label>
                                          </div>

                                          {/* Submit Button */}
                                          <button
                                                type="submit"
                                                className="w-full cursor-pointer rounded-xl bg-[#b8f53c] py-3 text-xs font-extrabold text-black shadow-lg shadow-[#b8f53c]/20 transition-all duration-200 hover:bg-[#a5e02f] hover:scale-[1.01] active:scale-[0.98] mt-1"
                                          >
                                                Create Account
                                          </button>
                                    </form>
                              </div>

                              {/* Footer note */}
                              <div className="text-center text-[11px] text-gray-500 lg:text-left">
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