import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "/images/image.png",
      name: "John Smith",
      position: "CEO, TechCorp",
      rating: 5,
      text: "Working with Diginecy transformed our online presence. Their strategic approach helped us increase our conversion rate by 40%."
    },
    {
      avatar: "/images/image (1).png",
      name: "Sarah Johnson",
      position: "Marketing Director, Innovate",
      rating: 5,
      text: "The team at Diginecy delivered exceptional results. Our social media engagement has doubled since we started working with them."
    },
    {
      avatar: "/images/image (2).png",
      name: "Michael Brown",
      position: "Founder, StartUp",
      rating: 5,
      text: "Diginecy's SEO expertise helped us rank on the first page for our key terms. Highly recommended for any business looking to grow."
    }
  ];

  return (
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <img key={i} src="/images/Vector.png" alt="Star" className="w-5 h-5 mr-1" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;