import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Award, 
  AlertCircle, 
  Play, 
  Check, 
  FileText, 
  Download, 
  RotateCcw, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ExternalLink,
  BookOpen,
  X
} from 'lucide-react';

export interface CourseProgressItem {
  id: string;
  code: string;
  title: string;
  category: string;
  authority: string;
  instructor: string;
  totalModules: number;
  completedModules: number;
  estimatedMinutes: number;
  dueDate: string;
  lastActive?: string;
  submodules: {
    id: string;
    title: string;
    completed: boolean;
    duration: string;
  }[];
}

const INITIAL_COURSES: CourseProgressItem[] = [
  {
    id: 'course-sec-101',
    code: 'SEC-101',
    title: 'Defensive Phishing & Executive Social Engineering',
    category: 'Cybersecurity',
    authority: 'SOC 2 CC6.1 · NIST CSF 2.0',
    instructor: 'Elena Rostova',
    totalModules: 4,
    completedModules: 4,
    estimatedMinutes: 8,
    dueDate: '2026-10-15',
    lastActive: 'Completed yesterday',
    submodules: [
      { id: 'm1', title: 'Deepfake Executive Voice Spoofing', completed: true, duration: '2m' },
      { id: 'm2', title: 'Urgent Wire Transfer Quarantining', completed: true, duration: '2m' },
      { id: 'm3', title: 'Interactive Avatar Phishing Simulation', completed: true, duration: '2m' },
      { id: 'm4', title: 'Audit Attestation & Incident Protocol', completed: true, duration: '2m' },
    ],
  },
  {
    id: 'course-eth-201',
    code: 'ETH-201',
    title: 'Global Anti-Bribery, FCPA & Whistleblower Safe Harbors',
    category: 'Ethics & Legal',
    authority: 'DOJ Evaluation Guidelines · FCPA',
    instructor: 'Dr. Marcus Vance',
    totalModules: 4,
    completedModules: 3,
    estimatedMinutes: 12,
    dueDate: '2026-10-20',
    lastActive: 'Active 2 hours ago',
    submodules: [
      { id: 'm1', title: 'Facilitating Payments vs Extortion', completed: true, duration: '3m' },
      { id: 'm2', title: 'Overseas Customs Clearance Gifts', completed: true, duration: '3m' },
      { id: 'm3', title: 'Third-Party Intermediary Due Diligence', completed: true, duration: '3m' },
      { id: 'm4', title: 'Confidential Whistleblower Escalation', completed: false, duration: '3m' },
    ],
  },
  {
    id: 'course-saf-301',
    code: 'SAF-301',
    title: 'OSHA Hazardous Energy Control (Lockout / Tagout)',
    category: 'Industrial Safety',
    authority: '29 CFR 1910.147 Standard',
    instructor: 'Sarah Jenkins, PE',
    totalModules: 4,
    completedModules: 2,
    estimatedMinutes: 10,
    dueDate: '2026-10-31',
    lastActive: 'Active 3 days ago',
    submodules: [
      { id: 'm1', title: 'Zero-Energy State Verification', completed: true, duration: '2m' },
      { id: 'm2', title: 'Master Safety Key Application', completed: true, duration: '3m' },
      { id: 'm3', title: 'Avatar Machine Room Hazard Walkthrough', completed: false, duration: '3m' },
      { id: 'm4', title: 'Group Lockout Shift Transfer Protocol', completed: false, duration: '2m' },
    ],
  },
  {
    id: 'course-sec-102',
    code: 'SEC-102',
    title: 'HIPAA Omnibus & Patient Protected Health Information',
    category: 'Healthcare Privacy',
    authority: 'HHS OCR 45 CFR § 164.530',
    instructor: 'Elena Rostova',
    totalModules: 3,
    completedModules: 1,
    estimatedMinutes: 9,
    dueDate: '2026-11-05',
    lastActive: 'Active last week',
    submodules: [
      { id: 'm1', title: 'Electronic PHI Minimum Necessary Standard', completed: true, duration: '3m' },
      { id: 'm2', title: 'Clinical Chat & Telehealth Disclosure Limits', completed: false, duration: '3m' },
      { id: 'm3', title: 'Mandatory 60-Day Breach Notification Safe Harbor', completed: false, duration: '3m' },
    ],
  },
  {
    id: 'course-hr-401',
    code: 'HR-401',
    title: 'Workplace Harassment Prevention & Bystander Action',
    category: 'Conduct & Culture',
    authority: 'EEOC Title VII Enforcement Guidance',
    instructor: 'Dr. Marcus Vance',
    totalModules: 4,
    completedModules: 0,
    estimatedMinutes: 11,
    dueDate: '2026-10-18',
    lastActive: 'Not started',
    submodules: [
      { id: 'm1', title: 'Microaggression Recognition & Power Imbalance', completed: false, duration: '3m' },
      { id: 'm2', title: 'The 4D Active Bystander Framework', completed: false, duration: '3m' },
      { id: 'm3', title: 'Avatar Interactive Confrontation Drill', completed: false, duration: '3m' },
      { id: 'm4', title: 'Retaliation-Free HR Reporting Channels', completed: false, duration: '2m' },
    ],
  },
  {
    id: 'course-fin-501',
    code: 'FIN-501',
    title: 'Insider Trading & Material Non-Public Information',
    category: 'Financial Governance',
    authority: 'SEC Rule 10b-5 · FINRA 2010',
    instructor: 'Kenji Takahashi',
    totalModules: 3,
    completedModules: 0,
    estimatedMinutes: 8,
    dueDate: '2026-11-12',
    lastActive: 'Not started',
    submodules: [
      { id: 'm1', title: 'Blackout Windows & Tipper Liability', completed: false, duration: '3m' },
      { id: 'm2', title: 'Unintentional Disclosures in Social Settings', completed: false, duration: '3m' },
      { id: 'm3', title: 'Pre-Clearance Trading Plans (10b5-1)', completed: false, duration: '2m' },
    ],
  },
];

interface LearningProgressTrackerProps {
  onSelectCourse?: (courseId: string) => void;
}

export default function LearningProgressTracker({ onSelectCourse }: LearningProgressTrackerProps) {
  const [courses, setCourses] = useState<CourseProgressItem[]>(() => {
    try {
      const saved = localStorage.getItem('aegis_compliance_progress');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
    return INITIAL_COURSES;
  });

  const [expandedCourseId, setExpandedCourseId] = useState<string | null>('course-eth-201');
  const [filterState, setFilterState] = useState<'all' | 'in_progress' | 'completed' | 'required'>('all');
  const [showCertificateModal, setShowCertificateModal] = useState<CourseProgressItem | null>(null);
  const [userName, setUserName] = useState<string>('Alex Mercer');
  const [isSimulatingComplete, setIsSimulatingComplete] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aegis_compliance_progress', JSON.stringify(courses));
    } catch (e) {
      console.warn('Could not write to localStorage', e);
    }
  }, [courses]);

  // Aggregate Metrics
  const totalSubmodules = courses.reduce((acc, c) => acc + c.submodules.length, 0);
  const completedSubmodules = courses.reduce(
    (acc, c) => acc + c.submodules.filter((m) => m.completed).length,
    0
  );
  const overallPercentage = Math.round((completedSubmodules / totalSubmodules) * 100);

  const completedCoursesCount = courses.filter((c) =>
    c.submodules.every((m) => m.completed)
  ).length;

  const inProgressCoursesCount = courses.filter(
    (c) => c.submodules.some((m) => m.completed) && !c.submodules.every((m) => m.completed)
  ).length;

  const notStartedCoursesCount = courses.filter(
    (c) => c.submodules.every((m) => !m.completed)
  ).length;

  // Toggle single submodule completion
  const handleToggleSubmodule = (courseId: string, submoduleId: string) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => {
        if (course.id !== courseId) return course;

        const updatedSubmodules = course.submodules.map((m) =>
          m.id === submoduleId ? { ...m, completed: !m.completed } : m
        );

        const newCompletedCount = updatedSubmodules.filter((m) => m.completed).length;

        return {
          ...course,
          submodules: updatedSubmodules,
          completedModules: newCompletedCount,
          lastActive: 'Just now',
        };
      })
    );
  };

  // Quick action: Advance next pending submodule for a course
  const handleAdvanceCourse = (courseId: string) => {
    setIsSimulatingComplete(courseId);
    setTimeout(() => {
      setCourses((prevCourses) =>
        prevCourses.map((course) => {
          if (course.id !== courseId) return course;

          // Find first uncompleted submodule
          const firstUnfinishedIdx = course.submodules.findIndex((m) => !m.completed);
          if (firstUnfinishedIdx === -1) return course;

          const updatedSubmodules = [...course.submodules];
          updatedSubmodules[firstUnfinishedIdx] = {
            ...updatedSubmodules[firstUnfinishedIdx],
            completed: true,
          };

          return {
            ...course,
            submodules: updatedSubmodules,
            completedModules: updatedSubmodules.filter((m) => m.completed).length,
            lastActive: 'Just completed module',
          };
        })
      );
      setIsSimulatingComplete(null);
    }, 400);
  };

  // Reset progress to original demonstration baseline
  const handleResetProgress = () => {
    setCourses(INITIAL_COURSES);
    try {
      localStorage.removeItem('aegis_compliance_progress');
    } catch (e) {
      // ignore
    }
  };

  // Complete all modules for fast compliance testing
  const handleCompleteAll = () => {
    setCourses((prev) =>
      prev.map((c) => ({
        ...c,
        completedModules: c.submodules.length,
        lastActive: 'Verified compliant',
        submodules: c.submodules.map((m) => ({ ...m, completed: true })),
      }))
    );
  };

  // Download certificate text file
  const handleDownloadCert = (course: CourseProgressItem) => {
    const certText = `=====================================================
AEGIS AI ENTERPRISE COMPLIANCE CERTIFICATE OF COMPLETION
=====================================================
Recipient: ${userName}
Employee ID: EMP-88410-X
Course: [${course.code}] ${course.title}
Certified Instructor: ${course.instructor}
Accrediting Authority: ${course.authority}
Completion Timestamp: ${new Date().toISOString()}
Verification Hash: SHA256:${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2).toUpperCase()}
Audit Trail Status: SCORM 2004 4th Ed / xAPI Validated
Compliance Standing: SOC 2 Type II Audited & Tamper-Evident
=====================================================`;

    const blob = new Blob([certText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AegisAI_Certificate_${course.code}_${userName.replace(/\s+/g, '_')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Filtering
  const filteredCourses = courses.filter((c) => {
    const isCompleted = c.submodules.every((m) => m.completed);
    const isStarted = c.submodules.some((m) => m.completed);

    if (filterState === 'completed') return isCompleted;
    if (filterState === 'in_progress') return isStarted && !isCompleted;
    if (filterState === 'required') return !isCompleted;
    return true;
  });

  return (
    <section id="progress" className="py-16 border-t border-slate-800/80 bg-[#070b14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Header & Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            {/* Unboxed Metadata Trust Line */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <span className="text-blue-400 font-semibold">Learner Compliance Cockpit</span>
              <span aria-hidden="true">·</span>
              <span>SCORM 2004 Synchronized</span>
              <span aria-hidden="true">·</span>
              <span>Automated Audit Ledger</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
              Mandatory Compliance Learning Progress
            </h2>

            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              Track your individual standing across regulatory tracks. Every completed avatar dilemma 
              is verified cryptographically and synced with your enterprise HRIS.
            </p>
          </div>

          {/* Quick Sandbox Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handleCompleteAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 hover:bg-emerald-900/60 transition-colors cursor-pointer"
              title="Test 100% compliance state"
            >
              <Check className="h-3.5 w-3.5" />
              <span>Mark All Completed</span>
            </button>
            <button
              onClick={handleResetProgress}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Reset progress to default baseline"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Global Progress Overview Dashboard Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Primary KPI & Gauge (5 cols) */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-6 pb-6 lg:pb-0 lg:border-r border-slate-800">
              {/* Circular Gauge / Percentage Display */}
              <div className="relative flex items-center justify-center shrink-0">
                <svg className="w-32 h-32 -rotate-90 transform" viewBox="0 0 120 120">
                  {/* Track Background */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#1e293b"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  {/* Progress Line */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke={overallPercentage >= 80 ? '#10b981' : overallPercentage >= 50 ? '#3b82f6' : '#f59e0b'}
                    strokeWidth="10"
                    strokeDasharray={2 * Math.PI * 50}
                    strokeDashoffset={2 * Math.PI * 50 * (1 - overallPercentage / 100)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-700 ease-out"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
                    {overallPercentage}%
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Completed
                  </span>
                </div>
              </div>

              {/* Status Breakdown */}
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      overallPercentage === 100
                        ? 'bg-emerald-400 ring-4 ring-emerald-950'
                        : overallPercentage >= 50
                        ? 'bg-blue-400 ring-4 ring-blue-950 animate-pulse'
                        : 'bg-amber-400 ring-4 ring-amber-950'
                    }`}
                  />
                  <span className="text-sm font-bold text-white">
                    {overallPercentage === 100
                      ? 'Fully Audit Defensible'
                      : overallPercentage >= 50
                      ? 'In Compliance Window'
                      : 'Immediate Action Required'}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {completedSubmodules} of {totalSubmodules} scenario simulations passed across 6 core courses.
                </p>

                <div className="pt-1 flex items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-500 font-mono">
                  <span>Learner: {userName}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400">SOC 2 Validated</span>
                </div>
              </div>
            </div>

            {/* Micro Stats & Adjacency (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl border border-slate-800 bg-[#060a12]/80">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Finished</span>
                </div>
                <div className="text-2xl font-bold text-white tabular-nums tracking-tight">
                  {completedCoursesCount} <span className="text-xs text-slate-400 font-normal">/ {courses.length}</span>
                </div>
                <div className="text-[10px] text-emerald-400 mt-1">100% Attested</div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-800 bg-[#060a12]/80">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                  <Clock className="h-3.5 w-3.5 text-blue-400" />
                  <span>In Flight</span>
                </div>
                <div className="text-2xl font-bold text-white tabular-nums tracking-tight">
                  {inProgressCoursesCount}
                </div>
                <div className="text-[10px] text-blue-400 mt-1">Active Branches</div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-800 bg-[#060a12]/80">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                  <AlertCircle className="h-3.5 w-3.5 text-amber-400" />
                  <span>Pending</span>
                </div>
                <div className="text-2xl font-bold text-white tabular-nums tracking-tight">
                  {notStartedCoursesCount}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Due next 30d</div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-800 bg-[#060a12]/80">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                  <Award className="h-3.5 w-3.5 text-indigo-400" />
                  <span>CEU Credits</span>
                </div>
                <div className="text-2xl font-bold text-white tabular-nums tracking-tight">
                  {((completedSubmodules * 0.25).toFixed(1))} <span className="text-xs text-slate-400 font-normal">/ 5.0</span>
                </div>
                <div className="text-[10px] text-indigo-300 mt-1">Continuing Ed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-300">View By Status:</span>
            <div className="flex flex-wrap gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setFilterState('all')}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                  filterState === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Courses ({courses.length})
              </button>
              <button
                onClick={() => setFilterState('in_progress')}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                  filterState === 'in_progress'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                In Progress ({inProgressCoursesCount})
              </button>
              <button
                onClick={() => setFilterState('completed')}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                  filterState === 'completed'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Completed ({completedCoursesCount})
              </button>
              <button
                onClick={() => setFilterState('required')}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                  filterState === 'required'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Action Required ({notStartedCoursesCount + inProgressCoursesCount})
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-400">
            Interactive: Click any submodule checkbox to test completion state updates.
          </div>
        </div>

        {/* Course Cards Detailed Grid */}
        <div className="space-y-4">
          {filteredCourses.map((course) => {
            const coursePercent = Math.round(
              (course.completedModules / course.totalModules) * 100
            );
            const isCompleted = coursePercent === 100;
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className={`rounded-xl border transition-all ${
                  isCompleted
                    ? 'border-slate-800/80 bg-slate-900/40'
                    : 'border-slate-800 bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                {/* Header Row */}
                <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-mono font-bold text-blue-400">{course.code}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-300 font-medium">{course.category}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-500 font-mono text-[11px]">{course.authority}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {course.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                      <span>Instructor: <strong className="text-slate-300 font-medium">{course.instructor}</strong></span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-slate-500" />
                        ~{course.estimatedMinutes} mins total
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className={isCompleted ? 'text-emerald-400' : 'text-amber-400/90'}>
                        {isCompleted ? 'Completed & Certified' : `Target Due: ${course.dueDate}`}
                      </span>
                    </div>
                  </div>

                  {/* Progress Indicator & Action Area */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 shrink-0">
                    {/* Linear Progress Bar with Tabular % */}
                    <div className="w-full sm:w-44 space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400 font-medium">
                          {course.completedModules} / {course.totalModules} modules
                        </span>
                        <span className="font-bold text-white tabular-nums">
                          {coursePercent}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 rounded-full ${
                            isCompleted ? 'bg-emerald-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${coursePercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Button Group */}
                    <div className="flex items-center gap-2">
                      {isCompleted ? (
                        <button
                          onClick={() => setShowCertificateModal(course)}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-950/70 border border-emerald-600/50 px-3.5 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-900/60 transition-colors cursor-pointer"
                        >
                          <Award className="h-3.5 w-3.5 text-emerald-400" />
                          <span>View Certificate</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAdvanceCourse(course.id)}
                          disabled={isSimulatingComplete === course.id}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors disabled:opacity-50 cursor-pointer"
                        >
                          {isSimulatingComplete === course.id ? (
                            <Clock className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <Play className="h-3.5 w-3.5 fill-white" />
                          )}
                          <span>Resume Simulation</span>
                        </button>
                      )}

                      {/* Expand / Collapse Submodules */}
                      <button
                        onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                        className="p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                        aria-label="Toggle curriculum submodules"
                      >
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Submodules Accordion Drawer */}
                {isExpanded && (
                  <div className="border-t border-slate-800/80 bg-[#060a12]/60 px-5 sm:px-6 py-4 rounded-b-xl space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="font-semibold uppercase tracking-wider text-slate-500 text-[11px]">
                        Micro-Learning Submodule Checklist
                      </span>
                      <span>Click checkbox to simulate completing module</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {course.submodules.map((module, idx) => (
                        <div
                          key={module.id}
                          onClick={() => handleToggleSubmodule(course.id, module.id)}
                          className={`flex items-center justify-between p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                            module.completed
                              ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-200'
                              : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`h-4 w-4 rounded flex items-center justify-center border transition-colors ${
                                module.completed
                                  ? 'bg-emerald-500 border-emerald-500 text-slate-950'
                                  : 'border-slate-600 bg-slate-950'
                              }`}
                            >
                              {module.completed && <Check className="h-3 w-3 stroke-[3]" />}
                            </div>
                            <span className={module.completed ? 'line-through text-slate-400' : 'font-medium'}>
                              {idx + 1}. {module.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono shrink-0 ml-2">
                            <span>{module.duration}</span>
                            {module.completed && (
                              <span className="text-emerald-400 font-sans text-[10px]">Verified</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Verified Certificate Modal */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-2xl border border-slate-700 bg-[#090d16] p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setShowCertificateModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Certificate Header */}
            <div className="text-center space-y-2 border-b border-slate-800 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-600/40 text-emerald-400 text-xs font-semibold">
                <ShieldCheck className="h-4 w-4" />
                <span>Cryptographically Verified Compliance Standing</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Certificate of Completion
              </h3>
              <p className="text-xs text-slate-400">
                Issued under Aegis Enterprise Learning Standards & Statutory Frameworks
              </p>
            </div>

            {/* Certificate Body */}
            <div className="space-y-4 rounded-xl border border-slate-800 bg-[#060a12] p-6 text-center">
              <div className="text-xs uppercase tracking-widest text-slate-400">
                This officially certifies that
              </div>

              {/* Editable or display Name */}
              <div className="text-2xl font-bold text-white font-serif tracking-wide border-b border-slate-800 pb-2 inline-block px-4">
                {userName}
              </div>

              <div className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                has successfully completed all required simulation scenarios, ethical dilemmas, and comprehension evaluations for:
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-sm font-bold text-blue-300">
                [{showCertificateModal.code}] {showCertificateModal.title}
              </div>

              <div className="grid grid-cols-2 gap-4 text-left text-xs pt-2 border-t border-slate-800 text-slate-400">
                <div>
                  <span className="block text-slate-500 text-[10px]">Lead AI Instructor:</span>
                  <span className="text-slate-200 font-medium">{showCertificateModal.instructor}</span>
                </div>
                <div>
                  <span className="block text-slate-500 text-[10px]">Accrediting Framework:</span>
                  <span className="text-slate-200 font-medium">{showCertificateModal.authority}</span>
                </div>
                <div>
                  <span className="block text-slate-500 text-[10px]">Audit Verification Hash:</span>
                  <span className="text-emerald-400 font-mono text-[10px]">SHA256:8f4c2e...91b0</span>
                </div>
                <div>
                  <span className="block text-slate-500 text-[10px]">LMS Sync Protocol:</span>
                  <span className="text-slate-300 font-mono text-[10px]">SCORM 2004 / xAPI</span>
                </div>
              </div>
            </div>

            {/* Certificate Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="text-xs text-slate-400">
                Valid for audit submission across FY 2026-2027.
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownloadCert(showCertificateModal)}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Cert (.txt)</span>
                </button>
                <button
                  onClick={() => setShowCertificateModal(null)}
                  className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
