import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaEye, FaLightbulb, FaAward, FaFingerprint, FaGlobe, FaShieldAlt, FaCogs } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacityText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    const reveals = gsap.utils.toArray('.content-reveal');
    reveals.forEach((el) => {
      gsap.from(el, { y: 60, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } });
    });
    return () => lenis.destroy();
  }, []);

  const dnaPoints = [
    { icon: <FaFingerprint />, title: "Hyper-Personalization", text: "We treat every project as unique DNA." },
    { icon: <FaShieldAlt />, title: "Enterprise Security", text: "Data integrity is our top priority." },
    { icon: <FaGlobe />, title: "Global Standards", text: "International UI/UX excellence." },
    { icon: <FaCogs />, title: "Agile Execution", text: "Fast-paced development cycles." }
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-bg-main text-text-main pt-40 overflow-hidden min-h-screen">
      <section className="container mx-auto px-6 text-center mb-20">
        <motion.div style={{ y: yText, opacity: opacityText }}>
          <h1 className="text-6xl md:text-9xl font-black italic uppercase leading-none">Creators of <span className="text-accent">Tomorrow.</span></h1>
          <p className="max-w-2xl mx-auto mt-8 opacity-60 text-xl">ZenVor is where technical complexity meets digital elegance.</p>
        </motion.div>
      </section>

      <section className="py-20 border-y border-border-main bg-card-bg/20">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          {dnaPoints.map((dna, i) => (
            <div key={i} className="content-reveal p-8 rounded-[40px] border border-border-main bg-bg-main">
              <div className="text-4xl text-accent mb-6">{dna.icon}</div>
              <h4 className="text-xl font-black uppercase italic mb-4">{dna.title}</h4>
              <p className="text-sm opacity-50">{dna.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-40 text-center">
        <div className="content-reveal max-w-4xl mx-auto p-12 md:p-24 bg-accent rounded-[80px] text-black shadow-2xl">
          <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-8 leading-none">Let's Build Your Vision.</h2>
          <Link to="/contact" className="px-16 py-6 bg-black text-white font-black rounded-full no-underline inline-block hover:scale-105 transition-transform">Start Project</Link>
        </div>
      </section>
    </div>
  );
};

export default About;