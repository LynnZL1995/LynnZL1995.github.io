import React from 'react';
import { ArrowRight, Smartphone, Globe, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SKILLS_DATA } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-blob mix-blend-screen" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000 mix-blend-screen" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-indigo-300 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Open for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 animate-slide-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
              Crafting Digital
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
              Experiences
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            I am Aether, a UX Designer who blends aesthetics with functionality to build immersive interfaces for the modern web.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/portfolio"
              className="group px-8 py-3 bg-white text-slate-950 font-semibold rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 bg-slate-800/50 backdrop-blur border border-white/10 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Services/Expertise Preview */}
      <section className="py-20 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, title: 'Mobile Design', desc: 'Native iOS & Android experiences focused on touch gestures and accessibility.' },
              { icon: Globe, title: 'Web Platforms', desc: 'Responsive, scalable SaaS dashboards and marketing sites built for speed.' },
              { icon: PenTool, title: 'Brand Systems', desc: 'Consistent design languages that unify product ecosystems.' },
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-primary/30 hover:bg-slate-800/60 transition-all duration-500 group">
                <service.icon className="w-10 h-10 text-slate-400 group-hover:text-primary mb-4 transition-colors" />
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Chart Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Data-Driven <br/>
                <span className="text-primary">Design Skillset</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                My expertise spans the entire product lifecycle. From user research and wireframing to high-fidelity prototyping and frontend implementation, I bridge the gap between design and engineering.
              </p>
              <ul className="space-y-4">
                {['Figma & Protopie Expert', 'React & Tailwind Proficient', 'Accessible Design (WCAG 2.1)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full h-[400px] bg-slate-900/30 rounded-3xl border border-white/5 backdrop-blur-sm p-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS_DATA}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;