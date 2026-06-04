/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, ChevronLeft, ChevronRight, Activity, Database, CheckCircle, BarChart3 } from "lucide-react";
import { ProjectEntry } from "../types";

interface ProjectDeckProps {
  projects: ProjectEntry[];
}

export default function ProjectDeck({ projects }: ProjectDeckProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "results">("overview");

  const project = projects[0]; // Active project (Diabetes prediction)

  return (
    <div id="project-interactive-card" className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-indigo-500/10 overflow-hidden hover:border-indigo-400/30 transition-all duration-300">
      {/* Visual Header */}
      <div className="p-6 border-b border-indigo-500/10 bg-gradient-to-r from-slate-900 via-indigo-950/20 to-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-400/20">
            <Cpu className="h-5 w-5 text-cyan-400 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
              Core Training Project
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>
        <div className="flex bg-slate-950/60 p-1.5 rounded-lg border border-indigo-500/10 self-start sm:self-auto font-mono text-xs">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === "overview"
                ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === "architecture"
                ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Pipeline
          </button>
          <button
            onClick={() => setActiveTab("results")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === "results"
                ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Highlights
          </button>
        </div>
      </div>

      <div className="p-6 md:p-8 min-h-[300px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-950/40 rounded-xl border border-indigo-500/5">
                  <span className="text-xs font-mono text-slate-500">ENVIRONMENT</span>
                  <p className="text-sm font-semibold text-white mt-1">
                    {project.environment}
                  </p>
                </div>
                <div className="p-4 bg-slate-950/40 rounded-xl border border-indigo-500/5">
                  <span className="text-xs font-mono text-slate-500">TRAINING TIMEFRAME</span>
                  <p className="text-sm font-semibold text-cyan-400 mt-1">
                    {project.duration} Complete Intensive Sprint
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "architecture" && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="relative">
                <p className="text-sm text-slate-400 pb-4">
                  Fully analytical predictive model with optimized parameters. The architecture consists of several pipeline steps:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-950/70 rounded-xl border border-indigo-500/10 space-y-2 relative">
                    <div className="text-indigo-400 bg-indigo-500/10 p-2 rounded-lg w-fit">
                      <Database className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-mono text-slate-500">STEP 01</div>
                    <h4 className="text-sm font-semibold text-white">Data Ingestion</h4>
                    <p className="text-xs text-slate-400">
                      Standard diagnostic values input (Insulin, Age, BMI, Blood Pressure metrics, Glucose indices).
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950/70 rounded-xl border border-cyan-500/10 space-y-2 relative">
                    <div className="text-cyan-400 bg-cyan-500/10 p-2 rounded-lg w-fit">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-mono text-slate-500">STEP 02</div>
                    <h4 className="text-sm font-semibold text-white">Supervised Learning</h4>
                    <p className="text-xs text-slate-400">
                      Python ML model structures (Scikit-Learn classification algorithms, statistical weighting evaluation).
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950/70 rounded-xl border border-emerald-500/10 space-y-2 relative">
                    <div className="text-emerald-400 bg-emerald-500/10 p-2 rounded-lg w-fit">
                      <Activity className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-mono text-slate-500">STEP 03</div>
                    <h4 className="text-sm font-semibold text-white">Risk Score Output</h4>
                    <p className="text-xs text-slate-400">
                      Immediate prediction output flags indicating classification probability score assessments.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-mono text-slate-400 border-b border-indigo-500/5 pb-2">
                VERIFIABLE STUDY DELIVERABLES:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-start p-3 bg-slate-950/30 rounded-lg border border-indigo-500/5 hover:border-indigo-500/10"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 pt-4 border-t border-indigo-500/5 flex flex-wrap gap-2 items-center">
          <span className="text-xs font-mono text-slate-500 mr-2">Core Tech:</span>
          {project.languages.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-300 rounded-md"
            >
              #{tag}
            </span>
          ))}
          <span className="text-[11px] font-mono px-2.5 py-1 bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 rounded-md">
            #Scikit-Learn
          </span>
          <span className="text-[11px] font-mono px-2.5 py-1 bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 rounded-md">
            #SupervisedLearning
          </span>
        </div>
      </div>
    </div>
  );
}
