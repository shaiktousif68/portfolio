/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  User, Mail, Phone, MapPin, Calendar, Award, 
  Sparkles, Terminal, ShieldAlert, Cpu, 
  Gamepad, BrainCircuit, Heart, Info, Globe, HelpCircle 
} from "lucide-react";

import { profileData } from "./data";
import Timeline from "./components/Timeline";
import ProjectDeck from "./components/ProjectDeck";
import SkillSphere from "./components/SkillSphere";
import RecruiterPanel from "./components/RecruiterPanel";
import TerminalPrompt from "./components/TerminalPrompt";

export default function App() {
  const [activeTab, setActiveTab] = useState<"portfolio" | "prompt-generator">("portfolio");
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Decorative Interactive Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b10_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Futuristic Scanline Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.002] to-transparent pointer-events-none mix-blend-overlay" />

      {/* Main Container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex flex-col justify-between relative z-10 space-y-8">
        
        {/* Top Navbar Section */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-indigo-500/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 opacity-60 blur-xs animate-pulse" />
              <div className="relative flex items-center justify-center p-2.5 bg-slate-900 rounded-lg border border-indigo-500/30 font-mono text-indigo-400 font-bold text-lg tracking-tighter">
                ST
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white font-mono tracking-tight uppercase flex items-center gap-2">
                SHAIK TOUSIFF
                <span className="text-[9px] font-sans px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase font-semibold">
                  M.L. Aspirant
                </span>
              </h1>
              <p className="text-xs text-slate-400 font-mono">
                B.Tech Computer Science & Engineering | 2023-2027
              </p>
            </div>
          </div>

          {/* Mode Switcher Bar */}
          <div className="flex bg-slate-900/80 p-1.5 rounded-xl border border-indigo-500/15 font-mono text-xs">
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === "portfolio"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <BrainCircuit className="h-4 w-4" />
              Interactive Portfolio
            </button>
            <button
              onClick={() => setActiveTab("prompt-generator")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === "prompt-generator"
                  ? "bg-gradient-to-r from-red-500 to-amber-600 text-white shadow-md shadow-red-500/20"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Terminal className="h-4 w-4" />
              Master Prompt Engine
            </button>
          </div>
        </header>

        {/* Dynamic Panel Renderer */}
        <main className="flex-1">
          {activeTab === "portfolio" ? (
            <div className="space-y-8">
              
              {/* Interactive Immersive Hero Presentation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Visual Bio / Hero Info Card */}
                <div className="lg:col-span-7 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-6 md:p-8 rounded-2xl border border-indigo-500/10 flex flex-col justify-between hover:border-indigo-400/20 transition-all duration-300">
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/5 px-2.5 py-1 rounded border border-indigo-500/10 inline-block">
                      System Biological Spec
                    </span>
                    <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                      Crafting Predictable Intelligence & Interactive Systems
                    </h2>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {profileData.personal.bio}
                    </p>
                  </div>

                  {/* Highlights Grid stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-indigo-500/5">
                    <div className="p-3 bg-slate-950/40 rounded-xl border border-indigo-500/5 text-center">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">B.Tech score</span>
                      <span className="text-base font-bold text-white mt-1 block">7.51 CGPA</span>
                    </div>
                    <div className="p-3 bg-slate-950/40 rounded-xl border border-indigo-500/5 text-center">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">School result</span>
                      <span className="text-base font-bold text-cyan-400 mt-1 block">97.16%</span>
                    </div>
                    <div className="p-3 bg-slate-950/40 rounded-xl border border-indigo-500/5 text-center">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">ML Projects</span>
                      <span className="text-base font-bold text-purple-400 mt-1 block">01 Active</span>
                    </div>
                    <div className="p-3 bg-slate-950/40 rounded-xl border border-indigo-500/5 text-center">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">Sports ranking</span>
                      <span className="text-base font-bold text-amber-400 mt-1 block">Runner-Up</span>
                    </div>
                  </div>
                </div>

                {/* Simulated 3D Cyber Holo-Core Representation */}
                <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-indigo-500/10 p-6 flex flex-col justify-between items-center relative overflow-hidden group hover:border-indigo-400/20 transition-all min-h-[320px]">
                  
                  {/* Digital Orbit Animation Area (Specially crafted, interesting and eye-catching) */}
                  <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  <div className="relative w-44 h-44 flex items-center justify-center pointer-events-none mt-4">
                    {/* Ring 1 - Outer spin */}
                    <div className="absolute inset-0 rounded-full border border-indigo-500/10 border-dashed animate-[spin_20s_linear_infinite]" />
                    {/* Ring 2 - Mid spin reverse */}
                    <div className="absolute inset-2 rounded-full border border-purple-500/20 border-t-purple-400 border-b-cyan-400 animate-[spin_10s_linear_infinite_reverse]" />
                    {/* Ring 3 - Inner solid */}
                    <div className="absolute inset-6 rounded-full border border-dashed border-indigo-500/5" />
                    
                    {/* Floating nodes */}
                    <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-bounce" />
                    <div className="absolute bottom-4 left-4 w-3.5 h-3.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                    <div className="absolute bottom-6 right-2 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.5)]" />

                    {/* Central Core Sphere */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(99,102,241,0.5)]">
                      <Cpu className="h-7 w-7 text-white animate-pulse" />
                    </div>
                  </div>

                  {/* Core description text */}
                  <div className="text-center space-y-1 relative z-10 w-full pt-4">
                    <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                      Holographic Engine Operational
                    </span>
                    <h3 className="text-xs font-mono font-semibold text-slate-300">
                      CYBERNETIC CO-PROCESSOR INDEX
                    </h3>
                  </div>
                </div>
              </div>

              {/* Training section & Skills split row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ProjectDeck projects={profileData.projects} />
                <SkillSphere skills={profileData.skills} />
              </div>

              {/* Education Chronology timeline */}
              <Timeline education={profileData.education} />

              {/* Recruiter Evaluation Panel */}
              <RecruiterPanel profile={profileData} />

              {/* Extra Personal Details Toggle Deck */}
              <div className="bg-slate-900/20 rounded-2xl border border-indigo-500/5 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0 mt-0.5">
                    <Info className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Additional Personal Metadata & Coordinates
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Toggle family lineage records, date of birth indexes, and localized micro-coordinates.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowPersonalDetails(!showPersonalDetails)}
                  className="px-4 py-2 bg-slate-950 hover:bg-slate-900 border border-indigo-500/10 rounded-xl text-xs font-mono font-semibold text-indigo-400 hover:text-white transition"
                >
                  {showPersonalDetails ? "COLLAPSE DETAILS" : "EXPLORE REVEAL"}
                </button>
              </div>

              {showPersonalDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  id="personal-details-raw"
                  className="bg-slate-950 rounded-2xl border border-indigo-500/10 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Birth Information</span>
                    <p className="text-sm font-semibold text-white">{profileData.personal.dob}</p>
                    <p className="text-xs text-slate-400">Date of Birth Calendar Record</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Mother Lineage</span>
                    <p className="text-sm font-semibold text-white">{profileData.personal.parentNames.mother}</p>
                    <p className="text-xs text-slate-400">Biological Parent Record</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Father Lineage</span>
                    <p className="text-sm font-semibold text-white">{profileData.personal.parentNames.father}</p>
                    <p className="text-xs text-slate-400">Biological Parent Record</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Micro-Coordinates</span>
                    <p className="text-sm font-semibold text-white">{profileData.personal.address}</p>
                    <p className="text-xs text-slate-400">Street & Home Specification Index</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Postal Code</span>
                    <p className="text-sm font-semibold text-white">{profileData.personal.zipCode}</p>
                    <p className="text-xs text-slate-400">Local Area Routing Mail Code</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Spoken Dialects</span>
                    <p className="text-sm font-semibold text-white">English, Telugu</p>
                    <p className="text-xs text-slate-400">Dual Fluent Linguistic Frameworks</p>
                  </div>
                </motion.div>
              )}

              {/* Help & Prompt Engine Access Card */}
              <div className="bg-gradient-to-r from-red-500/5 via-amber-500/5 to-red-500/5 p-6 rounded-2xl border border-red-500/15 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2.5 bg-red-500/10 rounded-xl text-red-400 border border-red-500/20 mt-0.5">
                    <HelpCircle className="h-5 w-5 animate-bounce" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white font-mono uppercase">
                      Deploy Your Custom 3D Portfolio Instantly!
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Wanna deploy an eye-catching full-canvas 3D portfolio? Access the <strong>Master Prompt Engine</strong> on the top right toggle. Tune the frame configuration, click "Copy Prompt", and paste it directly into your AI workspace file creator to boot your full live portfolio!
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab("prompt-generator")}
                  className="px-5 py-2.5 bg-red-500 hover:bg-red-650 text-white font-semibold text-xs font-mono rounded-lg active:scale-95 transition shadow-md shadow-red-500/15 shrink-0 self-stretch md:self-auto text-center pr-6"
                >
                  LAUNCH PROMPT GENERATOR →
                </button>
              </div>

            </div>
          ) : (
            <div className="space-y-6">
              <TerminalPrompt />
            </div>
          )}
        </main>

        {/* Dynamic Footer with humble status attributes (no trace of larp logs) */}
        <footer className="pt-8 border-t border-indigo-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            <span>Developed for </span>
            <span className="text-slate-300 font-semibold">{profileData.personal.name}</span>
          </div>
          <div>All rights reserved &copy; 2026 Shaik Tousiff</div>
        </footer>

      </div>
    </div>
  );
}
