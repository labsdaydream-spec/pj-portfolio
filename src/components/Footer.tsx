import React from 'react';
import {
  ArrowUp,
  Twitter,
  Github,
  Linkedin,
  Mail,
  MessageCircle } from
'lucide-react';
import { Separator } from './Separator';
const LOGO_URL = "/Untitled_design_(7).png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const openWhatsApp = () => {
    window.open(`https://wa.me/255621660495`, '_blank');
  };
  return (
    <footer className="relative pt-20 pb-8 border-t border-white/10 bg-card/20 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-3 group mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/15 shadow-glow-violet group-hover:shadow-glow-orange transition-all duration-500">
                <img
                  src={LOGO_URL}
                  alt="Daydream Labs"
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-lg tracking-tight text-foreground">
                  Daydream <span className="gradient-text-vibrant">Labs</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
                  By Patra John
                </span>
              </div>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              A small web studio in Dar es Salaam. We design and build digital
              products that ship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[11px] font-semibold text-foreground mb-4 uppercase tracking-[0.2em]">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {[
              {
                name: 'Services',
                href: '#services'
              },
              {
                name: 'Process',
                href: '#process'
              },
              {
                name: 'Work',
                href: '#work'
              },
              {
                name: 'Pricing',
                href: '#pricing'
              },
              {
                name: 'Contact',
                href: '#contact'
              }].
              map((link) =>
              <li key={link.name}>
                  <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-warm-gold transition-colors">
                  
                    {link.name}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[11px] font-semibold text-foreground mb-4 uppercase tracking-[0.2em]">
              Connect
            </h4>
            <a
              href="mailto:labsdaydream@gmail.com"
              className="text-sm text-muted-foreground hover:text-warm-orange transition-colors mb-2 flex items-center gap-2">
              
              <Mail size={14} /> labsdaydream@gmail.com
            </a>
            <button
              onClick={openWhatsApp}
              className="text-sm text-muted-foreground hover:text-cool-emerald transition-colors mb-4 flex items-center gap-2">
              
              <MessageCircle size={14} /> +255 621 660 495
            </button>

            <div className="flex gap-3 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/60 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-warm-orange hover:border-warm-orange/40 hover:shadow-glow-orange transition-all duration-300"
                aria-label="Twitter">
                
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/60 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-cool-violet hover:border-cool-violet/40 hover:shadow-glow-violet transition-all duration-300"
                aria-label="GitHub">
                
                <Github size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/60 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-cool-cyan hover:border-cool-cyan/40 hover:shadow-glow-cyan transition-all duration-300"
                aria-label="LinkedIn">
                
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/5 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Daydream Labs · Built by Patra John
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-warm-gold transition-colors group">
            
            Back to top
            <span className="w-7 h-7 rounded-full bg-card/60 border border-white/10 flex items-center justify-center group-hover:border-warm-gold/40 group-hover:shadow-glow-gold transition-all">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>);

}