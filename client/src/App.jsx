import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';

// Core Pages
import Home from './pages/Home';
import About from './pages/About'; 
import WhyZenVor from './pages/WhyZenVor'; 
import ReachUs from './pages/ReachUs'; 
import Portfolio from './pages/Portfolio'; 
import WebDevelopment from './pages/WebDevelopment'; 

// Service Pages
import Aimlsolutions from './pages/Aimlsolutions.jsx';
import Cloudservices from './pages/Cloudservices.jsx';
import Digitalmarketing from './pages/Digitalmarketing.jsx';
import Ecommercesolutions from './pages/Ecommercesolutions .jsx'; 
import Mobileappdevelopment from './pages/Mobileappdevelopment .jsx'; 
import Seoservices from './pages/Seoservices.jsx';
import Services from './pages/Services.jsx';
import Uiuxdesign from './pages/Uiuxdesign.jsx';
import Blog from './pages/Blog.jsx';

// Blog Detail Pages
import Businessautomationrevolution from './pages/Businessautomationrevolution.jsx';
import Digitalmarketingtrends from './pages/Digitalmarketingtrends .jsx'; 

import './index.css';

function App() {
  // --- THEME FIX: Force Light Mode on Start ---
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme || savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Smooth Scroll Initialization
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
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/why-zenvor" element={<WhyZenVor />} />
          <Route path="/contact" element={<ReachUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />

          {/* Service Routes */}
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/ai-ml-solutions" element={<Aimlsolutions />} />
          <Route path="/cloud-services" element={<Cloudservices />} />
          <Route path="/digital-marketing" element={<Digitalmarketing />} />
          <Route path="/ecommerce-solutions" element={<Ecommercesolutions />} />
          <Route path="/mobile-app-development" element={<Mobileappdevelopment />} />
          <Route path="/seo-services" element={<Seoservices />} />
          <Route path="/ui-ux-design" element={<Uiuxdesign />} />

          {/* Blog Detail Routes */}
          <Route 
            path="/blog/business-automation-revolution" 
            element={<Businessautomationrevolution />} 
          />
          <Route 
            path="/blog/digital-marketing-trends-2024" 
            element={<Digitalmarketingtrends />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;