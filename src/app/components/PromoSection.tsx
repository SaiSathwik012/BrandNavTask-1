"use client";
import Image from "next/image";

const PromoSection: React.FC = () => {
    return (
        <div className="bg-[#F2F2FA]">
            {/* Promo Banner */}
            <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
                <div
                    className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-3xl"
                    style={{
                        backgroundImage: "url('/images/icons/Group 1000002076.svg')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute inset-0 bg-opacity-20"></div>
                    <div className="relative z-10 py-16 px-10 text-center">
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                            Want to see BrandNav in action?
                        </h2>
                        <p className="text-lg sm:text-xl font-medium mb-6">
                            Try BrandNav for free today!
                        </p>
                        <button className="bg-[#0084FF] hover:bg-blue-800 text-white font-semibold py-2 px-8 rounded-lg shadow-lg transition-all">
                            Grab free leads
                        </button>
                        <div className="mt-6 flex justify-center items-center gap-4 text-sm sm:text-base">
                            <p className="text-white mt-2 flex items-center gap-2">
                                <Image
                                    src="/images/icons/uil_credit-card2.png"
                                    alt="Credit Card Icon"
                                    width={15}
                                    height={15}
                                    className="inline-block align-middle"
                                />
                                No credit card required |{" "}
                                <span className="text-yellow-500 text-m font-semibold ml-auto mx-2">
                                    ★★★★★
                                </span>
                                4.8/5 G2 Ratings
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#F2F2FA]">
                <div className="max-w-6xl mx-auto px-6 mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-[#212529]">
                        {/* BrandNav Info (left side) */}
                        <div className="w-full lg:w-[293px]">
                            <h3 className="font-bold text-lg mb-3">BrandNav.io</h3>
                            <p className="text-sm mb-4">
                                BrandNav is an Ecom Leads Database with tons of amazing filters. Now you can get access to stores with just a simple click.
                            </p>

                            {/* Image placed below the text */}
                            <div className="mt-6">
                                <Image src="/images/icons/Frame 1.png" alt="Frame1" width={200} height={200} />
                            </div>

                            <div className="flex gap-4 mt-4">
                                <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-900">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-900">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" aria-label="GitHub" className="text-gray-500 hover:text-gray-900">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>

                        {/* Links (Blogs, Documentation, Resources, Legal) - Right side */}
                        <div className="col-span-1 lg:col-span-4 lg:ml-auto">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-700">
                                {/* Blogs */}
                                <div>
                                    <h3 className="font-bold text-sm mb-3">Blogs</h3>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-sm text-[#008EFF] hover:underline">All Blogs</a></li>
                                        <li><a href="#" className="text-sm text-[#008EFF] hover:underline">Cold Emailing</a></li>
                                    </ul>
                                </div>

                                {/* Documentation */}
                                <div>
                                    <h3 className="font-bold text-sm mb-3">Documentation</h3>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-sm text-[#008EFF] hover:underline">Getting Started</a></li>
                                    </ul>
                                </div>

                                {/* Resources */}
                                <div>
                                    <h3 className="font-bold text-sm mb-3">Resources</h3>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-sm text-[#008EFF] hover:underline">Latest Updates</a></li>
                                        <li><a href="#" className="text-sm text-[#008EFF] hover:underline">Roadmap</a></li>
                                        <li><a href="#" className="text-sm text-[#008EFF] hover:underline">About Us</a></li>
                                        <li><a href="#" className="text-sm text-[#008EFF] hover:underline">Join Us</a></li>
                                    </ul>
                                </div>

                                {/* Legal */}
                                <div>
                                    <h3 className="font-bold text-sm mb-3">Legal</h3>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-sm text-[#008EFF] hover:underline">Terms & Conditions</a></li>
                                        <li><a href="#" className="text-sm text-[#008EFF] hover:underline">Privacy Policy</a></li>
                                        <li><a href="#" className="text-sm text-[#008EFF] hover:underline">Refund Policy</a></li>
                                        <li><a href="#" className="text-sm text-[#008EFF] hover:underline">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-12 text-center text-sm text-[#1211278F]">
                        © 2022 BrandNav. All rights reserved
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PromoSection;
