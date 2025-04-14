import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      image: "/images/1.png",
      date: "June 22, 2023",
      title: "Latest Digital Marketing Trends in 2023",
      excerpt: "Discover the latest trends that are shaping the digital marketing landscape this year."
    },
    {
      image: "/images/2.png",
      date: "June 15, 2023",
      title: "How to Improve Your SEO Strategy in 2024",
      excerpt: "Learn effective techniques to boost your website's search engine rankings this year."
    },
    {
      image: "/images/3.png",
      date: "June 10, 2023",
      title: "Social Media Marketing for Small Businesses",
      excerpt: "A comprehensive guide to leveraging social media for small business growth."
    }
  ];

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Insights from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div className="bg-white rounded-lg shadow-md overflow-hidden" key={index}>
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <h3 className="text-xl font-semibold my-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="bg-orange-500 text-white font-medium px-5 py-2 rounded-md hover:bg-orange-600 transition"> Read More
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