import React from "react";
import Image from "next/image";

const BrandNavDesign = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F2F2FA] p-4 sm:p-8 md:p-16">
            <div className="w-full max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-[#242566] text-4xl sm:text-5xl font-bold mb-4">
                        Why should you use BrandNav?
                    </h1>
                    <p className="text-gray-500 text-lg sm:text-xl">
                        Optimize your workflow for faster results and higher revenue
                    </p>
                </div>

                {/* Section Wrapper */}
                <div className="space-y-16">
                    {/* Section 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center mx-auto gap-8">
                        {/* Left Section (Image) */}
                        <div className="relative flex justify-center">
                            <Image
                                src="/images/icons/image.svg"
                                alt="Browser Mockup"
                                width={473}
                                height={407}
                                className="rounded-lg z-10"
                            />
                        </div>
                        {/* Right Section (Text) */}
                        <div>
                            <div className="flex flex-col items-start">
                                <div className="bg-yellow-100 p-4 rounded-full mb-6">
                                    <Image
                                        src="/images/icons/Frame 1000001728.svg"
                                        alt="CSV Icon"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <h3 className="text-[#2F327D] text-2xl sm:text-3xl font-semibold leading-tight">
                                    Enrich any CSV
                                </h3>
                                <p className="text-[#595B97] text-sm sm:text-base">
                                    BrandNav transforms your CSV files by adding valuable contact, firmographics, and technographics data. With just a few clicks, you can enhance your data with enriched information and unlock new insights and opportunities.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center mx-auto gap-8">
                        {/* Left Section (Text) */}
                        <div>
                            <div className="flex flex-col items-start">
                                <div className="bg-blue-100 p-4 rounded-full mb-6">
                                    <Image
                                        src="/images/icons/sync 1.svg"
                                        alt="Analytics Icon"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <h3 className="text-[#2F327D] text-2xl sm:text-3xl font-semibold leading-tight">
                                    Fresh data updates everyday
                                </h3>
                                <p className="text-[#595B97] text-sm sm:text-base">
                                    BrandNav updates its data every day, providing the most recent and accurate information to its users. With a constant stream of new information, BrandNav ensures that users have access to the latest contact, firmographics, and technographics data for better decision-making.
                                </p>
                            </div>
                        </div>
                        {/* Right Section (Image) */}
                        <div className="relative flex justify-center">
                            <Image
                                src="/images/icons/image2.svg"
                                alt="Browser Mockup 2"
                                width={473}
                                height={407}
                                className="rounded-lg z-10"
                            />
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center mx-auto gap-8">
                        {/* Left Section (Image) */}
                        <div className="relative flex justify-center">
                            <Image
                                src="/images/icons/image3.svg"
                                alt="Browser Mockup 3"
                                width={501.2}
                                height={309.18}
                                className="rounded-lg z-10"
                            />
                        </div>
                        {/* Right Section (Text) */}
                        <div>
                            <div className="flex flex-col items-start">
                                <div className="bg-green-100 p-4 rounded-full mb-6">
                                    <Image
                                        src="/images/icons/filter (2) 1.svg"
                                        alt="Data Security Icon"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <h3 className="text-[#2F327D] text-2xl sm:text-3xl font-semibold leading-tight">
                                    Advanced search with 25+ unique filters
                                </h3>
                                <p className="text-[#595B97] text-sm sm:text-base">
                                    BrandNav offers over 25+ filters to help users build highly segmented lists for better prospecting. With BrandNav, you can create highly targeted lists that are tailored to your specific needs, streamlining your workflow and maximizing your productivity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandNavDesign;
