import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBrain, FaMicrochip, FaDatabase, FaRobot, FaSearch, FaLayerGroup,
  FaShieldAlt, FaCogs, FaChartLine
} from 'react-icons/fa'; // Changed FaSearchChart to FaSearch
import Footer from '../components/Footer';

const AIMLSolutions = () => {
  const services = [
    { 
      name: 'Generative AI', 
      icon: <FaBrain />, 
      desc: 'LLM integration, custom GPT models, and automated content generation workflows.' 
    },
    { 
      name: 'Predictive Analytics', 
      icon: <FaChartLine />, 
      desc: 'Forecasting market trends and user behavior using historical data patterns.' 
    },
    { 
      name: 'Computer Vision', 
      icon: <FaMicrochip />, 
      desc: 'Real-time object detection, facial recognition, and automated visual inspections.' 
    },
    { 
      name: 'Natural Language Processing', 
      icon: <FaRobot />, 
      desc: 'Sentiment analysis, intelligent chatbots, and multi-lingual translation engines.' 
    },
    { 
      name: 'AI Automation', 
      icon: <FaCogs />, 
      desc: 'RPA and intelligent workflow automation to eliminate repetitive manual tasks.' 
    },
    { 
      name: 'Custom AI Models', 
      icon: <FaLayerGroup />, 
      desc: 'Tailored neural networks engineered specifically for your unique dataset.' 
    },
  ];

  const valueProps = [
    {
      title: 'Scalable Architecture',
      desc: 'Our AI models are built to handle millions of requests with low latency and high availability.',
      icon: <FaDatabase />
    },
    {
      title: 'Secure & Compliant',
      desc: 'Strict adherence to data privacy standards including GDPR and HIPAA for AI training.',
      icon: <FaShieldAlt />
    },
    {
      title: 'Insight-Driven',
      desc: 'Turn dark data into actionable business intelligence with advanced mining techniques.',
      icon: <FaSearch /> // Updated to use the valid FaSearch icon
    }
  ];

  const technologies = [
    'TensorFlow', 'PyTorch', 'HuggingFace', 'OpenAI API', 
    'Scikit-learn', 'Keras', 'OpenCV', 'Pandas', 'LangChain'
  ];

  return (
    <div className="min-h-screen bg-bg-main pt-28 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 pb-24">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-accent/20">
            Enterprise Intelligence
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-text-main mb-6 leading-tight">
            Next-Gen <br />
            <span className="text-accent italic">AI & ML Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-text-main/60 max-w-3xl mx-auto font-medium leading-relaxed">
            From proof-of-concept to production-scale intelligence, we help businesses 
            integrate AI that doesn't just work—it evolves.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-24 rounded-[40px] overflow-hidden shadow-2xl border border-border-main relative group">
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop" 
            alt="AI Concept"
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Services Grid */}
        <div className="mb-32">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-text-main mb-4 uppercase italic">Cognitive Capabilities</h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card-bg border border-border-main rounded-3xl p-8 hover:border-accent/40 transition-all duration-500 group shadow-sm hover:shadow-2xl hover:shadow-accent/5"
              >
                <div className="text-4xl text-accent mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-text-main mb-3 uppercase tracking-tight">{service.name}</h3>
                <p className="text-text-main/50 text-sm leading-relaxed font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why ZenVor AI */}
        <div className="mb-32 grid md:grid-cols-3 gap-10">
          {valueProps.map((prop, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-accent text-3xl mb-4">{prop.icon}</div>
              <h4 className="text-lg font-black text-text-main mb-2 uppercase tracking-widest">{prop.title}</h4>
              <p className="text-text-main/60 text-sm leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>

        {/* Integration Stats */}
        <div className="mb-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: '99%', l: 'Prediction Accuracy' },
            { n: '50M+', l: 'Data Points Processed' },
            { n: '60%', l: 'Efficiency Gain' },
            { n: '24/7', l: 'Autonomous Ops' }
          ].map((stat, i) => (
            <div key={i} className="bg-card-bg/30 border border-border-main p-8 rounded-3xl text-center backdrop-blur-sm">
              <div className="text-4xl font-black text-accent mb-2">{stat.n}</div>
              <p className="text-[10px] font-black uppercase tracking-widest text-text-main/40">{stat.l}</p>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mb-32 text-center">
          <h2 className="text-2xl font-black text-text-main mb-10 uppercase tracking-[0.2em]">Our Neural Tech-Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-card-bg border border-border-main rounded-2xl px-8 py-4 hover:border-accent hover:bg-accent hover:text-black transition-all duration-300 font-bold text-sm tracking-widest cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-[50px] bg-gradient-to-br from-card-bg via-bg-main to-card-bg border border-border-main p-12 md:p-24 text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[150px] rounded-full animate-pulse" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-text-main mb-6 leading-tight">
              Ready to <span className="text-accent italic">Automate Success?</span>
            </h2>
            <p className="text-text-main/60 mb-12 text-lg max-w-2xl mx-auto font-medium">
              Transform your business operations with custom-built artificial intelligence. 
              Schedule a technical discovery session today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact"
                className="inline-block bg-accent text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-110 transition-all no-underline shadow-2xl shadow-accent/20"
              >
                Consult AI Architect
              </Link>
              <Link 
                to="/portfolio"
                className="inline-block bg-transparent border-2 border-border-main text-text-main px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:border-accent transition-all no-underline"
              >
                View AI Case Studies
              </Link>
            </div>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default AIMLSolutions;