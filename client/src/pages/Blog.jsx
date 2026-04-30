import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendar, FaClock, FaUser, FaArrowRight, 
  FaSearch, FaTag
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Footer from '../components/Footer'; // Global Footer Imported

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const blogPosts = [
    {
      id: 1,
      slug: 'digital-marketing-trends-2024',
      title: 'Digital Marketing Trends Dominating 2024',
      excerpt: 'Discover the game-changing strategies that are reshaping digital marketing in 2024. From AI-powered personalization to voice search optimization.',
      category: 'Digital Marketing',
      author: 'Priya Sharma',
      date: 'January 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      featured: true,
      tags: ['SEO', 'Social Media', 'AI Marketing']
    },
    {
      id: 2,
      slug: 'business-automation-revolution',
      title: 'The Business Automation Revolution',
      excerpt: 'Learn how intelligent automation is transforming businesses worldwide. Cut operational costs by 40% while boosting productivity exponentially.',
      category: 'Business Automation',
      author: 'Amit Patel',
      date: 'January 10, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
      featured: true,
      tags: ['Automation', 'RPA']
    },
    {
      id: 3,
      slug: 'ai-revolution-web-development',
      title: 'AI Revolution in Web Development',
      excerpt: 'Artificial Intelligence is no longer science fiction—it\'s revolutionizing how we build, deploy, and optimize web applications.',
      category: 'Technology',
      author: 'Rajesh Kumar',
      date: 'January 5, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      featured: false,
      tags: ['AI', 'Web Dev']
    },
    {
      id: 4,
      slug: 'cybersecurity-essentials-2024',
      title: 'Cybersecurity Essentials Every Business Needs',
      excerpt: 'Protect your digital assets with these critical security measures. Don\'t let your business become the next cyber attack victim.',
      category: 'Security',
      author: 'Neha Gupta',
      date: 'December 28, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      featured: false,
      tags: ['Security', 'Data']
    },
    {
      id: 5,
      slug: 'cloud-migration-guide',
      title: 'Complete Guide to Cloud Migration Success',
      excerpt: 'Migrating to the cloud? Avoid costly mistakes with our comprehensive guide covering AWS, Azure, and Google Cloud platforms.',
      category: 'Cloud Computing',
      author: 'Vikram Singh',
      date: 'December 20, 2023',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      featured: false,
      tags: ['Cloud', 'AWS']
    },
    {
      id: 6,
      slug: 'ecommerce-optimization-strategies',
      title: 'E-Commerce Optimization Strategies',
      excerpt: 'Proven strategies to skyrocket your online store\'s performance. Learn from brands that increased conversions by over 300%.',
      category: 'E-Commerce',
      author: 'Sneha Reddy',
      date: 'December 15, 2023',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      featured: false,
      tags: ['CRO', 'UX']
    },
  ];

  const categories = ['All', 'Digital Marketing', 'Business Automation', 'Technology', 'Security', 'Cloud Computing', 'E-Commerce'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="bg-bg-main text-text-main min-h-screen transition-colors duration-500 font-jakarta">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-bg-main via-card-bg to-bg-main opacity-50" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-6 py-2 bg-accent/10 text-accent rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-accent/20">
              Agency Perspectives
            </span>
            
            <h1 className="text-[clamp(2.5rem,10vw,7.5rem)] font-black leading-[0.9] mb-8 tracking-tighter uppercase">
              The ZenVor <span className="text-accent italic">Blog.</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg opacity-70 mb-12 font-medium">
              Cutting-edge strategies and deep-dives into the <span className="text-text-main font-bold underline decoration-accent decoration-2 underline-offset-4">digital future</span>.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto group">
              <div className="relative">
                <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-accent text-lg" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 bg-card-bg border border-border-main rounded-2xl text-text-main placeholder-text-main/30 focus:border-accent/50 focus:outline-none transition-all font-bold uppercase text-[11px] tracking-widest shadow-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY FILTER - STICKY */}
      <section className="py-8 border-y border-border-main bg-card-bg/30 backdrop-blur-md sticky top-[72px] z-[50]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-black shadow-lg shadow-accent/20'
                    : 'bg-card-bg text-text-main/50 border border-border-main hover:border-accent/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-24 container mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Featured <span className="text-accent">Insight</span></h2>
          </motion.div>

          <Link to={`/blog/${featuredPost.slug}`} className="group block no-underline">
            <div className="grid lg:grid-cols-2 gap-0 bg-card-bg border border-border-main rounded-[48px] overflow-hidden hover:border-accent/30 transition-all duration-500 shadow-xl">
              <div className="relative h-[400px] lg:h-full overflow-hidden">
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg-main/20 to-transparent" />
              </div>

              <div className="p-10 lg:p-20 flex flex-col justify-center">
                <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-6 inline-block">{featuredPost.category}</span>
                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter uppercase group-hover:text-accent transition-colors">{featuredPost.title}</h3>
                <p className="text-lg opacity-60 mb-10 leading-relaxed font-medium italic">"{featuredPost.excerpt}"</p>

                <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest opacity-40 mb-10">
                  <span className="flex items-center gap-2"><FaUser className="text-accent" /> {featuredPost.author}</span>
                  <span className="flex items-center gap-2"><FaCalendar className="text-accent" /> {featuredPost.date}</span>
                </div>

                <div className="flex items-center gap-3 text-accent font-black uppercase tracking-[0.3em] text-xs">
                  Read Case Study <FaArrowRight className="group-hover:translate-x-3 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* BLOG GRID */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="group block h-full no-underline">
                <div className="h-full flex flex-col bg-card-bg border border-border-main rounded-[32px] overflow-hidden hover:border-accent/40 transition-all duration-500 hover:translate-y-[-10px] shadow-sm">
                  <div className="relative h-64 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-bg-main/90 backdrop-blur-md text-text-main border border-border-main rounded-full text-[9px] font-black uppercase tracking-widest">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-black mb-4 leading-tight uppercase tracking-tight group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-sm opacity-60 mb-8 leading-relaxed line-clamp-3 font-medium">{post.excerpt}</p>
                    
                    <div className="mt-auto flex items-center justify-between border-t border-border-main pt-6">
                      <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest opacity-40">
                        <span className="flex items-center gap-1.5"><FaClock /> {post.readTime}</span>
                      </div>
                      <FaArrowRight className="text-accent group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-32 container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[60px] bg-accent p-12 md:p-24 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent)]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black text-black mb-8 leading-none tracking-tighter uppercase italic">
              Level Up Your <br />Knowledge.
            </h2>
            <p className="text-black/70 mb-12 text-lg font-bold uppercase tracking-widest text-xs">
              Weekly industry insights, delivered directly to your brain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 px-8 py-5 bg-white border-none rounded-2xl text-black placeholder-black/40 font-black text-[10px] tracking-widest focus:ring-2 focus:ring-black outline-none shadow-inner"
              />
              <button className="px-12 py-5 bg-black text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:scale-105 transition-all shadow-2xl">
                Join Now
              </button>
            </div>
            <p className="text-[9px] font-black uppercase text-black/40 mt-8 tracking-widest">
              Zero Spam. Just high-value engineering & marketing content.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Blog;