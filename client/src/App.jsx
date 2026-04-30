import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';

// Core Pages
import Home from './pages/Home';
import About from './pages/About'; 
import WhyZenVor from './pages/WhyZenVor'; 
import ReachUs from './pages/ReachUs'; 
import Portfolio from './pages/Portfolio'; // Added Portfolio Import
import WebDevelopment from './pages/WebDevelopment'; 

// Service Pages - Matched exactly to your sidebar screenshots
import Aimlsolutions from './pages/Aimlsolutions.jsx';
import Cloudservices from './pages/Cloudservices.jsx';
import Digitalmarketing from './pages/Digitalmarketing.jsx';
import Ecommercesolutions from './pages/Ecommercesolutions .jsx'; // Note: Keep the space if you haven't renamed the file
import Mobileappdevelopment from './pages/Mobileappdevelopment .jsx'; // Note: Keep the space if you haven't renamed the file
import Seoservices from './pages/Seoservices.jsx';
import Services from './pages/Services.jsx';
import Uiuxdesign from './pages/Uiuxdesign.jsx';
import Blog from './pages/Blog.jsx';

import './index.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <div className="w-full min-h-screen bg-bg-main text-text-main transition-colors duration-500">
        <Navbar />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio Route Added Here */}
          <Route path="/why-zenvor" element={<WhyZenVor />} />
          <Route path="/contact" element={<ReachUs />} />
          <Route path="/services" element={<Services />} />

          {/* Service Routes */}
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/ai-ml-solutions" element={<Aimlsolutions />} />
          <Route path="/cloud-services" element={<Cloudservices />} />
          <Route path="/digital-marketing" element={<Digitalmarketing />} />
          <Route path="/ecommerce-solutions" element={<Ecommercesolutions />} />
          <Route path="/mobile-app-development" element={<Mobileappdevelopment />} />
          <Route path="/seo-services" element={<Seoservices />} />
          <Route path="/ui-ux-design" element={<Uiuxdesign />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;