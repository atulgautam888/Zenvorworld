import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  // Handle Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Theme Switching
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Offerings', path: '/services' },
    { name: 'Why ZenVor', path: '/why-us' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Reach Us', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 font-jakarta 
      ${scrolled 
        ? 'bg-bg-main/90 backdrop-blur-md py-3 shadow-lg border-b border-border-main' 
        : 'bg-transparent py-5'}`}>
      
      <div className="max-w-[1450px] mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section - ZenVor */}
        <Link to="/" className="flex flex-col items-center group no-underline">
          <div className="flex items-baseline">
            <span className={`${scrolled || theme === 'dark' ? 'text-text-main' : 'text-slate-900'} text-3xl font-black tracking-tighter transition-colors`}>ZEN</span>
            <span className="text-accent text-4xl font-black italic tracking-tighter ml-1">V</span>
            <span className={`${scrolled || theme === 'dark' ? 'text-text-main' : 'text-slate-900'} text-3xl font-black tracking-tighter transition-colors`}>OR</span>
          </div>
          <p className="text-[9px] text-slate-400 uppercase tracking-[0.3em] font-bold -mt-1 group-hover:text-accent transition-colors">
            Creators of Tomorrow
          </p>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {/* Home Icon */}
          <Link to="/" className="p-3 text-accent hover:bg-accent/10 rounded-full transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </Link>

          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`relative px-4 py-2 text-[12px] font-bold uppercase tracking-wider transition-all group no-underline
                ${scrolled || theme === 'dark' ? 'text-text-main/80 hover:text-text-main' : 'text-slate-700 hover:text-slate-900'}`}
            >
              {link.name}
              {/* Indicator */}
              <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-accent transform transition-transform duration-300 
                ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </div>

        {/* Theme Switcher & Action Button */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-card-bg border border-border-main shadow-sm hover:scale-110 active:scale-95 transition-all text-xl"
            title="Toggle Mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <Link to="/contact" className="hidden sm:block bg-accent text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-tighter hover:opacity-90 shadow-lg shadow-accent/20 transition-all">
            Get Quote
          </Link>

          {/* Mobile Toggle */}
          <div className="lg:hidden text-text-main">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;