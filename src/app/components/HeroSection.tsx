import React from "react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 px-4 bg-gradient-to-b from-[#E6ECFA] via-[#F0F0F8] to-[#F2F2FA]"
    >
      <h1 className="text-6xl font-[600] text-center text-[#0D2052] mb-4">
        Weapons to grow <br /> your Business
      </h1>
      <p className="text-lg text-gray-500 text-center mb-6">
        Turbocharge your business growth.<br /> Our products help ignite sales and entrepreneurship.
      </p>
      <button
        className="bg-gradient-to-r from-[#52A8FF] via-[#0084FF] to-[#0084FF] text-white px-10 py-4 text-xl rounded-lg font-medium shadow-md hover:opacity-90"
      >
        Start for free
      </button>

      <p className="text-sm text-gray-500 mt-2 flex items-center gap-0">
        <Image
          src="/images/icons/uil_credit-card.png"
          alt="Credit Card Icon"
          width={15}
          height={15}
          className="inline-block align-middle mx-1"
        />
        No credit card required |{" "}
        <span className="text-yellow-500 text-xl font-semibold mx-2">
          ★★★★
          <span className="text-transparent" style={{
            background: "linear-gradient(to right, #fbbf24 70%, #000 50%)",
            WebkitBackgroundClip: "text"
          }}>
            ★
          </span>
        </span>

        4.8/5 G2 Ratings
      </p>

      {/* Statistics Cards */}
      <div className="mt- grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-5xl">
        <Image
          src="/images/icons/verifier card.svg"
          alt="Verifier Card"
          layout="intrinsic"
          width={400}
          height={200}
          className="-mt-8"
        />

        <Image
          src="/images/icons/screener card.svg"
          alt="Screener Card"
          layout="intrinsic"
          width={400}
          height={200}
          className="mt-12"
        />

        <Image
          src="/images/icons/blacklist shield card.svg"
          alt="Blacklist Shield Card"
          layout="intrinsic"
          width={400}
          height={200}
          className="mt-12"
        />

        <Image
          src="/images/icons/enricher card.png"
          alt="Enricher Card"
          layout="intrinsic"
          width={400}
          height={200}
          className="-mt-8"
        />
      </div>

      {/* Brand Logos */}
      <div className="mt-10 text-center">
        <p className="text-sm mb-4" style={{ color: "#666666" }}>
          Modern companies are using <span className="font-bold">BrandNav</span>
        </p>

        <div className="flex justify-center">
          <Image src="/images/icons/testimonial section.png" alt="testimonial" width={700} height={34} />
          
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
