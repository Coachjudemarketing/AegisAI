import React, { useState } from 'react';
import { ShieldCheck, Scale, Award, FileCheck2, Calculator, Check, AlertCircle } from 'lucide-react';

const FRAMEWORKS = [
  { name: 'SOC 2 Type II', authority: 'AICPA Trust Services Criteria', status: 'Continuous Validation', coverage: 'CC6.1, CC6.3, CC6.8' },
  { name: 'DOJ Evaluation Guidelines', authority: 'US Department of Justice', status: 'Criteria Mapped', coverage: 'Good Faith Defense' },
  { name: 'HIPAA Omnibus Rule', authority: 'HHS Office for Civil Rights', status: 'Certified Training', coverage: '45 CFR § 164.530(b)' },
  { name: 'OSHA 1910 General', authority: 'Occupational Safety & Health', status: 'Standards Aligned', coverage: 'HazCom & Safety' },
  { name: 'GDPR / CCPA / CPRA', authority: 'European Union & California', status: 'Data Privacy', coverage: 'Articles 39 & 47' },
  { name: 'FCPA Anti-Bribery', authority: 'SEC & DOJ Enforcement', status: 'Anti-Corruption', coverage: '15 U.S.C. § 78dd-1' },
];

export default function ComplianceSection() {
  // ROI & Risk Calculator State
  const [employeeCount, setEmployeeCount] = useState<number>(1200);
  const [hourlyWage, setHourlyWage] = useState<number>(65);
  const [riskProfile, setRiskProfile] = useState<'finance' | 'health' | 'tech' | 'manufacturing'>('finance');

  // Calculations
  // Standard legacy compliance: 6 hours/yr per employee.
  // Aegis avatar micro-learning: 2.2 hours/yr per employee (saves 3.8 hrs/emp).
  const hoursSavedPerEmployee = 3.8;
  const totalHoursSaved = Math.round(employeeCount * hoursSavedPerEmployee);
  const directPayrollSaved = Math.round(totalHoursSaved * hourlyWage);
  const riskMultiplier = riskProfile === 'health' ? 1.4 : riskProfile === 'finance' ? 1.5 : riskProfile === 'manufacturing' ? 1.3 : 1.1;
  const estimatedRiskMitigation = Math.round(employeeCount * 450 * riskMultiplier);

  return (
    <section id="compliance" className="py-20 border-t border-slate-800/80 bg-[#080c15]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Audit Defense & Governance
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
            Built to satisfy the most demanding regulatory audits.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            When regulatory examiners inspect your training program, a signed attendance sheet is no longer sufficient. 
            AegisAI provides tamper-evident logs proving individual scenario comprehension and decision rationale.
          </p>
        </div>

        {/* Framework Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FRAMEWORKS.map((fw) => (
            <div
              key={fw.name}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-bold text-white">{fw.name}</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-medium">
                  {fw.status}
                </span>
              </div>
              <div className="text-xs text-slate-400">
                Issued Authority: <span className="text-slate-300">{fw.authority}</span>
              </div>
              <div className="text-[11px] text-slate-500 font-mono pt-1 border-t border-slate-800/80">
                Audited Scope: {fw.coverage}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive ROI & Risk Reduction Calculator */}
        <div id="roi-calculator" className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <Calculator className="h-4 w-4" />
                <span>Enterprise Value & Risk Calculator</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Quantify your compliance modernization impact
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              Assumes 3.8 hours saved per employee annually vs. passive video/slide decks.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Employee Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-300">Total Workforce Headcount:</span>
                  <span className="font-mono text-white text-sm font-bold tabular-nums">
                    {employeeCount.toLocaleString()} employees
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={25000}
                  step={100}
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>100</span>
                  <span>10,000</span>
                  <span>25,000+</span>
                </div>
              </div>

              {/* Hourly Wage Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-300">Average Blended Hourly Compensation:</span>
                  <span className="font-mono text-white text-sm font-bold tabular-nums">
                    ${hourlyWage} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={200}
                  step={5}
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>$30/hr</span>
                  <span>$100/hr</span>
                  <span>$200/hr</span>
                </div>
              </div>

              {/* Risk Profile Selector */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300 block">
                  Industry Regulatory Risk Tier:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'finance', label: 'Financial Services' },
                    { id: 'health', label: 'Healthcare & Life Sci' },
                    { id: 'manufacturing', label: 'Manufacturing & Energy' },
                    { id: 'tech', label: 'Technology / SaaS' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setRiskProfile(tier.id as any)}
                      className={`px-3 py-2 text-xs rounded-lg border text-center transition-colors cursor-pointer ${
                        riskProfile === tier.id
                          ? 'border-blue-500 bg-blue-950/40 text-blue-200 font-medium'
                          : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:text-white'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculated Output Cards (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-800 bg-[#060a12] p-5 space-y-1">
                <div className="text-xs text-slate-400">Productive Hours Recaptured</div>
                <div className="text-3xl font-extrabold text-white tabular-nums tracking-tight">
                  {totalHoursSaved.toLocaleString()}
                </div>
                <div className="text-[11px] text-blue-400 pt-1">
                  ~{Math.round(totalHoursSaved / 40).toLocaleString()} full workweeks saved
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#060a12] p-5 space-y-1">
                <div className="text-xs text-slate-400">Direct Payroll Efficiency</div>
                <div className="text-3xl font-extrabold text-emerald-400 tabular-nums tracking-tight">
                  ${(directPayrollSaved / 1000).toFixed(0)}k
                </div>
                <div className="text-[11px] text-slate-400 pt-1">
                  Annualized compensation savings
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#060a12] p-5 space-y-1">
                <div className="text-xs text-slate-400">On-Time Completion Rate</div>
                <div className="text-3xl font-extrabold text-white tabular-nums tracking-tight">
                  98.4%
                </div>
                <div className="text-[11px] text-blue-400 pt-1">
                  +57% vs legacy 41% baseline
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#060a12] p-5 space-y-1">
                <div className="text-xs text-slate-400">Statutory Risk Cushion</div>
                <div className="text-3xl font-extrabold text-blue-400 tabular-nums tracking-tight">
                  ${(estimatedRiskMitigation / 1000000).toFixed(2)}M
                </div>
                <div className="text-[11px] text-slate-400 pt-1">
                  Expected liability exposure reduction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
