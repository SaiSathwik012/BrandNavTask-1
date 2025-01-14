"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex items-center justify-center bg-[#E6ECFA] w-full">
      <nav className="flex items-center justify-between w-full max-w-[1060px] h-[47px] mt-8 px-4 md:px-0">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center justify-between w-full md:w-[580px] h-full">
          {/* Brand Logo and Name */}
          <div className="flex items-center">
            <Image
              src="/images/icons/Vector 1648.png"
              alt="BrandNav Logo"
              width={33.3}
              height={24}
            />
            <p className="font-poppins text-[24px] font-semibold leading-[36px] tracking-[-0.05em] text-left ml-2">
              BrandNav
            </p>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-[#0D2052]">
            <a
              href="#"
              className="font-poppins text-sm font-normal leading-[21px] tracking-[-0.02em] hover:text-blue-600"
            >
              Products
            </a>
            <a
              href="#"
              className="font-poppins text-sm font-normal leading-[21px] tracking-[-0.02em] text-[#0085FF] hover:text-blue-600"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-poppins text-sm font-normal leading-[21px] tracking-[-0.02em] hover:text-blue-600"
            >
              Blogs
            </a>
            <a
              href="#"
              className="font-poppins text-sm font-normal leading-[21px] tracking-[-0.02em] flex items-center hover:text-blue-600"
            >
              Resources <span className="ml-1 text-sm">▼</span>
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div
            className="block md:hidden text-2xl cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "✕" : "☰"}
          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="w-[86px] h-[43px] px-4 py-2 rounded-lg border border-[#287DFF] hover:bg-blue-100">
            Login
          </button>
          <button className="px-4 py-2 text-white rounded-lg bg-[#0084FF]">
            Start for free
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-white shadow-lg p-6 md:hidden">
          <div className="flex flex-col space-y-4 text-[#0D2052]">
            <a
              href="#"
              className="font-poppins text-sm font-normal leading-[21px] tracking-[-0.02em] hover:text-blue-600"
            >
              Products
            </a>
            <a
              href="#"
              className="font-poppins text-sm font-normal leading-[21px] tracking-[-0.02em] text-[#0085FF] hover:text-blue-600"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-poppins text-sm font-normal leading-[21px] tracking-[-0.02em] hover:text-blue-600"
            >
              Blogs
            </a>
            <a
              href="#"
              className="font-poppins text-sm font-normal leading-[21px] tracking-[-0.02em] hover:text-blue-600"
            >
              Resources
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
