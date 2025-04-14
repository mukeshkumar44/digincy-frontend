import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectGallery from './components/ProjectGallery';
import TeamCapabilities from './components/TeamCapabilities';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <ProjectGallery />
      <Testimonials />
      <Stats />
      <TeamCapabilities />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;