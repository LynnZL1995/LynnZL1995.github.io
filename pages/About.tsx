import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Award, Briefcase, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Designing with <span className="text-secondary">Purpose</span>.
          </h1>
          <div className="prose prose-lg prose-invert text-slate-400">
            <p>
              I'm a multi-disciplinary designer obsessed with the intersection of logical systems and creative expression. With over 5 years of experience, I help startups and enterprises build digital products that are as beautiful as they are functional.
            </p>
            <p>
              My approach is deeply rooted in user-centric design principles, but I'm not afraid to break the rules to create moments of delight. I believe the best interfaces are the ones that feel invisible yet indispensable.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-20 border-y border-white/5 py-8 animate-slide-up">
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Projects Shipped', value: '40+' },
            { label: 'Coffee Consumed', value: '∞' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <Briefcase className="text-primary" /> Experience
          </h2>
          
          <div className="space-y-12 relative border-l border-white/10 ml-3 md:ml-6 pl-8 md:pl-12">
            {EXPERIENCE_DATA.map((job, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Dot */}
                <div className="absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 rounded-full bg-slate-950 border-2 border-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <span className="text-secondary font-medium">@{job.company}</span>
                </div>
                <span className="text-sm text-slate-500 mb-3 block font-mono">{job.year}</span>
                <p className="text-slate-400 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach Grid */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            <Award className="text-accent" /> Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <Code size={18} className="text-indigo-400" />
                Design Engineering
              </h3>
              <p className="text-sm text-slate-400">
                I write code. This allows me to design with feasibility in mind and communicate effectively with developer teams.
              </p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <Award size={18} className="text-pink-400" />
                Radical Simplification
              </h3>
              <p className="text-sm text-slate-400">
                I strive to remove friction. If a feature doesn't serve the core user goal, it doesn't belong in the MVP.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;