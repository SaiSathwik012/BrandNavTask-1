"use client";
import Image from "next/image";
const PromoSection: React.FC = () => {
    return (
        <div className="bg-gray-50">
            {/* Promo Banner */}
            <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
                <div
                    className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-3xl shadow-lg"
                    style={{
                        backgroundImage: "url('/images/icons/Group 1000002076.svg')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute inset-0 bg-opacity-20"></div>
                    <div className="relative z-10 py-16 px-10 text-center">
                        <h2 className="text-4xl font-extrabold mb-4">Want to see BrandNav in action?</h2>
                        <p className="text-xl font-medium mb-6">Try BrandNav for free today!</p>
                        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all">
                            Grab free leads
                        </button>
                        <div className="mt-6 flex justify-center items-center gap-4 text-sm">
                            <span className="flex items-center gap-2">
                                <i className="material-icons">credit_card</i>
                                No credit card required
                            </span>
                            <span>|</span>
                            <span className="flex items-center gap-2">
                                <i className="material-icons">star</i>
                                4.8/5 G2 Ratings
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-white">
                <div className="max-w-6xl mx-auto px-6 mt-16">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-gray-700">
                        {/* BrandNav Info */}
                        <div>
                            <h3 className="font-bold text-lg mb-3">BrandNav.io</h3>
                            <p className="text-sm mb-4">
                                BrandNav is an Ecom Leads Database with tons of amazing filters. Now you can get access to stores with just a simple click.
                            </p>
                            <div className="mt-20">
                                <Image src="/images/icons/Frame 1.png" alt="Frame1" width={100} height={100}/>
                            </div>
                            <div className="flex gap-4">
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

                        {/* Links */}
                        <div>
                            <h3 className="font-bold text-sm mb-3">Blogs</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm text-gray-600 hover:underline">All Blogs</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:underline">Cold Emailing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-3">Documentation</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm text-gray-600 hover:underline">Getting Started</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-3">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm text-gray-600 hover:underline">Latest Updates</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:underline">Roadmap</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:underline">About Us</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:underline">Join Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-3">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm text-gray-600 hover:underline">Terms & Conditions</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:underline">Refund Policy</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:underline">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-12 text-center text-sm text-gray-500">
                        © 2022 BrandNav. All rights reserved
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PromoSection;
