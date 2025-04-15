import React from 'react';

const Contact = () => {
  return (
    <section className="py-8" id="contact">
      <div className="container mx-auto px-4">
        <div className="bg-orange-500 rounded-lg p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <p className="text-white text-sm mb-2">Subscribe Newsletter</p>
              <h2 className="text-4xl font-bold text-white">Lets Stay In Touch</h2>
            </div>
            <div className="w-full md:w-auto mt-6 md:mt-0">
              <form className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="flex-grow  px-4 py-3 rounded-l-md border-none focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-orange-600 text-white px-6 py-3 rounded-r-md font-medium hover:bg-orange-700 transition-colors border border-white"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;