import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Global Footer Imported

const SEOServices = () => {
  const services = [
    { name: 'On-Page SEO', icon: '📄', desc: 'Content & keyword optimization' },
    { name: 'Off-Page SEO', icon: '🔗', desc: 'Link building & outreach' },
    { name: 'Technical SEO', icon: '⚙️', desc: 'Site speed & structure' },
    { name: 'Local SEO', icon: '📍', desc: 'Local business visibility' },
    { name: 'E-commerce SEO', icon: '🛍️', desc: 'Product optimization' },
    { name: 'SEO Audits', icon: '🔍', desc: 'Comprehensive analysis' },
  ];

  const benefits = [
    '📈 Increase Organic Traffic',
    '🎯 Target Right Keywords',
    '💰 Better ROI than Paid Ads',
    '🏆 Outrank Competitors',
    '📱 Mobile Optimization',
    '🌍 Global Reach',
  ];

  return (
    <div className="min-h-screen bg-bg-main pt-28 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 pb-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-text-main mb-4">
            SEO Services
            <span className="text-accent"> That Rank</span>
          </h1>
          <p className="text-xl text-text-main/70 max-w-3xl mx-auto">
            Dominate search results and drive organic traffic to your website
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=1200&h=600&fit=crop" 
            alt="SEO Services"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-text-main mb-8 text-center">
            Our SEO Services
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

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-text-main mb-8 text-center">
            Why SEO Matters?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card-bg border border-border-main rounded-xl p-5 hover:border-accent transition-all"
              >
                <p className="text-text-main font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-text-main mb-8 text-center">
            Our SEO Process
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {['Audit', 'Research', 'Optimize', 'Build Links', 'Monitor'].map((step, index) => (
              <div key={index} className="bg-card-bg border border-border-main rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-black text-xl">{index + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-text-main">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop" 
            alt="SEO Analytics"
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-12 text-center mb-16">
          <h2 className="text-3xl font-black text-text-main mb-4">
            Ready to Rank Higher on Google?
          </h2>
          <p className="text-text-main/70 mb-8 text-lg">
            Get a free SEO audit and strategy session
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-accent text-black px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:opacity-90 shadow-lg shadow-accent/20 transition-all no-underline"
          >
            Get Free SEO Audit
          </Link>
        </div>

      </div>

      {/* Global Footer Added */}
      <Footer />
    </div>
  );
};

export default SEOServices;