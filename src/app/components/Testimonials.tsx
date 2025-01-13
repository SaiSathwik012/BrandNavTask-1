import React from "react";
import Image from "next/image";

const Testimonials = () => {
    return (
        <section className="bg-[#E1F1FE] py-10">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-2 text-[#2F327D]">
                    Don’t just take our word for it
                </h2>
                <p className="text-[#595B97] font-bold mb-8">
                    Excellent{" "}
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
                    {/* Testimonial 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
                        <div className="flex items-center w-full mb-3">
                            <Image
                                src="/images/icons/Sk Abdul Wahed 2.png"
                                alt="Sai"
                                width={48} // Set appropriate width
                                height={48} // Set appropriate height
                                className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4">
                                <h4 className="text-sm font-bold text-gray-800 text-left">Sai</h4>
                                <p className="text-sm text-gray-500">CEO, Sentry Ecom</p>
                            </div>
                            <span className="text-yellow-500 text-3xl font-semibold ml-auto">
                                ★★★★★
                            </span>
                        </div>

                        <h3 className="text-lg font-semibold text-[#2F327D] mb-1 text-left">
                            “Super helpful tool for lead generation!&rdquo;
                        </h3>
                        <p className="text-[#808080] h=[84px] w-[390px] text-sm font-normal text-left">
                            &quot;BrandNav has been extremely useful in helping us find high-quality leads for our agency. It’s the best tool I’ve used so far for scrapping leads. Would definitely recommend BrandNav to businesses looking for a lead gen tool.&quot;
                        </p>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
                        <div className="flex items-center w-full mb-2">
                            <Image
                                src="/images/icons/Sairaj Matkar 1.png"
                                alt="Sairaj Matkar"
                                width={48} // Set appropriate width
                                height={48} // Set appropriate height
                                className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4">
                                <h4 className="text-sm font-bold text-gray-800 text-left">Sairaj Matkar</h4>
                                <p className="text-sm text-gray-500">Founder, AceXmedia</p>
                            </div>
                            <span className="text-yellow-500 text-3xl font-semibold ml-auto">
                                ★★★★★
                            </span>
                        </div>

                        <h3 className="text-lg font-semibold text-[#2F327D] mb-1 text-left">
                            “Highly recommended if you’re looking to <br />get leads!”
                        </h3>
                        <p className="text-[#808080] h=[84px] w-[390px] text-sm font-normal text-left">
                            &quot;Best tool I’ve used so far for scrapping leads. Helps me scrape my target audience data with ease. Low effort, amazing response rates. Saves a lot of time and manual work.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
