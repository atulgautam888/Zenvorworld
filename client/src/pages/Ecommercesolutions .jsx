import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaStore, FaCreditCard, FaBoxes, FaShoppingCart, 
  FaTruckLoading, FaChartPie, FaMobileAlt, FaShieldAlt, 
  FaRocket, FaCheckCircle, FaArrowRight 
} from 'react-icons/fa';
import Footer from '../components/Footer'; // Global Footer Imported
import Lenis from '@studio-freight/lenis';

const EcommerceSolutions = () => {
  // Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const features = [
    { name: 'Custom UI/UX', icon: <FaStore />, desc: 'User-centric designs focused on reducing friction and maximizing conversion rates.' },
    { name: 'Global Payments', icon: <FaCreditCard />, desc: 'Multi-currency support with secure gateways like Stripe, Razorpay, and PayPal.' },
    { name: 'Smart Inventory', icon: <FaBoxes />, desc: 'Automated stock tracking with low-inventory alerts and warehouse synchronization.' },
    { name: 'Optimized Checkout', icon: <FaShoppingCart />, desc: 'One-page checkout flows designed to eliminate cart abandonment.' },
    { name: 'Logistics Engine', icon: <FaTruckLoading />, desc: 'Seamless integration with shipping partners for real-time tracking and fulfillment.' },
    { name: 'Sales Analytics', icon: <FaChartPie />, desc: 'Advanced heatmaps and data insights to understand customer buying behavior.' },
  ];

  const platforms = [
    { name: 'Shopify Plus', tech: 'Saas' },
    { name: 'WooCommerce', tech: 'WordPress' },
    { name: 'Magento 2', tech: 'Adobe' },
    { name: 'BigCommerce', tech: 'Enterprise' },
    { name: 'Headless Commerce', tech: 'Next.js/React' }
  ];

  return (
    <div className="min-h-screen bg-bg-main pt-28 transition-colors duration-500 font-jakarta">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* 1. HERO SECTION - HIGH IMPACT */}
        <section className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-2 bg-accent/10 text-accent rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-accent/20 backdrop-blur-md">
              Digital Commerce Masters
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-text-main mb-8 leading-[0.95] tracking-tighter uppercase">
              Build Stores That <br/>
              <span className="text-accent italic">Never Sleep.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-60 mb-12 font-medium leading-relaxed">
              We don't just build websites; we engineer <span className="text-text-main font-bold">Revenue Engines</span>. 
              Our e-commerce ecosystems are designed to dominate search results and turn casual visitors into loyal brand advocates.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="bg-accent text-black px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all no-underline shadow-2xl shadow-accent/30">
                Start Selling Now
              </Link>
              <button className="flex items-center gap-3 text-text-main/80 font-bold uppercase tracking-widest text-xs hover:text-accent transition-all bg-transparent border-none cursor-pointer">
                View Case Studies <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </section>

        {/* 2. MAIN IMAGE - GLASS EFFECT */}
        <div className="mb-32 relative group">
          <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-[40px] opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-border-main">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=90" 
              alt="Elite E-commerce Solutions"
              className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10 right-10 flex flex-wrap gap-4">
               {['99.9% Uptime', '0.5s Load Time', 'Scalable Architecture'].map((tag, i) => (
                 <div key={i} className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                   {tag}
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* 3. CORE CAPABILITIES */}
        <section className="mb-32">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-text-main mb-6 uppercase tracking-tighter italic">Engineered for <span className="text-accent">Scale.</span></h2>
            <div className="w-24 h-1.5 bg-accent rounded-full mb-8" />
            <p className="max-w-2xl opacity-50 font-medium italic">Our technical foundation ensures your store remains blazing fast even during Black Friday peak traffic.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card-bg border border-border-main rounded-[32px] p-10 hover:border-accent/40 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[100px] group-hover:bg-accent/10 transition-colors" />
                <div className="text-4xl text-accent mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-text-main mb-4 uppercase tracking-tight italic">{feature.name}</h3>
                <p className="text-text-main/50 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PLATFORMS ECOSYSTEM */}
        <section className="mb-32 bg-card-bg/30 border border-border-main rounded-[50px] p-12 md:p-20">
          <h2 className="text-2xl font-black text-text-main mb-16 text-center uppercase tracking-[0.3em]">Platform Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center group">
                <h4 className="text-xl md:text-2xl font-black text-text-main mb-2 group-hover:text-accent transition-colors">{platform.name}</h4>
                <div className="text-[10px] font-black uppercase text-accent/50 tracking-widest">{platform.tech}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. TRUST BUILDERS */}
        <div className="mb-32 grid md:grid-cols-3 gap-10">
          {[
            { icon: <FaRocket />, title: 'High Conversion', desc: 'Stores optimized for the highest possible ROI and mobile checkout success.' },
            { icon: <FaShieldAlt />, title: 'PCI Compliance', desc: 'Secure environments that protect customer data and build long-term trust.' },
            { icon: <FaMobileAlt />, title: 'PWA Ready', desc: 'Modern web apps that feel like native mobile apps for a superior experience.' }
          ].map((item, i) => (
            <div key={i} className="text-center md:text-left space-y-4">
              <div className="text-accent text-3xl">{item.icon}</div>
              <h3 className="text-xl font-black text-text-main uppercase italic">{item.title}</h3>
              <p className="text-text-main/50 text-sm font-medium leading-relaxed">{item.desc}</p>
              <div className="flex items-center gap-2 text-accent text-xs font-black uppercase tracking-widest">
                <FaCheckCircle /> Enterprise Standards
              </div>
            </div>
          ))}
        </div>

        {/* 6. CTA BANNER - REVENUE FOCUS */}
        <div className="relative overflow-hidden rounded-[60px] bg-accent p-12 md:p-24 text-center shadow-[0_0_100px_rgba(253,204,23,0.2)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent)]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-black mb-8 uppercase tracking-tighter leading-none italic">
              Ready to Own the <br/> Market?
            </h2>
            <p className="text-black/70 mb-12 text-lg md:text-xl max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs">
              Transform your business with a world-class online store.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-black text-white px-14 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:scale-110 transition-all no-underline shadow-2xl"
            >
              Get Free E-com Strategy
            </Link>
          </div>
        </div>

      </div>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
};

export default EcommerceSolutions;