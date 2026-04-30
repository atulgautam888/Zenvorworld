import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCloudUploadAlt, FaServer, FaCogs, FaShieldAlt, 
  FaDatabase, FaChartLine, FaCheckCircle 
} from 'react-icons/fa';
import Footer from '../components/Footer'; // Global Footer Imported

const CloudServices = () => {
  const services = [
    { name: 'Cloud Migration', icon: <FaCloudUploadAlt />, desc: 'Seamless transition of your legacy systems to robust cloud environments with zero data loss.' },
    { name: 'Cloud Infrastructure', icon: <FaServer />, desc: 'Designing high-availability, scalable architectures tailored for heavy enterprise workloads.' },
    { name: 'DevOps & CI/CD', icon: <FaCogs />, desc: 'Automating deployment pipelines to accelerate delivery and enhance software quality.' },
    { name: 'Cloud Security', icon: <FaShieldAlt />, desc: 'Implementing Zero-Trust security models, IAM, and end-to-end data encryption.' },
    { name: 'Backup & Recovery', icon: <FaDatabase />, desc: 'Automated failover systems and disaster recovery plans to keep your business running 24/7.' },
    { name: 'Performance Monitoring', icon: <FaChartLine />, desc: 'Real-time surveillance and optimization to ensure peak performance and cost-efficiency.' },
  ];

  const providers = [
    { name: 'AWS', color: 'text-orange-500', desc: 'Amazon Web Services' },
    { name: 'Azure', color: 'text-blue-500', desc: 'Microsoft Azure' },
    { name: 'Google Cloud', color: 'text-red-500', desc: 'GCP Platform' },
    { name: 'Digital Ocean', color: 'text-cyan-500', desc: 'Developer Cloud' },
  ];

  return (
    <div className="min-h-screen bg-bg-main pt-28 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* 1. Hero Section */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-accent/20">
            Cloud Excellence
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-text-main mb-6 leading-tight tracking-tighter">
            Cloud <span className="text-accent italic">Architects.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-main/60 max-w-3xl mx-auto font-medium leading-relaxed">
            Stop worrying about server limits. We build serverless and cloud-native solutions 
            that scale automatically with your business growth.
          </p>
        </div>

        {/* 2. Hero Visual (New Image) */}
        <div className="mb-24 rounded-[40px] overflow-hidden shadow-2xl border border-border-main relative group">
          <div className="absolute inset-0 bg-accent/5 mix-blend-overlay z-10" />
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=90" 
            alt="Cloud Network Infrastructure"
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-10 z-20 hidden md:block">
            <div className="bg-bg-main/80 backdrop-blur-md p-6 rounded-2xl border border-border-main max-w-sm">
              <h4 className="font-black text-accent uppercase text-xs mb-2 tracking-widest">Global Reach</h4>
              <p className="text-xs text-text-main/70 font-medium">Deploying distributed systems across 50+ global regions with sub-millisecond latency.</p>
            </div>
          </div>
        </div>

        {/* 3. Services Grid */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-black text-text-main mb-12 text-center uppercase italic tracking-tighter">
            Cloud Strategy & <span className="text-accent">Execution</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card-bg border border-border-main rounded-3xl p-8 hover:border-accent/40 transition-all duration-500 group shadow-sm hover:shadow-2xl hover:shadow-accent/5"
              >
                <div className="text-4xl text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-text-main mb-3 uppercase tracking-tight">{service.name}</h3>
                <p className="text-text-main/50 text-sm leading-relaxed font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Support Logos / Providers */}
        <div className="mb-32">
          <div className="bg-card-bg/30 border border-border-main rounded-[40px] p-10 md:p-16">
            <h2 className="text-2xl font-black text-text-main mb-12 text-center uppercase tracking-widest">
              Multi-Cloud <span className="text-accent">Ecosystem</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {providers.map((provider, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-4xl md:text-5xl font-black mb-4 ${provider.color} opacity-70 group-hover:opacity-100 transition-opacity`}>
                    {provider.name}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-text-main/40">{provider.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Middle Image with Best Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-black text-text-main mb-8 leading-tight">
              Optimized for <br />
              <span className="text-accent italic">Maximum ROAS.</span>
            </h2>
            <div className="space-y-6">
              {[
                { t: "Cost Optimization", d: "We reduce monthly cloud bills by up to 40% using spot instances and efficient resource tagging." },
                { t: "Security First", d: "Military-grade encryption and persistent threat monitoring for all data at rest and in transit." },
                { t: "Microservices", d: "Decoupling your application into microservices for better maintainability and faster updates." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-text-main uppercase text-sm tracking-wider">{item.t}</h4>
                    <p className="text-sm text-text-main/50 font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-[32px] overflow-hidden shadow-2xl border border-border-main">
            <img 
              src="https://images.unsplash.com/photo-1597733336794-12d05021d510?w=1000&q=80" 
              alt="Data Optimization" 
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>

        {/* 6. CTA Section */}
        <div className="relative overflow-hidden rounded-[50px] bg-accent p-12 md:p-24 text-center shadow-[0_0_100px_rgba(253,204,23,0.2)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent)]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-black mb-6 uppercase tracking-tighter italic">
              Future-Proof <br />Your Backend.
            </h2>
            <p className="text-black/70 mb-12 text-lg max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs">
              Migration to the cloud takes days, not months, with ZenVor.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-black text-white px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:scale-110 transition-all no-underline shadow-2xl"
            >
              Consult Cloud Architect
            </Link>
          </div>
        </div>

      </div>

      {/* Global Footer Added */}
      <Footer />
    </div>
  );
};

export default CloudServices;