import React, { useState } from 'react';

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'UX Design',
    'Web Design',
    'App Development',
    'Game Design',
    'Graphic Design'
  ];

  const projects = [
    {
      id: 1,
      image: '/images/11 (1).png',
      category: 'Web Design',
      title: 'Web Template',
      overlay: true
    },
    {
      id: 2,
      image: '/images/11 (2).png',
      category: 'UX Design',
      title: 'UX Research'
    },
    {
      id: 3,
      image: '/images/11 (3).png',
      category: 'App Development',
      title: 'Mobile App'
    },
    {
      id: 4,
      image: '/images/11 (4).png',
      category: 'Graphic Design',
      title: 'Data Visualization'
    },
    {
      id: 5,
      image: '/images/11 (5).png',
      category: 'UX Design',
      title: 'User Testing'
    },
    {
      id: 6,
      image: '/images/11 (6).png',
      category: 'Game Design',
      title: 'Growth Chart'
    },
    {
      id: 7,
      image: '/images/11 (7).png',
      category: 'Web Design',
      title: 'Business Planning'
    },
    {
      id: 8,
      image: '/images/11 (8).png',
      category: 'App Development',
      title: 'Development'
    },
    {
      id: 9,
      image: '/images/11 (5).png',
      category: 'Graphic Design',
      title: 'Workspace Design'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
        <p className="text-orange-500 font-medium mb-2 flex items-center justify-center">
            <span className="w-8 h-px bg-orange-500 mr-2"></span>
            Our Case Study
            <span className="w-8 h-px bg-orange-500 ml-2"></span>
          </p>
          <h2 className="text-3xl font-bold text-gray-800">Our Recent Project</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === filter
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative overflow-hidden  group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              {project.overlay ? (
                <div className="absolute inset-0 mx-6 my-6 bg-orange-500 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              ) : (
                <div className="absolute inset-0 bg-orange-500 mx-6 my-6  bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;