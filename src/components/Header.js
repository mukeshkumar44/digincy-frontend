import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 shadow-sm relative z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="w-32">
          <img src="/images/Digiency(Dark)  22.png" alt="Diginecy Logo" className="w-full" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-gray-800 hover:text-orange-500 font-medium">Home</a></li>
            <li><a href="#about" className="text-gray-800 hover:text-orange-500 font-medium">About</a></li>
            <li><a href="#services" className="text-gray-800 hover:text-orange-500 font-medium">Services</a></li>
            <li><a href="#work" className="text-gray-800 hover:text-orange-500 font-medium">Work</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-orange-500 font-medium">Contact</a></li>
          </ul>
        </nav>
        
        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
          Let's Talk
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 z-50">
          <ul className="flex flex-col space-y-4">
            <li><a href="#home" className="text-gray-800 hover:text-orange-500 font-medium block">Home</a></li>
            <li><a href="#about" className="text-gray-800 hover:text-orange-500 font-medium block">About</a></li>
            <li><a href="#services" className="text-gray-800 hover:text-orange-500 font-medium block">Services</a></li>
            <li><a href="#work" className="text-gray-800 hover:text-orange-500 font-medium block">Work</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-orange-500 font-medium block">Contact</a></li>
            <li>
              <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
                Let's Talk
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;