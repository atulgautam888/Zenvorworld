import { useState } from "react";
import Footer from '../components/Footer'; // Global Footer Imported

// ─── CATEGORIES ──────────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: "all", label: "All Work", count: 16 },
  { id: "web", label: "Web Development", count: 5 },
  { id: "app", label: "Mobile Apps", count: 3 },
  { id: "marketing", label: "Digital Marketing", count: 4 },
  { id: "uiux", label: "UI/UX Design", count: 2 },
  { id: "ecommerce", label: "E-Commerce", count: 2 },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1, cat: "web", size: "hero",
    title: "ShopEase — Next-Gen Retail Platform",
    subtitle: "Web Development · E-Commerce",
    desc: "Full-stack re-architecture for India's fastest-growing retail brand. We rebuilt their entire frontend in Next.js, slashing load times by 68% and pushing conversions up 180% within 60 days of launch.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    stats: [{ n: "+180%", l: "Conversions" }, { n: "2.1s", l: "Load Time" }, { n: "₹4.2Cr", l: "Revenue/mo" }],
    year: "2024", client: "ShopEase India",
  },
  {
    id: 2, cat: "app", size: "standard",
    title: "MedTrack Health App",
    subtitle: "Mobile App · HealthTech",
    desc: "Cross-platform iOS & Android health tracker with real-time vitals, AI-powered symptom analysis, and doctor connect.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React Native", "Firebase", "AI/ML"],
    stats: [{ n: "50K+", l: "Downloads" }, { n: "4.8★", l: "App Store" }],
    year: "2024", client: "MedTrack Pvt Ltd",
  },
  {
    id: 3, cat: "marketing", size: "standard",
    title: "LuxeWear — Performance Ads",
    subtitle: "Digital Marketing · Fashion",
    desc: "Google + Meta ad campaigns that generated ₹2Cr in 90 days for a luxury fashion startup with zero prior digital presence.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["Google Ads", "Meta Ads", "Analytics"],
    stats: [{ n: "6.4x", l: "ROAS" }, { n: "₹2Cr", l: "90-Day Revenue" }],
    year: "2024", client: "LuxeWear Fashion",
  },
  {
    id: 4, cat: "uiux", size: "wide",
    title: "FinPulse — Enterprise Dashboard",
    subtitle: "UI/UX Design · FinTech",
    desc: "End-to-end design system and dashboard for a B2B fintech platform serving 200+ enterprise clients. Reduced user onboarding time by 40% through strategic UX improvements and a clean scalable design language.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80",
    tags: ["Figma", "Design System", "Research", "Prototyping"],
    stats: [{ n: "40%", l: "Faster Onboarding" }, { n: "200+", l: "Enterprise Clients" }, { n: "3x", l: "Task Completion" }],
    year: "2024", client: "FinPulse Technologies",
  },
  {
    id: 5, cat: "web", size: "standard",
    title: "GreenBrew — Brand & Web",
    subtitle: "Web Development · F&B",
    desc: "Complete digital identity and website for an artisan café chain. From brand strategy to a fully custom CMS-powered site.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    tags: ["React", "CMS", "Branding"],
    stats: [{ n: "340%", l: "Organic Traffic" }, { n: "5★", l: "Google Rating" }],
    year: "2023", client: "GreenBrew Café",
  },
  {
    id: 6, cat: "app", size: "standard",
    title: "TravelMate — Trip Planner",
    subtitle: "Mobile App · Travel",
    desc: "AI-powered travel planning app with offline maps, real-time itinerary updates, and local guide integrations.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    tags: ["Flutter", "Maps API", "OpenAI"],
    stats: [{ n: "4.9★", l: "App Store" }, { n: "120K+", l: "Trips Planned" }],
    year: "2024", client: "TravelMate Inc",
  },
  {
    id: 7, cat: "ecommerce", size: "hero",
    title: "EduPath — Learning Management System",
    subtitle: "E-Commerce · EdTech",
    desc: "A full-featured LMS platform with video streaming, live classes, quizzes, payment gateway, and instructor dashboards. Scaled from 0 to 15,000 active students in 6 months post-launch.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    tags: ["Next.js", "Stripe", "AWS", "WebRTC"],
    stats: [{ n: "15K+", l: "Active Students" }, { n: "200+", l: "Courses" }, { n: "₹1.8Cr", l: "Revenue" }],
    year: "2024", client: "EduPath Learning",
  },
  {
    id: 8, cat: "marketing", size: "standard",
    title: "NovResto SEO & Content",
    subtitle: "Digital Marketing · F&B",
    desc: "Technical SEO + content strategy that took a restaurant chain from page 5 to top 3 positions across 40+ keywords.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tags: ["SEO", "Content", "Local SEO"],
    stats: [{ n: "#1", l: "Google Rank" }, { n: "280%", l: "Footfall Increase" }],
    year: "2023", client: "NovResto Chain",
  },
  {
    id: 9, cat: "web", size: "standard",
    title: "BuildRight — Construction SaaS",
    subtitle: "Web Development · SaaS",
    desc: "Project management SaaS for construction firms with Gantt charts, vendor management, and real-time reporting.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    tags: ["React", "PostgreSQL", "SaaS"],
    stats: [{ n: "80+", l: "Companies" }, { n: "₹3Cr", l: "ARR" }],
    year: "2023", client: "BuildRight Solutions",
  },
  {
    id: 10, cat: "uiux", size: "wide",
    title: "ZenPay — Fintech Super App UI",
    subtitle: "UI/UX Design · Fintech",
    desc: "Complete UX overhaul for a fintech super-app covering payments, investments, insurance, and lending. 60+ screen Figma system with motion guidelines, accessibility audit, and full developer handoff.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&q=80",
    tags: ["Figma", "Motion Design", "Accessibility", "Design System"],
    stats: [{ n: "60+", l: "Screens Designed" }, { n: "92%", l: "User Satisfaction" }, { n: "2M+", l: "Active Users" }],
    year: "2024", client: "ZenPay Financial",
  },
  {
    id: 11, cat: "marketing", size: "standard",
    title: "FitCore — Social Media Growth",
    subtitle: "Digital Marketing · Fitness",
    desc: "Full social media management growing a fitness brand from 2K to 180K followers in 8 months with viral content strategy.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    tags: ["Instagram", "Reels", "Influencer"],
    stats: [{ n: "180K", l: "Followers" }, { n: "8.2%", l: "Avg Engagement" }],
    year: "2024", client: "FitCore India",
  },
  {
    id: 12, cat: "app", size: "standard",
    title: "LogiTrack — Fleet Management",
    subtitle: "Mobile App · Logistics",
    desc: "Real-time fleet tracking and logistics app for a 500+ vehicle transport company with driver apps and admin panels.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    tags: ["React Native", "GPS", "Real-time DB"],
    stats: [{ n: "500+", l: "Vehicles Tracked" }, { n: "32%", l: "Fuel Savings" }],
    year: "2023", client: "LogiTrack Freight",
  },
  {
    id: 13, cat: "ecommerce", size: "standard",
    title: "OrganicCart — D2C Platform",
    subtitle: "E-Commerce · FMCG",
    desc: "D2C e-commerce store for an organic food brand with subscription boxes, loyalty programs, and WhatsApp checkout.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    tags: ["Shopify+", "WhatsApp API", "Loyalty"],
    stats: [{ n: "22K+", l: "Orders/Month" }, { n: "68%", l: "Repeat Customers" }],
    year: "2024", client: "OrganicCart",
  },
  {
    id: 14, cat: "web", size: "standard",
    title: "PropVista — Real Estate Portal",
    subtitle: "Web Development · Real Estate",
    desc: "Full-featured property listing portal with 3D virtual tours, EMI calculators, and AI-powered property recommendations.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tags: ["React", "3D Tours", "AI"],
    stats: [{ n: "10K+", l: "Listings" }, { n: "₹120Cr", l: "Deals Closed" }],
    year: "2024", client: "PropVista Realty",
  },
  {
    id: 15, cat: "marketing", size: "standard",
    title: "SolarNow — Lead Generation",
    subtitle: "Digital Marketing · CleanTech",
    desc: "B2C lead generation campaign for a solar panel company that reduced cost-per-lead by 60% while tripling lead volume.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    tags: ["Google Ads", "Landing Pages", "CRO"],
    stats: [{ n: "3x", l: "Lead Volume" }, { n: "60%", l: "Lower CPL" }],
    year: "2023", client: "SolarNow Energy",
  },
  {
    id: 16, cat: "web", size: "standard",
    title: "LegalEase — Law Firm Portal",
    subtitle: "Web Development · Legal",
    desc: "Appointment booking, case tracking, and secure document portal for a 50-lawyer law firm. GDPR compliant and fully encrypted.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    tags: ["Next.js", "Auth", "Encryption"],
    stats: [{ n: "50+", l: "Lawyers Onboarded" }, { n: "99.9%", l: "Uptime" }],
    year: "2024", client: "LegalEase Partners",
  },
];

const RESULTS = [
  { num: "150+", label: "Projects Delivered", icon: "🚀" },
  { num: "₹50Cr+", label: "Revenue Generated", icon: "💰" },
  { num: "98%", label: "Client Satisfaction", icon: "⭐" },
  { num: "5x", label: "Average ROI", icon: "📈" },
  { num: "40+", label: "Industries Served", icon: "🌐" },
  { num: "8yrs", label: "Of Excellence", icon: "🏆" },
];

const INDUSTRIES = [
  "HealthTech","EdTech","FinTech","E-Commerce","Real Estate","Logistics",
  "F&B","Fashion","Legal","CleanTech","SaaS","Travel","Fitness","Retail",
  "Manufacturing","Media","Automotive","Agriculture","Non-Profit","Government",
];

const TESTIMONIALS = [
  {
    quote: "ZenVor transformed our digital presence completely. Traffic tripled, conversions doubled, and the app has been running flawlessly for 14 months.",
    name: "Rohit Kapoor", role: "CEO, ShopEase India", init: "RK",
  },
  {
    quote: "Our ROAS went from 1.8x to 6.4x in just 90 days. They don't just run ads — they build real growth engines tailored to your business.",
    name: "Priya Sharma", role: "Founder, LuxeWear Fashion", init: "PS",
  },
  {
    quote: "The EduPath LMS scaled to 15,000 students without a single major outage. Best tech partner we've worked with in 8 years.",
    name: "Amit Verma", role: "Co-Founder, EduPath", init: "AV",
  },
];

// ─── HERO CARD ────────────────────────────────────────────────────────────────
function HeroCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative rounded-[32px] overflow-hidden cursor-pointer border border-border-main"
      style={{
        transition: "transform .4s ease, box-shadow .4s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 32px 80px rgba(0,0,0,.3)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-[420px] md:h-[500px] overflow-hidden">
        <img
          src={project.image} alt={project.title}
          className="w-full h-full object-cover"
          style={{ transition: "transform .7s ease", transform: hovered ? "scale(1.04)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

        {/* Badges */}
        <div className="absolute top-5 left-5 flex gap-2">
          <span className="bg-[#FDCC17] text-black text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
            Featured
          </span>
          <span className="bg-white/15 backdrop-blur-md text-white text-[10px] font-semibold px-3 py-1.5 rounded-full border border-white/20">
            {project.year}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
          <div className="text-[#FDCC17] text-xs font-bold uppercase tracking-widest mb-3">{project.subtitle}</div>
          <h3 style={{ fontFamily: "'Playfair Display',serif" }}
            className="text-white text-2xl md:text-4xl font-black leading-tight mb-3 tracking-tight">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mb-6 hidden md:block">
            {project.desc}
          </p>
          <div className="flex gap-7 flex-wrap mb-5">
            {project.stats.map((s) => (
              <div key={s.l}>
                <div style={{ fontFamily: "'Playfair Display',serif" }}
                  className="text-[#FDCC17] text-xl font-black">{s.n}</div>
                <div className="text-white/50 text-[10px] uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((t) => (
              <span key={t}
                className="bg-white/10 backdrop-blur-sm text-white/80 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/15">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── WIDE CARD ────────────────────────────────────────────────────────────────
function WideCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rounded-[32px] overflow-hidden border border-border-main bg-card-bg cursor-pointer grid md:grid-cols-2"
      style={{
        transition: "transform .4s ease, box-shadow .4s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 24px 60px rgba(0,0,0,.2)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-64 md:h-full overflow-hidden">
        <img src={project.image} alt={project.title}
          className="w-full h-full object-cover"
          style={{ transition: "transform .7s ease", transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        <span className="absolute top-4 left-4 bg-[#FDCC17] text-black text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
          {project.subtitle.split("·")[0].trim()}
        </span>
      </div>

      <div className="p-8 md:p-10 flex flex-col justify-center">
        <div className="text-[#ecb203] text-[10px] font-bold uppercase tracking-widest mb-3">{project.subtitle}</div>
        <h3 style={{ fontFamily: "'Playfair Display',serif" }}
          className="text-text-main text-2xl font-black leading-snug tracking-tight mb-4">
          {project.title}
        </h3>
        <p className="text-text-main/60 text-sm leading-relaxed mb-6">{project.desc}</p>

        <div className="grid grid-cols-3 gap-4 py-5 border-y border-border-main mb-5">
          {project.stats.map((s) => (
            <div key={s.l} className="text-center">
              <div style={{ fontFamily: "'Playfair Display',serif" }}
                className="text-text-main text-xl font-black">{s.n}</div>
              <div className="text-text-main/40 text-[9px] uppercase tracking-wider mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((t) => (
            <span key={t}
              className="text-[10px] font-semibold text-text-main/80 bg-bg-main px-2.5 py-1 rounded-full border border-border-main">
              {t}
            </span>
          ))}
        </div>

        <span className="text-xs font-bold text-[#ecb203] uppercase tracking-wider">View Case Study →</span>
      </div>
    </div>
  );
}

// ─── STANDARD CARD ────────────────────────────────────────────────────────────
function StandardCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rounded-[24px] overflow-hidden border border-border-main bg-card-bg cursor-pointer flex flex-col"
      style={{
        transition: "transform .35s ease, box-shadow .35s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,.3)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-52 overflow-hidden">
        <img src={project.image} alt={project.title}
          className="w-full h-full object-cover"
          style={{ transition: "transform .7s ease", transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {project.subtitle.split("·")[0].trim()}
        </span>
        <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white/80 text-[9px] font-semibold px-2 py-1 rounded-full">
          {project.year}
        </span>
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{ background: hovered ? "rgba(253,204,23,0.12)" : "transparent" }}>
          <div className="bg-white text-black text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wider transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(8px)" }}>
            View Project →
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="text-[#ecb203] text-[10px] font-bold uppercase tracking-widest mb-1.5">{project.subtitle}</div>
        <h3 style={{ fontFamily: "'Playfair Display',serif" }}
          className="text-text-main font-bold text-base leading-snug mb-2">
          {project.title}
        </h3>
        <p className="text-text-main/50 text-xs leading-relaxed flex-1 mb-4">{project.desc}</p>

        <div className="flex gap-5 py-3 border-y border-border-main mb-3">
          {project.stats.map((s) => (
            <div key={s.l}>
              <div style={{ fontFamily: "'Playfair Display',serif" }}
                className="text-text-main text-base font-black leading-none">{s.n}</div>
              <div className="text-text-main/30 text-[9px] uppercase tracking-wider mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t}
              className="text-[9px] font-semibold text-text-main/60 bg-bg-main px-2 py-1 rounded-full border border-border-main">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);

  const allFiltered =
    activeCategory === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === activeCategory);
  const visible = allFiltered.slice(0, visibleCount);

  const heroCards = visible.filter((p) => p.size === "hero");
  const wideCards = visible.filter((p) => p.size === "wide");
  const standardCards = visible.filter((p) => p.size === "standard");

  return (
    <div className="min-h-screen bg-bg-main text-text-main transition-colors duration-500"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-16 px-[5%]">
        <div className="absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle,rgba(253,204,23,0.3) 0%,transparent 70%)" }} />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[rgba(253,204,23,0.1)] border border-[rgba(253,204,23,0.3)] rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDCC17] animate-ping inline-block" />
            <span className="text-[#ecb203] text-[11px] font-bold uppercase tracking-widest">Our Work</span>
          </div>

          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(3rem,5.5vw,5rem)" }}
            className="font-black leading-[1.06] tracking-[-2px] text-text-main mb-5">
            Work That <span className="text-[#FDCC17]">Speaks</span>
            <br />for Itself
          </h1>
          <p className="text-text-main/60 text-lg leading-relaxed max-w-xl">
            16 hand-picked projects across web, mobile, and marketing — each one a story of measurable growth.
          </p>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 flex flex-wrap gap-x-10 gap-y-5 mt-12 pt-10 border-t border-border-main">
          {RESULTS.map((r) => (
            <div key={r.label} className="flex items-center gap-3">
              <span className="text-2xl">{r.icon}</span>
              <div>
                <div style={{ fontFamily: "'Playfair Display',serif" }}
                  className="font-black text-2xl text-text-main leading-none">
                  {r.num.replace(/[+%x★yrs]/g, "")}
                  <span className="text-[#FDCC17]">{r.num.match(/[+%x★]/)?.[0] ?? ""}</span>
                  {r.num.includes("Cr") && <span className="text-[#FDCC17]">Cr+</span>}
                  {r.num.includes("yrs") && <span className="text-[#FDCC17]"> yrs</span>}
                </div>
                <div className="text-text-main/40 text-[10px] uppercase tracking-wider mt-0.5">{r.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STICKY FILTER ── */}
      <div className="sticky top-[72px] z-40 bg-bg-main/85 backdrop-blur-xl border-y border-border-main px-[5%] py-3.5">
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setVisibleCount(12); }}
              className="text-[11px] font-semibold px-4 py-2 rounded-full border transition-all duration-200 flex items-center gap-1.5"
              style={{
                background: activeCategory === cat.id ? "#FDCC17" : "transparent",
                color: activeCategory === cat.id ? "#111" : "inherit",
                borderColor: activeCategory === cat.id ? "#FDCC17" : "rgba(255,255,255,0.1)",
                boxShadow: activeCategory === cat.id ? "0 4px 16px rgba(253,204,23,0.35)" : "none",
              }}
            >
              {cat.label}
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                style={{
                  background: activeCategory === cat.id ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
                  color: activeCategory === cat.id ? "#111" : "inherit",
                }}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <section className="px-[5%] py-14 space-y-12">
        {heroCards.map((p) => <HeroCard key={p.id} project={p} />)}
        {wideCards.map((p) => <WideCard key={p.id} project={p} />)}

        {standardCards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {standardCards.map((p) => <StandardCard key={p.id} project={p} />)}
          </div>
        )}

        {visible.length === 0 && (
          <div className="text-center py-24 text-text-main/40 text-sm italic">No projects in this category yet.</div>
        )}

        {visibleCount < allFiltered.length && (
          <div className="text-center pt-4">
            <button
              onClick={() => setVisibleCount((v) => v + 6)}
              className="bg-transparent border border-border-main text-text-main font-semibold text-sm px-10 py-3.5 rounded-full hover:border-[#FDCC17] hover:text-[#FDCC17] transition-all duration-200">
              Load More ({allFiltered.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="px-[5%] py-24 bg-card-bg/20 border-t border-border-main">
        <div className="text-center mb-10">
          <div className="text-[#ecb203] text-[11px] font-bold uppercase tracking-widest mb-3">Industries We Serve</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif" }}
            className="font-black text-4xl text-text-main tracking-tight">
            Worked Across <span className="text-[#FDCC17]">40+ Verticals</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {INDUSTRIES.map((ind) => (
            <span key={ind}
              className="bg-card-bg border border-border-main text-text-main/70 text-xs font-semibold px-4 py-2 rounded-full hover:border-[#FDCC17] hover:text-text-main transition-all duration-200 cursor-default">
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-[5%] py-24">
        <div className="text-center mb-12">
          <div className="text-[#ecb203] text-[11px] font-bold uppercase tracking-widest mb-3">Client Love</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif" }}
            className="font-black text-4xl text-text-main tracking-tight">
            Words From Our <span className="text-[#FDCC17]">Clients</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name}
              className="bg-card-bg border border-border-main rounded-[24px] p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="text-[#FDCC17] text-base mb-4">★★★★★</div>
              <p className="text-text-main/70 text-sm leading-relaxed italic mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FDCC17] text-black font-black text-sm flex items-center justify-center flex-shrink-0">
                  {t.init}
                </div>
                <div>
                  <div className="font-bold text-sm text-text-main">{t.name}</div>
                  <div className="text-text-main/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-[5%] pb-32">
        <div className="rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden border border-border-main"
          style={{ background: "linear-gradient(135deg, var(--color-bg-main) 0%, var(--color-card-bg) 100%)" }}>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(rgba(253,204,23,0.4),transparent 65%)" }} />
          <div className="relative z-10">
            <div className="text-[#FDCC17] text-[11px] font-bold uppercase tracking-widest mb-5">
              Let's Build Together
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem,4vw,4rem)" }}
              className="font-black text-text-main leading-tight tracking-tight mb-6">
              Your Project Could Be<br />
              Our Next <span className="text-[#FDCC17]">Success Story</span>
            </h2>
            <p className="text-text-main/50 text-base mb-10 max-w-lg mx-auto">
              Free 30-minute strategy session. No commitment. Just honest advice on how to grow your brand digitally.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/reach-us"
                className="bg-[#FDCC17] text-black font-bold text-sm px-10 py-5 rounded-full uppercase tracking-wider inline-block hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(253,204,23,0.45)] transition-all duration-200 no-underline">
                Start Your Project →
              </a>
              <a href="/services"
                className="border-2 border-border-main text-text-main font-semibold text-sm px-10 py-5 rounded-full uppercase tracking-wider hover:border-[#FDCC17] hover:text-[#FDCC17] transition-all duration-200 no-underline">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer Added */}
      <Footer />
    </div>
  );
}