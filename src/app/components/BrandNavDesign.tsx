import React from "react";

const BrandNavDesign = () => {  
    return (
        <div className="bg-[#F2F2FA] py-16 px-6">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-[#242566] text-5xl font-bold mb-4">
                    Why should you use BrandNav?
                </h1>
                <p className="text-gray-500 text-xl">
                    Optimize your workflow for faster results and higher revenue
                </p>
            </div>

            {/* Section Wrapper */}
            <div className="space-y-16">
                {/* Section 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center place-items-center">
                    {/* Left Section (Image) */}
                    <div className="relative flex justify-center">
                        <img
                            src="/images/icons/image.svg"
                            alt="Browser Mockup"
                            className="rounded-lg z-10 relative w-[700px] h-[550px] -translate-x-15"
                        />
                    </div>
                    {/* Right Section (Text) */}
                    <div>
                        <div className="flex flex-col items-start">
                            <div className="bg-yellow-100 p-4 rounded-full mb-6">
                                <img
                                    src="/images/icons/Frame 1000001728.svg"
                                    alt="CSV Icon"
                                    className="w-12 h-12"
                                />
                            </div>
                            <h3 className="text-[#2F327D] text-3xl font-semibold">
                                Enrich any CSV
                            </h3>
                            <p className="text-[#595B97] text-lg leading-relaxed mt-4 max-w-[430px]">
                                BrandNav transforms your CSV files by adding valuable contact, firmographics, and technographics data. With just a few clicks, you can enhance your data with enriched information and unlock new insights and opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center place-items-center">
                    {/* Left Section (Text) */}
                    <div>
                        <div className="flex flex-col items-start">
                            <div className="bg-blue-100 p-4 rounded-full mb-6">
                                <img
                                    src="/images/icons/image2.svg"
                                    alt="Analytics Icon"
                                    className="w-12 h-12"
                                />
                            </div>
                            <h3 className="text-[#2F327D] text-3xl font-semibold">
                                Fresh data updates everyday
                            </h3>
                            <p className="text-[#595B97] text-lg leading-relaxed mt-4 max-w-[430px]">
                                BrandNav updates its data every day, providing the most recent and accurate information to its users. With a constant stream of new information, BrandNav ensures that users have access to the latest contact, firmographics, and technographics data for better decision-making.
                            </p>
                        </div>
                    </div>

                    {/* Right Section (Image) */}
                    <div className="relative flex justify-center">
                        <img
                            src="/images/icons/image2.svg"
                            alt="Browser Mockup 2"
                            className="rounded-lg z-10 relative w-[700px] h-[550px] -translate-x-15"
                        />
                    </div>
                </div>

                {/* Section 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center place-items-center">
                    {/* Left Section (Image) */}
                    <div className="relative flex justify-center">
                        <img
                            src="/images/icons/image3.svg"
                            alt="Browser Mockup 3"
                            className="rounded-lg z-10 relative w-[700px] h-[550px] -translate-x-15"
                        />
                    </div>
                    {/* Right Section (Text) */}
                    <div>
                        <div className="flex flex-col items-start">
                            <div className=" rounded-full mb-2 w-30 h-30" >
                                <img
                                    src="/images/icons/filter (2) 1.svg"
                                    alt="Data Security Icon"
                                    className="w-12 h-12"
                                />
                            </div>
                            <h3 className="text-[#2F327D] text-3xl font-semibold">
                                Data Security
                            </h3>
                            <p className="text-[#595B97] text-lg leading-relaxed mt-4 max-w-[430px]">
                                BrandNav ensures the highest standards of data security, keeping your information safe and compliant with regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandNavDesign;
