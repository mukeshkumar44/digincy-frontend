import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const testimonials = [
    {
      avatar: "/images/image.png", // Updated image path
      name: "Phillip Levin",
      position: "CEO / Creative IT",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus."
    },
    {
      avatar: "/images/image (1).png", // Updated image path
      name: "Lincoln Lipshutz",
      position: "CEO / Creative IT",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus."
    },
    {
      avatar: "/images/image (1).png", // Updated image path
      name: "Craig Siphron",
      position: "CEO / Creative IT",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus."
    },
    // Keep your additional testimonials
    {
      avatar: "/images/image (2).png", // Updated image path
      name: "John Smith",
      position: "CEO, TechCorp",
      rating: 5,
      text: "Working with Diginecy transformed our online presence. Their strategic approach helped us increase our conversion rate by 40%."
    },
    {
      avatar: "/images/image (2).png", // Updated image path
      name: "Sarah Johnson",
      position: "Marketing Director, Innovate",
      rating: 5,
      text: "The team at Diginecy delivered exceptional results. Our social media engagement has doubled since we started working with them."
    },
    {
      avatar: "/images/image (1).png", // Updated image path
      name: "Michael Brown",
      position: "Founder, StartUp",
      rating: 5,
      text: "Diginecy's SEO expertise helped us rank on the first page for our key terms. Highly recommended for any business looking."
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      if (isMobile) {
        return prev >= testimonials.length - 1 ? 0 : prev + 1;
      } else {
        return prev >= testimonials.length - 3 ? 0 : prev + 1;
      }
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      if (isMobile) {
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      } else {
        return prev === 0 ? testimonials.length - 3 : prev - 1;
      }
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  // Get current visible testimonials (1 for mobile, 3 for desktop)
  const visibleCount = isMobile ? 1 : 3;
  const visibleTestimonials = testimonials.slice(currentSlide, currentSlide + visibleCount);

  return (
    <section className="py-8 bg-[#FFF7F4] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-medium mb-2 flex items-center justify-center">
            <span className="w-8 h-px bg-orange-500 mr-2"></span>
            Our Testimonial
            <span className="w-8 h-px bg-orange-500 ml-2"></span>
          </p>
          <h2 className="text-3xl font-bold text-gray-800">What Our Client Saying</h2>
        </div>
        
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-2 md:-left-5 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10 focus:outline-none"
            aria-label="Previous testimonial"
            disabled={isTransitioning}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ 
                transform: `translateX(-${currentSlide * (100 / (isMobile ? testimonials.length : testimonials.length / 3))}%)`,
                width: `${(testimonials.length / visibleCount) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-3" style={{ width: `${100 / testimonials.length * visibleCount}%` }}>
                  <div className="bg-white p-4 md:p-8 rounded-lg shadow-sm h-full">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 md:w-5 h-4 md:h-5 text-orange-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">{testimonial.text}</p>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/default-avatar.jpg"; // Fallback image
                        }} 
                      />
                      <div>
                        <h3 className="font-semibold text-orange-500 text-sm md:text-base">{testimonial.name}</h3>
                        <p className="text-gray-600 text-xs md:text-sm">{testimonial.position}</p>
                      </div>
                      <div className="ml-auto text-gray-300 text-4xl md:text-5xl">
                        <span className="text-gray-300">
                          <img src="/images/double-quotes-l.png" alt="rewe" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-2 md:-right-5 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center z-10 focus:outline-none"
            aria-label="Next testimonial"
            disabled={isTransitioning}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;