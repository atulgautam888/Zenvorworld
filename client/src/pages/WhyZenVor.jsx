import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaUsers, FaChartLine, FaCode, FaHeadset, 
  FaArrowRight, FaDatabase, FaGlobe, FaBullhorn, 
  FaSync, FaComments, FaCheckCircle, FaRocket, 
  FaShieldAlt, FaMicrochip, FaPenNib, FaLink, FaLightbulb, FaCogs,
  FaGraduationCap, FaBolt, FaTrophy, FaHeart, FaStar, FaFire,
  FaChartBar, FaClipboardCheck, FaMagic, FaUserShield, FaHandshake
} from 'react-icons/fa';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Footer from '../components/Footer'; 

gsap.registerPlugin(ScrollTrigger);

const WhyZenVor = () => {
  const containerRef = useRef(null);
  const [activeMetric, setActiveMetric] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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

    // Metric counter animation
    const metricInterval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % 4);
    }, 3000);

    return () => {
      lenis.destroy();
      clearInterval(metricInterval);
    };
  }, []);

  const metrics = [
    { number: "500+", label: "Projects Delivered", icon: <FaRocket /> },
    { number: "98%", label: "Client Satisfaction", icon: <FaTrophy /> },
    { number: "24/7", label: "Support Available", icon: <FaHeadset /> },
    { number: "150+", label: "Team Members", icon: <FaUsers /> }
  ];

  const setsUsApart = [
    { 
      title: "Versatile Developers", 
      icon: <FaCode />, 
      desc: "Cross-platform expertise spanning web, mobile, cloud, and emerging technologies. We adapt to your stack, not vice versa.",
      highlight: "Multi-Stack Masters"
    },
    { 
      title: "24×7 Guardian Support", 
      icon: <FaHeadset />, 
      desc: "Round-the-clock monitoring and instant response. Your success never sleeps, and neither do we.",
      highlight: "Always On"
    },
    { 
      title: "Content Strategists", 
      icon: <FaPenNib />, 
      desc: "Brand storytellers who craft narratives that resonate. We don't just write—we create experiences that convert.",
      highlight: "Story Architects"
    },
    { 
      title: "Industry Network", 
      icon: <FaLink />, 
      desc: "Deep connections across tech, design, and business ecosystems. Solving problems through collaboration and expertise.",
      highlight: "Connected Ecosystem"
    },
    { 
      title: "Data-Driven Analytics", 
      icon: <FaChartLine />, 
      desc: "Transform raw data into actionable insights. Every decision backed by metrics, every strategy validated by results.",
      highlight: "Insight Engine"
    },
    { 
      title: "Award-Winning Design", 
      icon: <FaUsers />, 
      desc: "Design that doesn't just look good—it performs. User-centric interfaces that drive engagement and ROI.",
      highlight: "Design Excellence"
    },
    { 
      title: "Growth Hackers", 
      icon: <FaLightbulb />, 
      desc: "Innovative campaigns that break through the noise. Creative strategies engineered for explosive growth.",
      highlight: "Growth Engineers"
    },
    { 
      title: "Continuous Evolution", 
      icon: <FaGraduationCap />, 
      desc: "Committed to staying ahead of the curve. We invest 20% of our time learning tomorrow's technologies today.",
      highlight: "Future Ready"
    }
  ];

  const ourApproach = [
    {
      phase: "01",
      title: "Discovery & Strategy",
      desc: "Deep-dive into your business DNA. We don't just understand requirements—we uncover opportunities.",
      icon: <FaMagic />,
      deliverables: ["Market Analysis", "Competitor Research", "Strategic Roadmap"]
    },
    {
      phase: "02",
      title: "Design & Prototype",
      desc: "Rapid iteration with user at the center. Fail fast, learn faster, deliver the best.",
      icon: <FaPenNib />,
      deliverables: ["UX/UI Design", "Interactive Prototypes", "User Testing"]
    },
    {
      phase: "03",
      title: "Development & Quality",
      desc: "Agile development with bulletproof testing. Clean code, scalable architecture, zero compromise.",
      icon: <FaCode />,
      deliverables: ["Sprint Development", "CI/CD Pipeline", "QA Automation"]
    },
    {
      phase: "04",
      title: "Launch & Scale",
      desc: "Smooth deployment with growth acceleration. Your launch is our starting line, not the finish.",
      icon: <FaRocket />,
      deliverables: ["Deployment", "Performance Monitoring", "Growth Optimization"]
    }
  ];

  const marketingArchitecture = [
    {
      stage: "Awareness",
      icon: <FaBullhorn />,
      data: [
        { cat: "Social Media", items: ["Facebook Ads", "Instagram", "LinkedIn", "Twitter", "TikTok"] },
        { cat: "Paid Advertising", items: ["Google Ads", "Display Network", "Bing Ads", "Programmatic"] }
      ]
    },
    {
      stage: "Acquisition",
      icon: <FaGlobe />,
      data: [
        { cat: "Web Platform", items: ["React/Next.js", "WordPress", "Webflow", "Custom CMS"] },
        { cat: "Optimization", items: ["A/B Testing", "Heat Mapping", "Conversion Rate Optimization"] }
      ]
    },
    {
      stage: "Data & CRM",
      icon: <FaDatabase />,
      data: [
        { cat: "Customer Data", items: ["Salesforce", "HubSpot", "Custom CRM"] },
        { cat: "Automation", items: ["Marketing Automation", "Lead Scoring", "Workflows"] }
      ]
    },
    {
      stage: "Engagement",
      icon: <FaSync />,
      data: [
        { cat: "Retargeting", items: ["Pixel Tracking", "Dynamic Ads", "Cross-Platform"] },
        { cat: "Email Marketing", items: ["Personalization", "Drip Campaigns", "Segmentation"] }
      ]
    },
    {
      stage: "Support",
      icon: <FaComments />,
      data: [
        { cat: "Customer Success", items: ["Live Chat", "Ticketing", "Knowledge Base"] },
        { cat: "Collaboration", items: ["Slack", "Project Management", "Team Chat"] }
      ]
    },
    {
      stage: "Analytics",
      icon: <FaCheckCircle />,
      data: [
        { cat: "Tracking", items: ["Google Analytics 4", "Custom Events", "Attribution"] },
        { cat: "Business Intelligence", items: ["Data Visualization", "Reporting", "Insights"] }
      ]
    }
  ];

  const coreValues = [
    {
      icon: <FaHeart />,
      title: "Client Obsessed",
      desc: "Your success is our only metric"
    },
    {
      icon: <FaBolt />,
      title: "Innovation First",
      desc: "Leading, not following trends"
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assured",
      desc: "Excellence in every pixel, every line"
    },
    {
      icon: <FaHandshake />,
      title: "Transparent Always",
      desc: "No hidden costs, no surprises"
    }
  ];

  const industries = [
    "E-Commerce", "FinTech", "HealthTech", "EdTech", "SaaS", 
    "Real Estate", "Travel", "Entertainment", "Logistics", "Food Tech"
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-bg-main text-text-main overflow-x-hidden min-h-screen pt-20 transition-colors duration-500">
      
      {/* 1. ENHANCED HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center border-b border-border-main overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--color-accent)_0%,transparent_50%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--color-accent)_0%,transparent_50%)] opacity-5" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <div>
            <motion.span 
              className="inline-block px-8 py-3 mb-8 text-[9px] font-black bg-accent text-black rounded-full uppercase tracking-[0.4em] shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Transforming Visions into Reality
            </motion.span>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic mb-8">
              Where Innovation <br /> 
              <span className="text-accent relative">
                Meets Excellence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-70 mb-12 leading-relaxed">
              We don't just build digital products—we architect experiences that drive growth, 
              engagement, and measurable results. Your vision, our execution, unstoppable outcomes.
            </p>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  className={`p-6 rounded-3xl border transition-all duration-500 ${
                    activeMetric === i 
                      ? 'bg-accent/10 border-accent scale-105' 
                      : 'bg-card-bg/40 border-border-main'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-2 text-accent">{metric.icon}</div>
                  <div className="text-4xl font-black mb-1">{metric.number}</div>
                  <div className="text-xs opacity-60 uppercase tracking-wider">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUES */}
      <section className="py-12 bg-bg-main border-b border-border-main">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center text-2xl text-accent">
                  {value.icon}
                </div>
                <h3 className="text-lg font-black uppercase mb-2">{value.title}</h3>
                <p className="text-sm opacity-60">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENHANCED WHAT SETS US APART */}
      <section className="py-16 bg-bg-main">
        <div className="container mx-auto px-6 text-center mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-accent mb-4 block">
              Our Superpowers
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-6">
              What Sets Us <span className="text-accent">Apart</span>
            </h2>
            <div className="w-32 h-2 bg-accent mx-auto rounded-full" />
          </div>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {setsUsApart.map((item, i) => (
            <motion.div 
              key={i} 
              className="group"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full p-8 bg-card-bg border border-border-main rounded-[32px] shadow-lg hover:border-accent transition-all duration-500 overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-bg-main border border-border-main rounded-2xl flex items-center justify-center text-3xl text-accent mb-6 shadow-md group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                    {item.icon}
                  </div>
                  
                  <span className="inline-block px-3 py-1 text-[8px] font-black bg-accent/10 text-accent rounded-full uppercase tracking-wider mb-3">
                    {item.highlight}
                  </span>
                  
                  <h4 className="text-xl font-black uppercase italic mb-4 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-sm opacity-70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. OUR APPROACH */}
      <section className="py-16 bg-card-bg/20 border-y border-border-main">
        <div className="container mx-auto px-6 text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-accent mb-4 block">
            Our Process
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-6">
            How We <span className="text-accent">Deliver</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            A proven methodology that transforms ideas into market-leading products
          </p>
        </div>

        <div className="container mx-auto px-6 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-accent/20" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {ourApproach.map((phase, i) => (
              <div
                key={i}
                className=""
              >
                <div className="relative h-full p-8 bg-bg-main border border-border-main rounded-[32px] hover:border-accent transition-all duration-500 shadow-lg group">
                  {/* Phase number */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent text-black rounded-2xl flex items-center justify-center text-2xl font-black shadow-xl">
                    {phase.phase}
                  </div>
                  
                  <div className="text-4xl text-accent mb-6 mt-8">{phase.icon}</div>
                  
                  <h3 className="text-2xl font-black uppercase italic mb-4 group-hover:text-accent transition-colors">
                    {phase.title}
                  </h3>
                  
                  <p className="text-sm opacity-70 mb-6 leading-relaxed">
                    {phase.desc}
                  </p>
                  
                  <div className="space-y-2">
                    {phase.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center text-xs opacity-60">
                        <FaCheckCircle className="text-accent mr-2 text-[10px]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL ARCHITECTURE */}
      <section className="py-16 bg-bg-main overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-accent mb-4 block">
            Technology Stack
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-6">
            Full-Stack <span className="text-accent">Integration</span>
          </h2>
          <p className="text-xs font-black uppercase tracking-widest opacity-40 mt-2">
            End-to-End Marketing & Development Ecosystem
          </p>
        </div>

        <div className="container mx-auto px-6 overflow-x-auto pb-10 custom-scrollbar">
          {/* Header Timeline */}
          <div className="flex justify-between items-center min-w-[1200px] mb-16 relative px-4">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />
            
            {marketingArchitecture.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center flex-1 z-10"
              >
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-bg-main border-2 border-border-main text-accent flex items-center justify-center mb-4 shadow-xl backdrop-blur-sm hover:border-accent hover:scale-110 transition-all duration-500"
                  whileHover={{ rotate: 5 }}
                >
                  <span className="text-3xl">{item.icon}</span>
                </motion.div>
                <span className="text-[9px] font-black uppercase opacity-40 mb-1 tracking-wider">
                  Phase 0{index + 1}
                </span>
                <span className="text-sm font-bold uppercase tracking-tight">{item.stage}</span>
              </div>
            ))}
          </div>

          {/* Enhanced Cards Grid */}
          <div className="grid grid-cols-6 min-w-[1200px] gap-6 px-2">
            {marketingArchitecture.map((stage, idx) => (
              <div key={idx} className="space-y-4">
                {stage.data.map((cat, catIdx) => (
                  <motion.div 
                    key={catIdx} 
                    className="bg-card-bg p-6 rounded-[28px] border border-border-main hover:border-accent transition-all duration-500 shadow-md group"
                    whileHover={{ y: -5 }}
                  >
                    <h5 className="text-[11px] font-black uppercase text-accent border-b border-border-main pb-3 mb-4 flex items-center gap-2">
                      <FaCogs className="text-[10px]" /> {cat.cat}
                    </h5>
                    <ul className="space-y-2.5">
                      {cat.items.map((tool, tIdx) => (
                        <li key={tIdx} className="text-[10px] font-bold opacity-60 flex items-center group-hover:opacity-100 transition-opacity">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mr-2.5 group-hover:bg-accent transition-colors" />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-32 bg-card-bg/20 border-y border-border-main">
        <div className="container mx-auto px-6 text-center mb-16 reveal">
          <span className="text-xs font-black uppercase tracking-widest text-accent mb-4 block">
            Cross-Industry Expertise
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-6">
            Industries We <span className="text-accent">Transform</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                className="px-8 py-4 bg-bg-main border border-border-main rounded-full font-bold uppercase text-sm hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TECH STACK MARQUEE */}
      <section className="py-20 bg-bg-main border-b border-border-main overflow-hidden">
        <div className="mb-8 text-center">
          <span className="text-xs font-black uppercase tracking-widest opacity-40">
            Technologies We Master
          </span>
        </div>
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2].map((loop) => (
            <div key={loop} className="flex items-center">
              {[
                "REACT", "NODE.JS", "PYTHON", "AWS", "FLUTTER", 
                "ANDROID", "JAVA", ".NET", "MONGODB", "POSTGRESQL",
                "DOCKER", "KUBERNETES", "NEXT.JS", "TYPESCRIPT", "GRAPHQL"
              ].map((tech, i) => (
                <span 
                  key={i} 
                  className="text-5xl md:text-7xl font-black uppercase italic mx-12 opacity-10 hover:opacity-100 hover:text-accent transition-all duration-500 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 8. STATS SECTION */}
      <section className="py-32 bg-bg-main">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              className="text-center reveal"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-7xl md:text-8xl font-black text-accent mb-4">
                10M+
              </div>
              <div className="text-sm uppercase tracking-wider opacity-60">
                Lines of Code Written
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center reveal"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-7xl md:text-8xl font-black text-accent mb-4">
                5+
              </div>
              <div className="text-sm uppercase tracking-wider opacity-60">
                Years of Excellence
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center reveal"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-7xl md:text-8xl font-black text-accent mb-4">
                50+
              </div>
              <div className="text-sm uppercase tracking-wider opacity-60">
                Countries Served
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. ENHANCED CTA */}
      <section className="py-40 px-6 bg-bg-main">
        <div className="container mx-auto max-w-5xl text-center reveal">
          <div className="relative p-16 md:p-32 rounded-[60px] bg-accent text-black overflow-hidden shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-black rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-6 py-2 mb-8 text-[9px] font-black bg-black text-accent rounded-full uppercase tracking-[0.3em]">
                  Let's Build Together
                </span>
                
                <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6">
                  Ready to <br /> Dominate?
                </h2>
                
                <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-80 leading-relaxed">
                  Join 500+ brands who chose excellence. Transform your vision into a market-leading digital product.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link 
                    to="/contact" 
                    className="group px-12 py-5 bg-black text-white font-black rounded-full uppercase tracking-widest hover:scale-110 transition-all inline-flex items-center gap-3 no-underline shadow-2xl"
                  >
                    Start Your Project
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  
                  <Link 
                    to="/portfolio" 
                    className="px-12 py-5 border-2 border-black text-black font-black rounded-full uppercase tracking-widest hover:bg-black hover:text-accent transition-all inline-block no-underline"
                  >
                    View Our Work
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          display: flex;
          width: fit-content;
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--color-bg-main);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--color-accent);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--color-accent);
          opacity: 0.8;
        }
      `}} />
    </div>
  );
};

export default WhyZenVor;