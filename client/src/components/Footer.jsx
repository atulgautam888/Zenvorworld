import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Our Portfolio', path: '/portfolio' },
    { name: 'Our Offerings', path: '/services' },
    { name: 'Why ZenVor', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Reach Us', path: '/contact' },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: '#', color: 'hover:bg-blue-600' },
    { icon: <FaTwitter />, link: '#', color: 'hover:bg-sky-500' },
    { icon: <FaLinkedinIn />, link: '#', color: 'hover:bg-blue-700' },
    { icon: <FaInstagram />, link: '#', color: 'hover:bg-pink-600' },
    { icon: <FaPinterestP />, link: '#', color: 'hover:bg-red-600' },
  ];

  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* 1. Brand Column */}
          <div className="space-y-8">
            <div>
               <h2 className="text-4xl font-black tracking-tighter italic">
                Zen<span className="text-accent text-yellow-500">Vor</span>
               </h2>
               <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 mt-1">Creators Of Tomorrow</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed text-justify">
              <strong className="text-white">ZenVor</strong> is a premium Software & Digital Marketing Company. We provide high-end website designing, mobile app development, e-commerce portals, and strategic social media services. We are committed to managing your brand value with innovation and support.
            </p>
          </div>

          {/* 2. Useful Links */}
          <div>
            <h4 className="text-xl font-black uppercase mb-8 border-b-2 border-accent w-fit pb-2">Useful Links</h4>
            <ul className="space-y-4">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-slate-400 hover:text-accent hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                    <span className="h-[1px] w-0 bg-accent group-hover:w-4 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Help / Quotes */}
          <div>
            <h4 className="text-xl font-black uppercase mb-8 border-b-2 border-accent w-fit pb-2">Need Any Help</h4>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed italic">
              "Each and every project is different for us. Please provide your details so we can come up with the best ideas."
            </p>
            <div className="space-y-4">
              <button className="w-full py-4 bg-accent text-black font-black uppercase text-[10px] tracking-widest rounded-xl hover:scale-105 transition-transform shadow-lg shadow-accent/20">
                Quote For Technical Projects
              </button>
              <button className="w-full py-4 bg-transparent border-2 border-accent text-accent font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-accent hover:text-black transition-all">
                Quote For Social Media Projects
              </button>
            </div>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="text-xl font-black uppercase mb-8 border-b-2 border-accent w-fit pb-2">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 text-accent"><FaMapMarkerAlt /></div>
                <p className="text-slate-400 text-sm group-hover:text-white transition-colors">
                  Office No. 06 (I G), H-61, <br /> Sector-63 Noida, UP 201301
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="text-accent"><FaPhoneAlt /></div>
                <p className="text-slate-400 text-sm group-hover:text-white transition-colors">+44 7399 729148</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="text-accent"><FaEnvelope /></div>
                <p className="text-slate-400 text-sm group-hover:text-white transition-colors uppercase tracking-tighter">hello@zenvor.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:row gap-8 items-center justify-between">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} <span className="text-white">ZenVor</span> - All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialIcons.map((soc, i) => (
              <a 
                key={i} 
                href={soc.link} 
                className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 ${soc.color} hover:text-white hover:-translate-y-2`}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;