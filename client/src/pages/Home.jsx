import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

// --- IMPORT SEPARATE FOOTER HERE ---
import Footer from '../components/Footer'; 

// GSAP & Smooth Scroll Imports
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Video Import
import heroVid from '../assets/18069233-uhd_2160_3840_24fps.mp4'; 

gsap.registerPlugin(ScrollTrigger);

// --- MAIN HOME COMPONENT ---
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Home = () => {
  const mainRef = useRef(null);
  const cursorRef = useRef(null);
  const heroRevealRef = useRef(null); 
  const videoRef = useRef(null); // Ref for the video element
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { scrollY, scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.1], [0, 60]);

  // Infinite 10-second loop logic
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleTimeUpdate = () => {
        if (video.currentTime >= 10) {
          video.currentTime = 0;
          video.play();
        }
      };
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);

  useGSAP(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.6, ease: "power3.out" });
    };
    window.addEventListener('mousemove', moveCursor);

    gsap.from(".hero-title", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out", delay: 0.4 });

    const sections = gsap.utils.toArray('section');
    sections.forEach((section) => {
      gsap.from(section, { opacity: 0.7, scale: 0.97, scrollTrigger: { trigger: section, start: "top bottom", end: "top center", scrub: 1 } });
    });

    return () => window.removeEventListener('mousemove', moveCursor);
  }, { scope: mainRef });

  const scrollDown = () => { heroRevealRef.current?.scrollIntoView({ behavior: 'smooth' }); };

  const socialServices = [
    { title: 'Facebook Advertising', icon: '📘', desc: 'ZenVor crafts data-driven advertising campaigns with precision targeting, A/B testing, and conversion optimization to maximize your ROI globally.' },
    { title: 'Twitter (X) Marketing', icon: '🐦', desc: 'ZenVor develops comprehensive X marketing strategies including trending hashtag campaigns and influencer collaborations to build authentic connections.' },
    { title: 'Instagram Growth', icon: '📸', desc: 'Visual storytelling meets performance marketing. Our strategies include high-converting reels and creative content that drives engagement rates through the roof.' },
    { title: 'LinkedIn Lead Generation', icon: '💼', desc: 'B2B marketing excellence. We establish your thought leadership through strategic content marketing and executive branding to generate qualified global leads.' },
    { title: 'YouTube Video Marketing', icon: '🎥', desc: 'Harness the power of video content. From SEO-optimized production to global Ad campaigns, we create compelling content that captures world-wide attention.' },
    { title: 'Content Marketing Strategy', icon: '✍️', desc: 'Strategic content that builds authority and trust. Our data-driven approach ensures every piece resonates with your international target audience.' }
  ];

  const clients = [
    { name: 'V Care trip', icon: '✈️', desc: 'World class travel solutions.' },
    { name: 'Galaxy Tools', icon: '🔧', desc: 'Precision engineering.' },
    { name: 'Syndicated', icon: '📊', desc: 'Market insights.' },
    { name: 'WAC', icon: '🎓', desc: 'Event booking.' },
    { name: 'Imarc', icon: '📈', desc: 'Industry facts.' },
    { name: 'Kyurion', icon: '🛡️', desc: 'Tech & Robotics.' }
  ];

  const achievements = [
    { name: 'Innovation Award', icon: '🏆', desc: 'Best Digital Agency 2024', year: '2024' },
    { name: 'Client Excellence', icon: '⭐', desc: '98% Satisfaction Rate', year: '2024' },
    { name: 'Growth Leader', icon: '📈', desc: 'Global Tech Excellence', year: '2023' },
    { name: 'Quality Certified', icon: '✅', desc: 'ISO 9001:2015', year: '2023' },
    { name: 'Industry Pioneer', icon: '💡', desc: 'Digital Innovation Award', year: '2023' },
    { name: 'Customer Trust', icon: '🤝', desc: 'Google Partner Certified', year: '2024' }
  ];

  const platforms = [
    { name: 'Facebook', icon: '👥', desc: "Targeted outreach." },
    { name: 'Twitter', icon: '🐦', desc: 'Brand management.' },
    { name: 'LinkedIn', icon: '🔗', desc: 'Professional authority.' },
    { name: 'YouTube', icon: '🎥', desc: 'Video storytelling.' },
    { name: 'Pinterest', icon: '📌', desc: 'Visual discovery.' },
    { name: 'Instagram', icon: '📸', desc: 'ROI reel strategies.' }
  ];

  const processSteps = [
    { step: 'Step 1', title: 'Consultation', icon: '🤝', desc: "Personal attention to understand your unique business requirements." },
    { step: 'Step 2', title: 'Architecture', icon: '💡', desc: 'Designing a strategic plan with tech-stack selection and project timelines.' },
    { step: 'Step 3', title: 'Iteration', icon: '👨‍💻', desc: 'Involving clients at every development stage to ensure envisioned results.' },
    { step: 'Step 4', title: 'Launch', icon: '🚀', desc: 'Seamless deployment of tested products within committed timeframes.' }
  ];

  const services = [
    { title: 'Digital Marketing', icon: '📱', desc: 'Comprehensive digital strategies including SEO, SEM, and influencer partnerships that drive measurable global results.', path: '/digital-marketing' },
    { title: 'Software Development', icon: '⚙️', desc: 'Custom enterprise-grade software solutions built with cutting-edge technologies and scalable architectures.', path: '/services' },
    { title: 'Web Development', icon: '💻', desc: 'Responsive, lightning-fast websites built with modern frameworks and convert international visitors into customers.', path: '/web-development' },
    { title: 'Mobile App Dev', icon: '📲', desc: 'Feature-rich native and cross-platform mobile applications that engage users and drive business growth globally.', path: '/mobile-app-development' },
    { title: 'E-commerce Solutions', icon: '🛒', desc: 'Complete e-commerce ecosystems with secure payment gateways and analytics dashboards for global scaling.', path: '/ecommerce-solutions' },
    { title: 'Brand Strategy', icon: '🎯', desc: 'End-to-end brand development that resonates with your target audience and stands out in the international market.', path: '/services' }
  ];

  return (
    <div ref={mainRef} className="relative w-full bg-bg-main text-text-main selection:bg-accent selection:text-black overflow-x-hidden transition-colors duration-500">
      
      <div ref={cursorRef} className="fixed w-8 h-8 border border-accent rounded-full pointer-events-none z-[9999] hidden md:block -translate-x-1/2 -translate-y-1/2 mix-blend-difference"></div>

      {/* 1. STICKY VIDEO LAYER */}
      <motion.section 
        style={{ scale, borderRadius }} 
        className="sticky top-0 h-screen w-screen z-20 bg-black overflow-hidden left-0"
      >
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        >
          <source src={heroVid} type="video/mp4" />
        </video>

        <motion.div 
          style={{ opacity: overlayOpacity }} 
          className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white"
        >
          <h1 className="text-[15vw] font-black tracking-tighter text-white/5 absolute inset-0 flex items-center justify-center uppercase select-none italic pointer-events-none">ZenVor</h1>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex items-center justify-center text-5xl mb-6 shadow-2xl rotate-3">🚀</div>
            <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-[0.4em] drop-shadow-lg text-center">Future-Ready Solutions</h2>
            <motion.div 
              onClick={scrollDown}
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }} 
              className="mt-12 text-white text-4xl cursor-pointer hover:scale-125 transition-transform"
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <div className="relative z-30 bg-bg-main transition-colors duration-500">
        {/* 2. HERO REVEAL SECTION - REDUCED FONT SIZE */}
        <section ref={heroRevealRef} className="min-h-screen flex items-center justify-center pt-24 px-6">
          <div className="container mx-auto z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="backdrop-blur-xl bg-card-bg border border-border-main p-12 md:p-24 rounded-[60px] shadow-2xl relative group">
              <span className="inline-block px-4 py-1.5 mb-8 text-[11px] font-black bg-accent text-black rounded-full uppercase tracking-[0.2em]">✨ Innovation Agency</span>
              <h1 className="hero-title text-4xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-10 text-text-main uppercase italic">
                Elevate Your <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-accent to-orange-500">Digital Footprint</span> <br /> 
                with ZenVor.
              </h1>
              <p className="opacity-60 text-lg md:text-xl max-w-4xl mx-auto font-medium mb-12">Your dedicated partner for end-to-end IT solutions. We combine innovation with unwavering support to scale your business.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="px-12 py-5 bg-text-main text-bg-main font-black rounded-full shadow-2xl hover:scale-105 transition-all no-underline">Let's Talk</Link>
                <Link to="/portfolio" className="px-12 py-5 border-2 border-border-main rounded-full font-bold text-inherit hover:bg-card-bg transition-all no-underline">View Work</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. WHO WE ARE - ENHANCED CONTENT */}
        <section className="py-32 border-t border-border-main">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto bg-card-bg p-16 md:p-20 rounded-[60px] border border-border-main shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] group-hover:bg-accent/10 transition-colors"></div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-12 uppercase text-text-main italic tracking-tighter">Who We Are</h2>
              
              <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-medium mb-8">
                <span className="text-accent font-black">ZenVor Studio</span> is a premier global technology collective dedicated to transforming digital visions into reality. We are a team of passionate developers, creative designers, and strategic marketers who architect high-performance digital ecosystems for visionaries worldwide.
              </p>
              
              <div className="w-24 h-1.5 bg-accent mx-auto my-10 rounded-full"></div>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12 mb-10">
                <div className="bg-bg-main/50 p-8 rounded-3xl border border-border-main/50">
                  <div className="text-5xl mb-4">🎯</div>
                  <h4 className="text-lg font-black uppercase mb-3 text-text-main">Our Mission</h4>
                  <p className="text-sm opacity-60 leading-relaxed">
                    Empowering businesses through cutting-edge technology and innovative digital solutions that drive measurable growth and success.
                  </p>
                </div>
                
                <div className="bg-bg-main/50 p-8 rounded-3xl border border-border-main/50">
                  <div className="text-5xl mb-4">👁️</div>
                  <h4 className="text-lg font-black uppercase mb-3 text-text-main">Our Vision</h4>
                  <p className="text-sm opacity-60 leading-relaxed">
                    To be the world's most trusted digital partner, known for excellence, innovation, and transformative solutions.
                  </p>
                </div>
                
                <div className="bg-bg-main/50 p-8 rounded-3xl border border-border-main/50">
                  <div className="text-5xl mb-4">💎</div>
                  <h4 className="text-lg font-black uppercase mb-3 text-text-main">Our Values</h4>
                  <p className="text-sm opacity-60 leading-relaxed">
                    Innovation, integrity, excellence, and customer success are the pillars that guide every project we undertake.
                  </p>
                </div>
              </div>
              
              <p className="mt-10 text-base md:text-lg opacity-60 max-w-4xl mx-auto leading-relaxed">
                By blending cutting-edge engineering with strategic marketing, we transform ambitious startups and established enterprises into industry leaders. We don't just build software; we build sustainable competitive advantages. Our holistic approach combines technical excellence with creative brilliance, ensuring that every solution we deliver not only meets but exceeds expectations.
              </p>
              
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-full">
                  <span className="text-accent font-bold text-sm">🌍 Global Reach</span>
                </div>
                <div className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-full">
                  <span className="text-accent font-bold text-sm">⚡ Rapid Delivery</span>
                </div>
                <div className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-full">
                  <span className="text-accent font-bold text-sm">🤝 24/7 Support</span>
                </div>
                <div className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-full">
                  <span className="text-accent font-bold text-sm">🏆 Award-Winning</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. PROCESS */}
        <section className="py-40 border-t border-border-main">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="mb-32"><h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-text-main italic">How We Work</h2><p className="text-accent font-bold tracking-[0.3em] uppercase mt-2">The Methodology</p></motion.div>
            <div className="grid md:grid-cols-4 gap-12 relative">
              <div className="hidden md:block absolute top-1/4 left-0 w-full h-[2px] bg-accent/20 z-0"></div>
              {processSteps.map((item, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className="relative z-10 flex flex-col items-center group">
                  <span className="text-sm font-black opacity-40 uppercase mb-4">{item.step}</span>
                  <div className="w-5 h-5 rounded-full bg-accent mb-12 shadow-[0_0_15px_#FFCC00]"></div>
                  <div className="text-7xl mb-10 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-2xl font-black uppercase text-text-main mb-6 italic tracking-tight">{item.title}</h4>
                  <p className="opacity-50 text-sm leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. DYNAMIC DIGITAL MARKETING SERVICES */}
        <section className="relative py-40 border-y border-border-main">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div {...fadeInUp} className="mb-24">
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-text-main">Digital Marketing Excellence</h2>
              <p className="text-accent font-bold tracking-[0.2em] uppercase mt-2">360° Marketing Solutions</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {socialServices.map((social, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className="bg-card-bg backdrop-blur-xl border border-border-main p-10 md:p-14 rounded-[40px] group hover:border-accent transition-all duration-500 flex flex-col md:flex-row gap-8 items-start">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-500 shrink-0">{social.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-accent text-xl font-bold italic">"</span>
                        <h3 className="text-2xl font-black uppercase text-text-main italic">{social.title}</h3>
                    </div>
                    <p className="opacity-60 text-sm md:text-base leading-relaxed mb-6 font-medium text-justify">
                      {social.desc}
                    </p>
                    <div className="h-[2px] w-12 bg-accent group-hover:w-full transition-all duration-700"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. OUR CLIENTS - ENHANCED VERSION */}
        <section className="py-40 relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 animate-pulse"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div {...fadeInUp} className="mb-20">
              <h2 className="text-5xl md:text-8xl font-black uppercase text-text-main mb-6 italic tracking-tighter">Our Clients</h2>
              <p className="text-accent font-bold tracking-[0.3em] uppercase text-sm">Trusted Partnerships Worldwide</p>
              <div className="w-32 h-1.5 bg-accent mx-auto mt-6 rounded-full shadow-[0_0_15px_#FFCC00]"></div>
            </motion.div>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {clients.map((c, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -15, scale: 1.05 }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="bg-card-bg border-2 border-border-main rounded-[30px] p-8 md:p-10 h-full flex flex-col items-center justify-center transition-all duration-500 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(255,204,0,0.2)] relative overflow-hidden">
                    
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-500 rounded-[30px]"></div>
                    
                    {/* Icon with animation */}
                    <div className="relative z-10 text-7xl md:text-8xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                      {c.icon}
                    </div>
                    
                    {/* Client Name */}
                    <h4 className="relative z-10 text-xs md:text-sm font-black uppercase opacity-50 group-hover:opacity-100 group-hover:text-accent tracking-[0.2em] mb-3 transition-all duration-300">
                      {c.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="relative z-10 text-[10px] md:text-xs opacity-40 group-hover:opacity-70 font-bold leading-tight transition-all duration-300">
                      {c.desc}
                    </p>

                    {/* Decorative corner element */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-accent transition-all duration-700 rounded-full"></div>
                  </div>

                  {/* Floating badge on hover */}
                  <div className="absolute -top-3 -right-3 bg-accent text-black text-[9px] font-black px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 shadow-lg">
                    ✓ Active
                  </div>
                </motion.div>
              ))}
            </div>


          </div>
        </section>

        {/* 7. ACHIEVEMENTS & PLATFORMS */}
        <section className="py-40 border-t border-border-main">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24 divide-x-0 md:divide-x divide-border-main">
            <div className="pr-0 md:pr-12">
              <h3 className="text-4xl font-black mb-20 uppercase tracking-tighter text-text-main italic">Awards & Recognition</h3>
              <div className="grid grid-cols-2 gap-10">
                {achievements.map((t, i) => (
                  <div key={i} className="text-center group">
                    <div className="w-24 h-24 bg-card-bg border-2 border-border-main rounded-[24px] flex items-center justify-center text-4xl mb-6 mx-auto group-hover:border-accent group-hover:bg-text-main group-hover:text-bg-main transition-all relative">
                      {t.icon}
                      <span className="absolute -top-2 -right-2 bg-accent text-black text-[8px] font-black px-2 py-0.5 rounded-full">{t.year}</span>
                    </div>
                    <h5 className="font-black text-xs uppercase text-text-main mb-2">{t.name}</h5>
                    <p className="text-[9px] opacity-50 font-bold leading-tight px-2">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pl-0 md:pl-12 mt-24 md:mt-0">
              <h3 className="text-4xl font-black mb-20 uppercase tracking-tighter text-text-main italic">Social Platforms</h3>
              <div className="grid grid-cols-3 gap-10">
                {platforms.map((p, i) => (
                  <div key={i} className="text-center group">
                    <div className="w-20 h-20 bg-card-bg border-2 border-border-main rounded-[24px] flex items-center justify-center text-4xl mb-6 mx-auto group-hover:border-accent group-hover:bg-text-main group-hover:text-bg-main transition-all">
                      {p.icon}
                    </div>
                    <h5 className="font-black text-xs uppercase text-text-main mb-2">{p.name}</h5>
                    <p className="text-[9px] opacity-50 font-bold leading-tight px-2">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. OFFERINGS */}
        <section className="relative py-32 border-y border-border-main">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="mb-24"><h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-text-main">Our Offerings</h2><div className="w-32 h-2 bg-accent mx-auto mt-4 rounded-full shadow-[0_0_15px_#FFCC00]"></div></motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <motion.div key={i} whileHover={{ y: -15 }} className="p-14 rounded-[60px] bg-card-bg border border-border-main hover:border-accent transition-all group">
                  <div className="text-8xl mb-12 group-hover:rotate-12 transition-transform duration-500">{s.icon}</div>
                  <h3 className="text-3xl font-black uppercase text-text-main mb-8 italic tracking-tight">{s.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed mb-10 font-medium">{s.desc}</p>
                  <Link 
                    to={s.path} 
                    className="flex items-center justify-center text-accent font-black text-[10px] uppercase tracking-[0.3em] border-b-2 border-accent w-fit mx-auto pb-1 hover:text-text-main transition-colors cursor-pointer no-underline"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. STATS */}
        <section className="py-32 bg-card-bg relative overflow-hidden transition-colors duration-500">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 bg-bg-main p-20 rounded-[80px] border border-border-main shadow-2xl relative z-10 transition-colors duration-500">
            {[{ n: '150+', l: 'Projects' }, { n: '98%', l: 'Satisfaction' }, { n: '24/7', l: 'Support' }, { n: '10+', l: 'Experts' }].map((st, i) => (
              <div key={i} className="text-center group">
                <h3 className="text-6xl md:text-7xl font-black text-accent tracking-tighter group-hover:scale-110 transition-transform italic">{st.n}</h3>
                <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.4em] mt-6">{st.l}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;