import React from 'react';

const Contact = () => {
  return (
    <section className="py-5 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Stay In Touch</h2>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-orange-500"
            />
            <button 
              type="submit" 
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;