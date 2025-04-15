import React from 'react';

const Portfolio = () => {
  return (
    <section className="py-4 bg-[#FFF7F4]"  id="work">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-orange-500 font-medium mb-2 flex items-center justify-center">
            <span className="w-8 h-px bg-orange-500 mr-2"></span>
            About us
            <span className="w-8 h-px bg-orange-500 ml-2"></span>
          </p>
            <h2 className="text-3xl font-bold mb-8">Grow Your Business With
            Our Agency</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <img src="/images/checkbox-circle-fill.png" alt="Check" className="w-6 h-6 mr-3" />
                <span className="text-gray-700">Creative Design Solutions</span>
              </li>
              <li className="flex items-center">
                <img src="/images/checkbox-circle-fill.png" alt="Check" className="w-6 h-6 mr-3" />
                <span className="text-gray-700">UI/UX design with global trends</span>
              </li>
              <li className="flex items-center">
                <img src="/images/checkbox-circle-fill.png" alt="Check" className="w-6 h-6 mr-3" />
                <span className="text-gray-700">Web and email hosting service</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="/images/pana@2x.png" alt="Our Work" className="w-full rounded-lg" />
          </div>
        </div>
      
       
      </div>
    </section>
  );
};

export default Portfolio;