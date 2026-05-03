import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaUser, FaArrowLeft, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

const BusinessAutomationRevolution = () => {
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
      
      <div className="container mx-auto px-6 pt-32 pb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-3 text-accent font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all no-underline"
        >
          <FaArrowLeft /> Back to Blog
        </Link>
      </div>

      <section className="container mx-auto px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-black uppercase tracking-wider border border-accent/20">
              Business Automation
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-black uppercase tracking-wider border border-accent/20">
              Productivity
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-black uppercase tracking-wider border border-accent/20">
              RPA
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
            The Business Automation Revolution: <span className="text-accent italic">Scale Smarter, Not Harder</span>
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm opacity-70 mb-8">
            <div className="flex items-center gap-2">
              <FaUser className="text-accent" />
              <span className="font-bold">Amit Patel</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-accent" />
              <span>January 10, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-accent" />
              <span>10 min read</span>
            </div>
          </div>

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

      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=90" 
              alt="Business Automation"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <article className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-text-main space-y-8">
            
            <p className="text-xl leading-relaxed opacity-80 font-medium">
              In an era where efficiency equals profitability, business automation has evolved from a competitive advantage to an absolute necessity. Companies leveraging intelligent automation are seeing operational costs drop by 40% while productivity soars to unprecedented levels.
            </p>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              The Cost of <span className="text-accent italic">Manual Processes</span>
            </h2>

            <p className="text-lg leading-relaxed opacity-70">
              Before diving into solutions, let's understand the problem. Manual business processes are bleeding companies dry through hidden costs that most leaders don't even realize exist.
            </p>

            <div className="bg-gradient-to-br from-accent/10 to-accent-dark/10 border border-accent/20 p-8 rounded-3xl my-8">
              <h4 className="text-2xl font-black mb-6">The True Cost of Manual Work:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-black text-accent mb-2">$1.8M</p>
                  <p className="text-sm opacity-70">Average annual cost of manual data entry errors per company</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-accent mb-2">54 Days</p>
                  <p className="text-sm opacity-70">Average time employees spend on repetitive tasks yearly</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-accent mb-2">69%</p>
                  <p className="text-sm opacity-70">Of managers' time wasted on administrative work</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-accent mb-2">30%</p>
                  <p className="text-sm opacity-70">Employee productivity loss from context switching</p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              What is Business <span className="text-accent italic">Automation?</span>
            </h2>

            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80" 
              alt="Automation Dashboard"
              className="w-full h-[400px] object-cover rounded-3xl my-8"
            />

            <p className="text-lg leading-relaxed opacity-70">
              Business automation uses technology to execute recurring tasks or processes with minimal human intervention. But modern automation goes far beyond simple task replacement—it's about intelligent orchestration of entire business workflows.
            </p>

            <h3 className="text-3xl font-black mt-12 mb-4 tracking-tight">Key Automation Categories:</h3>
            <ul className="space-y-4 text-lg opacity-70 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">RPA (Robotic Process Automation):</strong> Software robots that mimic human actions to perform rule-based tasks across applications.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">Workflow Automation:</strong> Streamlining multi-step processes across departments and systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">Intelligent Automation (IA):</strong> Combining RPA with AI/ML for decision-making capabilities.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">•</span>
                <span><strong className="text-accent">Marketing Automation:</strong> Automated email campaigns, lead scoring, and customer journey mapping.</span>
              </li>
            </ul>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              Real-World <span className="text-accent italic">Use Cases</span>
            </h2>

            <h3 className="text-3xl font-black mt-12 mb-4 tracking-tight">1. Finance & Accounting</h3>
            <p className="text-lg leading-relaxed opacity-70">
              Automated invoice processing, expense reporting, and reconciliation. Companies report 75% reduction in processing time and 90% fewer errors.
            </p>

            <div className="bg-card-bg border-l-4 border-accent p-8 rounded-r-2xl my-8">
              <p className="text-lg font-bold mb-2 text-accent">Case Study: TechCorp Inc.</p>
              <p className="text-base opacity-70 leading-relaxed">
                Implemented automated invoice processing that handles 10,000+ invoices monthly. Results: Processing time down from 5 days to 2 hours, error rate reduced from 8% to 0.2%, and 3 FTEs redeployed to strategic analysis.
              </p>
            </div>

            <h3 className="text-3xl font-black mt-12 mb-4 tracking-tight">2. Customer Service</h3>

            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&q=80" 
              alt="Customer Service Automation"
              className="w-full h-[400px] object-cover rounded-3xl my-8"
            />

            <p className="text-lg leading-relaxed opacity-70">
              AI-powered chatbots, automated ticket routing, and sentiment analysis. First-response times drop from hours to seconds.
            </p>

            <h3 className="text-3xl font-black mt-12 mb-4 tracking-tight">3. HR & Recruitment</h3>
            <p className="text-lg leading-relaxed opacity-70">
              Automated resume screening, interview scheduling, onboarding workflows, and payroll processing. HR teams report saving 20+ hours per week on administrative tasks.
            </p>

            <h3 className="text-3xl font-black mt-12 mb-4 tracking-tight">4. Sales & CRM</h3>
            <p className="text-lg leading-relaxed opacity-70">
              Lead scoring, automated follow-ups, pipeline management, and proposal generation. Sales teams close deals 35% faster with automated workflows.
            </p>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              Implementation <span className="text-accent italic">Roadmap</span>
            </h2>

            <p className="text-lg leading-relaxed opacity-70">
              Successful automation isn't about replacing your entire workforce overnight. It's a strategic, phased approach:
            </p>

            <div className="space-y-6 my-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-black rounded-full flex items-center justify-center font-black text-2xl">1</div>
                <div>
                  <h4 className="text-2xl font-black mb-2">Audit & Identify</h4>
                  <p className="text-base opacity-70">Map all business processes. Identify repetitive, time-consuming, error-prone tasks. Calculate current costs.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-black rounded-full flex items-center justify-center font-black text-2xl">2</div>
                <div>
                  <h4 className="text-2xl font-black mb-2">Prioritize & Plan</h4>
                  <p className="text-base opacity-70">Rank processes by ROI potential (high volume + high error rate + time-intensive = top priority).</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-black rounded-full flex items-center justify-center font-black text-2xl">3</div>
                <div>
                  <h4 className="text-2xl font-black mb-2">Pilot & Prove</h4>
                  <p className="text-base opacity-70">Start small with one high-impact process. Measure results. Refine approach.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-black rounded-full flex items-center justify-center font-black text-2xl">4</div>
                <div>
                  <h4 className="text-2xl font-black mb-2">Scale & Optimize</h4>
                  <p className="text-base opacity-70">Roll out successful automations across departments. Continuously monitor and improve.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-black rounded-full flex items-center justify-center font-black text-2xl">5</div>
                <div>
                  <h4 className="text-2xl font-black mb-2">Culture & Training</h4>
                  <p className="text-base opacity-70">Upskill employees. Position automation as augmentation, not replacement.</p>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              Common <span className="text-accent italic">Pitfalls</span> to Avoid
            </h2>

            <ul className="space-y-4 text-lg opacity-70 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">✗</span>
                <span><strong className="text-accent">Automating Broken Processes:</strong> Fix inefficiencies first, then automate. Automation amplifies—good processes become great, bad processes become disasters.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">✗</span>
                <span><strong className="text-accent">Ignoring Change Management:</strong> Technology is easy. People are hard. 70% of automation failures are due to poor change management, not technical issues.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">✗</span>
                <span><strong className="text-accent">Over-Automation:</strong> Not everything should be automated. Keep human judgment where it adds value (complex decisions, relationship building, creativity).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-black text-xl mt-1">✗</span>
                <span><strong className="text-accent">Vendor Lock-In:</strong> Choose platforms with open APIs and integration capabilities. Avoid proprietary systems that limit future flexibility.</span>
              </li>
            </ul>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              The Future: <span className="text-accent italic">Hyperautomation</span>
            </h2>

            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1000&q=80" 
              alt="Future of Automation"
              className="w-full h-[400px] object-cover rounded-3xl my-8"
            />

            <p className="text-lg leading-relaxed opacity-70">
              The next wave is hyperautomation—the orchestrated use of multiple technologies (RPA, AI, ML, process mining, low-code platforms) to automate as many business processes as possible.
            </p>

            <p className="text-lg leading-relaxed opacity-70">
              Gartner predicts that by 2025, organizations using hyperautomation will reduce operational costs by 30% while increasing service quality by 40%.
            </p>

            <h2 className="text-4xl font-black mt-16 mb-6 tracking-tight">
              Final Thoughts: <span className="text-accent italic">The Imperative</span>
            </h2>

            <p className="text-lg leading-relaxed opacity-70">
              Business automation is no longer a question of "if" but "when" and "how fast." Companies that embrace automation gain a compounding competitive advantage—they operate leaner, move faster, and scale effortlessly.
            </p>

            <p className="text-lg leading-relaxed opacity-70">
              The businesses that thrive in the next decade won't be the ones with the most employees—they'll be the ones with the smartest automation strategies.
            </p>

            <div className="bg-accent/10 border border-accent/30 p-10 rounded-3xl mt-12">
              <h3 className="text-3xl font-black mb-4">Ready to Automate Your Business?</h3>
              <p className="text-lg opacity-70 mb-6">
                ZenVor specializes in custom automation solutions that deliver ROI within 6 months. From RPA to intelligent workflow orchestration, we help businesses scale smarter.
              </p>
              <Link 
                to="/contact" 
                className="inline-block px-10 py-4 bg-accent text-black rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:scale-105 transition-all no-underline shadow-lg"
              >
                Schedule Consultation
              </Link>
            </div>

          </div>

        </div>
      </article>

      <section className="py-20 bg-card-bg/30 border-t border-border-main">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-black mb-12 text-center tracking-tight">
            Related <span className="text-accent italic">Articles</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link to="/blog/digital-marketing-trends-2024" className="group block no-underline">
              <div className="bg-card-bg border border-border-main rounded-2xl overflow-hidden hover:border-accent/40 transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
                  alt="Digital Marketing"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h4 className="font-black text-lg mb-2 group-hover:text-accent transition-colors">
                    Digital Marketing Trends 2024
                  </h4>
                  <p className="text-sm opacity-60">Game-changing marketing strategies...</p>
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
                  <p className="text-sm opacity-60">The future of web development...</p>
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
                  <p className="text-sm opacity-60">Explore more insights...</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="h-20" />

    </div>
  );
};

export default BusinessAutomationRevolution;