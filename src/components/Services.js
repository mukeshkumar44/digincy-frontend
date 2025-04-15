import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "/images/ux-interface.png",
      number: "01",
      title: "UX Design",
      subtitle: "Mobile App, Website",
      description: "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut."
    },
    {
      icon: "/images/Group.png",
      number: "02",
      title: "Game Design",
      subtitle: "Mobile App, Website",
      description: "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut."
    },
    {
      icon: "/images/design.png",
      number: "03",
      title: "Graphic Design",
      subtitle: "Mobile App, Website",
      description: "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut."
    },
    {
      icon: "/images/web-design.png",
      number: "04",
      title: "Web Design",
      subtitle: "Mobile App, Website",
      description: "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut."
    },
    {
      icon: "/images/mobile-development.png",
      number: "05",
      title: "App Development",
      subtitle: "Mobile App, Website",
      description: "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut."
    },
    {
      icon: "/images/digital-marketing.png",
      number: "06",
      title: "Digital Marketing",
      subtitle: "Mobile App, Website",
      description: "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut."
    }
  ];

  return (
    <section className="py-8 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2 flex items-center justify-center">
            <span className="w-8 h-px bg-orange-500 mr-2"></span>
            Our Services
            <span className="w-8 h-px bg-orange-500 ml-2"></span>
          </p>
          <h2 className="text-3xl font-bold text-gray-800">What We Do</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div className="bg-white p-6 rounded-lg border border-gray-100 relative" key={index}>
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <img src={service.icon} alt={service.title} className="w-16 h-16" />
                </div>
                <div className="text-gray-200 text-6xl font-bold absolute top-4 right-6">
                  {service.number}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{service.subtitle}</p>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;