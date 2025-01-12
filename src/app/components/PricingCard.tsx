import React from "react";

const PricingCard: React.FC = () => {
    return (
        <div
            className="flex items-center justify-center h-screen bg-cover bg-center"
            style={{
                backgroundImage: 'url("/images/icons/6ea4c3381ef39497128a40933a465f56.png")', // Replace with your image path
            }}
        >
            {/* Container for Card and Text */}
            <div className="flex items-center space-x-16">
                {/* Card */}
                <div className="w-[26rem] bg-white rounded-lg shadow-lg p-12 text-center">
                    {/* Gift Icon */}
                    <div className="mb-4 p-1">
                        <img
                            src="/images/icons/gift 1.png" // Replace with your gift icon path 
                            alt="Gift Icon"
                            className="w-14 h-14 mx-auto"
                        />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-black mb-2">Free</h2>

                    {/* Price */}
                    <p className="text-5xl font-extrabold text-[#2F327D]
 mb-4">$0</p>

                    {/* Button */}
                    <button
                        className="px-4 py-2 text-white rounded hover:bg-blue-700"
                        style={{
                            background: "#0084FF", // Retaining the background color as specified
                        }}
                    >
                        Grab free leads
                    </button>

                    {/* Subtitle */}
                    <p className="text-sm text-gray-500 mt-2 flex items-center gap-0">
                        <img
                            src="/images/icons/uil_credit-card.png"
                            alt=""
                            className="inline-block align-middle"
                            style={{ marginRight: "0", paddingRight: "0" }}
                        />
                        No credit card required | ⭐ 4.8/5 G2 Ratings
                    </p>




                    {/* Features */}
                    <ul className="text-left mt-6 space-y-3">
                        {[
                            "All BrandNav features included",
                            "200 Screener credits per month",
                            "25 Enricher credits per month",
                            "Pinpoint ideal prospects",
                            "Chat support with real humans",
                        ].map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                                <span className="mr-2"><img src="/images/icons/check 1.png" alt="check" /></span>
                                {feature}
                            </li>
                        ))
                    }
                    </ul>
                    <div className="mt-8">
                        <div className="flex justify-center -space-x-2 mb-2">
                            <img src="/images/icons/headshots.svg" alt="headshots" />
                        </div>
                        <p className="text-xs text-[#2F327D]">
                            These people are already using BrandNav.<br /> When will YOU?
                        </p>
                    </div>
                </div>

                {/* Right Text */}
                <div
                    className="text-white text-center"
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
