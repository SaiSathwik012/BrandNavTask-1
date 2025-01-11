import React from "react";

const BeforeAfterSection = () => {
  return (
    <div className="bg-[#F8F9FF] py-16 px-4 text-center">
      {/* Heading */}
      <h2 className="text-[#2F327D] text-3xl md:text-4xl font-bold mb-12">
        Fix data accuracy problems with <br className="hidden md:block" /> BrandNav
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Before Section */}
        <div className="bg-[#FFEFF5] p-6 rounded-lg shadow-md relative">
          <img src="/images/icons/before svg.svg" alt="Before Section" />
        </div>

        {/* After Section */}
        <div className="bg-[#EBF5FF] p-6 rounded-lg shadow-md relative">
          <img src="/images/icons/after svg.svg" alt="After Section" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;

