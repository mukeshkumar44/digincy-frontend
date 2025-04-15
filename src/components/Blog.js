import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      image: "/images/1.png",
      date: "January 25, 2021",
      title: "35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired",
      author: "Cristofer Westervelt",
      comments: "10 Comment",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est."
    },
    {
      image: "/images/2.png",
      date: "January 25, 2021",
      title: "Ridiculously powerful 2021 iPad Pro may drop this month",
      author: "Cristofer Westervelt",
      comments: "10 Comment",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est."
    },
    {
      image: "/images/3.png",
      date: "January 25, 2021",
      title: "Memphis Design: the defining look of the 1980s",
      author: "Cristofer Westervelt",
      comments: "10 Comment",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est."
    }
  ];

  return (
    <section className="py-8 bg-[#FFF7F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-medium mb-2 flex items-center justify-center">
            <span className="w-8 h-px bg-orange-500 mr-2"></span>
            Our Blog
            <span className="w-8 h-px bg-orange-500 ml-2"></span>
          </p>
          <h2 className="text-3xl font-bold text-gray-800">Every Singel Update From Here</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden" key={index}>
              <div className="overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="mr-3">{post.date}</span>
                  <span className="flex items-center mr-3">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                    {post.comments}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <button className="bg-orange-500 text-white font-medium px-5 py-2 rounded-md hover:bg-orange-600 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;