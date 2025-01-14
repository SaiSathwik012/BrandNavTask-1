import React from "react";
import Image from "next/image";

const PricingCard: React.FC = () => {
    return (
        <div
            className="flex items-center justify-center h-screen bg-cover bg-center"
            style={{
                backgroundImage: 'url("/images/icons/6ea4c3381ef39497128a40933a465f56.png")',
            }}
        >
            {/* Container for Card and Text */}
            <div className="flex flex-col-reverse md:flex-row items-center md:space-x-16">
                {/* Card */}
                <div className="w-[27rem] bg-white rounded-lg shadow-lg p-12 text-center">
                    {/* Gift Icon */}
                    <div className="mb-4 p-1">
                        <Image
                            src="/images/icons/gift 1.png"
                            alt="Gift Icon"
                            width={66}
                            height={66}
                            className="mx-auto"
                        />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-black mb-2">Free</h2>

                    {/* Price */}
                    <p className="text-5xl font-extrabold text-[#2F327D] mb-4">$0</p>

                    {/* Button */}
                    <button
                        className="px-4 py-2 text-white rounded hover:bg-blue-700"
                        style={{
                            background: "#0084FF",
                        }}
                    >
                        Grab free leads
                    </button>

                    {/* Subtitle */}
                    <p className="text-sm text-gray-500 mt-4 flex items-center gap">
                        <Image
                            src="/images/icons/uil_credit-card.png"
                            alt="Credit Card Icon"
                            width={20}
                            height={20}
                            className="inline-block align-middle mx-1"
                        />
                        No credit card required |{" "}
                        <span
                            className="text-lg font-semibold "
                            style={{
                                background: "linear-gradient(to right, #fbbf24 70%, #000 50%)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            ★
                        </span>
                        4.8/5 G2 Ratings
                    </p>

                    {/* Features */}
                    <ul className="text-center mt-7 space-y-3">
                        {[
                            "All BrandNav features included",
                            "200 Screener credits per month",
                            "25 Enricher credits per month",
                            "Pinpoint ideal prospects",
                            "Chat support with real humans",
                        ].map((feature, index) => (
                            <li key={index} className="flex items-center text-[#141997]">
                                <span className="flex justify-center mr-2">
                                    <Image
                                        src="/images/icons/check 1.png"
                                        alt="check"
                                        width={16}
                                        height={16}
                                    />
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8">
                        <div className="text-center flex justify-center -space-x-2 mb-2">
                            <Image
                                src="/images/icons/headshots.svg"
                                alt="headshots"
                                width={220}
                                height={25}
                            />
                        </div>
                        <p className="flex justify-center text-xs text-[#2F327D]">
                            These people are already using BrandNav.<br /> When will YOU?
                        </p>
                    </div>
                </div>

                {/* Right Text */}
                <div
                    className="text-white text-center mb-8 md:mb-0"
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "40px",
                        fontWeight: 600,
                        lineHeight: "60px",
                        letterSpacing: "0.02em",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                    }}
                >
                    <h3>Not convinced yet?</h3>
                    <p className="mb-2">
                        Take it for a{" "}
                        <span className="text-blue-400 font-bold no-underline">FREE</span> spin <br />
                        before committing
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
