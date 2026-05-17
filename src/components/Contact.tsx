import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from './Button';
const EMAIL = 'labsdaydream@gmail.com';
const PHONE = '+255621660495';
export function Contact() {
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Patra! I'd like to discuss a project with Daydream Labs."
    );
    window.open(`https://wa.me/255621660495?text=${text}`, '_blank');
  };
  const openEmail = () => {
    const subject = encodeURIComponent('Project inquiry — Daydream Labs');
    const body = encodeURIComponent(
      "Hi Patra,\n\nI'd love to talk about a project I'm planning. Here's what I have in mind:\n\n[Briefly describe your idea, who it's for, and roughly when you'd like to launch.]\n\nThanks!\n"
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
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
            duration: 0.6
          }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-card/30 backdrop-blur-xl p-8 md:p-16">
          
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-warm-orange/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-cool-violet/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
            style={{
              animationDelay: '2s'
            }} />
          

          <div className="relative text-center max-w-3xl mx-auto">
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
              className="inline-block px-4 py-1.5 rounded-full bg-warm-coral/10 border border-warm-coral/30 text-warm-coral text-xs font-medium mb-6 uppercase tracking-[0.2em]">
              
              Let's talk
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
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              
              Got an idea? <br />
              <span className="gradient-text-vibrant">
                Let's build it together.
              </span>
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
              className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              
              No long forms, no sales calls. Send me a message — I read every
              one personally and reply within 24 hours.
            </motion.p>

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
                duration: 0.5,
                delay: 0.3
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              
              <Button
                size="lg"
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-cool-emerald to-cool-cyan hover:shadow-glow-emerald text-white text-base h-14 px-8 rounded-full border-none transition-all duration-300 hover:scale-105">
                
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>

              <Button
                size="lg"
                onClick={openEmail}
                className="bg-gradient-to-r from-warm-orange via-warm-coral to-warm-pink hover:shadow-glow-coral text-white text-base h-14 px-8 rounded-full border-none transition-all duration-300 hover:scale-105">
                
                <Mail className="mr-2 h-5 w-5" />
                Send an email
              </Button>
            </motion.div>

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
                duration: 0.5,
                delay: 0.4
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              
              <a
                href={`mailto:${EMAIL}`}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 hover:border-warm-orange/40 hover:bg-warm-orange/5 transition-all duration-300">
                
                <div className="w-10 h-10 rounded-lg bg-warm-orange/15 text-warm-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </div>
                <div className="text-sm font-medium text-foreground group-hover:text-warm-orange transition-colors break-all">
                  {EMAIL}
                </div>
              </a>

              <a
                href={`tel:${PHONE}`}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 hover:border-warm-gold/40 hover:bg-warm-gold/5 transition-all duration-300">
                
                <div className="w-10 h-10 rounded-lg bg-warm-gold/15 text-warm-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Call
                </div>
                <div className="text-sm font-medium text-foreground group-hover:text-warm-gold transition-colors">
                  +255 621 660 495
                </div>
              </a>

              <button
                onClick={openWhatsApp}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 hover:border-cool-emerald/40 hover:bg-cool-emerald/5 transition-all duration-300">
                
                <div className="w-10 h-10 rounded-lg bg-cool-emerald/15 text-cool-emerald flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={18} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  WhatsApp
                </div>
                <div className="text-sm font-medium text-foreground group-hover:text-cool-emerald transition-colors flex items-center gap-1">
                  Message me <ArrowRight size={12} />
                </div>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

}