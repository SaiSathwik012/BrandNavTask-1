import React from "react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div className="bg-[#E6ECFA] min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-6xl font-bold text-center text-gray-800 mb-4">
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
          width={20}
          height={20}
          className="inline-block align-middle mx-1"
        />
        No credit card required |{" "}
        <span className="text-yellow-500 text-xl font-semibold mx-2">
          ★★★★★
        </span>{" "}
        4.8/5 G2 Ratings
      </p>

      {/* Statistics Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-5xl">
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

        <div className="flex justify-center space-x-6">
          <Image
            src="/images/icons/logo 1.png"
            alt="Logo 1"
            layout="intrinsic"
            width={72}
            height={72}
          />
          <Image
            src="/images/icons/logo 2.png"
            alt="Logo 2"
            layout="intrinsic"
            width={72}
            height={72}
          />
          <Image
            src="/images/icons/logo 3.png"
            alt="Logo 3"
            layout="intrinsic"
            width={72}
            height={72}
          />
          <Image
            src="/images/icons/logo 4.png"
            alt="Logo 4"
            layout="intrinsic"
            width={72}
            height={72}
          />
          <Image
            src="/images/icons/logo 5.png"
            alt="Logo 5"
            layout="intrinsic"
            width={72}
            height={72}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
