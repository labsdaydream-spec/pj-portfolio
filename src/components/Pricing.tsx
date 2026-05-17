import React from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Sparkles,
  Zap,
  Briefcase,
  Layers,
  PenTool,
  Wrench,
  Users,
  Rocket } from
'lucide-react';
import { Button } from './Button';
const projectPackages = [
{
  name: 'Starter',
  icon: Zap,
  price: 'TZS 400K – 700K',
  priceUsd: '~$150 – $270',
  bestFor:
  'Small businesses, freelancers, local startups needing a first web presence.',
  delivery: '7 days',
  features: [
  'Website with 1 to 3 pages',
  'Clean, mobile-responsive design',
  'Basic UI (no custom animations)'],

  color: 'warm-gold',
  accent: 'from-warm-gold to-warm-orange'
},
{
  name: 'Business',
  icon: Briefcase,
  price: 'TZS 1.2M – 2.5M',
  priceUsd: '~$460 – $960',
  bestFor: 'SMEs, real estate agencies, professional service firms.',
  delivery: '2 – 4 weeks',
  features: [
  'Multi-page website (3–8 pages)',
  'Custom UI design (not a template)',
  'Micro-animations & interactions',
  'CMS integration if needed'],

  color: 'warm-orange',
  accent: 'from-warm-orange to-warm-coral',
  featured: true
},
{
  name: 'Web App / Product',
  icon: Rocket,
  price: 'TZS 3.5M – 8M',
  priceUsd: '~$1,300 – $3,100',
  bestFor: 'Funded startups, SaaS ideas, scaling platforms.',
  delivery: '5 – 8 weeks',
  features: [
  'Full web application design & development',
  'User flows, wireframes, final UI',
  'Dashboard, auth, database integration',
  'Responsive across all devices'],

  color: 'cool-violet',
  accent: 'from-cool-violet to-cool-cyan'
},
{
  name: 'UI/UX Design Only',
  icon: PenTool,
  price: 'TZS 800K – 3M',
  priceUsd: '~$300 – $1,150',
  bestFor: 'Clients with developers who need design done right.',
  delivery: 'Scope-dependent',
  features: [
  'User research & flow mapping',
  'Wireframes → high-fidelity mockups',
  'Design system / component library',
  'Figma handoff ready for developers'],

  color: 'warm-coral',
  accent: 'from-warm-coral to-warm-pink'
}];

const retainers = [
{
  name: 'Maintenance',
  icon: Wrench,
  price: 'TZS 200K – 400K',
  description: 'Bug fixes, content updates, minor UI tweaks.',
  color: 'cool-cyan'
},
{
  name: 'Design Partner',
  icon: Users,
  price: 'TZS 600K – 1.2M',
  description: 'Ongoing UI/UX work, new features, design iterations.',
  color: 'cool-violet'
},
{
  name: 'Full Dev Retainer',
  icon: Layers,
  price: 'TZS 1.5M – 2.5M',
  description: 'Active dev + design, priority support.',
  color: 'warm-orange'
}];

const colorMap: Record<
  string,
  {
    text: string;
    bg: string;
    border: string;
    glow: string;
    ring: string;
  }> =
{
  'warm-orange': {
    text: 'text-warm-orange',
    bg: 'bg-warm-orange/15',
    border: 'border-warm-orange/40',
    glow: 'hover:shadow-glow-orange',
    ring: 'group-hover:border-warm-orange'
  },
  'warm-coral': {
    text: 'text-warm-coral',
    bg: 'bg-warm-coral/15',
    border: 'border-warm-coral/40',
    glow: 'hover:shadow-glow-coral',
    ring: 'group-hover:border-warm-coral'
  },
  'warm-gold': {
    text: 'text-warm-gold',
    bg: 'bg-warm-gold/15',
    border: 'border-warm-gold/40',
    glow: 'hover:shadow-glow-gold',
    ring: 'group-hover:border-warm-gold'
  },
  'cool-violet': {
    text: 'text-cool-violet',
    bg: 'bg-cool-violet/15',
    border: 'border-cool-violet/40',
    glow: 'hover:shadow-glow-violet',
    ring: 'group-hover:border-cool-violet'
  },
  'cool-cyan': {
    text: 'text-cool-cyan',
    bg: 'bg-cool-cyan/15',
    border: 'border-cool-cyan/40',
    glow: 'hover:shadow-glow-cyan',
    ring: 'group-hover:border-cool-cyan'
  }
};
export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="inline-block px-4 py-1.5 rounded-full bg-cool-violet/10 border border-cool-violet/30 text-cool-violet text-sm font-medium mb-6">
            
            Pricing
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
            
            Transparent packages for{' '}
            <span className="gradient-text-vibrant">every stage</span>
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
            
            Project-based pricing that scales with the work — plus retainers if
            you need ongoing support.
          </motion.p>
        </div>

        {/* Project Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {projectPackages.map((pkg, idx) => {
            const c = colorMap[pkg.color];
            return (
              <motion.div
                key={pkg.name}
                initial={{
                  opacity: 0,
                  y: 40
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
                  delay: idx * 0.1
                }}
                className={`group relative rounded-2xl bg-card/60 backdrop-blur-sm border ${c.border} ${c.ring} p-7 transition-all duration-500 hover:-translate-y-2 ${c.glow} flex flex-col ${pkg.featured ? 'lg:scale-105 lg:-translate-y-1' : ''}`}>
                
                {pkg.featured &&
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-warm-orange to-warm-pink text-white text-xs font-semibold shadow-glow-coral flex items-center gap-1">
                    <Sparkles size={12} /> Most Popular
                  </div>
                }

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${c.bg} ${c.text} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  
                  <pkg.icon size={22} />
                </div>

                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                  {pkg.bestFor}
                </p>

                <div className="mb-5">
                  <div className={`text-2xl font-bold ${c.text}`}>
                    {pkg.price}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {pkg.priceUsd}
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {pkg.features.map((feature) =>
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground/90">
                    
                      <Check
                      size={16}
                      className={`${c.text} shrink-0 mt-0.5`} />
                    
                      <span>{feature}</span>
                    </li>
                  )}
                </ul>

                <div className="pt-4 border-t border-white/5 mb-4">
                  <div className="text-xs text-muted-foreground">Delivery</div>
                  <div className="text-sm font-medium">{pkg.delivery}</div>
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${pkg.accent} text-white border-none hover:scale-105 transition-all duration-300 ${pkg.featured ? 'shadow-glow-coral' : ''}`}
                  onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  })
                  }>
                  
                  Get Started
                </Button>
              </motion.div>);

          })}
        </div>

        {/* Retainers */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h3
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
            className="text-2xl md:text-3xl font-bold mb-3">
            
            Monthly Retainers
          </motion.h3>
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
              delay: 0.1
            }}
            className="text-muted-foreground">
            
            For ongoing partnerships and continuous improvements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {retainers.map((retainer, idx) => {
            const c = colorMap[retainer.color];
            return (
              <motion.div
                key={retainer.name}
                initial={{
                  opacity: 0,
                  y: 30
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
                  delay: idx * 0.1
                }}
                className={`group rounded-2xl bg-card/40 backdrop-blur-sm border ${c.border} ${c.ring} p-6 transition-all duration-500 hover:-translate-y-1 ${c.glow}`}>
                
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${c.bg} ${c.text} group-hover:scale-110 transition-transform duration-300`}>
                    
                    <retainer.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-1">{retainer.name}</h4>
                    <div className={`text-sm font-semibold ${c.text} mb-2`}>
                      {retainer.price}
                      <span className="text-muted-foreground font-normal">
                        {' '}
                        / mo
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {retainer.description}
                    </p>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}