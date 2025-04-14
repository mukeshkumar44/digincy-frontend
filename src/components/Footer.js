import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <img src="/images/Digiency(Dark) 2.png" alt="Diginecy Logo" className="h-10 mb-4" />
            <p className="text-gray-400 max-w-xs">We help businesses grow through innovative digital marketing solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@diginecy.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Marketing St, Digital City</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2023 Diginecy. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition">
              <img src="https://th.bing.com/th/id/OIP.i0iz1VjijKJLVqdiibW7LAHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Facebook" className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition">
              <img src="https://th.bing.com/th/id/OIP.t1fyvKgDnUoIiC049MG48AHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Twitter" className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition">
              <img src="https://th.bing.com/th/id/OIP.JCI8klaaA1w4LCtljpeJoAHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition">
              <img src="https://th.bing.com/th/id/OIP.ozDiSGJlUqI6815cRlJiNAHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="LinkedIn" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;