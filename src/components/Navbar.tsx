import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#090d16]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors"
        >
          AegisAI
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button 
            onClick={() => scrollTo('progress')} 
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Learning Progress</span>
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
          </button>
          <button 
            onClick={() => scrollTo('curriculum')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Curriculum
          </button>
          <button 
            onClick={() => scrollTo('avatars')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            AI Avatars
          </button>
          <button 
            onClick={() => scrollTo('features')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Features
          </button>
          <button 
            onClick={() => scrollTo('compliance')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Regulatory Compliance
          </button>
          <button 
            onClick={() => scrollTo('roi-calculator')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            ROI Calculator
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (onOpenDemo) onOpenDemo();
              else scrollTo('interactive-demo');
            }}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700 cursor-pointer"
          >
            Try Live Avatar
          </button>
          <button
            onClick={() => scrollTo('cta-section')}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors whitespace-nowrap cursor-pointer"
          >
            Request Pilot
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
          
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#090d16] px-6 py-5 shadow-2xl">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-300">
            <button 
              onClick={() => scrollTo('progress')} 
              className="text-left py-1 text-blue-400 font-semibold flex items-center justify-between"
            >
              <span>Learning Progress</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40 text-blue-300">Active</span>
            </button>
            <button 
              onClick={() => scrollTo('curriculum')} 
              className="text-left py-1 hover:text-white transition-colors"
            >
              Curriculum & Modules
            </button>
            <button 
              onClick={() => scrollTo('avatars')} 
              className="text-left py-1 hover:text-white transition-colors"
            >
              AI Avatars
            </button>
            <button 
              onClick={() => scrollTo('features')} 
              className="text-left py-1 hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollTo('compliance')} 
              className="text-left py-1 hover:text-white transition-colors"
            >
              Regulatory Compliance
            </button>
            <button 
              onClick={() => scrollTo('roi-calculator')} 
              className="text-left py-1 hover:text-white transition-colors"
            >
              ROI Calculator
            </button>
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo('interactive-demo');
                }}
                className="w-full text-center py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg"
              >
                Try Live Avatar
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo('cta-section');
                }}
                className="w-full text-center py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg"
              >
                Request Pilot
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
