import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
const LOGO_URL = "/Untitled_design_(7).png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
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
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/40 backdrop-blur-2xl border-b border-white/10 py-3 shadow-lg shadow-black/10' : 'bg-transparent py-5'}`}>
      
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/15 shadow-glow-violet group-hover:shadow-glow-orange transition-all duration-500">
            <img
              src={LOGO_URL}
              alt="Daydream Labs"
              className="w-full h-full object-cover" />
            
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-semibold text-base tracking-tight text-foreground">
              Patra <span className="gradient-text-vibrant">John</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
              Daydream Labs
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) =>
            <li key={link.name}>
                <a
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-warm-gold transition-colors group">
                
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-warm-orange to-warm-gold group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            )}
          </ul>
          <Button
            className="bg-gradient-to-r from-warm-orange to-warm-coral hover:shadow-glow-orange text-white border-none transition-all duration-300 hover:scale-105"
            onClick={() =>
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })
            }>
            
            Start a Project
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu">
          
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 right-0 bg-card/80 backdrop-blur-2xl border-b border-white/10 shadow-xl py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) =>
          <li key={link.name}>
                <a
              href={link.href}
              className="block text-base font-medium text-foreground hover:text-warm-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}>
              
                  {link.name}
                </a>
              </li>
          )}
          </ul>
          <Button
          className="w-full bg-gradient-to-r from-warm-orange to-warm-coral text-white mt-2"
          onClick={() => {
            setMobileMenuOpen(false);
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
          
            Start a Project
          </Button>
        </div>
      }
    </header>);

}