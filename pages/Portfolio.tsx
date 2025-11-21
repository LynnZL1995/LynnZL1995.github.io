import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Mobile' | 'Web' | 'Branding'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Selected Works</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            A curation of projects defined by rigorous problem solving and meticulous visual design.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['All', 'Web', 'Mobile', 'Branding'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Wrapper */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors z-10" />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-6">
                  <button className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    View Case Study <ExternalLink size={14} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-30 bg-slate-900">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <Layers size={16} className="text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-800 rounded-md text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;