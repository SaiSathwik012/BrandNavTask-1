import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav
      className="text-lg flex items-center justify-between p-6 w-full max-w-screen-full mx-auto"
      style={{ backgroundColor: "#E6ECFA" }}
    >
      {/* Logo on the left with extra spacing */}
      <div className="flex items-center" style={{ paddingLeft: "100px", marginLeft: "190px" }}>
        {/* Replace <img> with <Image> */}
        <Image src="/images/logos/logo.svg" alt="BrandNav Logo" width={160} height={12} />
      </div>

      {/* Navigation Links in the center */}
      <div className="flex items-center space-x-10 text-blue-900">
        <a href="#" className="hover:text-blue-600">
          Products
        </a>
        <a href="#" className="hover:text-blue-600">
          Pricing
        </a>
        <a href="#" className="hover:text-blue-600">
          Blogs
        </a>
        <a href="#" className="hover:text-blue-600">
          Resources
        </a>
      </div>

      {/* Buttons on the right */}
      <div className="flex space-x-4" style={{ paddingRight: "100px", marginRight: "190px" }}>
        <button className="px-4 py-2 text-blue-900 border border-blue-900 rounded hover:bg-blue-100">
          Login
        </button>
        <button
          className="px-4 py-2 text-white rounded hover:bg-blue-700"
          style={{
            background: "#0084FF",
          }}
        >
          Start for free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
