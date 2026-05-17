import React, { useState, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';
import { Button } from './Button';
const projects = [
{
  id: 'nationwide',
  title: 'Nationwide Realty',
  url: 'https://nationalwiderealty.netlify.app',
  description:
  'A modern real estate platform with property listings, advanced search, and a site-visit inquiry/order system. Built for agents to convert browsers into buyers.',
  tags: ['Real Estate', 'E-Commerce', 'React', 'Tailwind'],
  color: 'warm-orange',
  accent: 'from-warm-orange to-warm-coral'
},
{
  id: 'amell',
  title: 'Amell in Dar — Restaurant',
  url: 'https://project-amell-in-dar-restaurant-746.magicpatterns.app/#visit',
  description:
  'A restaurant ordering platform with a beautiful menu, delivery checkout, and visit-reservation flows. Designed to feel as warm and inviting as the dining experience itself.',
  tags: ['Restaurant', 'E-Commerce', 'Delivery', 'React'],
  color: 'warm-coral',
  accent: 'from-warm-coral to-warm-pink'
},
{
  id: 'zingara',
  title: 'Zingara — Property Management',
  url: 'https://project-zingara-property-management-platform-131.magicpatterns.app/',
  description:
  'A full property management web application — dashboards, listings, tenant tools, and admin workflows. A complete platform built for scale.',
  tags: ['Web App', 'Dashboard', 'SaaS', 'React'],
  color: 'cool-violet',
  accent: 'from-cool-violet to-cool-cyan'
}];

const colorMap: Record<
  string,
  {
    text: string;
    bg: string;
    border: string;
    glow: string;
  }> =
{
  'warm-orange': {
    text: 'text-warm-orange',
    bg: 'bg-warm-orange/15',
    border: 'border-warm-orange/40',
    glow: 'shadow-glow-orange'
  },
  'warm-coral': {
    text: 'text-warm-coral',
    bg: 'bg-warm-coral/15',
    border: 'border-warm-coral/40',
    glow: 'shadow-glow-coral'
  },
  'cool-violet': {
    text: 'text-cool-violet',
    bg: 'bg-cool-violet/15',
    border: 'border-cool-violet/40',
    glow: 'shadow-glow-violet'
  }
};
export function Portfolio() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeId)!;
  const c = colorMap[activeProject.color];
  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="inline-block px-4 py-1.5 rounded-full bg-warm-coral/10 border border-warm-coral/30 text-warm-coral text-sm font-medium mb-6">
            
            Featured Work
          </motion.div>
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            className="text-3xl md:text-5xl font-bold mb-6">
            
            Real projects,{' '}
            <span className="gradient-text-vibrant">live and shipping</span>
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="text-lg text-muted-foreground">
            
            Each project below is fully functional — click the tabs to explore
            them live in the browser frame.
          </motion.p>
        </div>

        {/* Project Tabs */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="flex flex-wrap justify-center gap-3 mb-10">
          
          {projects.map((project) => {
            const pc = colorMap[project.color];
            const isActive = project.id === activeId;
            return (
              <button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className={`group px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${isActive ? `${pc.bg} ${pc.text} ${pc.border} ${pc.glow}` : 'bg-card/40 text-muted-foreground border-white/10 hover:border-white/30 hover:text-foreground'}`}>
                
                {project.title}
              </button>);

          })}
        </motion.div>

        {/* Active Project */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut'
            }}
            className={`relative rounded-2xl overflow-hidden border ${c.border} bg-card/40 backdrop-blur-sm shadow-2xl ${c.glow}`}>
            
            {/* Browser Chrome */}
            <div className="bg-[#1a1a2e]/90 px-4 py-3 flex items-center gap-4 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-black/30 text-muted-foreground text-xs px-4 py-1.5 rounded-md flex items-center gap-2 max-w-md w-full justify-center">
                  <span className="truncate">
                    {activeProject.url.replace(/^https?:\/\//, '')}
                  </span>
                </div>
              </div>
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden sm:flex items-center gap-1.5 text-xs font-medium ${c.text} hover:underline shrink-0`}>
                
                Open <ExternalLink size={12} />
              </a>
            </div>

            {/* Iframe (Desktop) — shows hero only, non-scrollable */}
            <div className="relative bg-black/30">
              <div className="hidden md:block relative w-full h-[600px] lg:h-[720px] overflow-hidden">
                <iframe
                  src={activeProject.url}
                  title={activeProject.title}
                  scrolling="no"
                  className="absolute top-0 left-0 w-full h-[900px] lg:h-[1100px] border-none bg-white pointer-events-none select-none"
                  loading="lazy" />
                
                {/* Transparent overlay to fully block any internal scrolling/interaction */}
                <div className="absolute inset-0" aria-hidden="true" />
              </div>

              {/* Mobile fallback */}
              <div className="md:hidden flex flex-col items-center justify-center py-16 px-6 text-center bg-gradient-to-b from-card/50 to-background">
                <div
                  className={`w-16 h-16 ${c.bg} ${c.text} rounded-2xl flex items-center justify-center mb-6`}>
                  
                  <ExternalLink size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {activeProject.title}
                </h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  {activeProject.description}
                </p>
                <Button
                  className={`bg-gradient-to-r ${activeProject.accent} hover:shadow-glow-coral text-white w-full max-w-xs border-none transition-all duration-300 hover:scale-105`}
                  onClick={() => window.open(activeProject.url, '_blank')}>
                  
                  Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Info bar (desktop) */}
            <div className="hidden md:flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between p-6 bg-card/80 backdrop-blur-md border-t border-white/5">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1.5">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {activeProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) =>
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                    
                      <Tag size={10} />
                      {tag}
                    </span>
                  )}
                </div>
              </div>
              <Button
                className={`bg-gradient-to-r ${activeProject.accent} hover:shadow-glow-coral text-white border-none transition-all duration-300 hover:scale-105 shrink-0`}
                onClick={() => window.open(activeProject.url, '_blank')}>
                
                Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>);

}