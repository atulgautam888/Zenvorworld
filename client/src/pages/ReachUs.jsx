import React, { useEffect } from "react";
import { Mail, MapPin, Phone, Send, ExternalLink, MessageSquare } from "lucide-react";
import Lenis from '@studio-freight/lenis';
import Footer from "../components/Footer"; 

const ReachUs = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // GMAIL INTEGRATION LOGIC
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const service = formData.get('service');

    const emailBody = `
Hello ZenVor Team,

I have a new inquiry from the website.

--- CLIENT DETAILS ---
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

--- MESSAGE ---
${message}

Regards,
${name}
    `.trim();

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=support@zenvorworld.com&su=New Project Inquiry from ${name}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="bg-bg-main text-text-main min-h-screen transition-colors duration-500 pt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        
        {/* HEADER SECTION */}
        <div className="mb-16 text-center lg:text-left">
            <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-4">
                Reach <span className="text-accent">Us.</span>
            </h1>
            <p className="opacity-50 font-bold uppercase tracking-[0.4em] text-xs">Establish a connection with tomorrow</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT: THE FORM CARD */}
          <div className="lg:col-span-2 bg-card-bg border border-border-main p-8 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="mb-12 relative z-10">
              <h2 className="text-3xl md:text-4xl font-black italic uppercase mb-3 text-text-main">
                Send us Your Query
              </h2>
              <div className="flex items-center gap-2">
                <span className="h-[3px] w-12 bg-accent rounded-full"></span>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-40">
                  Get in touch
                </p>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-10 relative z-10">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full border-b-2 border-border-main bg-transparent outline-none py-4 focus:border-accent transition-all placeholder-gray-500 font-bold text-lg text-text-main"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Id"
                  required
                  className="w-full border-b-2 border-border-main bg-transparent outline-none py-4 focus:border-accent transition-all placeholder-gray-500 font-bold text-lg text-text-main"
                />
                <input
                  name="phone"
                  type="text"
                  placeholder="Mobile Number"
                  required
                  className="w-full border-b-2 border-border-main bg-transparent outline-none py-4 focus:border-accent transition-all placeholder-gray-500 font-bold text-lg text-text-main"
                />
                <div className="group relative">
                  <select name="service" required className="w-full border-b-2 border-border-main bg-transparent outline-none py-4 focus:border-accent transition-all text-gray-500 font-bold text-lg appearance-none cursor-pointer">
                    <option value="General Inquiry" className="bg-bg-main">What Do You Want</option>
                    <option value="Web Development" className="bg-bg-main">Web Development</option>
                    <option value="App Development" className="bg-bg-main">App Development</option>
                    <option value="AI Solutions" className="bg-bg-main">AI Solutions</option>
                    <option value="UI/UX Design" className="bg-bg-main">UI/UX Design</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-accent">
                     <ExternalLink size={18} />
                  </div>
                </div>
              </div>

              <textarea
                name="message"
                placeholder="How can we help you?"
                rows="4"
                required
                className="w-full border-b-2 border-border-main bg-transparent outline-none py-4 focus:border-accent transition-all placeholder-gray-500 font-bold text-lg resize-none text-text-main"
              ></textarea>

              <button type="submit" className="group flex items-center gap-4 bg-accent text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 hover:shadow-[0_10px_30px_rgba(253,204,22,0.3)] transition-all">
                Shoot Message
                <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO CARD */}
          <div className="bg-[#111] text-white p-10 rounded-[40px] shadow-2xl flex flex-col justify-between min-h-[600px] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black italic uppercase mb-12 border-b border-white/10 pb-6">Contact Details</h3>

              <div className="space-y-12">
                <ContactItem icon={<MapPin />} label="Registered Office" value="J-506, J Tower, Royal Lake City, Sanjan–Umbergaon Road, Devdham, Umargam, Valsad, Gujarat – 396170" />
                <ContactItem icon={<Mail />} label="Email Us" value="support@zenvorworld.com" isLink link="mailto:support@zenvorworld.com" />
                <ContactItem icon={<Phone />} label="Call Us" value="+91 97656 25910" subValue="Available 10am-7pm" />
              </div>
            </div>

            {/* MINI MAP CARD - FIXED URL */}
            <div className="mt-12 relative group rounded-3xl overflow-hidden h-56 border border-white/10 shadow-inner bg-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.885665471448!2d72.7667557!3d20.1983056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0da62f6b86657%3A0x6730598a698a876a!2sRoyal%20Lake%20City!5e0!3m2!1sen!2sin!4v1714050639000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                allowFullScreen=""
                loading="lazy"
                title="ZenVor Office"
              ></iframe>
              <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-all pointer-events-none"></div>
              <a 
                href="https://maps.app.goo.gl/ValsadGujaratLocationLink" // Replace with actual short link
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 z-20 bg-accent text-black p-3 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 font-black text-[10px] uppercase"
              >
                <MessageSquare size={16} /> Chat
              </a>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

// Helper Component for UI Cleanliness
const ContactItem = ({ icon, label, value, subValue, isLink, link }) => (
  <div className="flex gap-6 group">
    <div className="bg-accent/10 p-4 rounded-2xl h-fit group-hover:bg-accent group-hover:text-black transition-all duration-500">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <p className="text-accent font-black uppercase tracking-widest text-[10px] mb-2">{label}</p>
      {isLink ? (
        <a href={link} className="text-lg font-black break-all hover:text-accent transition-colors">{value}</a>
      ) : (
        <p className="text-gray-400 font-bold leading-relaxed text-sm">{value}</p>
      )}
      {subValue && <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter mt-1">{subValue}</p>}
    </div>
  </div>
);

export default ReachUs;