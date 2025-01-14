import React from "react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 px-4 bg-gradient-to-b from-[#E6ECFA] via-[#F0F0F8] to-[#F2F2FA]"
    >
      <h1 className="text-4xl sm:text-6xl font-[600] sm:text-center text-left text-[#0D2052] mb-4">
        Weapons to grow <br /> your Business
      </h1>
      <p className="text-base sm:text-lg text-gray-500 sm:text-center text-left mb-6">
        Turbocharge your business growth.<br /> Our products help ignite sales and entrepreneurship.
      </p>
      <button
        className="bg-gradient-to-r from-[#52A8FF] via-[#0084FF] to-[#0084FF] text-white px-6 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl rounded-lg font-medium shadow-md hover:opacity-90"
      >
        Start for free
      </button>

      <p className="text-xs sm:text-sm text-gray-500 mt-2 flex items-center gap-0 sm:justify-center justify-start hidden sm:flex">
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
          <span
            className="text-transparent"
            style={{
              background: "linear-gradient(to right, #fbbf24 70%, #000 50%)",
              WebkitBackgroundClip: "text",
            }}
          >
            ★
          </span>
        </span>
        4.8/5 G2 Ratings
      </p>

      {/* Statistics Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
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
      <div className="mt-10 text-left sm:text-center">
        <p
          className="text-xs sm:text-sm mb-4"
          style={{
            color: "#666666",
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "20px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Modern companies are using <span className="font-bold">BrandNav</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          <Image src="/images/logos/logo 1.svg" alt="testimonial" width={204.72} height={2.034} className="sm:mr-5" />
          <Image src="/images/logos/logo 2.png" alt="testimonial" width={204.72} height={2.034} className="sm:mr-5" />
          <Image src="/images/logos/logo 3.png" alt="testimonial" width={83.27} height={34} />
          <Image src="/images/logos/logo 4.png" alt="testimonial" width={61} height={33.38} className="sm:mr-5" />
          <Image src="/images/logos/logo 5.png" alt="testimonial" width={61} height={33.38} className="sm:mr-5" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
