import React from 'react';

const Hero = () => {
  return (
    <section className="py-4 md:py-24 bg-[#FFF7F4]" id="home">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Creative <span className="text-orange-500">Digital Marketing</span> Agency Helping Brands To Grow Seamlessly
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            We help businesses grow by providing innovative digital marketing solutions tailored to their needs.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="/images/Frame 19.png" alt="Digital Marketing Team" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;