import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#060a12] text-slate-400 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl font-bold tracking-tight text-white">
              AegisAI
            </span>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Certified enterprise compliance training and workforce learning delivered through hyper-realistic, conversational AI avatars.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>SOC 2 Type II & HIPAA Omnibus Audited</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Curriculum Tracks
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => scrollTo('curriculum')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cybersecurity & Phishing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('curriculum')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Anti-Bribery & FCPA
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('curriculum')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  OSHA Industrial Safety
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('curriculum')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Workplace Harassment Prevention
                </button>
              </li>
            </ul>
          </div>

          {/* Platform Column */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Architecture & Learner
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => scrollTo('progress')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-blue-400 font-medium"
                >
                  Learning Progress Tracker
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('avatars')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Avatar Instructors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('features')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Branching Decision Trees
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('features')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  SCORM & xAPI Connectors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('compliance')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tamper-Evident Audit Logs
                </button>
              </li>
            </ul>
          </div>

          {/* Governance Column */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Compliance & Legal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => scrollTo('compliance')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  DOJ Compliance Standards
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('roi-calculator')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  ROI & Risk Model
                </button>
              </li>
              <li>
                <span className="text-slate-400">
                  Data Processing Addendum
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  Security Whitepaper
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright & Unboxed Links */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} AegisAI Systems, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-200 cursor-pointer">Security Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
