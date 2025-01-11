import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      className="flex items-center justify-between p-4 w-full max-w-screen-lg mx-auto"
      style={{ backgroundColor: "#E6ECFA" }} // Cover entire component with this color
    >
      <div className="flex items-center">
        <img src="/images/logos/logo.svg" alt="BrandNav Logo" className="h-12" />
        <span className="ml-2 text-xl font-bold text-blue-900"></span>
      </div>
      <div className="flex space-x-10 text-blue-900">
        <a href="#" className="hover:text-blue-600">Products</a>
        <a href="#" className="hover:text-blue-600">Pricing</a>
        <a href="#" className="hover:text-blue-600">Blogs</a>
        <a href="#" className="hover:text-blue-600">Resources</a>
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 text-blue-900 border border-blue-900 rounded hover:bg-blue-100">Login</button>
        <button
  className="px-4 py-2 text-white rounded hover:bg-blue-700"
  style={{
    background: "#0084FF", // Retaining the background color as specified
  }}
>
  Start for free
</button>
      </div>
    </nav>
  );
};

export default Navbar;
