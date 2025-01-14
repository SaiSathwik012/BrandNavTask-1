import React from "react";

const BeforeAfterSection = () => {
  return (
    <div className="bg-[#F8F9FF] py-16 px-4 text-center">
      {/* Section Title */}
      <h2 className="text-[#2F327D] text-3xl md:text-4xl font-bold mb-16 leading-tight">
        Fix data accuracy problems <br className="hidden md:block" /> with
        BrandNav
      </h2>

      {/* Before and After Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Before Section */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="bg-[#FFEFEF] rounded-[13px] p-4 shadow-md"
            style={{ width: "438px", height: "328.5px" }}
          >
            <img
              src="/images/icons/Frame 1000001706 (1).png"
              alt="Before Section"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "contain",  // Ensures the image fits without cropping
                borderRadius: "12.98px",
              }}
            />
          </div>
          <p className="text-[#2F327D] text-lg font-bold">Before</p>
        </div>

        {/* After Section */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="bg-[#EAF6FF] rounded-[13px] p-4 shadow-md"
            style={{ width: "438px", height: "328.5px" }}
          >
            <img
              src="/images/icons/Frame 10000017062 (2).png"
              alt="After Section"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "contain",  // Ensures the image fits without cropping
                borderRadius: "12.98px",
              }}
            />
          </div>
          <p className="text-[#2F327D] text-lg font-bold">After</p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
