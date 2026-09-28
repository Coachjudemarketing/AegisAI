import React, { useState } from 'react';
import { 
  GitBranch, 
  Languages, 
  Scale, 
  Database, 
  ShieldAlert, 
  Cpu, 
  Check, 
  ArrowRight,
  Layers
} from 'lucide-react';

export default function FeaturesSection() {
  const [selectedLanguage, setSelectedLanguage] = useState('ja');
  const [selectedLms, setSelectedLms] = useState('workday');

  const LMS_PLATFORMS = [
    { id: 'workday', name: 'Workday Learning', protocol: 'xAPI / SCORM 2004', time: '< 2 min sync' },
    { id: 'cornerstone', name: 'Cornerstone OnDemand', protocol: 'AICC / SCORM 1.2', time: 'Auto-roster' },
    { id: 'successfactors', name: 'SAP SuccessFactors', protocol: 'OpenSesame / cmi5', time: 'Native Connector' },
    { id: 'docebo', name: 'Docebo Enterprise', protocol: 'Webhooks & REST', time: 'Instant API' },
  ];

  const SAMPLE_LANGUAGES = [
    { code: 'en', label: 'English (US & UK)', phrase: 'Compliance is our shared responsibility.' },
    { code: 'es', label: 'Spanish (LatAm & ES)', phrase: 'El cumplimiento normativo es nuestra prioridad.' },
    { code: 'de', label: 'German (DACH)', phrase: 'Compliance ist das Fundament unserer Integrität.' },
    { code: 'ja', label: 'Japanese', phrase: 'コンプライアンスは私たちの最優先事項です。' },
    { code: 'pt', label: 'Portuguese (BR)', phrase: 'A conformidade ética orienta todas as decisões.' },
  ];

  return (
    <section id="features" className="py-20 border-t border-slate-800/80 bg-[#090d16]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Enterprise Architecture
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
            Engineered for global audit readiness, not just checkbox completion.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Legacy compliance platforms measure how fast someone clicks "Next". 
            AegisAI measures judgment, psychological safety, and actual incident mitigation via conversational AI.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Branching Scenarios (Wide col-span-2) */}
          <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                <span className="font-semibold text-slate-400">01. Dynamic Branching</span>
                <span>Active Roleplay</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Scenario Tree Simulation Engine
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Instead of static multiple choice, avatars react dynamically to nuanced employee answers. 
                Saying the wrong thing to an upset colleague or mishandling sensitive insider info branches into 
                realistic escalation chains with tailored debriefs.
              </p>
            </div>

            {/* Visual preview of branching node tree */}
            <div className="rounded-xl border border-slate-800/90 bg-[#060a12] p-4 text-xs font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-slate-400">
                <span className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-blue-400" />
                  Live Adaptive Decision Branching
                </span>
                <span className="text-[11px] text-emerald-400">Active Evaluation</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-300">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Initial Trigger</div>
                  <div className="font-medium text-white mt-1">Suspected Whistleblower Report</div>
                </div>
                <div className="p-2.5 rounded bg-blue-950/40 border border-blue-800/40 text-blue-200">
                  <div className="text-[11px] text-blue-300">Learner Choice</div>
                  <div className="font-medium mt-1">Confront vs Escalate to Ombudsperson</div>
                </div>
                <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-200">
                  <div className="text-[11px] text-emerald-300">Avatar Response</div>
                  <div className="font-medium mt-1">Neutral Safe Harbor Debrief</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Multilingual Speech & Localization (1 col) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                <span className="font-semibold text-slate-400">02. Globalization</span>
                <span>42 Dialects</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Native Lip-Sync & Cultural Nuance
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Avatars speak with authentic regional intonation, vocabulary, and cultural body language rather than robotic translated dubs.
              </p>
            </div>

            {/* Interactive language switcher */}
            <div className="rounded-xl border border-slate-800 bg-[#060a12] p-3 text-xs">
              <div className="text-[11px] text-slate-400 mb-2">Test Localized Synthetic Voice:</div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {SAMPLE_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    className={`px-2 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                      selectedLanguage === lang.code
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-200 text-xs italic">
                "{SAMPLE_LANGUAGES.find((l) => l.code === selectedLanguage)?.phrase}"
              </div>
            </div>
          </div>

          {/* Card 3: LMS & SCORM Integration (1 col) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                <span className="font-semibold text-slate-400">03. Interoperability</span>
                <span>Zero Migration</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Plug & Play LMS Sync
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Export modules as SCORM 1.2, SCORM 2004 4th Edition, cmi5, or live xAPI statements. Keep your existing LMS stack intact.
              </p>
            </div>

            {/* Interactive LMS selector */}
            <div className="space-y-1.5">
              {LMS_PLATFORMS.map((lms) => (
                <div
                  key={lms.id}
                  onClick={() => setSelectedLms(lms.id)}
                  className={`flex items-center justify-between p-2 rounded-lg border text-xs cursor-pointer transition-all ${
                    selectedLms === lms.id
                      ? 'border-blue-500 bg-blue-950/20 text-white font-medium'
                      : 'border-slate-800/80 bg-slate-950/40 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="truncate">{lms.name}</span>
                  <span className="text-[11px] text-slate-400 font-mono shrink-0">{lms.protocol}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Regulatory Watchdog (Wide col-span-2) */}
          <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                <span className="font-semibold text-slate-400">04. Regulatory Watchdog</span>
                <span>Continuous Monitoring</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Statutory Auto-Refresh Engine
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                When the SEC modifies cyber incident reporting rules or the EU AI Act enacts new workplace mandates, 
                Aegis immediately highlights obsolete curriculum chapters and proposes audited avatar script updates.
              </p>
            </div>

            {/* Stat Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800/80 pt-4">
              <div className="flex items-start gap-3">
                <Scale className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">DOJ Evaluation Aligned</div>
                  <div className="text-xs text-slate-400">Meets guidelines for effective compliance programs.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldAlert className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Zero Regulatory Drift</div>
                  <div className="text-xs text-slate-400">Automatic diffing against federal registers.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Defensible Audit Logs</div>
                  <div className="text-xs text-slate-400">Cryptographically verifiable attendance & scores.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
