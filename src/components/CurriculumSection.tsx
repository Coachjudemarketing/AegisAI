import React, { useState } from 'react';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink,
  BookOpen,
  X
} from 'lucide-react';

interface ModuleData {
  id: string;
  code: string;
  category: 'cyber' | 'ethics' | 'safety' | 'conduct';
  title: string;
  description: string;
  duration: string;
  complianceRule: string;
  instructor: string;
  modulesCount: number;
  dilemmaSample: {
    question: string;
    answer: string;
    statutoryRef: string;
  };
}

const MODULES: ModuleData[] = [
  {
    id: 'cyber-101',
    code: 'SEC-101',
    category: 'cyber',
    title: 'Defensive Phishing & Social Engineering Triage',
    description: 'Real-world identification of executive deepfakes, SMS phishing, and fraudulent vendor invoice manipulation.',
    duration: '8 mins',
    complianceRule: 'SOC 2 CC6.1 · NIST CSF 2.0 PR.AT',
    instructor: 'Elena Rostova',
    modulesCount: 4,
    dilemmaSample: {
      question: 'A spoofed vendor sends an urgent revised ACH banking instruction on supplier letterhead. How do you verify without delaying critical supply delivery?',
      answer: 'Perform out-of-band verification via established corporate phone registry with confirmed signatory before modifying any payment route.',
      statutoryRef: 'FBI IC3 Business Email Compromise Advisory & SOC 2 Trust Services Criteria',
    },
  },
  {
    id: 'cyber-102',
    code: 'SEC-102',
    category: 'cyber',
    title: 'HIPAA & Protected Health Information Handling',
    description: 'Mandatory patient privacy protocols, electronic PHI safeguards, and emergency breach notification windows.',
    duration: '10 mins',
    complianceRule: 'HIPAA Security & Privacy Omnibus Rule',
    instructor: 'Elena Rostova',
    modulesCount: 5,
    dilemmaSample: {
      question: 'A physician mentions a celebrity patient condition in an encrypted internal Slack channel for diagnostic consulting. Is this compliant?',
      answer: 'Non-compliant unless the channel has verified HIPAA BAA enforcement, minimum necessary rule restrictions, and formal access auditing.',
      statutoryRef: '45 CFR § 164.502(b) Minimum Necessary Standard',
    },
  },
  {
    id: 'ethics-201',
    code: 'ETH-201',
    category: 'ethics',
    title: 'Global Anti-Bribery, FCPA & Whistleblower Protection',
    description: 'Navigating facilitating payments, third-party distributor due diligence, and statutory anti-retaliation safe harbors.',
    duration: '12 mins',
    complianceRule: 'DOJ Evaluation of Corporate Compliance Programs · FCPA',
    instructor: 'Dr. Marcus Vance',
    modulesCount: 6,
    dilemmaSample: {
      question: 'An overseas licensing agent demands a $2,500 consulting bonus to secure an expedited environmental permit. Can you approve it?',
      answer: 'Strictly prohibited. Facilitating payments to foreign officials or agents violate corporate policy and US federal statutory laws.',
      statutoryRef: '15 U.S.C. §§ 78dd-1, Foreign Corrupt Practices Act',
    },
  },
  {
    id: 'ethics-202',
    code: 'ETH-202',
    category: 'ethics',
    title: 'Insider Trading & Material Non-Public Information',
    description: 'Blackout window governance, accidental disclosures at industry conferences, and family tipper liability.',
    duration: '7 mins',
    complianceRule: 'SEC Rule 10b-5 · FINRA Rule 2010',
    instructor: 'Kenji Takahashi',
    modulesCount: 3,
    dilemmaSample: {
      question: 'You overhear two senior executives discussing an unannounced clinical trial victory in the elevator. Can you adjust your 401(k) stock allocation?',
      answer: 'No. Modifying any equity holding while in possession of material non-public information violates federal securities fraud regulations.',
      statutoryRef: 'Securities Exchange Act of 1934 § 10(b)',
    },
  },
  {
    id: 'safety-301',
    code: 'SAF-301',
    category: 'safety',
    title: 'OSHA Hazardous Energy Control (Lockout / Tagout)',
    description: 'Zero-energy verification, machine guarding inspection, and contractor coordination in industrial facilities.',
    duration: '9 mins',
    complianceRule: '29 CFR 1910.147 General Industry Standard',
    instructor: 'Sarah Jenkins, PE',
    modulesCount: 5,
    dilemmaSample: {
      question: 'A conveyor jam needs a 30-second clearing before shifts end. Can you reach in if the master safety key is within arm reach?',
      answer: 'Never. De-energization, zero mechanical energy verification, and individual lock application must precede any physical guard bypass.',
      statutoryRef: 'OSHA 1910.147(d) Energy Isolation Procedure',
    },
  },
  {
    id: 'conduct-401',
    code: 'HR-401',
    category: 'conduct',
    title: 'Workplace Harassment Prevention & Active Bystander Intervention',
    description: 'Recognizing microaggressions, power imbalances, non-retaliation reporting, and bystander de-escalation scripts.',
    duration: '11 mins',
    complianceRule: 'Title VII Civil Rights Act · EEOC Guidelines',
    instructor: 'Dr. Marcus Vance',
    modulesCount: 5,
    dilemmaSample: {
      question: 'During a remote team video call, a manager repeatedly comments on an employee home background and personal dress. What is your role as a peer?',
      answer: 'Intervene using the 4D Bystander Framework (Direct, Distract, Delegate, Delay) and support the colleague in formal reporting.',
      statutoryRef: 'EEOC Enforcement Guidance on Harassment in the Workplace',
    },
  },
];

export default function CurriculumSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalModule, setActiveModalModule] = useState<ModuleData | null>(null);

  const filteredModules = selectedCategory === 'all' 
    ? MODULES 
    : MODULES.filter((m) => m.category === selectedCategory);

  return (
    <section id="curriculum" className="py-20 border-t border-slate-800/80 bg-[#090d16]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Interactive Catalog
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
              Accredited enterprise compliance curriculum.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Every course is built in micro-learning modules (under 12 minutes) designed by regulatory attorneys 
              and tested for comprehension with dynamic branching questions.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Tracks
            </button>
            <button
              onClick={() => setSelectedCategory('cyber')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'cyber'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cyber & Privacy
            </button>
            <button
              onClick={() => setSelectedCategory('ethics')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'ethics'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Ethics & FCPA
            </button>
            <button
              onClick={() => setSelectedCategory('safety')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'safety'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              OSHA Safety
            </button>
            <button
              onClick={() => setSelectedCategory('conduct')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'conduct'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Conduct & HR
            </button>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-slate-700 transition-all group"
            >
              <div>
                {/* Header row with code and duration */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-mono text-blue-400 font-semibold">{item.code}</span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                {/* Unboxed Metadata Trust Line */}
                <div className="text-[11px] text-slate-500 line-clamp-1">
                  <span>{item.complianceRule}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    Instructor: <strong className="text-slate-200 font-medium">{item.instructor}</strong>
                  </span>

                  <button
                    onClick={() => setActiveModalModule(item)}
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
                  >
                    <span>Inspect Syllabus</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Syllabus & Dilemma Preview Modal */}
      {activeModalModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-[#090d16] p-6 sm:p-8 shadow-2xl space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="text-xs font-mono text-blue-400 font-semibold mb-1">
                  {activeModalModule.code} · {activeModalModule.duration} Microlearning
                </div>
                <h3 className="text-xl font-bold text-white">
                  {activeModalModule.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalModule(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Regulatory Alignment Box */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs space-y-1">
              <div className="font-semibold text-slate-300">Audited Compliance Framework:</div>
              <div className="text-blue-300 font-mono">{activeModalModule.complianceRule}</div>
              <div className="text-slate-400 pt-1">
                Statutory Reference: {activeModalModule.dilemmaSample.statutoryRef}
              </div>
            </div>

            {/* Sample Dilemma Simulation */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Sample Avatar Decision Dilemma
              </div>
              <div className="rounded-xl border border-slate-800 bg-[#060a12] p-4 space-y-3">
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-blue-400 block mb-1">Dilemma Scenario:</strong>
                  "{activeModalModule.dilemmaSample.question}"
                </div>

                <div className="text-xs text-emerald-300 bg-emerald-950/30 border border-emerald-800/40 p-3 rounded-lg leading-relaxed">
                  <strong className="text-emerald-400 block mb-1">Certified Compliant Response:</strong>
                  {activeModalModule.dilemmaSample.answer}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <div className="text-xs text-slate-400">
                Lead Trainer: <span className="text-white font-medium">{activeModalModule.instructor}</span>
              </div>
              <button
                onClick={() => setActiveModalModule(null)}
                className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 cursor-pointer"
              >
                Close Syllabus
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
