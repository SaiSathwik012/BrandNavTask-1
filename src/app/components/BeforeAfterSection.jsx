import React from "react";

const BeforeAfterSection = () => {
  return (
    <div className="bg-[#F8F9FF] py-16 px-4 text-center">
      {/* Heading */}
      <h2 className="text-[#2F327D] text-3xl md:text-4xl font-bold mb-12">
        Fix data accuracy problems with <br className="hidden md:block" /> BrandNav
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Before Section */}
        <div className="flex justify-center items-center">
          <img
            src="/images/icons/before svg.svg"
            alt="Before Section"
            className="max-w-full h-auto"
          />
        </div>

        {/* After Section */}
        <div className="flex justify-center items-center">
          <img
            src="/images/icons/after svg.svg"
            alt="After Section"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
