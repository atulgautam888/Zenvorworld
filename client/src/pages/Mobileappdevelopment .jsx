import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer'; // Ensure this path matches your folder structure

const MobileAppDevelopment = () => {
  const platforms = [
    { name: 'iOS', icon: '🍎', desc: 'Native iOS Apps' },
    { name: 'Android', icon: '🤖', desc: 'Native Android Apps' },
    { name: 'React Native', icon: '⚛️', desc: 'Cross-Platform' },
    { name: 'Flutter', icon: '💙', desc: 'Multi-Platform' },
  ];

  const features = [
    '📱 Native & Cross-Platform Development',
    '🎨 Stunning UI/UX Design',
    '⚡ High Performance Apps',
    '🔒 Secure & Encrypted',
    '📊 Analytics Integration',
    '🔔 Push Notifications',
    '💳 Payment Gateway Integration',
    '🌐 API Integration',
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-bg-main pt-28"
    >
      <div className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-text-main mb-4">
              Mobile App
              <span className="text-accent"> Development</span>
            </h1>
            <p className="text-xl text-text-main/70 max-w-3xl mx-auto">
              Transform your ideas into powerful mobile applications that users love
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop" 
              alt="Mobile App Development"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Platforms Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-text-main mb-8 text-center">
              Platforms We Support
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="bg-card-bg border border-border-main rounded-xl p-6 hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/10 text-center"
                >
                  <div className="text-6xl mb-3">{platform.icon}</div>
                  <h3 className="text-xl font-bold text-text-main mb-2">{platform.name}</h3>
                  <p className="text-text-main/60 text-sm">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-text-main mb-8 text-center">
              Our Mobile App Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card-bg border border-border-main rounded-xl p-5 hover:border-accent transition-all"
                >
                  <p className="text-text-main font-semibold">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Image */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=500&fit=crop" 
              alt="App Development Process"
              className="w-full h-[350px] object-cover"
            />
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-12 text-center mb-16">
            <h2 className="text-3xl font-black text-text-main mb-4">
              Let's Build Your Mobile App!
            </h2>
            <p className="text-text-main/70 mb-8 text-lg">
              Turn your vision into reality with our expert team
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-accent text-black px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:opacity-90 shadow-lg shadow-accent/20 transition-all no-underline"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <Footer />
    </motion.div>
  );
};

export default MobileAppDevelopment;