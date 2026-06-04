/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Code2, Compass, Award, ShieldAlert, Cpu } from "lucide-react";
import { SkillEntry } from "../types";

interface SkillSphereProps {
  skills: SkillEntry[];
}

export default function SkillSphere({ skills }: SkillSphereProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Languages" | "Core Concepts" | "Interpersonal" | "Hobbies">("All");

  const categories: ("All" | "Languages" | "Core Concepts" | "Interpersonal" | "Hobbies")[] = [
    "All", "Languages", "Core Concepts", "Interpersonal", "Hobbies"
  ];

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <div id="skills-interactive-center" className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-indigo-500/10 p-6 md:p-8 space-y-6 hover:border-indigo-400/30 transition-all duration-300">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/30">
            <Code2 className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
              Competencies Matrix
            </span>
            <h2 className="text-xl font-bold text-white tracking-wide font-mono uppercase">
              Skills Architecture
            </h2>
          </div>
        </div>

        {/* Categories togglers */}
        <div className="flex flex-wrap gap-1 bg-slate-950/50 p-1 rounded-lg border border-indigo-500/5 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-md transition-all ${
                selectedCategory === cat
                  ? "bg-purple-500 text-white font-medium"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cyber Notice explaining Java removal */}
      <div className="p-4 bg-purple-950/20 rounded-xl border border-purple-500/20 flex items-start gap-3">
        <Cpu className="h-5 w-5 text-purple-400 shrink-0 mt-0.5 animate-pulse" />
        <div className="space-y-1">
          <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-tight">
            Curriculum Realignment System
          </h4>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            In compliance with current project frameworks, <strong>Core Java / OOP principles are omitted</strong>. Shaik’s active development focus resides purely inside advanced script logic, data prediction systems, and responsive algorithmic user design interfaces.
          </p>
        </div>
      </div>

      {/* Skills Progress list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 bg-slate-950/25 rounded-xl border border-indigo-500/5 hover:border-indigo-500/10 transition space-y-2 relative overflow-hidden group"
          >
            {/* Hover glare effect */}
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500/10 via-cyan-400/20 to-indigo-500/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-slate-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
              <span className="text-xs font-mono text-purple-400 font-semibold">
                {skill.level}%
              </span>
            </div>

            <div className="w-full bg-slate-950 h-2.5 rounded-full border border-slate-900 overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full relative"
              />
            </div>
            
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
              <span>CATEGORY</span>
              <span className="uppercase text-slate-400">{skill.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
