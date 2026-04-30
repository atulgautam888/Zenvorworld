import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Global Footer Imported

const UIUXDesign = () => {
  const services = [
    { name: 'User Research', icon: '🔍', desc: 'Understanding user needs' },
    { name: 'Wireframing', icon: '📐', desc: 'Structure & Layout' },
    { name: 'Prototyping', icon: '🎯', desc: 'Interactive Mockups' },
    { name: 'Visual Design', icon: '🎨', desc: 'Beautiful Interfaces' },
    { name: 'Usability Testing', icon: '✅', desc: 'User Validation' },
    { name: 'Design Systems', icon: '📦', desc: 'Consistent Branding' },
  ];

  const tools = [
    'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Photoshop', 'Illustrator'
  ];

  return (
    <div className="min-h-screen bg-bg-main pt-28 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 pb-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-text-main mb-4">
            UI/UX Design
            <span className="text-accent"> Services</span>
          </h1>
          <p className="text-xl text-text-main/70 max-w-3xl mx-auto">
            Crafting beautiful, intuitive, and user-centered digital experiences
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop" 
            alt="UI/UX Design"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-text-main mb-8 text-center">
            Our Design Services
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

        {/* Design Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-text-main mb-8 text-center">
            Our Design Process
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {['Research', 'Design', 'Prototype', 'Test'].map((step, index) => (
              <div key={index} className="bg-card-bg border border-border-main rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-black text-xl">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-text-main">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-text-main mb-8 text-center">
            Design Tools We Master
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-card-bg border border-border-main rounded-xl px-6 py-3 hover:border-accent transition-all"
              >
                <span className="text-text-main font-semibold">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Design Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=500&fit=crop" 
            alt="Design Process"
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-12 text-center mb-16">
          <h2 className="text-3xl font-black text-text-main mb-4">
            Ready to Elevate Your Design?
          </h2>
          <p className="text-text-main/70 mb-8 text-lg">
            Let's create experiences that users will love
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-accent text-black px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:opacity-90 shadow-lg shadow-accent/20 transition-all no-underline"
          >
            Get Design Consultation
          </Link>
        </div>
      </div>

      {/* Global Footer Added */}
      <Footer />
    </div>
  );
};

export default UIUXDesign;