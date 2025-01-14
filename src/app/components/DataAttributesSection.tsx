import React from "react";
import Image from "next/image";

const DataAttributesSection: React.FC = () => {
    const screenerAttributes = [
        { icon: "/images/icons/Group 1000001990.svg", label: ["Financials"] },
        { icon: "/images/icons/Group 1000001992.svg", label: ["Company Name", "Website"] },
        { icon: "/images/icons/Group 1000001993.svg", label: ["Company", "Location"] },
        { icon: "/images/icons/Group 1000001994.svg", label: ["Country Code"] },
        { icon: "/images/icons/Group 1000001980.svg", label: ["Employee Count"] },
        { icon: "/images/icons/Group 1000001998.svg", label: ["Industry"] },
        { icon: "/images/icons/Group 1000001980.svg", label: ["and 20+ more"] },
    ];

    const enricherAttributes = [
        { icon: "/images/logos/Group 1000001992.svg", label: ["Phone"] },
        { icon: "/images/logos/Group 1000001994.svg", label: ["Email"] },
        { icon: "/images/logos/Group 1000001995.svg", label: ["Job Title"] },
        { icon: "/images/logos/Group 1000001996.svg", label: ["Linkedin"] },
    ];

    return (
        <div
            className="bg-[#F2F2FA] py-12 px-12 text-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/base.png')", // Replace with your image path
            }}
        >
            {/* Main Heading */}
            <h2 className="text-[#2F327D] text-4xl font-bold mb-8">
                Pinpoint your ideal customer with <br /> relevant data attributes
            </h2>

            {/* Screener Attributes */}
            <div className="mt-10">
                <h3 className="text-[#007DF2] text-xl font-semibold mb-6">
                    Screener attributes
                </h3>

                {/* First Row: Four Attributes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {screenerAttributes.slice(0, 4).map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-left">
                            <Image
                                src={item.icon}
                                alt={item.label.join(" ")}
                                width={104}
                                height={104}
                                className="rounded-lg"
                            />
                            <div className="text-[#2F327D] text-xl font-bold mb-3">
                                {item.label.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Row: Three Attributes with Adjusted Space Between */}
                <div className="flex justify-evenly mt-10 flex-wrap">
                    {screenerAttributes.slice(4).map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-left">
                            <Image
                                src={item.icon}
                                alt={item.label.join(" ")}
                                width={104}
                                height={104}
                                className="rounded-lg"
                            />
                            <div className="text-[#2F327D] text-xl font-bold mt-3">
                                {item.label.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enricher Attributes */}
            <div className="mt-16">
                <h3 className="text-[#007DF2] text-xl font-semibold mb-6">
                    Enricher attributes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-8">
                    {enricherAttributes.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-left">
                            <Image
                                src={item.icon}
                                alt={item.label.join(" ")}
                                width={104}
                                height={104}
                                className="rounded-lg"
                            />
                            <div className="text-[#2F327D] text-2xl font-bold mt-3">
                                {item.label.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DataAttributesSection;
