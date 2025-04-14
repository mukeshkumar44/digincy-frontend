import React from 'react';

const TeamCapabilities = () => {
  const capabilities = [
    {
      percentage: "80%",
      title: "Software Development",
      color: "bg-orange-500"
    },
    {
      percentage: "90%",
      title: "Graphic Design",
      color: "bg-orange-500"
    },
    {
      percentage: "85%",
      title: "Game Design",
      color: "bg-orange-500"
    },
    {
      percentage: "100%",
      title: "Web Development",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <p className="text-orange-500 font-medium mb-2">Our Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Forward Thinking Team Of Designers & Developers</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut nisi, amet rhoncus volutpat neque. Ipsum in aliquam eget vitae purus felis eget massa felis. Eu mattis in malesuada facilisi proin vel.
            </p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="mb-4">
                  <div className="flex flex-col mb-2">
                    <span className="text-2xl font-bold text-orange-500">{capability.percentage}</span>
                    <span className="text-gray-600 text-sm">{capability.title}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className={`${capability.color} h-1.5 rounded-full`} 
                      style={{ width: capability.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="/images/Frame 21.png" 
              alt="Team Capabilities" 
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCapabilities;