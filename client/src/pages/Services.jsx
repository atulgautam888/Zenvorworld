import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Global Footer Imported

const Services = () => {
  const services = [
    {
      name: 'Web Development',
      icon: '🌐',
      description: 'Build powerful, scalable, and modern web applications that drive your business forward',
      path: '/web-development',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'HTML5', 'CSS3']
    },
    {
      name: 'Mobile App Development',
      icon: '📱',
      description: 'Transform your ideas into powerful mobile applications for iOS and Android',
      path: '/mobile-app-development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      tags: ['iOS', 'Android', 'React Native', 'Flutter']
    },
    {
      name: 'UI/UX Design',
      icon: '🎨',
      description: 'Crafting beautiful, intuitive, and user-centered digital experiences',
      path: '/ui-ux-design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      tags: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping']
    },
    {
      name: 'Digital Marketing',
      icon: '📢',
      description: 'Grow your brand with data-driven digital marketing strategies',
      path: '/digital-marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['SEO', 'Social Media', 'PPC', 'Content Marketing']
    },
    {
      name: 'SEO Services',
      icon: '🔍',
      description: 'Dominate search results and drive organic traffic to your website',
      path: '/seo-services',
      image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=600&h=400&fit=crop',
      tags: ['On-Page', 'Off-Page', 'Technical', 'Local SEO']
    },
    {
      name: 'E-commerce Solutions',
      icon: '🛒',
      description: 'Build powerful online stores that convert visitors into customers',
      path: '/ecommerce-solutions',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['Shopify', 'WooCommerce', 'Magento', 'Custom']
    },
    {
      name: 'Cloud Services',
      icon: '☁️',
      description: 'Scalable, secure, and reliable cloud infrastructure for your business',
      path: '/cloud-services',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      tags: ['AWS', 'Azure', 'Google Cloud', 'DevOps']
    },
    {
      name: 'AI & ML Solutions',
      icon: '🤖',
      description: 'Harness the power of artificial intelligence to transform your business',
      path: '/ai-ml-solutions',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tags: ['Machine Learning', 'NLP', 'Computer Vision', 'Analytics']
    },
  ];

  return (
    <div className="min-h-screen bg-bg-main pt-28 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 pb-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-text-main mb-6">
            Our
            <span className="text-accent"> Offerings</span>
          </h1>
          <p className="text-xl text-text-main/70 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group bg-card-bg border border-border-main rounded-2xl overflow-hidden hover:border-accent transition-all hover:shadow-2xl hover:shadow-accent/10 no-underline"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-6xl">{service.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-text-main mb-3 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-text-main/70 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-accent font-bold text-sm group-hover:gap-4 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-text-main/70 mb-8 text-lg">
            We offer custom solutions tailored to your unique needs
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-accent text-black px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:opacity-90 shadow-lg shadow-accent/20 transition-all no-underline"
          >
            Contact Us for Custom Solutions
          </Link>
        </div>

      </div>

      {/* Global Footer Added */}
      <Footer />
    </div>
  );
};

export default Services;