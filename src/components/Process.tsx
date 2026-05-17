import React from 'react';
import { motion } from 'framer-motion';
import { Compass, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';
const steps = [
{
  number: '01',
  title: 'Discovery',
  duration: 'Day 1 – 3',
  description:
  "We start with a real conversation. What are you actually trying to build, who is it for, and what would make it succeed? You'll get a clear scope and a fixed price before we begin.",
  icon: Compass,
  color: 'warm-gold',
  glow: 'shadow-glow-gold'
},
{
  number: '02',
  title: 'Design',
  duration: 'Week 1 – 2',
  description:
  'I sketch in Figma — flows first, then UI. You get to see real screens, click through them, and shape the direction. Nothing gets built until the design feels right.',
  icon: PenTool,
  color: 'warm-coral',
  glow: 'shadow-glow-coral'
},
{
  number: '03',
  title: 'Build',
  duration: 'Week 2 – 6',
  description:
  "I code the thing — clean React, responsive on every device, accessible by default. You'll see progress every few days on a live preview link and we iterate together.",
  icon: Code2,
  color: 'cool-violet',
  glow: 'shadow-glow-violet'
},
{
  number: '04',
  title: 'Launch',
  duration: 'Final week',
  description:
  'We polish, test, deploy, and hand it over. You leave with a working product, source code, and a clear path for what comes next. Optional retainer if you want me to stick around.',
  icon: Rocket,
  color: 'cool-cyan',
  glow: 'shadow-glow-cyan'
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
  'warm-gold': {
    text: 'text-warm-gold',
    bg: 'bg-warm-gold/15',
    border: 'border-warm-gold/30',
    ring: 'group-hover:border-warm-gold'
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
export function Process() {
  return (
    <section id="process" className="py-24 relative">
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
            className="inline-block px-4 py-1.5 rounded-full bg-cool-violet/10 border border-cool-violet/30 text-cool-violet text-xs font-medium mb-6 uppercase tracking-[0.2em]">
            
            How it works
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
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            
            From idea to{' '}
            <span className="gradient-text-vibrant">live product</span>,
            <br className="hidden md:block" /> in four clear steps.
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
            
            No mystery, no agency theatrics. Just a straightforward way of
            working that keeps you in the loop and ships real things.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, idx) => {
              const c = colorMap[step.color];
              return (
                <motion.div
                  key={step.number}
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
                  className="relative">
                  
                  {/* Connector arrow between desktop cards */}
                  {idx < steps.length - 1 &&
                  <div className="hidden lg:flex absolute top-20 -right-3 z-10 text-white/20">
                      <ArrowRight size={24} />
                    </div>
                  }

                  <div
                    className={`group relative h-full rounded-2xl bg-card/40 backdrop-blur-xl border ${c.border} ${c.ring} p-7 transition-all duration-500 hover:-translate-y-2 hover:${step.glow}`}>
                    
                    <div
                      className={`text-5xl font-bold ${c.text} opacity-30 mb-4 leading-none`}>
                      
                      {step.number}
                    </div>

                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${c.bg} ${c.text} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      
                      <step.icon size={22} />
                    </div>

                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      {step.duration}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}