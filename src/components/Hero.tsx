import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './Button';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut'
              }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-warm-gold/30 text-warm-gold text-xs font-medium mb-8 backdrop-blur-md shadow-glow-gold uppercase tracking-[0.2em]">
              
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-warm-gold"></span>
              </span>
              Open for new projects
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: 'easeOut'
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.02]">
              
              I design and build
              <br />
              <span className="gradient-text-vibrant">products</span> that{' '}
              <span className="bg-gradient-to-r from-cool-cyan via-cool-violet to-warm-pink bg-clip-text text-transparent">
                actually ship.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: 'easeOut'
              }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-3 leading-relaxed mx-auto lg:mx-0">
              
              We build digital experiences for businesses in{' '}
              <span className="text-foreground font-medium">Dar es Salaam</span>{' '}
              that are ready to stop existing only on Instagram. Startups
              needing a home base, restaurants wanting more than a WhatsApp
              link, brands that have outgrown their old site — we turn what
              you've built into something the internet can actually see.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.32,
                ease: 'easeOut'
              }}
              className="text-sm text-muted-foreground/80 mb-10 mx-auto lg:mx-0 max-w-xl">
              
              24 years old. 2+ years building things on the web. Obsessed with
              details that most people miss.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: 'easeOut'
              }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center lg:justify-start mb-10">
              
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-warm-orange via-warm-coral to-warm-pink hover:shadow-glow-coral text-white text-base h-12 px-8 rounded-full transition-all duration-300 hover:scale-105 border-none"
                onClick={() =>
                document.getElementById('work')?.scrollIntoView({
                  behavior: 'smooth'
                })
                }>
                
                <Sparkles className="mr-2 h-4 w-4" />
                See the work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base h-12 px-8 rounded-full border-cool-cyan/40 text-cool-cyan hover:bg-cool-cyan/10 hover:border-cool-cyan hover:shadow-glow-cyan transition-all duration-300 bg-white/5 backdrop-blur-sm"
                onClick={() =>
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })
                }>
                
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: 'easeOut'
              }}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-6 border-t border-white/10">
              
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  15+
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                  Projects Shipped
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  2+
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                  Years Building
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  100%
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                  Hand-crafted
                </div>
              </div>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: 'easeOut'
            }}
            className="order-1 lg:order-2 flex justify-center">
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-warm-orange via-warm-coral to-cool-violet rounded-full blur-2xl opacity-60 animate-pulse-glow group-hover:opacity-80 transition-opacity" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-warm-gold via-warm-coral to-cool-violet rounded-full opacity-90" />

              <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] bg-card ring-2 ring-white/20 shadow-2xl">
                <img
                  src="/WhatsApp_Image_2026-05-17_at_07.03.52.jpg"
                  alt="Patra John — Founder, Daydream Labs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: 1,
                  duration: 0.5
                }}
                className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0 bg-card/80 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full shadow-glow-gold flex items-center gap-2">
                
                <span className="text-2xl">👋</span>
                <span className="text-sm font-semibold">Let's build</span>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: -20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: 1.2,
                  duration: 0.5
                }}
                className="absolute -top-2 -left-2 md:top-4 md:left-0 bg-card/80 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full shadow-glow-violet flex items-center gap-2">
                
                <Sparkles size={16} className="text-cool-violet" />
                <span className="text-sm font-semibold">
                  Founder, Daydream Labs
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}