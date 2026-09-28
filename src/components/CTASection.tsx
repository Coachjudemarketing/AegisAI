import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Download, RefreshCw } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [headcount, setHeadcount] = useState('500-2500');
  const [track, setTrack] = useState('cyber');
  const [lms, setLms] = useState('workday');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid corporate email address.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate enterprise pilot provisioning
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleDownloadProspectus = () => {
    const syllabusText = `AegisAI Enterprise Compliance Pilot Package
--------------------------------------------------
Corporate License Target: ${email || 'Enterprise Client'}
Headcount Tier: ${headcount}
Primary Focus Track: ${track.toUpperCase()}
LMS Integration: ${lms.toUpperCase()}

Included Modules:
1. SEC-101: Phishing & Executive Social Engineering (8 min)
2. ETH-201: Global Anti-Bribery & FCPA Safe Harbors (12 min)
3. HR-401: Workplace Harassment & Bystander Intervention (11 min)

All modules include SOC 2 Type II audit logs, scorm 2004 / xAPI packages, and live avatar interaction.
`;
    const blob = new Blob([syllabusText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AegisAI_Compliance_Pilot_Prospectus.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="cta-section" className="py-20 border-t border-slate-800/80 bg-[#090d16] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Copy & Trust Signals */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Ready for Pilot Evaluation
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
                Deploy conversational AI compliance in 14 days.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Connect your existing LMS or launch through Aegis Cloud. 
                Experience 98.4% on-time completion rates while slashing employee training hours by more than half.
              </p>

              {/* Trust list */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>30-Day Zero-Risk Sandbox with customized avatar branding</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>SCORM 1.2 / 2004 & xAPI test packages provided immediately</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>SOC 2 Type II and HIPAA Business Associate Agreement (BAA) included</span>
                </div>
              </div>

              {/* Unboxed Metadata Trust Line */}
              <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="h-4 w-4 text-blue-400" />
                <span>Enterprise Data Privacy Guarantee</span>
                <span aria-hidden="true">·</span>
                <span>Zero model training on customer employee responses</span>
              </div>
            </div>

            {/* Right Column: Interactive Lead Capture Form */}
            <div className="lg:col-span-6">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-slate-800 bg-[#060a12] p-6 sm:p-8 space-y-4"
                >
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">
                      Request Enterprise Pilot Sandbox
                    </h3>
                    <p className="text-xs text-slate-400">
                      Receive instant SCORM sample packages and a personalized live avatar demo.
                    </p>
                  </div>

                  {/* Corporate Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Corporate Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex.mercer@enterprise.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errorMessage && (
                      <p className="text-xs text-rose-400">{errorMessage}</p>
                    )}
                  </div>

                  {/* Headcount Tier */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Workforce Size
                      </label>
                      <select
                        value={headcount}
                        onChange={(e) => setHeadcount(e.target.value)}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="100-500">100 - 500 employees</option>
                        <option value="500-2500">500 - 2,500 employees</option>
                        <option value="2500-10000">2,500 - 10,000 employees</option>
                        <option value="10000+">10,000+ Global Enterprise</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Primary LMS Platform
                      </label>
                      <select
                        value={lms}
                        onChange={(e) => setLms(e.target.value)}
                        className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="workday">Workday Learning</option>
                        <option value="cornerstone">Cornerstone OnDemand</option>
                        <option value="sap">SAP SuccessFactors</option>
                        <option value="docebo">Docebo / Canvas / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Priority Track */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Priority Compliance Track
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { id: 'cyber', label: 'Cybersecurity & HIPAA' },
                        { id: 'ethics', label: 'Ethics & FCPA Anti-Bribery' },
                        { id: 'safety', label: 'OSHA Industrial Safety' },
                        { id: 'harassment', label: 'Anti-Harassment & DE&I' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTrack(t.id)}
                          className={`p-2 rounded-lg border text-left cursor-pointer transition-colors ${
                            track === t.id
                              ? 'border-blue-500 bg-blue-950/40 text-blue-200 font-medium'
                              : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span>Provisioning Pilot Sandbox...</span>
                      </>
                    ) : (
                      <>
                        <span>Provision Enterprise Pilot Sandbox</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-center text-slate-400">
                    No credit card required. SOC 2 Type II NDA protected.
                  </div>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="rounded-2xl border border-emerald-500/50 bg-[#060a12] p-8 space-y-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Sandbox Access Generated
                    </h3>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      We have prepared your custom pilot profile for <strong className="text-white">{email}</strong>. 
                      Your sample avatar syllabus for {track.toUpperCase()} and {lms.toUpperCase()} integration is ready.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleDownloadProspectus}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors cursor-pointer"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download Pilot Syllabus Package</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Configure Another Pilot
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
