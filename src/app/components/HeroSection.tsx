import React from "react";

const HomeSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-6xl font-bold text-center text-gray-800 mb-4">Weapons to grow <br/>your Business</h1>
      <p className="text-lg text-gray-500 text-center mb-6">
        Turbocharge your business growth.<br/> Our products help ignite sales and entrepreneurship.
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-600">
        Start for free
      </button>
      <p className="text-sm text-gray-400 mt-2 flex items-center">
        No credit card required | 
        <span className="ml-1 text-yellow-500">⭐⭐⭐⭐⭐</span> 4.8/5 G2 Rating
      </p>

      {/* Statistics Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-1 max-w-5xl">
        <img src="/images/icons/verifier card.svg" alt="Email" />

        <img src="/images/icons/screener card.svg" alt="Email" className='mt-20'/>

        <img src="/images/icons/blacklist shield card.svg" alt="Email" className='mt-20'/>
        <img src="/images/icons/enricher card.png" alt="Email" className='mt-0'/>
      </div>

      {/* Brand Logos */}
      <div className="mt-10 text-center">
        <p className="text-sm mb-4" style={{ color: "#666666" }}>
  Modern companies are using <span className="font-bold">BrandNav</span>
</p>

        <div className="flex justify-center space-x-6">
            <img src="/images/icons/logo 1.png" alt="Sentry Ecom" className="h-9" />
            <img src="/images/icons/logo 2.png" alt="Sentry Ecom" className="h-9" />
            <img src="/images/icons/logo 3.png" alt="Sentry Ecom" className="h-9" />
            <img src="/images/icons/logo 4.png" alt="Sentry Ecom" className="h-9" />
            <img src="/images/icons/logo 5.png" alt="Sentry Ecom" className="h-9" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
