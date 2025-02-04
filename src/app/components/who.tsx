import React from "react";
import Image from "next/image";

const Who = () => {
    const items = [
        {
            image: "/images/icons/Icon-1.svg",
            title: "Sales & Marketing Teams",
            description:
                "Sales and marketing teams are using BrandNav to efficiently locate and verify prospect contact information and identify key decision-makers.",
        },
        {
            image: "/images/icons/Icon-2(2).svg",
            title: "Software & IT Companies",
            description:
                "IT companies are using BrandNav to build lists for outreach, identify target organizations, and verify email addresses of leads to improve email deliverability.",
        },
        {
            image: "/images/icons/Icon-3 (3).svg",
            title: "Service Providers",
            description:
                "Service providers are using BrandNav to locate accurate email addresses, build a list of contacts, and improve the efficiency of their sales process.",
        },
        {
            image: "/images/icons/Icon-3 (3).svg",
            title: "Recruiters",
            description:
                "Recruiters are using BrandNav to locate and verify the email addresses of job candidates, build a talent pool, and streamline their hiring process.",
        },
        {
            image: "/images/icons/Icon-4 (4).svg",
            title: "Backlinks Outreach",
            description:
                "SEO link builders are using BrandNav to locate and verify the email addresses of potential link partners, and outreach lists for link-building purposes.",
        },
        {
            image: "/images/icons/Icon-5 (5).svg",
            title: "Investors",
            description:
                "Investors are using BrandNav to quickly find and verify contact information for key executives and decision-makers and streamline their workflow.",
        },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-gray-100">
            <div className="w-full max-w-7xl p-8 bg-[#F2F2FA] rounded-lg">
                {/* Title */}
                <h1 className="text-4xl font-bold text-center text-[#2F327D] md:text-left">
                    Who is using BrandNav?
                </h1>
                <p className="text-m text-center font-medium text-[#595B97] mt-3 md:text-left">
                    BrandNav has become an irreplaceable tool for businesses
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center w-full p-6 text-center rounded-lg md:text-left"
                            style={{
                                background:
                                    "linear-gradient(0deg, rgba(241, 246, 253, 0) -13.75%, rgba(241, 246, 253, 0.8) 20.5%, rgba(236, 244, 255, 0.8) 58.57%, rgba(255, 255, 255, 0) 100%)",
                            }}
                        >
                            {/* Icon */}
                            <div className="w-32 h-32 flex items-center justify-center">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="object-contain"
                                    width={128}
                                    height={128}
                                />
                            </div>
                            {/* Title */}
                            <h3 className="text-xl font-semibold text-[#2F327D] mt-4">
                                {item.title}
                            </h3>
                            {/* Description */}
                            <p className="text-[#595B97] font-normal text-m mt-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Who;
