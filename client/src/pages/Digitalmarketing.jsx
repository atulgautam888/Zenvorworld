import React from 'react';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  const services = [
    { name: 'Social Media Marketing', icon: '📱', desc: 'Engage your audience' },
    { name: 'Content Marketing', icon: '✍️', desc: 'Quality content creation' },
    { name: 'Email Marketing', icon: '📧', desc: 'Targeted campaigns' },
    { name: 'PPC Advertising', icon: '💰', desc: 'Google & Facebook Ads' },
    { name: 'Influencer Marketing', icon: '⭐', desc: 'Brand partnerships' },
    { name: 'Video Marketing', icon: '🎥', desc: 'Engaging video content' },
  ];

  const platforms = [
    { name: 'Facebook', icon: '📘' },
    { name: 'Instagram', icon: '📸' },
    { name: 'Twitter', icon: '🐦' },
    { name: 'LinkedIn', icon: '💼' },
    { name: 'YouTube', icon: '▶️' },
    { name: 'Pinterest', icon: '📌' },
  ];

  return (
    <div className="min-h-screen bg-bg-main pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-text-main mb-4">
            Digital Marketing
            <span className="text-accent"> Solutions</span>
          </h1>
          <p className="text-xl text-text-main/70 max-w-3xl mx-auto">
            Grow your brand with data-driven digital marketing strategies
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
            alt="Digital Marketing"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-text-main mb-8 text-center">
            Our Marketing Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card-bg border border-border-main rounded-xl p-6 hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="text-5xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-text-main mb-2">{service.name}</h3>
                <p className="text-text-main/60 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-text-main mb-8 text-center">
            Platforms We Manage
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="bg-card-bg border border-border-main rounded-xl p-4 hover:border-accent transition-all text-center"
              >
                <div className="text-4xl mb-2">{platform.icon}</div>
                <p className="text-text-main text-xs font-semibold">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16 grid md:grid-cols-3 gap-6">
          <div className="bg-card-bg border border-border-main rounded-xl p-8 text-center">
            <div className="text-5xl font-black text-accent mb-2">200+</div>
            <p className="text-text-main/70">Campaigns Launched</p>
          </div>
          <div className="bg-card-bg border border-border-main rounded-xl p-8 text-center">
            <div className="text-5xl font-black text-accent mb-2">95%</div>
            <p className="text-text-main/70">Client Satisfaction</p>
          </div>
          <div className="bg-card-bg border border-border-main rounded-xl p-8 text-center">
            <div className="text-5xl font-black text-accent mb-2">3X</div>
            <p className="text-text-main/70">Average ROI</p>
          </div>
        </div>

        {/* Marketing Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop" 
            alt="Marketing Team"
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black text-text-main mb-4">
            Ready to Boost Your Online Presence?
          </h2>
          <p className="text-text-main/70 mb-8 text-lg">
            Let's create a winning marketing strategy together
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-accent text-black px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:opacity-90 shadow-lg shadow-accent/20 transition-all no-underline"
          >
            Get Marketing Plan
          </Link>
        </div>

      </div>
    </div>
  );
};

export default DigitalMarketing;