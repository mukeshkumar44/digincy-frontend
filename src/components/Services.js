import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "/images/ux-interface.png",
      title: "UX/UI Design",
      description: "Optimize your website to rank higher in search engines"
    },
    {
      icon: "/images/Group.png",
      title: "Game Design",
      description: "Create stunning websites that convert visitors into customers"
    },
    {
      icon: "/images/design.png",
      title: "Graphic Desgin",
      description: "Engage with your audience on popular social platforms"
    },
    {
      icon: "/images/web-design.png",
      title: "Web Desgin",
      description: "Create valuable content that attracts and retains customers"
    },
    {
      icon: "/images/mobile-development.png",
      title: "App Development",
      description: "Track and analyze your marketing performance"
    },
    {
      icon: "/images/digital-marketing.png",
      title: "Digital Marketing",
      description: "Connect with your audience through targeted email campaigns"
    }
  ];

  return (
    <section className="py-4 bg-gray-50 md:-mt-14" id="services">
      <div className="container mx-auto px-4">
      <p className="text-orange-500 font-medium mb-2 flex items-center justify-center">
            <span className="w-8 h-px bg-orange-500 mr-2"></span>
            Your Services
            <span className="w-8 h-px bg-orange-500 ml-2"></span>
          </p>
        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" key={index}>
              <div className="ml-[135px]">
                <img src={service.icon} alt={service.title} className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;