/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Award, Briefcase, Mail, Phone, Clock, Linkedin, CheckCircle2, Copy, Check } from "lucide-react";
import { ShaikTousiffProfile } from "../types";

interface RecruiterPanelProps {
  profile: ShaikTousiffProfile;
}

export default function RecruiterPanel({ profile }: RecruiterPanelProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 1500);
  };

  const strengths = [
    {
      title: "Extremely Strong Academic Foundation",
      desc: "Outstanding 97.16% in school matriculation and a strong 7.51 CGPA in B.Tech Computer Science Engineering.",
      color: "border-indigo-500/20 text-indigo-400 bg-indigo-500/10"
    },
    {
      title: "Hands-on ML / Predictive Intelligence",
      desc: "Already engineered an active diabetes classification pipeline using Python and scikit-learn models.",
      color: "border-cyan-500/20 text-cyan-400 bg-cyan-500/10"
    },
    {
      title: "Corporate Internships & Site Visits",
      desc: "Active Machine Learning Internship Certificate and industrial operation insights from Inspire Company.",
      color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/10"
    },
    {
      title: "Co-curricular Leadership & Active Sportsmanship",
      desc: "Secured runner-up in regional cricket and active organizer in collegiate physical athletic events.",
      color: "border-amber-500/20 text-amber-400 bg-amber-500/10"
    }
  ];

  return (
    <div id="recruiter-panel" className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-indigo-500/10 p-6 md:p-8 space-y-6 hover:border-indigo-400/30 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
          <Briefcase className="h-5 w-5 text-emerald-400" />
        </div>
        <h2 className="text-xl font-semibold text-white tracking-wide font-mono uppercase">
          Recruiter Intelligence & Profile Insights
        </h2>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed">
        We have analyzed Shaik's resume, academic progression, and technical profile. Shaik combines robust numerical analysis with real application building. Here is a professional recruiter-centric breakdown of his capabilities:
      </p>

      {/* Grid of Profile Strengths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {strengths.map((str, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border ${str.color} flex flex-col justify-between hover:scale-[1.01] transition-transform duration-200`}
          >
            <div>
              <h4 className="font-semibold text-white text-sm tracking-tight flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-inherit" />
                {str.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {str.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recruiter quick contact cards with instant copy feedback */}
      <div className="pt-4 border-t border-indigo-500/5 space-y-4">
        <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest unique-label">
          Instant Contact Hub
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Email panel */}
          <div className="flex items-center justify-between p-3.5 bg-slate-950/40 rounded-xl border border-indigo-500/5 hover:border-indigo-500/15 transition group">
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                <Mail className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Primary Email</span>
                <span className="text-xs text-slate-200 truncate block font-mono font-medium">{profile.personal.email}</span>
              </div>
            </div>
            <button
              onClick={() => handleCopy(profile.personal.email, 'email')}
              className="text-slate-500 hover:text-indigo-400 p-1.5 rounded-lg active:scale-90 transition shrink-0 ml-2"
              title="Copy Email"
            >
              {copiedText === 'email' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          {/* Alternate Email panel */}
          <div className="flex items-center justify-between p-3.5 bg-slate-950/40 rounded-xl border border-indigo-500/5 hover:border-indigo-500/15 transition group">
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                <Mail className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">MITS Org Email</span>
                <span className="text-xs text-slate-200 truncate block font-mono font-medium">{profile.personal.altEmail}</span>
              </div>
            </div>
            <button
              onClick={() => handleCopy(profile.personal.altEmail, 'altEmail')}
              className="text-slate-500 hover:text-indigo-400 p-1.5 rounded-lg active:scale-90 transition shrink-0 ml-2"
              title="Copy Alternate Email"
            >
              {copiedText === 'altEmail' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          {/* Primary Phone panel */}
          <div className="flex items-center justify-between p-3.5 bg-slate-950/40 rounded-xl border border-indigo-500/5 hover:border-indigo-500/15 transition group">
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                <Phone className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Phone (Cell)</span>
                <span className="text-xs text-slate-200 truncate block font-mono font-medium">{profile.personal.phone}</span>
              </div>
            </div>
            <button
              onClick={() => handleCopy(profile.personal.phone, 'phone')}
              className="text-slate-500 hover:text-indigo-400 p-1.5 rounded-lg active:scale-90 transition shrink-0 ml-2"
              title="Copy Phone"
            >
              {copiedText === 'phone' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          {/* LinkedIn panel with active navigation */}
          <a
            href={profile.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 bg-slate-950/40 hover:bg-slate-900/50 rounded-xl border border-indigo-500/5 hover:border-indigo-500/30 transition group cursor-pointer"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 shrink-0">
                <Linkedin className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Linked-In URL</span>
                <span className="text-xs text-cyan-400 font-mono font-medium truncate block">shaik-tousiff</span>
              </div>
            </div>
            <span className="text-[10px] font-mono font-semibold px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-sm border border-cyan-400/20 group-hover:bg-cyan-400 hover:text-slate-950 transition ml-2">
              VISIT ↗
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
