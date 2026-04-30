import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, FaMobileAlt, FaChevronDown, 
  FaHome, FaLayerGroup, FaChevronRight, FaBrain,
  FaBars, FaTimes, FaSun, FaMoon
} from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const mainOfferings = [
    {
      title: "Web Development",
      desc: "Static or Dynamic Web Portals.",
      icon: <FaCode />,
      path: "/web-development",
      color: "text-blue-400"
    },
    {
      title: "App Development",
      desc: "Native and Cross-platform solutions.",
      icon: <FaMobileAlt />,
      path: "/mobile-app-development",
      color: "text-green-400"
    },
    {
      title: "AI & ML Solutions",
      desc: "Custom AI models integration.",
      icon: <FaBrain />,
      path: "/ai-ml-solutions",
      color: "text-purple-400"
    }
  ];

  const quickServices = [
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "UI/UX Design", path: "/ui-ux-design" },
    { name: "Cloud Services", path: "/cloud-services" },
    { name: "E-commerce Solutions", path: "/ecommerce-solutions" },
    { name: "SEO Services", path: "/seo-services" },
    { name: "Our Services Overview", path: "/services" },
  ];

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' }, 
    { name: 'Blog', path: '/blog' },
    { name: 'Why ZenVor', path: '/why-zenvor' },
    { name: 'Reach Us', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 font-jakarta 
        ${scrolled || mobileMenuOpen
          ? 'bg-bg-main/95 backdrop-blur-xl py-3 shadow-lg border-b border-border-main' 
          : 'bg-transparent py-5'}`}>
        
        <div className="max-w-[1450px] mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group no-underline z-[1001]">
            <div className="flex items-baseline">
              <span className="text-text-main text-2xl md:text-3xl font-black tracking-tighter">ZEN</span>
              <span className="text-accent text-3xl md:text-4xl font-black italic tracking-tighter ml-1">V</span>
              <span className="text-text-main text-2xl md:text-3xl font-black tracking-tighter">OR</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className={`p-3 rounded-xl transition-all ${location.pathname === '/' ? 'text-accent bg-accent/10' : 'text-text-main/70 hover:text-accent'}`}>
              <FaHome size={18} />
            </Link>

            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`relative px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all group no-underline
                  ${location.pathname === link.path ? 'text-accent' : 'text-text-main/80 hover:text-accent'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-accent transform transition-transform duration-300 
                  ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}

            {/* Offerings Dropdown */}
            <div className="relative" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              <div className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2
                ${location.pathname.includes('service') || location.pathname.includes('dev') ? 'text-accent' : 'text-text-main/80 hover:text-accent'}`}>
                Offerings <FaChevronDown size={10} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
              </div>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[850px] bg-card-bg border border-border-main rounded-[32px] shadow-2xl overflow-hidden flex z-[2000]"
                  >
                    <div className="flex-[2.5] grid grid-cols-3 gap-4 p-8 bg-white/[0.01]">
                      {mainOfferings.map((item, i) => (
                        <Link key={i} to={item.path} className="group/card flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/5 no-underline">
                          <div className={`text-4xl mb-5 ${item.color} group-hover/card:scale-110 transition-transform`}>{item.icon}</div>
                          <h4 className="text-[12px] font-black uppercase italic mb-2 text-text-main">{item.title}</h4>
                          <p className="text-[10px] opacity-40 font-medium">{item.desc}</p>
                        </Link>
                      ))}
                    </div>
                    <div className="flex-1 bg-bg-main border-l border-border-main p-8">
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-accent mb-6">More Solutions</h5>
                      <ul className="space-y-4 list-none p-0">
                        {quickServices.map((s, i) => (
                          <li key={i}><Link to={s.path} className="text-[11px] font-bold opacity-40 hover:opacity-100 hover:text-accent no-underline block">{s.name}</Link></li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side Tools */}
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="w-10 h-10 flex items-center justify-center rounded-xl bg-card-bg border border-border-main text-text-main hover:border-accent transition-all">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>

            <Link to="/contact" className="hidden md:block bg-accent text-black px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all no-underline shadow-lg shadow-accent/20">
              Get Quote
            </Link>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-accent text-black z-[1001]"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY - FULLY FUNCTIONAL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[999] bg-bg-main flex flex-col lg:hidden"
          >
            <div className="flex-1 overflow-y-auto pt-24 pb-10 px-6 custom-scrollbar">
              <div className="flex flex-col space-y-10">
                
                {/* 1. Primary Links */}
                <div className="space-y-4">
                  <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">Explore ZenVor</p>
                  <div className="grid grid-cols-1 gap-y-4">
                    <Link to="/" className="text-4xl font-black text-text-main no-underline hover:text-accent transition-colors italic">Home.</Link>
                    {navLinks.map((link) => (
                      <Link key={link.name} to={link.path} className="text-4xl font-black text-text-main no-underline hover:text-accent transition-colors italic">
                        {link.name}.
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-border-main w-full opacity-50"></div>

                {/* 2. Offerings with Icons */}
                <div className="space-y-6">
                  <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">Core Offerings</p>
                  <div className="grid gap-4">
                    {mainOfferings.map((item, i) => (
                      <Link key={i} to={item.path} className="flex items-center gap-5 p-5 rounded-2xl bg-card-bg border border-border-main no-underline group active:scale-95 transition-transform">
                        <div className={`text-3xl ${item.color}`}>{item.icon}</div>
                        <div>
                          <span className="block font-black text-text-main text-sm uppercase italic">{item.title}</span>
                          <span className="block text-[10px] opacity-40 font-medium">{item.desc}</span>
                        </div>
                        <FaChevronRight className="ml-auto text-accent opacity-0 group-hover:opacity-100 transition-opacity" size={10} />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 3. Quick List */}
                <div className="space-y-6">
                  <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">Additional Solutions</p>
                  <div className="grid grid-cols-2 gap-3">
                    {quickServices.map((service, i) => (
                      <Link key={i} to={service.path} className="text-[11px] font-bold p-4 rounded-xl bg-white/5 border border-border-main text-text-main/70 no-underline active:bg-accent active:text-black transition-all">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 4. Action Buttons */}
                <div className="pt-6 space-y-4">
                  <Link to="/contact" className="w-full bg-accent text-black py-5 rounded-2xl font-black text-center uppercase tracking-widest no-underline shadow-xl shadow-accent/20 block text-sm">
                    Start a Project
                  </Link>
                  <div className="text-center">
                    <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.4em]">© 2026 ZenVor Studio — Creators of Tomorrow</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;