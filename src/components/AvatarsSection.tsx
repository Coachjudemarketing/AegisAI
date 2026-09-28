import React, { useState } from 'react';
import { Play, Pause, Volume2, Globe, Sparkles, BookOpen, Shield } from 'lucide-react';
import marcusImg from '../assets/images/avatar_marcus_ethics_1790565893335.jpg';
import elenaImg from '../assets/images/avatar_elena_cybersecurity_1790565904273.jpg';
import sarahImg from '../assets/images/avatar_sarah_safety_1790565922000.jpg';
import kenjiImg from '../assets/images/avatar_kenji_aml_1790565931220.jpg';

interface AvatarPersona {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  tone: string;
  languages: string[];
  bio: string;
  sampleScript: string;
  credentials: string[];
}

const AVATARS: AvatarPersona[] = [
  {
    id: 'marcus',
    name: 'Dr. Marcus Vance',
    role: 'Chief Ethics & Anti-Corruption Officer',
    specialty: 'FCPA · Whistleblower Protocols · Conflict of Interest',
    image: marcusImg,
    tone: 'Authoritative, empathetic, judicial',
    languages: ['English (US/UK)', 'Spanish', 'French', 'German'],
    bio: 'Former federal ethics counsel with 18 years specializing in Foreign Corrupt Practices Act (FCPA) and global corporate investigations.',
    sampleScript:
      'Integrity is not tested in boardroom meetings; it is tested in split-second decisions when no one is looking. Today, we review actual dilemmas faced by your team.',
    credentials: ['JD Harvard Law', 'Certified Compliance & Ethics Professional (CCEP)', 'Former DOJ Fraud Section Liaison'],
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'Global Cybersecurity & HIPAA Lead',
    specialty: 'SOC 2 · HIPAA Security Rule · Incident Triage',
    image: elenaImg,
    tone: 'Vigilant, precise, tactical',
    languages: ['English (US)', 'German', 'Japanese', 'Polish'],
    bio: 'Specialist in offensive cybersecurity defense and cryptographic patient privacy protections across healthcare and fintech enterprises.',
    sampleScript:
      'Phishing attackers do not break through encryption; they log in using credentials handed to them. In this simulation, you will intercept an active spear-phishing attack.',
    credentials: ['CISSP Certified', 'CIPP/US Privacy Officer', 'Ex-Fintech CISO'],
  },
  {
    id: 'sarah',
    name: 'Sarah Jenkins, PE',
    role: 'Industrial Safety & OSHA Director',
    specialty: 'OSHA 1910 · HazMat · Zero-Incident Protocols',
    image: sarahImg,
    tone: 'Direct, clear, safety-first',
    languages: ['English (US/AU)', 'Spanish (MX)', 'Portuguese'],
    bio: 'Professional chemical engineer and veteran industrial safety director with over 200 completed OSHA compliance audits.',
    sampleScript:
      'In high-risk manufacturing, the closest near-miss is a warning shot. We are going to inspect three chemical transfer stations and identify life-critical violations.',
    credentials: ['Licensed Professional Engineer (PE)', 'OSHA 500 Authorized Trainer', 'Certified Safety Professional (CSP)'],
  },
  {
    id: 'kenji',
    name: 'Kenji Takahashi',
    role: 'Financial Crimes & Trade Controls Specialist',
    specialty: 'BSA / AML · OFAC Sanctions · Export Controls',
    image: kenjiImg,
    tone: 'Analytical, measured, rigorous',
    languages: ['English (US)', 'Japanese', 'Mandarin', 'Korean'],
    bio: 'Specializes in international anti-money laundering frameworks, beneficial ownership tracing, and cross-border export restrictions.',
    sampleScript:
      'Shell companies evolve their routing patterns within 48 hours of new international sanctions. Let us walk through red-flag transaction tracing together.',
    credentials: ['CAMS Certified Anti-Money Laundering Specialist', 'Ex-Bank Regulatory Auditor', 'LLM International Trade'],
  },
];

export default function AvatarsSection() {
  const [selectedAvatarId, setSelectedAvatarId] = useState<string>('marcus');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);

  const selectedAvatar = AVATARS.find((a) => a.id === selectedAvatarId) || AVATARS[0];

  const handlePlayVoice = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        return;
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speechRate;
      utterance.pitch = 1.0;

      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingAudio(!isPlayingAudio);
      setTimeout(() => setIsPlayingAudio(false), 3000);
    }
  };

  const handleSelectAvatar = (id: string) => {
    if (isPlayingAudio) {
      window.speechSynthesis?.cancel();
      setIsPlayingAudio(false);
    }
    setSelectedAvatarId(id);
  };

  return (
    <section id="avatars" className="py-20 border-t border-slate-800/80 bg-[#080c15]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Interactive Instructors
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
            Subject-matter experts crafted for maximum retention.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Our avatars are modeled on certified corporate attorneys, CISO veterans, and industrial safety engineers. 
            They command respect, convey empathy, and maintain engaging eye contact.
          </p>
        </div>

        {/* Avatar Roster Grid & Inspector */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid: Avatar Selection Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-4">
            {AVATARS.map((avatar) => {
              const isSelected = avatar.id === selectedAvatarId;
              return (
                <button
                  key={avatar.id}
                  onClick={() => handleSelectAvatar(avatar.id)}
                  className={`group relative text-left rounded-xl p-3 border transition-all cursor-pointer overflow-hidden ${
                    isSelected
                      ? 'border-blue-500 bg-slate-900/90 ring-1 ring-blue-500/50'
                      : 'border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <div className="aspect-square w-full rounded-lg overflow-hidden bg-slate-950 mb-3 relative">
                    <img
                      src={avatar.image}
                      alt={avatar.name}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {isSelected && (
                      <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-blue-400 ring-4 ring-blue-950" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      {avatar.name}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      {avatar.role}
                    </p>
                    {/* Unboxed Metadata */}
                    <div className="text-[11px] text-slate-400 pt-1 line-clamp-1">
                      {avatar.specialty.split('·')[0]}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Avatar Studio & Voice Simulation Console (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-xl overflow-hidden bg-slate-950 border border-slate-700 shrink-0">
                  <img
                    src={selectedAvatar.image}
                    alt={selectedAvatar.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedAvatar.name}</h3>
                  <p className="text-xs text-blue-400 font-medium">{selectedAvatar.role}</p>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Tone: <span className="text-slate-300">{selectedAvatar.tone}</span>
                  </div>
                </div>
              </div>

              {/* Voice Speed Selector */}
              <div className="flex items-center gap-1.5 bg-slate-950/60 p-1.5 rounded-lg border border-slate-800 text-xs">
                <span className="text-slate-400 px-2">Speed:</span>
                {[0.9, 1.0, 1.15].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setSpeechRate(rate)}
                    className={`px-2 py-1 rounded text-xs transition-colors cursor-pointer ${
                      speechRate === rate
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {rate}×
                  </button>
                ))}
              </div>
            </div>

            {/* Persona Bio & Domain */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Instructor Background & Focus
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedAvatar.bio}
              </p>
            </div>

            {/* Live Script Box with Speech Synthesis */}
            <div className="rounded-xl border border-slate-800 bg-[#060a12] p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <Volume2 className="h-4 w-4 text-blue-400" />
                  <span>Curriculum Opening Script</span>
                </div>
                
                {/* Audio wave indicator */}
                {isPlayingAudio && (
                  <div className="flex items-center gap-1">
                    <span className="h-3 w-1 bg-blue-500 rounded-full animate-pulse" />
                    <span className="h-5 w-1 bg-blue-400 rounded-full animate-bounce" />
                    <span className="h-2 w-1 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-xs text-blue-400 ml-1">Streaming Voice</span>
                  </div>
                )}
              </div>

              <blockquote className="text-sm text-slate-200 italic leading-relaxed border-l-2 border-blue-500 pl-3">
                "{selectedAvatar.sampleScript}"
              </blockquote>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => handlePlayVoice(selectedAvatar.sampleScript)}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors cursor-pointer"
                >
                  {isPlayingAudio ? (
                    <>
                      <Pause className="h-4 w-4" />
                      Pause Voice Sample
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 fill-white" />
                      Play Avatar Audio
                    </>
                  )}
                </button>

                <div className="text-xs text-slate-400 hidden sm:block">
                  Sub-millisecond lip-sync accuracy
                </div>
              </div>
            </div>

            {/* Unboxed Metadata Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-400">Supported Accents & Languages</div>
                <div className="text-xs text-slate-300">
                  {selectedAvatar.languages.join(' · ')}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-400">Certified Compliance Frameworks</div>
                <div className="text-xs text-slate-300">
                  {selectedAvatar.credentials.join(' · ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
