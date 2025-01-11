import React from "react";

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
            className="bg-[#F8F9FF] py-16 px-6 text-center bg-cover bg-center"
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
                <div className="grid grid-cols-4 gap-0">
                    {/* Top Row: Four Attributes */}
                    {screenerAttributes.slice(0, 4).map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="rounded-lg">
                                <img
                                    src={item.icon}
                                    alt={item.label.join(" ")}
                                    className="w-26 h-26"
                                />
                            </div>
                            <div className="text-[#2F327D] text-xl mt-3 font-bold text-center">
                                {item.label.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Centered Row: Three Attributes */}
                <div className="flex justify-center mt-8 gap-16">
                    {screenerAttributes.slice(4).map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="rounded-lg">
                                <img
                                    src={item.icon}
                                    alt={item.label.join(" ")}
                                    className="w-26 h-26"
                                />
                            </div>
                            <div className="text-[#2F327D] text-xl mt-3 font-bold text-center">
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
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 place-items-center">
                    {enricherAttributes.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="rounded-lg">
                                <img
                                    src={item.icon}
                                    alt={item.label.join(" ")}
                                    className="w-26 h-26"
                                />
                            </div>
                            <div className="text-[#2F327D] text-2xl mt-3 font-bold text-center">
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
