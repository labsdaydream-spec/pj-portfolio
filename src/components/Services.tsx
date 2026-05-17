import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  ShoppingCart,
  LayoutDashboard,
  ArrowUpRight } from
'lucide-react';
type Example = {
  label: string;
  url: string;
};
type Service = {
  title: string;
  description: string;
  icon: typeof Code2;
  color: string;
  glow: string;
  examples: Example[];
};
const services: Service[] = [
{
  title: 'Web Development',
  description:
  'Fast, accessible websites built in React. Hand-coded, never templated — every interaction designed on purpose.',
  icon: Code2,
  color: 'warm-orange',
  glow: 'hover:shadow-glow-orange',
  examples: [
  {
    label: 'Nationwide Realty — Properties',
    url: 'https://nationalwiderealty.netlify.app/properties'
  }]

},
{
  title: 'UI/UX Design',
  description:
  'Figma-first design — flows, wireframes, polished UI, and a clean handoff. We design products people actually want to use.',
  icon: Palette,
  color: 'cool-violet',
  glow: 'hover:shadow-glow-violet',
  examples: [
  {
    label: 'Zingara — Dashboard',
    url: 'https://project-zingara-property-management-platform-131.magicpatterns.app/dashboard'
  },
  {
    label: 'Zingara — Properties',
    url: 'https://project-zingara-property-management-platform-131.magicpatterns.app/dashboard/properties'
  },
  {
    label: 'Zingara — Tenants',
    url: 'https://project-zingara-property-management-platform-131.magicpatterns.app/dashboard/tenants'
  }]

},
{
  title: 'E-Commerce',
  description:
  'Online stores that convert — clean catalogs, smooth checkout, and inquiry-to-order flows tuned for real customers.',
  icon: ShoppingCart,
  color: 'warm-coral',
  glow: 'hover:shadow-glow-coral',
  examples: [
  {
    label: 'Amell in Dar — Menu',
    url: 'https://project-amell-in-dar-restaurant-746.magicpatterns.app/#menu'
  }]

},
{
  title: 'Web Applications',
  description:
  'Full web apps with dashboards, auth, and database integration. Built to streamline the workflows your business actually runs on.',
  icon: LayoutDashboard,
  color: 'cool-cyan',
  glow: 'hover:shadow-glow-cyan',
  examples: [
  {
    label: 'Zingara — Dashboard',
    url: 'https://project-zingara-property-management-platform-131.magicpatterns.app/dashboard'
  }]

}];

const colorMap: Record<
  string,
  {
    text: string;
    bg: string;
    border: string;
    ring: string;
  }> =
{
  'warm-orange': {
    text: 'text-warm-orange',
    bg: 'bg-warm-orange/15',
    border: 'border-warm-orange/30',
    ring: 'group-hover:border-warm-orange'
  },
  'warm-coral': {
    text: 'text-warm-coral',
    bg: 'bg-warm-coral/15',
    border: 'border-warm-coral/30',
    ring: 'group-hover:border-warm-coral'
  },
  'cool-violet': {
    text: 'text-cool-violet',
    bg: 'bg-cool-violet/15',
    border: 'border-cool-violet/30',
    ring: 'group-hover:border-cool-violet'
  },
  'cool-cyan': {
    text: 'text-cool-cyan',
    bg: 'bg-cool-cyan/15',
    border: 'border-cool-cyan/30',
    ring: 'group-hover:border-cool-cyan'
  }
};
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};
export function Services() {
  return (
    <section id="services" className="py-24 relative">
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
            className="inline-block px-4 py-1.5 rounded-full bg-warm-gold/10 border border-warm-gold/30 text-warm-gold text-xs font-medium mb-6 uppercase tracking-[0.2em]">
            
            What we do
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
            
            Four things, done{' '}
            <span className="gradient-text-vibrant">well</span>.
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
            
            Daydream Labs is small on purpose. We focus on the work that ships —
            and every project gets the same level of obsessive detail.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {services.map((service) => {
            const c = colorMap[service.color];
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl bg-card/40 backdrop-blur-xl border ${c.border} ${c.ring} p-7 transition-all duration-500 hover:-translate-y-2 ${service.glow} flex flex-col`}>
                
                <div
                  className={`absolute -top-20 -right-20 w-48 h-48 ${c.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                

                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${c.bg} ${c.text} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      
                      <service.icon size={26} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  <div>
                    <div
                      className={`text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2.5 flex items-center gap-2`}>
                      
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-current ${c.text} animate-pulse`} />
                      
                      Live examples
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.examples.map((ex) =>
                      <a
                        key={ex.url}
                        href={ex.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${c.bg} ${c.text} border ${c.border} hover:scale-105 hover:bg-opacity-80 transition-all duration-200`}>
                        
                          {ex.label}
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>);

          })}
        </motion.div>
      </div>
    </section>);

}