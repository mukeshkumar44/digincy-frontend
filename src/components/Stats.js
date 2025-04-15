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
    <section className="py-12 mt-8 bg-orange-500 w-full md:w-[90%] lg:w-[1250px] rounded-lg mx-auto text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center py-4 md:py-0">
                <img src={stat.icon} alt={stat.label} className="w-12 h-12 mb-3" />
                <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
                <p className="text-white">{stat.label}</p>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-1 h-28 bg-white"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;