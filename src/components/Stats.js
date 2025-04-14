import React from 'react';

const Stats = () => {
  const stats = [
    {
      icon: "/images/man.png",
      count: "500+",
      label: "Projects Completed"
    },
    {
      icon: "/images/target.png",
      count: "300+",
      label: "Happy Clients"
    },
    {
      icon: "/images/analysis.png",
      count: "25+",
      label: "Awards & Recognition"
    },
    {
      icon: "/images/data-analytics.png",
      count: "50+",
      label: "Team Members"
    }
  ];

  return (
    <section className="py-8 bg-orange-500 md:w-[1250px] mx-auto text-white">
      <div className="container mx-auto  px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="bg-white/20 p-4 rounded-full inline-flex items-center justify-center mb-4 w-16 h-16">
                <img src={stat.icon} alt={stat.label} className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.count}</h3>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;