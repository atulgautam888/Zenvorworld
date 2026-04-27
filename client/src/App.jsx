import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'; 
import WhyZenVor from './pages/WhyZenVor'; 
import ReachUs from './pages/ReachUs'; 
import './index.css';

function App() {
  useEffect(() => {
    // Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-style easing
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup
  }, []);

  return (
    <Router>
      <div className="w-full min-h-screen bg-bg-main text-text-main transition-colors duration-500">
        {/* Navigation Bar - Stays constant on all pages */}
        <Navbar />
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />

          {/* About Us Page */}
          <Route path="/about" element={<About />} />

          {/* Why ZenVor World Page */}
          <Route path="/why-zenvor" element={<WhyZenVor />} />

          {/* Reach Us Page - Path matched with your Nav code ('/contact') */}
          <Route path="/contact" element={<ReachUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;