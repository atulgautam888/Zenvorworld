import { useState, useEffect, useRef } from "react";
import Footer from '../components/Footer'; // Global Footer Imported

// ─── COUNTER HOOK ─────────────────────────────────────────────────────────────
function useCounter(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

// ─── INTERSECTION OBSERVER HOOK ───────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { end: 150, suffix: "+", label: "Projects Delivered", icon: "🚀" },
  { end: 98,  suffix: "%", label: "Client Satisfaction", icon: "⭐" },
  { end: 50,  suffix: "Cr+", label: "Revenue Generated (₹)", icon: "💰" },
  { end: 40,  suffix: "+", label: "Industries Served", icon: "🌍" },
];

const IT_SERVICES = [
  { icon: "🌐", title: "Web Development", desc: "Modern, scalable websites built with Next.js, React & cutting-edge tech stacks." },
  { icon: "📱", title: "Mobile App Development", desc: "Native-quality Android & iOS apps using React Native and Flutter." },
  { icon: "⚙️", title: "Custom Software Solutions", desc: "Tailored software engineered precisely for your business workflows." },
  { icon: "🎨", title: "UI/UX Design", desc: "Intuitive, conversion-focused design systems built in Figma." },
  { icon: "☁️", title: "Cloud & API Integration", desc: "Scalable cloud infrastructure and seamless third-party integrations." },
];

const MARKETING_SERVICES = [
  { icon: "🔍", title: "Search Engine Optimization", desc: "Dominate Google rankings with technical SEO and authority-building strategies." },
  { icon: "📣", title: "Social Media Marketing", desc: "Engaging campaigns across Instagram, LinkedIn, and beyond that drive real followers." },
  { icon: "💰", title: "Pay-Per-Click Advertising", desc: "High-ROAS Google & Meta ad campaigns engineered for maximum conversions." },
  { icon: "✍️", title: "Content Marketing", desc: "Strategic content that builds authority, trust, and organic long-term traffic." },
  { icon: "🏆", title: "Branding & ORM", desc: "Build a brand identity that stands out and an online reputation that converts." },
];

const WHY_US = [
  { icon: "🎯", title: "Result-Oriented Approach", desc: "Every strategy is tied to measurable KPIs. We deliver growth you can see in your analytics." },
  { icon: "⚡", title: "Latest Technologies & Tools", desc: "We stay ahead of the curve — using the newest frameworks, platforms, and AI tools." },
  { icon: "🧠", title: "Experienced & Creative Team", desc: "Senior developers, designers, and marketers who've worked across 40+ industries." },
  { icon: "🤝", title: "Client-Centric Solutions", desc: "No cookie-cutter plans. Every solution is custom-built around your unique business goals." },
  { icon: "🌍", title: "Global Reach, Local Understanding", desc: "We operate worldwide while deeply understanding the local nuances of every market." },
  { icon: "📈", title: "Long-Term Partnership", desc: "We don't disappear after launch. We're your growth partner for the long haul." },
];

const TEAM = [
  {
    name: "Jignesh Bhandari",
    role: "CEO",
    bio: "Visionary leader steering ZenVor World toward global technological dominance.",
    initials: "JB",
    color: "#FDCC17",
  },
  {
    name: "Himanshu Shukla",
    role: "Director",
    bio: "Strategic director overseeing corporate growth and operational excellence.",
    initials: "HS",
    color: "#414a4c",
  },
  {
    name: "Oli Donovor",
    role: "Business Executive (UK)",
    bio: "Leading business strategy and corporate relations within the UK market.",
    initials: "OD",
    color: "#1A1A1A",
  },
  {
    name: "Svetlozar Svetozarov",
    role: "Project Manager (Bulgaria+UK)",
    bio: "Expert in cross-border project coordination and international delivery standards.",
    initials: "SS",
    color: "#ecb203",
  },
  {
    name: "Patrick Lopez",
    role: "Global Entrepreneur (UK)",
    bio: "Driving global ventures and expanding the brand's reach across international borders.",
    initials: "PL",
    color: "#FDCC17",
  },
  {
    name: "Akash Singh",
    role: "Marketing Director (Italy)",
    bio: "Crafting high-impact marketing strategies for the European digital landscape.",
    initials: "AS",
    color: "#414a4c",
  },
  {
    name: "Darsh Thakor",
    role: "Sales Executive (USA)",
    bio: "Spearheading sales initiatives and client acquisition across the United States.",
    initials: "DT",
    color: "#1A1A1A",
  },
  {
    name: "Simon Rojas",
    role: "Project Manager (UK)",
    bio: "Ensuring precision and quality in project lifecycles for our UK-based clients.",
    initials: "SR",
    color: "#ecb203",
  },
  {
    name: "Miguel Joubrael",
    role: "Project Manager (Spain)",
    bio: "Overseeing technical implementations and digital solutions in the Spanish market.",
    initials: "MJ",
    color: "#FDCC17",
  },
];

const TIMELINE = [
  { year: "2016", title: "Founded", desc: "ZenVor World was born with a mission to make world-class digital services accessible to every business." },
  { year: "2018", title: "First 50 Clients", desc: "Crossed 50 happy clients and expanded into digital marketing services alongside web development." },
  { year: "2020", title: "Global Expansion", desc: "Began serving international clients across the US, UK, and Middle East markets." },
  { year: "2022", title: "Mobile & AI Division", desc: "Launched dedicated mobile app development and AI/ML solutions division." },
  { year: "2024", title: "₹50Cr+ Impact", desc: "Delivered over ₹50 Crore in measurable revenue growth for our clients worldwide." },
];

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────
function AnimatedStat({ stat, start }) {
  const count = useCounter(stat.end, 2200, start);
  return (
    <div className="text-center group">
      <div className="text-3xl mb-3">{stat.icon}</div>
      <div
        className="font-black text-4xl md:text-5xl text-text-main leading-none mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {count}
        <span className="text-[#FDCC17]">{stat.suffix}</span>
      </div>
      <div className="text-text-main/50 text-xs uppercase tracking-widest font-semibold">{stat.label}</div>
    </div>
  );
}

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────
function ServiceCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative bg-card-bg rounded-2xl border border-border-main p-6 cursor-pointer overflow-hidden"
      style={{
        transition: "transform .3s ease, box-shadow .3s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,.3)" : "none",
        animationDelay: `${index * 80}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute bottom-0 right-0 w-32 h-32 rounded-full pointer-events-none transition-all duration-500"
        style={{
          background: "radial-gradient(rgba(253,204,23,0.12), transparent 70%)",
          transform: hovered ? "scale(2)" : "scale(1)",
        }}
      />
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 transition-colors duration-300"
        style={{ background: hovered ? "#FDCC17" : "rgba(253,204,23,0.1)" }}
      >
        {item.icon}
      </div>
      <h4
        className="text-text-main font-bold text-base mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {item.title}
      </h4>
      <p className="text-text-main/60 text-sm leading-relaxed">{item.desc}</p>
    </div>
  );
}

// ─── WHY CARD ─────────────────────────────────────────────────────────────────
function WhyCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex gap-4 p-5 rounded-2xl border border-border-main bg-card-bg/50 cursor-default"
      style={{
        transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
        boxShadow: hovered ? "0 10px 30px rgba(0,0,0,.2)" : "none",
        borderColor: hovered ? "rgba(253,204,23,0.4)" : "",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-colors duration-300"
        style={{ background: hovered ? "#FDCC17" : "rgba(253,204,23,0.1)" }}
      >
        {item.icon}
      </div>
      <div>
        <h4 className="text-text-main font-bold text-sm mb-1">{item.title}</h4>
        <p className="text-text-main/50 text-xs leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

// ─── MAIN ABOUT PAGE ──────────────────────────────────────────────────────────
export default function AboutUs() {
  const [statsRef, statsInView] = useInView(0.3);

  return (
    <div
      className="min-h-screen bg-bg-main text-text-main overflow-x-hidden transition-colors duration-500"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >

      {/* ══════════════════════════════════════ HERO ══ */}
      <section className="relative min-h-[92vh] flex items-center px-[5%] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main/60 to-transparent" />
        </div>

        <div
          className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[rgba(253,204,23,0.15)] pointer-events-none hidden lg:block"
          style={{ boxShadow: "0 0 120px rgba(253,204,23,0.08) inset" }}
        />
        <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-[rgba(253,204,23,0.08)] pointer-events-none hidden lg:block" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[rgba(253,204,23,0.15)] border border-[rgba(253,204,23,0.35)] rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDCC17] animate-ping inline-block" />
            <span className="text-[#FDCC17] text-[11px] font-bold uppercase tracking-widest">
              About ZenVor World
            </span>
          </div>

          <h1
            className="font-black text-text-main leading-[1.05] tracking-[-2px] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 5.5vw, 5.2rem)",
            }}
          >
            Where{" "}
            <span className="text-[#FDCC17]">Innovation</span>
            <br />
            Meets Digital
            <br />
            <span className="text-[#FDCC17]">Excellence</span>
          </h1>

          <p className="text-text-main/70 text-lg leading-relaxed max-w-xl mb-10">
            We are a global IT services and digital marketing company committed to helping businesses grow, scale, and dominate in the digital landscape.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/reach-us"
              className="bg-[#FDCC17] text-black font-bold text-sm px-8 py-4 rounded-full uppercase tracking-wider hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(253,204,23,0.45)] transition-all duration-200 inline-block no-underline"
            >
              Start a Project →
            </a>
            <a
              href="/portfolio"
              className="border-2 border-border-main text-text-main font-semibold text-sm px-8 py-4 rounded-full uppercase tracking-wider hover:border-[#FDCC17] hover:text-[#FDCC17] transition-all duration-200 inline-block no-underline"
            >
              View Our Work
            </a>
          </div>

          <div className="flex gap-8 mt-14 pt-8 border-t border-border-main/50">
            {[
              { n: "150+", l: "Projects" },
              { n: "8+", l: "Years" },
              { n: "40+", l: "Industries" },
              { n: "Global", l: "Presence" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="text-[#FDCC17] font-black text-2xl leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.n}
                </div>
                <div className="text-text-main/50 text-[10px] uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ INTRO STRIP ══ */}
      <section className="bg-[#FDCC17] px-[5%] py-5 overflow-hidden">
        <div className="flex gap-0 whitespace-nowrap" style={{ animation: "ticker 22s linear infinite" }}>
          {Array(6).fill(0).map((_, i) => (
            <span key={i} className="flex items-center gap-6 text-black text-sm font-bold uppercase tracking-wider pr-10">
              <span>IT Services</span><span className="opacity-30">✦</span>
              <span>Digital Marketing</span><span className="opacity-30">✦</span>
              <span>Mobile Apps</span><span className="opacity-30">✦</span>
              <span>Web Development</span><span className="opacity-30">✦</span>
              <span>UI/UX Design</span><span className="opacity-30">✦</span>
              <span>SEO & Growth</span><span className="opacity-30">✦</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </section>

      {/* ══════════════════════════════════════ WHO WE ARE ══ */}
      <section className="px-[5%] py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative hidden md:block">
          <div className="relative rounded-3xl overflow-hidden h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main/40 to-transparent" />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-card-bg rounded-2xl shadow-xl p-5 border border-border-main w-48">
            <div className="text-[#FDCC17] text-2xl font-black mb-1" style={{ fontFamily: "'Playfair Display',serif" }}>
              8+ Years
            </div>
            <div className="text-text-main/50 text-xs">Of Digital Excellence</div>
          </div>

          <div className="absolute -top-5 -right-5 bg-[#FDCC17] rounded-2xl shadow-xl p-5 w-40 text-black">
            <div className="text-black text-2xl font-black mb-1" style={{ fontFamily: "'Playfair Display',serif" }}>
              Global
            </div>
            <div className="text-black/60 text-xs">Presence Worldwide</div>
          </div>

          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-[rgba(253,204,23,0.3)] pointer-events-none" />
        </div>

        <div>
          <div className="text-[#ecb203] text-[11px] font-bold uppercase tracking-widest mb-4">Who We Are</div>
          <h2
            className="font-black text-text-main leading-tight tracking-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)" }}
          >
            More Than a Service <span className="text-[#FDCC17]">Provider</span> —<br />
            Your Growth Partner
          </h2>
          <p className="text-text-main/60 text-base leading-relaxed mb-5">
            Zenvor World is more than just a service provider — we are your <strong className="text-text-main">digital growth partner</strong>. Founded with a vision to transform businesses worldwide, we specialize in delivering end-to-end solutions that empower brands to thrive in an ever-evolving digital ecosystem.
          </p>
          <p className="text-text-main/60 text-base leading-relaxed mb-8">
            From startups to enterprises, we work with clients across the globe — helping them unlock their true potential through the perfect blend of cutting-edge technology and data-driven marketing strategies.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {[
              "End-to-end IT Solutions",
              "Data-Driven Marketing",
              "Global Client Base",
              "Agile & Transparent Process",
              "On-Time Delivery",
              "Long-Term Partnerships",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[rgba(253,204,23,0.15)] flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#FDCC17" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-text-main/80 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ STATS ══ */}
      <section
        ref={statsRef}
        className="px-[5%] py-20 bg-card-bg/20 border-y border-border-main"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s) => (
            <AnimatedStat key={s.label} stat={s} start={statsInView} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════ MISSION & VISION ══ */}
      <section className="px-[5%] py-24 grid md:grid-cols-2 gap-8">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-12 bg-card-bg border border-border-main">
          <div className="absolute top-[-30%] right-[-10%] w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(rgba(253,204,23,0.15), transparent 65%)" }} />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#FDCC17] flex items-center justify-center text-2xl mb-6">🎯</div>
            <div className="text-[#FDCC17] text-[11px] font-bold uppercase tracking-widest mb-3">Our Mission</div>
            <h3 className="text-text-main font-black text-2xl mb-5 leading-snug tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Empowering Businesses Worldwide
            </h3>
            <p className="text-text-main/60 text-sm leading-relaxed">
              To empower businesses worldwide with innovative technology and result-driven digital strategies that create <strong className="text-text-main">long-term success</strong>. We don't just deliver services — we deliver growth, performance, and lasting impact.
            </p>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden p-10 md:p-12 bg-[#FDCC17]">
          <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(rgba(0,0,0,0.08), transparent 65%)" }} />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-black/10 flex items-center justify-center text-2xl mb-6">🔥</div>
            <div className="text-black/60 text-[11px] font-bold uppercase tracking-widest mb-3">Our Vision</div>
            <h3 className="text-black font-black text-2xl mb-5 leading-snug tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              A Globally Trusted Digital Brand
            </h3>
            <p className="text-black/65 text-sm leading-relaxed">
              To become a globally trusted brand in IT and digital marketing by consistently delivering <strong className="text-black/90">excellence, innovation, and value</strong> to our clients across every industry and every corner of the world.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ SERVICES ══ */}
      <section className="px-[5%] py-24 bg-card-bg/10 border-t border-border-main">
        <div className="text-center mb-14">
          <div className="text-[#ecb203] text-[11px] font-bold uppercase tracking-widest mb-3">What We Do</div>
          <h2
            className="font-black text-text-main tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,3.5vw,3rem)" }}
          >
            Services That Drive <span className="text-[#FDCC17]">Real Growth</span>
          </h2>
          <p className="text-text-main/50 text-base mt-3 max-w-lg mx-auto">
            End-to-end digital solutions — from pixel-perfect design to performance marketing.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#FDCC17] flex items-center justify-center text-base">🔹</div>
            <h3 className="text-text-main font-bold text-lg" style={{ fontFamily: "'Playfair Display',serif" }}>
              IT Services
            </h3>
            <div className="flex-1 h-px bg-border-main" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {IT_SERVICES.map((s, i) => <ServiceCard key={s.title} item={s} index={i} />)}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-border-main flex items-center justify-center text-base">📣</div>
            <h3 className="text-text-main font-bold text-lg" style={{ fontFamily: "'Playfair Display',serif" }}>
              Digital Marketing
            </h3>
            <div className="flex-1 h-px bg-border-main" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {MARKETING_SERVICES.map((s, i) => <ServiceCard key={s.title} item={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ GLOBAL PRESENCE ══ */}
      <section className="relative py-24 px-[5%] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
            alt="Global"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-bg-main/95" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="text-[#ecb203] text-[11px] font-bold uppercase tracking-widest mb-3">Global Presence</div>
          <h2
            className="font-black text-text-main tracking-tight leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,3.5vw,3rem)" }}
          >
            Serving Clients Across <span className="text-[#FDCC17]">Every Continent</span>
          </h2>
          <p className="text-text-main/60 text-base leading-relaxed mb-12">
            Zenvor World operates globally, serving clients from different industries and regions. No matter where you are, our team ensures seamless communication, timely delivery, and world-class service standards.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { flag: "🇮🇳", region: "India", clients: "80+ Clients" },
              { flag: "🇺🇸", region: "United States", clients: "30+ Clients" },
              { flag: "🇬🇧", region: "United Kingdom", clients: "20+ Clients" },
              { flag: "🌍", region: "Middle East", clients: "25+ Clients" },
            ].map((r) => (
              <div key={r.region}
                className="bg-card-bg border border-border-main rounded-2xl p-6 hover:border-[#FDCC17]/40 hover:shadow-[0_10px_30px_rgba(253,204,23,0.1)] transition-all duration-300">
                <div className="text-4xl mb-3">{r.flag}</div>
                <div className="font-bold text-sm text-text-main mb-1">{r.region}</div>
                <div className="text-[#FDCC17] text-xs font-bold">{r.clients}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ WHY CHOOSE US ══ */}
      <section className="px-[5%] py-24 bg-card-bg/20 border-t border-border-main">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[#ecb203] text-[11px] font-bold uppercase tracking-widest mb-4">Why Choose Us</div>
            <h2
              className="font-black text-text-main leading-tight tracking-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)" }}
            >
              The ZenVor <span className="text-[#FDCC17]">Difference</span>
            </h2>
            <p className="text-text-main/60 text-base leading-relaxed mb-8">
              We don't just deliver services — we deliver <strong className="text-text-main">growth, performance, and impact</strong>. Here's what sets us apart from every other digital agency.
            </p>

            <div className="relative rounded-2xl overflow-hidden h-64">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team working"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <div className="text-white font-black text-xl" style={{ fontFamily: "'Playfair Display',serif" }}>
                  Your Success = Our Success
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {WHY_US.map((item, i) => (
              <WhyCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ JOURNEY / TIMELINE ══ */}
      <section className="px-[5%] py-24">
        <div className="text-center mb-14">
          <div className="text-[#ecb203] text-[11px] font-bold uppercase tracking-widest mb-3">Our Journey</div>
          <h2
            className="font-black text-text-main tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,3.5vw,3rem)" }}
          >
            8 Years of <span className="text-[#FDCC17]">Building</span> Excellence
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border-main hidden md:block" />

          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={`relative flex gap-8 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:items-center`}
            >
              <div className="md:w-[45%] bg-card-bg border border-border-main rounded-2xl p-6 hover:border-[#FDCC17]/30 transition-all duration-300">
                <div className="text-[#FDCC17] text-xs font-black uppercase tracking-widest mb-2">{item.year}</div>
                <h4 className="text-text-main font-bold text-base mb-2" style={{ fontFamily: "'Playfair Display',serif" }}>
                  {item.title}
                </h4>
                <p className="text-text-main/50 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="hidden md:flex w-[10%] justify-center">
                <div className="w-5 h-5 rounded-full bg-[#FDCC17] border-4 border-bg-main shadow-md flex-shrink-0 z-10" />
              </div>
              <div className="md:w-[45%]" />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════ TEAM (UPDATED) ══ */}
      <section className="px-[5%] py-24 bg-card-bg/10 border-t border-border-main">
        <div className="text-center mb-14">
          <div className="text-[#ecb203] text-[11px] font-bold uppercase tracking-widest mb-3">The Leadership</div>
          <h2
            className="font-black text-text-main tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,3.5vw,3rem)" }}
          >
            People Behind <span className="text-[#FDCC17]">ZenVor</span>
          </h2>
          <p className="text-text-main/50 text-base mt-3 max-w-md mx-auto">
            Our executive team and project leaders driving success across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member) => {
            const [hovered, setHovered] = useState(false);
            return (
              <div
                key={member.name}
                className="bg-card-bg rounded-2xl border border-border-main p-7 text-center cursor-default"
                style={{
                  transition: "transform .3s ease, box-shadow .3s ease",
                  transform: hovered ? "translateY(-5px)" : "translateY(0)",
                  boxShadow: hovered ? "0 20px 50px rgba(0,0,0,.3)" : "none",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-5 border-4 border-bg-main shadow-lg"
                  style={{ background: member.color, color: "#111", fontFamily: "'Playfair Display',serif" }}
                >
                  {member.initials}
                </div>
                <h4 className="text-text-main font-bold text-base mb-1" style={{ fontFamily: "'Playfair Display',serif" }}>
                  {member.name}
                </h4>
                <div className="text-[#FDCC17] text-xs font-bold uppercase tracking-wider mb-3">{member.role}</div>
                <p className="text-text-main/50 text-xs leading-relaxed">{member.bio}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════ CTA ══ */}
      <section className="px-[5%] py-24">
        <div
          className="relative rounded-[40px] overflow-hidden p-12 md:p-20 text-center border border-border-main"
          style={{ background: "linear-gradient(135deg, var(--color-bg-main) 0%, var(--color-card-bg) 100%)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(rgba(253,204,23,0.18), transparent 65%)" }} />

          <div className="relative z-10">
            <div className="text-[#FDCC17] text-[11px] font-bold uppercase tracking-widest mb-5">
              Let's Build Something Great
            </div>
            <h2
              className="font-black text-text-main leading-tight tracking-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem,4vw,3.5rem)" }}
            >
              Whether You Need a <span className="text-[#FDCC17]">Website</span>,<br />
              App, or <span className="text-[#FDCC17]">Full Digital Transformation</span>
            </h2>
            <p className="text-text-main/50 text-base mb-10 max-w-xl mx-auto">
              Zenvor World is your partner in success. Free 30-minute strategy session — no commitment, just honest advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reach-us"
                className="bg-[#FDCC17] text-black font-bold text-sm px-10 py-4 rounded-full uppercase tracking-widest inline-block hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(253,204,23,0.45)] transition-all duration-200 no-underline"
              >
                Get Free Consultation →
              </a>
              <a
                href="/services"
                className="border-2 border-border-main text-text-main font-semibold text-sm px-10 py-4 rounded-full uppercase tracking-widest inline-block hover:border-[#FDCC17] hover:text-[#FDCC17] transition-all duration-200 no-underline"
              >
                Explore All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer Added Here */}
      <Footer />

    </div>
  );
}