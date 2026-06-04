/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { EducationEntry } from "../types";

interface TimelineProps {
  education: EducationEntry[];
}

export default function Timeline({ education }: TimelineProps) {
  return (
    <div id="education-section" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
          <GraduationCap className="h-5 w-5 text-indigo-400" />
        </div>
        <h2 className="text-xl font-semibold text-white tracking-wide font-mono uppercase">
          Education Chronology
        </h2>
      </div>

      <div className="relative border-l border-indigo-500/20 pl-6 ml-4 space-y-8">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            id={`education-card-${idx}`}
            className="relative p-5 bg-slate-900/60 backdrop-blur-md rounded-xl border border-indigo-500/10 hover:border-indigo-400/40 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300 group"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] top-6 w-2.5 h-2.5 rounded-full bg-indigo-500 border border-slate-950 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {edu.level}
                </span>
                <h3 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  {edu.institution}
                </p>
                
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 pt-2 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {edu.session}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end justify-center min-w-[100px] p-2 bg-slate-950/40 rounded-lg border border-indigo-500/5 text-right font-mono">
                <span className="text-xs text-slate-500 uppercase">SCORE</span>
                <span className="text-lg font-bold text-cyan-400 group-hover:text-indigo-400 transition-colors">
                  {edu.score}
                </span>
                <span className="text-[10px] text-slate-500">
                  {edu.scoreType}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
