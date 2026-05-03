import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaUser, FaArrowLeft, FaShare, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

const DigitalMarketingTrends = () => {
  // Smooth Scroll
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

  return (
    <div className="bg-bg-main text-text-main min-h-screen transition-colors duration-500">
      
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-32 pb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-3 text-accent font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all no-underline"
        >
          <FaArrowLeft /> Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-black uppercase tracking-wider border border-accent/20">
              Digital Marketing
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-black uppercase tracking-wider border border-accent/20">
              SEO
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-black uppercase tracking-wider border border-accent/20">
              AI Marketing
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
            Digital Marketing Trends <span className="text-accent italic">Dominating 2024</span>
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm opacity-70 mb-8">
            <div className="flex items-center gap-2">
              <FaUser className="text-accent" />
              <span className="font-bold">Priya Sharma</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-accent" />
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-accent" />
              <span>8 min read</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 pb-8 border-b border-border-main">
            <span className="text-sm font-bold uppercase tracking-wider opacity-60">Share:</span>
            <button className="w-10 h-10 rounded-full bg-card-bg border border-border-main flex items-center justify-center hover:bg-accent hover:text-black hover:border-accent transition-all">
              <FaTwitter />
            </button>
            <button className="w-10 h-10 rounded-full bg-card-bg border border-border-main flex items-center justify-center hover:bg-accent hover:text-black hover:border-accent transition-all">
              <FaLinkedin />
            </button>
            <button className="w-10 h-10 rounded-full bg-card-bg border border-border-main flex items-center justify-center hover:bg-accent hover:text-black hover:border-accent transition-all">
              <FaFacebook />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90" 
              alt="Digital Marketing Trends 2024"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <div className="text-text-main space-y-8">
            
            <p className="text-xl leading-relaxed opacity-80 font-medium">
              The digital marketing landscape is evolving at breakneck speed. As we navigate through 2024, businesses that fail to adapt to these emerging trends risk being left behind. This comprehensive guide explores the most impactful digital marketing strategies that are reshaping how brands connect with their audiences.
            </p>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              1. AI-Powered <span className="text-accent italic">Personalization</span>
            </h2>

            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=80" 
              alt="AI Marketing"
              className="w-full h-[400px] object-cover rounded-3xl my-8"
            />

            <p className="text-lg leading-relaxed opacity-70">
              Artificial Intelligence has moved from buzzword to business-critical tool. In 2024, AI-driven personalization is no longer optional—it's expected. Leading brands are leveraging machine learning algorithms to analyze customer behavior patterns, predict preferences, and deliver hyper-personalized content at scale.
            </p>

            <div className="bg-card-bg border-l-4 border-accent p-8 rounded-r-2xl my-8">
              <p className="text-lg font-bold mb-2 text-accent">Key Insight:</p>
              <p className="text-base opacity-70 leading-relaxed">
                Companies using AI-powered personalization see an average conversion rate increase of 30% and customer engagement improvements of up to 50%.
              </p>
            </div>

            <h3 className="text-3xl font-black mt-12 mb-4 tracking-tight">Implementation Strategies:</h3>
            <ul className="space-y-4 text-lg opacity-70 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">Dynamic Content:</strong> Use AI to automatically adjust website content, product recommendations, and email campaigns based on individual user behavior.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">Predictive Analytics:</strong> Anticipate customer needs before they express them, creating proactive marketing touchpoints.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">Chatbot Intelligence:</strong> Deploy AI chatbots that learn from every interaction to provide increasingly accurate responses.</span>
              </li>
            </ul>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              2. Voice Search <span className="text-accent italic">Optimization</span>
            </h2>

            <img 
              src="https://images.unsplash.com/photo-1589254065909-b7086229d08c?w=1000&q=80" 
              alt="Voice Search"
              className="w-full h-[400px] object-cover rounded-3xl my-8"
            />

            <p className="text-lg leading-relaxed opacity-70">
              With over 50% of searches now being voice-based, optimizing for voice search is critical. Voice queries are fundamentally different from typed searches—they're longer, more conversational, and often question-based.
            </p>

            <h3 className="text-3xl font-black mt-12 mb-4 tracking-tight">Best Practices:</h3>
            <ul className="space-y-4 text-lg opacity-70 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">Natural Language Content:</strong> Write content that mirrors how people actually speak, not just how they type.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">Featured Snippets:</strong> Optimize for position zero by providing concise, direct answers to common questions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">Local SEO:</strong> Most voice searches have local intent—ensure your Google My Business profile is complete and optimized.</span>
              </li>
            </ul>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              3. Short-Form Video <span className="text-accent italic">Dominance</span>
            </h2>

            <img 
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1000&q=80" 
              alt="Video Marketing"
              className="w-full h-[400px] object-cover rounded-3xl my-8"
            />

            <p className="text-lg leading-relaxed opacity-70">
              TikTok, Instagram Reels, and YouTube Shorts have fundamentally changed content consumption patterns. Short-form video content (15-60 seconds) now drives more engagement than any other format.
            </p>

            <div className="bg-gradient-to-br from-accent/10 to-accent-dark/10 border border-accent/20 p-8 rounded-3xl my-8">
              <h4 className="text-2xl font-black mb-4">Video Content Statistics 2024:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-black text-accent mb-2">82%</p>
                  <p className="text-sm opacity-70">of internet traffic is video content</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-accent mb-2">1200%</p>
                  <p className="text-sm opacity-70">more shares than text + images combined</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-accent mb-2">88%</p>
                  <p className="text-sm opacity-70">of marketers say video ROI is positive</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-accent mb-2">95%</p>
                  <p className="text-sm opacity-70">message retention from video vs 10% from text</p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              4. Privacy-First <span className="text-accent italic">Marketing</span>
            </h2>

            <p className="text-lg leading-relaxed opacity-70">
              With the death of third-party cookies and increasing privacy regulations (GDPR, CCPA, etc.), marketers must pivot to first-party data strategies. This isn't just about compliance—it's about building trust and sustainable customer relationships.
            </p>

            <h3 className="text-3xl font-black mt-12 mb-4 tracking-tight">Strategic Approaches:</h3>
            <ul className="space-y-4 text-lg opacity-70 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">Value Exchange:</strong> Offer genuine value (exclusive content, tools, discounts) in exchange for customer data.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">Zero-Party Data:</strong> Collect data directly from customers through surveys, preference centers, and interactive content.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">Contextual Targeting:</strong> Shift from behavioral tracking to content-based advertising.</span>
              </li>
            </ul>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              5. Social Commerce <span className="text-accent italic">Revolution</span>
            </h2>

            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=80" 
              alt="Social Commerce"
              className="w-full h-[400px] object-cover rounded-3xl my-8"
            />

            <p className="text-lg leading-relaxed opacity-70">
              Social media platforms are no longer just discovery channels—they're full-fledged marketplaces. Instagram Shopping, Facebook Marketplace, TikTok Shop, and Pinterest Buyable Pins allow users to complete purchases without ever leaving the app.
            </p>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              Conclusion: <span className="text-accent italic">Adapt or Obsolete</span>
            </h2>

            <p className="text-lg leading-relaxed opacity-70">
              The digital marketing landscape of 2024 rewards agility, authenticity, and innovation. Businesses that embrace AI personalization, optimize for voice search, leverage short-form video, respect user privacy, and capitalize on social commerce will thrive.
            </p>

            <p className="text-lg leading-relaxed opacity-70">
              The question isn't whether you should adopt these trends—it's how quickly you can implement them before your competitors do.
            </p>

            <div className="bg-accent/10 border border-accent/30 p-10 rounded-3xl mt-12">
              <h3 className="text-3xl font-black mb-4">Ready to Transform Your Digital Marketing?</h3>
              <p className="text-lg opacity-70 mb-6">
                Let ZenVor help you implement these cutting-edge strategies. Our team of experts specializes in data-driven digital marketing that delivers measurable results.
              </p>
              <Link 
                to="/contact" 
                className="inline-block px-10 py-4 bg-accent text-black rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:scale-105 transition-all no-underline shadow-lg"
              >
                Get Started Today
              </Link>
            </div>

          </div>

        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 bg-card-bg/30 border-t border-border-main">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-black mb-12 text-center tracking-tight">
            Related <span className="text-accent italic">Articles</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link to="/blog/business-automation-revolution" className="group block no-underline">
              <div className="bg-card-bg border border-border-main rounded-2xl overflow-hidden hover:border-accent/40 transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80" 
                  alt="Business Automation"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h4 className="font-black text-lg mb-2 group-hover:text-accent transition-colors">
                    Business Automation Revolution
                  </h4>
                  <p className="text-sm opacity-60">Scale smarter with intelligent automation...</p>
                </div>
              </div>
            </Link>

            <Link to="/blog/ai-revolution-web-development" className="group block no-underline">
              <div className="bg-card-bg border border-border-main rounded-2xl overflow-hidden hover:border-accent/40 transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80" 
                  alt="AI Revolution"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h4 className="font-black text-lg mb-2 group-hover:text-accent transition-colors">
                    AI Revolution in Web Development
                  </h4>
                  <p className="text-sm opacity-60">The future of web development is here...</p>
                </div>
              </div>
            </Link>

            <Link to="/blog" className="group block no-underline">
              <div className="bg-card-bg border border-border-main rounded-2xl overflow-hidden hover:border-accent/40 transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&q=80" 
                  alt="All Articles"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h4 className="font-black text-lg mb-2 group-hover:text-accent transition-colors">
                    View All Articles
                  </h4>
                  <p className="text-sm opacity-60">Explore more insights and trends...</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-20" />

    </div>
  );
};

export default DigitalMarketingTrends;