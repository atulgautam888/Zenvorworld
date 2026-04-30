import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaCode, FaRocket, FaShieldAlt, FaMobileAlt, 
  FaDatabase, FaLayerGroup, FaArrowRight, FaTerminal,
  FaServer, FaCloud, FaChartLine, FaCogs
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Footer from '../components/Footer'; // Global Footer Imported

const WebDevelopment = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

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

  const features = [
    { 
      icon: <FaCode />, 
      title: "Full-Stack Mastery", 
      desc: "End-to-end development with MERN, Next.js, Laravel, and cutting-edge frameworks.",
      stat: "500+ Projects"
    },
    { 
      icon: <FaRocket />, 
      title: "Performance-First", 
      desc: "Sub-second load times with Core Web Vitals optimization and 95+ Lighthouse scores.",
      stat: "0.8s Avg Load"
    },
    { 
      icon: <FaShieldAlt />, 
      title: "Fort Knox Security", 
      desc: "Enterprise-grade encryption, OAuth 2.0, JWT authentication, and GDPR compliance.",
      stat: "Zero Breaches"
    },
    { 
      icon: <FaMobileAlt />, 
      title: "Mobile-First Design", 
      desc: "Progressive Web Apps with offline capability and native-like experiences.",
      stat: "98% Mobile Score"
    }
  ];

  const techStack = [
    { name: "React & Next.js", expertise: "95%" },
    { name: "Node.js & Express", expertise: "92%" },
    { name: "MongoDB & PostgreSQL", expertise: "90%" },
    { name: "TypeScript", expertise: "88%" },
    { name: "AWS & Cloud Infrastructure", expertise: "85%" },
    { name: "GraphQL & REST APIs", expertise: "93%" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "High-traffic marketplace handling 50K+ daily users with real-time inventory",
      tech: ["Next.js", "Node.js", "Redis", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      title: "SaaS Dashboard",
      desc: "Analytics platform processing 10M+ data points with real-time visualization",
      tech: ["React", "D3.js", "WebSocket", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      title: "Healthcare Portal",
      desc: "HIPAA-compliant patient management system with telemedicine capabilities",
      tech: ["MERN", "WebRTC", "AWS", "Encryption"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    }
  ];

  const services = [
    {
      icon: <FaServer />,
      title: "Custom Web Applications",
      points: [
        "Scalable SaaS platforms with multi-tenant architecture",
        "Real-time collaboration tools and dashboards",
        "Progressive Web Apps (PWA) with offline functionality",
        "API-first development with microservices"
      ]
    },
    {
      icon: <FaCloud />,
      title: "Cloud & DevOps",
      points: [
        "AWS, Azure, GCP deployment and optimization",
        "CI/CD pipelines with automated testing",
        "Docker containerization and Kubernetes orchestration",
        "Load balancing and auto-scaling infrastructure"
      ]
    },
    {
      icon: <FaDatabase />,
      title: "Backend Architecture",
      points: [
        "RESTful and GraphQL API design",
        "Database schema optimization (SQL & NoSQL)",
        "Caching strategies with Redis and Memcached",
        "Message queues and event-driven systems"
      ]
    },
    {
      icon: <FaCogs />,
      title: "Optimization & Maintenance",
      points: [
        "Performance auditing and Core Web Vitals tuning",
        "SEO optimization and technical audits",
        "Security penetration testing and hardening",
        "24/7 monitoring and incident response"
      ]
    }
  ];

  return (
    <div className="bg-bg-main text-text-main min-h-screen overflow-hidden transition-colors duration-500">
      
      {/* HERO SECTION - Premium with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-bg-main via-card-bg to-bg-main opacity-50" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse delay-1000" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
               style={{
                 backgroundImage: `linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
                 backgroundSize: '50px 50px'
               }}
          />
        </div>

        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block px-8 py-3 bg-accent/10 text-accent rounded-full text-[9px] font-black uppercase tracking-[0.5em] mb-10 border border-accent/30 backdrop-blur-sm">
              Premium Web Engineering
            </span>
            
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.95] mb-8 tracking-tight text-text-main">
              <span className="block">Engineered</span>
              <span className="block text-accent italic">for Excellence.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-70 mb-12 leading-relaxed font-light text-text-main">
              We craft <span className="text-accent font-bold">enterprise-grade web applications</span> that combine 
              bleeding-edge technology with bulletproof architecture. From concept to deployment, 
              every pixel and every line of code is optimized for performance, security, and scalability.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact" 
                className="group relative px-12 py-5 bg-accent text-black rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:scale-105 transition-all no-underline shadow-2xl shadow-accent/20 overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              
              <button className="flex items-center gap-3 text-text-main font-bold uppercase tracking-[0.2em] text-xs hover:text-accent transition-all bg-transparent border border-border-main px-8 py-5 rounded-2xl hover:border-accent/30">
                View Portfolio <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-20 relative"
          >
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/10 blur-2xl rounded-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=90" 
                alt="Modern web development workspace"
                className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl border border-border-main"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent rounded-3xl" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS TICKER */}
      <section className="border-y border-border-main bg-card-bg/30 backdrop-blur-md py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50M+", label: "API Requests/Month" },
              { value: "0.8s", label: "Avg Load Time" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black text-accent mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-bold text-text-main">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-text-main">
            Why Choose <span className="text-accent italic">ZenVor?</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto text-text-main">
            We don't just code—we architect digital experiences that drive business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 rounded-[32px] bg-card-bg border border-border-main hover:border-accent/40 transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-xl"
            >
              <div className="relative">
                <div className="text-4xl text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-lg font-black uppercase mb-3 tracking-tight text-text-main">{f.title}</h3>
                <p className="text-sm leading-relaxed opacity-60 mb-6 text-text-main font-medium">{f.desc}</p>
                <div className="text-2xl font-black text-accent">{f.stat}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES DEEP DIVE */}
      <section className="py-32 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-text-main">
              Our <span className="text-accent italic">Services</span>
            </h2>
            <p className="text-lg opacity-70 max-w-3xl mx-auto text-text-main">
              Comprehensive web development solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[40px] bg-card-bg border border-border-main hover:border-accent/30 transition-all duration-500 shadow-sm"
              >
                <div className="text-5xl text-accent mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black uppercase mb-6 tracking-tight text-text-main">{service.title}</h3>
                <ul className="space-y-4">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-text-main opacity-80">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK EXPERTISE */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-text-main">
              Cutting-Edge <br />
              <span className="text-accent italic">Technology</span>
            </h2>
            <p className="text-lg opacity-70 mb-12 leading-relaxed text-text-main font-light">
              We leverage the most powerful and modern tech stack to build applications 
              that are fast, secure, and infinitely scalable. Our expertise spans the entire 
              development lifecycle.
            </p>
            
            <div className="relative group">
              <div className="absolute -inset-2 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" 
                alt="Development environment"
                className="relative rounded-[32px] shadow-2xl border border-border-main"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {techStack.map((tech, i) => (
              <div key={i} className="group">
                <div className="flex justify-between mb-3">
                  <span className="font-black uppercase text-xs tracking-[0.2em] text-text-main">{tech.name}</span>
                  <span className="text-accent font-black">{tech.expertise}</span>
                </div>
                <div className="h-3 bg-accent/10 rounded-full overflow-hidden border border-accent/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: tech.expertise }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-accent to-[#FDCC17] rounded-full group-hover:shadow-lg group-hover:shadow-accent/30 transition-shadow"
                  />
                </div>
              </div>
            ))}

            <div className="pt-8">
              <button className="flex items-center gap-3 text-accent font-black uppercase tracking-[0.2em] text-xs hover:gap-5 transition-all">
                View Full Tech Stack <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section className="py-32 bg-card-bg/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-text-main">
              Featured <span className="text-accent italic">Work</span>
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto text-text-main font-light">
              Real projects. Real impact. Real results for businesses worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-[40px] bg-card-bg border border-border-main hover:border-accent/40 transition-all duration-500 shadow-sm"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-black mb-3 tracking-tight text-text-main">{project.title}</h3>
                  <p className="text-sm opacity-70 mb-6 leading-relaxed text-text-main font-medium">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-[10px] font-black uppercase tracking-wider border border-accent/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-32 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-text-main">
            Our <span className="text-accent italic">Process</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto text-text-main font-light">
            A proven methodology that delivers exceptional results every time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Discovery", desc: "Deep dive into your business goals, target audience, and technical requirements." },
            { num: "02", title: "Architecture", desc: "Design scalable system architecture with security and performance in mind." },
            { num: "03", title: "Development", desc: "Agile sprints with continuous integration and rigorous code reviews." },
            { num: "04", title: "Launch & Support", desc: "Seamless deployment with ongoing optimization and 24/7 monitoring." }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-[32px] bg-card-bg border border-border-main group hover:border-accent/40 transition-all shadow-sm"
            >
              <div className="text-6xl font-black text-accent/10 group-hover:text-accent/30 transition-colors mb-6">
                {step.num}
              </div>
              <h3 className="text-lg font-black uppercase mb-4 tracking-tight text-text-main">{step.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed text-text-main font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[60px] bg-bg-main border border-border-main p-16 md:p-24 shadow-2xl"
        >
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[150px] rounded-full animate-pulse delay-1000" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight text-text-main">
              Ready to Build Something
              <br />
              <span className="text-accent italic">Extraordinary?</span>
            </h2>
            
            <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed text-text-main font-light">
              Let's turn your vision into a high-performance web application that scales with your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group relative px-14 py-6 bg-accent text-black rounded-2xl font-black uppercase text-sm tracking-[0.3em] hover:scale-105 transition-all no-underline shadow-2xl shadow-accent/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
              
              <button className="px-14 py-6 bg-transparent border-2 border-border-main text-text-main rounded-2xl font-black uppercase text-sm tracking-[0.3em] hover:border-accent/50 hover:text-accent transition-all font-bold">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* GLOBAL FOOTER INTEGRATED */}
      <Footer />

    </div>
  );
};

export default WebDevelopment;