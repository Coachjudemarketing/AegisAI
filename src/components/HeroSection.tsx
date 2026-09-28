import React, { useState } from 'react';
import { Play, Pause, Volume2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_compliance_avatar_1790565880009.jpg';

const SAMPLE_SCENARIOS = [
  {
    id: 'cyber',
    topic: 'Cybersecurity & Phishing',
    title: 'Urgent Wire Request Incident',
    instructor: 'Elena Rostova',
    dialogue:
      "Good morning Alex. An urgent wire transfer request just arrived from the CEO's personal email domain, asking to bypass the dual-authorization rule for an immediate vendor payment. What is your mandatory protocol right now?",
    options: [
      { text: 'A. Reply directly asking for confirmation', correct: false },
      { text: 'B. Execute immediately since it mentions urgent project deadline', correct: false },
      { text: 'C. Quarantine the email and verify via verified internal phone directory', correct: true },
    ],
    feedback: 'Correct! Never trust out-of-band domain requests without verified secondary voice authorization.',
  },
  {
    id: 'ethics',
    topic: 'FCPA & Anti-Corruption',
    title: 'Customs Clearance Hospitality Gift',
    instructor: 'Dr. Marcus Vance',
    dialogue:
      "A foreign port authority inspector suggests an expedited customs clearance fee of $500 in cash, or alternatively a luxury watch for his supervisor. How must this interaction be recorded under our Global Anti-Bribery Policy?",
    options: [
      { text: 'A. Pay cash as an ordinary administrative expediting fee', correct: false },
      { text: 'B. Refuse immediately and submit a formal FCPA Incident Report', correct: true },
      { text: 'C. Offer lunch instead of cash to maintain rapport', correct: false },
    ],
    feedback: 'Exactly right. Aegis compliance forbids any facilitating payments to foreign officials regardless of local customs.',
  },
];

export default function HeroSection() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const scenario = SAMPLE_SCENARIOS[activeScenarioIdx];

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        return;
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      
      utterance.onend = () => {
        setIsPlayingAudio(false);
      };
      utterance.onerror = () => {
        setIsPlayingAudio(false);
      };

      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingAudio(!isPlayingAudio);
      setTimeout(() => setIsPlayingAudio(false), 3000);
    }
  };

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    if ('speechSynthesis' in window && isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle ambient lighting backdrop */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-80"
      >
        <div 
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#1e40af] to-[#0ea5e9] opacity-15"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Unboxed Metadata Trust Line (Anti-Pill Rule) */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
          <span className="text-blue-400 font-semibold">Enterprise Avatar Training</span>
          <span aria-hidden="true">·</span>
          <span>SOC 2 Type II Certified</span>
          <span aria-hidden="true">·</span>
          <span>HIPAA & OSHA Aligned</span>
          <span aria-hidden="true">·</span>
          <span>SCORM & LMS Synchronized</span>
        </div>

        {/* Main Grid: Headline & Interactive Avatar Visual Carrier */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Mandatory compliance training employees actually finish.
            </h1>

            <p className="text-lg leading-relaxed text-slate-300">
              Replace passive 60-minute click-through slide decks with realistic, conversational AI avatars.
              Employees role-play actual ethical dilemmas, whistleblowing decisions, and safety drills in 42 languages.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('cta-section')}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                Schedule Corporate Pilot
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo('progress')}
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                View Learning Progress
              </button>
            </div>

            {/* Claim-to-Proof Quantitative Adjacency */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800">
              <div>
                <div className="text-2xl font-bold tracking-tight text-white tabular-nums">98.4%</div>
                <div className="text-xs text-slate-400 mt-1">On-Time Completion</div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-white tabular-nums">4.2×</div>
                <div className="text-xs text-slate-400 mt-1">Knowledge Retention</div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-white tabular-nums">42</div>
                <div className="text-xs text-slate-400 mt-1">Global Languages</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Avatar Simulation Carrier */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden">
              {/* Media Container with Hero Avatar Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={heroImg}
                  alt="Enterprise AI Corporate Instructor Avatar"
                  className="h-full w-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                
                {/* Measured Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Top Overlay Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-slate-700/60">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium">{scenario.instructor}</span>
                    <span className="text-slate-400">· {scenario.topic}</span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-2.5 py-1.5 rounded-md border border-slate-700/60">
                    <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                    <span>DOJ & SEC Verified</span>
                  </div>
                </div>

                {/* Scenario Toggle Tabs */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  {SAMPLE_SCENARIOS.map((sc, idx) => (
                    <button
                      key={sc.id}
                      onClick={() => {
                        setActiveScenarioIdx(idx);
                        setSelectedOption(null);
                        if (isPlayingAudio) {
                          window.speechSynthesis?.cancel();
                          setIsPlayingAudio(false);
                        }
                      }}
                      className={`text-xs px-3 py-1.5 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                        activeScenarioIdx === idx
                          ? 'bg-blue-600 text-white font-medium shadow'
                          : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      Scenario {idx + 1}: {sc.topic.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Simulation Console */}
              <div className="p-5 sm:p-6 space-y-4">
                {/* Avatar Speech Bubble */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="text-xs font-medium text-blue-400">
                      Live Instructor Prompt
                    </div>
                    <button
                      onClick={() => handleSpeak(scenario.dialogue)}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700 cursor-pointer transition-colors"
                      title={isPlayingAudio ? 'Stop Voice' : 'Listen to Voice'}
                    >
                      {isPlayingAudio ? (
                        <>
                          <Pause className="h-3.5 w-3.5 text-blue-400" />
                          <span>Stop Voice</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="h-3.5 w-3.5 text-blue-400" />
                          <span>Listen (Speech Synthesizer)</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200">
                    "{scenario.dialogue}"
                  </p>
                </div>

                {/* Multiple Choice Decision Tree */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Select Your Employee Action
                  </div>
                  <div className="space-y-1.5">
                    {scenario.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full text-left text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                          selectedOption === idx
                            ? opt.correct
                              ? 'border-emerald-500 bg-emerald-950/30 text-emerald-200'
                              : 'border-rose-500 bg-rose-950/30 text-rose-200'
                            : 'border-slate-800 bg-slate-950/30 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40'
                        }`}
                      >
                        <span>{opt.text}</span>
                        {selectedOption === idx && (
                          opt.correct ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 ml-2" />
                          ) : (
                            <span className="text-xs text-rose-400 shrink-0 ml-2">Review Rule</span>
                          )
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feedback state if answered */}
                {selectedOption !== null && (
                  <div className={`p-3 rounded-lg text-xs border ${
                    scenario.options[selectedOption].correct 
                      ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300'
                      : 'border-amber-500/40 bg-amber-950/20 text-amber-300'
                  }`}>
                    {scenario.options[selectedOption].correct 
                      ? scenario.feedback
                      : 'Incorrect protocol choice. Aegis avatars provide instantaneous contextual remediation based on your company handbook.'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
