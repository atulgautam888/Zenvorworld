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
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { scrollY, scrollYProgress } = useScroll();
  
  // Adjusted scale and borderRadius to feel more fluid
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.1], [0, 60]);

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
    { title: 'Facebook Services', icon: '📘', desc: 'Facebook is the most widely used Social Media platform in the world today. ZenVor helps you draft a marketing campaign to NAIL IT ON FACEBOOK.' },
    { title: 'Twitter (X) Services', icon: '🐦', desc: 'Twitter is used by Brands to maintain their image and pinpoint specific communities or organizations. ZenVor manages your active presence.' },
    { title: 'Instagram Marketing', icon: '📸', desc: 'Visual excellence with premium reels and stories that turn followers into brand advocates.' },
    { title: 'LinkedIn Professional', icon: '💼', desc: 'Establishing industry thought leadership and generating high-quality enterprise leads.' }
  ];

  const clients = [
    { name: 'V Care trip', icon: '✈️', desc: 'World class travel solutions.' },
    { name: 'Galaxy Tools', icon: '🔧', desc: 'Precision engineering.' },
    { name: 'Syndicated', icon: '📊', desc: 'Market insights.' },
    { name: 'WAC', icon: '🎓', desc: 'Event booking.' },
    { name: 'Imarc', icon: '📈', desc: 'Industry facts.' },
    { name: 'Kyurion', icon: '🛡️', desc: 'Tech & Robotics.' }
  ];

  const technologies = [
    { name: '.NET', icon: '🌐', desc: 'High-security backend.' },
    { name: 'Android', icon: '🤖', desc: 'Scalable mobile solutions.' },
    { name: 'HTML/CSS', icon: '📄', desc: 'Modern structures.' },
    { name: 'Angular', icon: '🅰️', desc: 'Robust architectures.' },
    { name: 'Java', icon: '☕', desc: 'Enterprise software.' },
    { name: 'PHP', icon: '🐘', desc: 'Agile scripting.' }
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
    { title: 'Social Media Marketing', icon: '📱', desc: 'Building communities through data-driven campaigns and outreach.' },
    { title: 'Software Development', icon: '⚙️', desc: 'Custom scalable solutions designed for internal business optimization.' },
    { title: 'Web Development', icon: '💻', desc: 'Responsive websites built with clean code and high user retention.' },
    { title: 'Mobile App Dev', icon: '📲', desc: 'Feature-rich Flutter applications offering seamless UX/UI experience.' },
    { title: 'E-commerce Solutions', icon: '🛒', desc: 'Scaling digital retail through robust architectures and store designs.' },
    { title: 'Brand Building', icon: '🎯', desc: 'Strategic brand positioning and identity design for modern startups.' }
  ];

  return (
    <div ref={mainRef} className="relative w-full bg-bg-main text-text-main selection:bg-accent selection:text-black overflow-x-hidden transition-colors duration-500">
      
      {/* GSAP CUSTOM CURSOR */}
      <div ref={cursorRef} className="fixed w-8 h-8 border border-accent rounded-full pointer-events-none z-[9999] hidden md:block -translate-x-1/2 -translate-y-1/2 mix-blend-difference"></div>

      {/* 1. STICKY VIDEO LAYER - UPDATED FOR TRUE EDGE-TO-EDGE */}
      <motion.section 
        style={{ scale, borderRadius }} 
        className="sticky top-0 h-screen w-screen z-20 bg-black overflow-hidden left-0"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        >
          <source src={heroVid} type="video/mp4" />
        </video>

        {/* Content Overlay */}
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
        {/* 2. HERO REVEAL SECTION */}
        <section ref={heroRevealRef} className="min-h-screen flex items-center justify-center pt-24 px-6">
          <div className="container mx-auto z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="backdrop-blur-xl bg-card-bg border border-border-main p-12 md:p-24 rounded-[60px] shadow-2xl relative group">
              <span className="inline-block px-4 py-1.5 mb-8 text-[11px] font-black bg-accent text-black rounded-full uppercase tracking-[0.2em]">✨ Innovation Agency</span>
              <h1 className="hero-title text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10 text-text-main uppercase italic">Elevate Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-accent to-orange-500">Digital Footprint</span> <br /> with ZenVor.</h1>
              <p className="opacity-60 text-lg md:text-xl max-w-4xl mx-auto font-medium mb-12">Your dedicated partner for end-to-end IT solutions. We combine innovation with unwavering support to scale your business.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="px-12 py-5 bg-text-main text-bg-main font-black rounded-full shadow-2xl hover:scale-105 transition-all no-underline">Let's Talk</Link>
                <Link to="/portfolio" className="px-12 py-5 border-2 border-border-main rounded-full font-bold text-inherit hover:bg-card-bg transition-all no-underline">View Work</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. WHO WE ARE */}
        <section className="py-24 border-t border-border-main">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto bg-card-bg p-12 rounded-[40px] border border-border-main shadow-xl">
              <h2 className="text-4xl font-black mb-8 uppercase text-text-main">Who We Are</h2>
              <p className="text-lg md:text-xl opacity-60 leading-relaxed"><strong className="text-accent italic font-black">ZenVor</strong> is a one-stop solution for IT Services in India. Comprising expert developers and strategists, we deliver excellence through Quality and Innovation.</p>
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

        {/* 5. DYNAMIC SOCIAL SERVICES */}
        <section className="relative py-40 border-y border-border-main">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div {...fadeInUp} className="mb-24">
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-text-main">Dominate Social Media</h2>
              <p className="text-accent font-bold tracking-[0.2em] uppercase mt-2">Platform Strategies</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {socialServices.map((social, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className="bg-card-bg backdrop-blur-xl border border-border-main p-10 md:p-14 rounded-[40px] group hover:border-accent transition-all duration-500 flex flex-col md:flex-row gap-8 items-start">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-500 shrink-0">{social.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-accent text-xl font-bold italic">“</span>
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

        {/* 6. OUR CLIENTS */}
        <section className="py-40">
          <div className="container mx-auto px-6 text-center">
            <motion.h2 {...fadeInUp} className="text-5xl md:text-8xl font-black uppercase text-text-main mb-24 italic tracking-tighter">Our Clients</motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-6 divide-x divide-border-main">
              {clients.map((c, i) => (
                <div key={i} className="p-10 group flex flex-col items-center">
                  <div className="text-6xl mb-6 grayscale group-hover:grayscale-0 transition-all hover:scale-110">{c.icon}</div>
                  <h4 className="text-[11px] font-black uppercase opacity-40 group-hover:text-accent tracking-[0.2em] mb-3">{c.name}</h4>
                  <p className="text-[9px] opacity-30 font-bold leading-tight">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. TECH & PLATFORMS */}
        <section className="py-40 border-t border-border-main">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24 divide-x-0 md:divide-x divide-border-main">
            <div className="pr-0 md:pr-12">
              <h3 className="text-4xl font-black mb-20 uppercase tracking-tighter text-text-main italic">Technologies</h3>
              <div className="grid grid-cols-3 gap-10">
                {technologies.map((t, i) => (
                  <div key={i} className="text-center group">
                    <div className="w-20 h-20 bg-card-bg border-2 border-border-main rounded-[24px] flex items-center justify-center text-4xl mb-6 mx-auto group-hover:border-accent group-hover:bg-text-main group-hover:text-bg-main transition-all">
                      {t.icon}
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
                  <div className="flex items-center justify-center text-accent font-black text-[10px] uppercase tracking-[0.3em] border-b-2 border-accent w-fit mx-auto pb-1 hover:text-text-main transition-colors cursor-pointer">Learn More →</div>
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