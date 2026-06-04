/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Copy, Check, Settings, Code, Sparkles, Filter } from "lucide-react";
import { PromptConfig } from "../types";
import { buildMasterPrompt } from "../data";

export default function TerminalPrompt() {
  const [config, setConfig] = useState<PromptConfig>({
    framework: "React + Tailwind",
    colorTheme: "Cyberpunk Glow (Neon Pink & Cyber Blue)",
    visualStyle: "Semi-3D Grid & Cards",
    targetedAudience: "Tech Recruiter",
    includeExtraDetails: true
  });

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"interactive" | "raw">("interactive");

  const generatedPrompt = buildMasterPrompt(config);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div id="master-prompt-generator" className="bg-slate-950 rounded-2xl border border-red-500/20 overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.05)]">
      {/* Console Top Header */}
      <div className="bg-slate-900 px-6 py-4 border-b border-red-500/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500" />
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
            <span className="w-3.5 h-3.5 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2 pl-2">
            <Terminal className="h-4.5 w-4.5 text-red-400" />
            <span className="font-mono text-sm font-semibold text-slate-250 tracking-wide uppercase">
              Master Portfolio Generator Engine
            </span>
          </div>
        </div>

        <div className="flex bg-slate-950 p-1 rounded-md border border-slate-800 font-mono text-xs">
          <button
            onClick={() => setActiveTab("interactive")}
            className={`px-3 py-1.5 rounded transition ${
              activeTab === "interactive"
                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Tweak Details
          </button>
          <button
            onClick={() => setActiveTab("raw")}
            className={`px-3 py-1.5 rounded transition ${
              activeTab === "raw"
                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Preview Raw Prompt
          </button>
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Tweak Details / Settings Left Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-red-400" />
              <h3 className="text-sm font-bold font-mono uppercase text-slate-300">
                Tune Generator Parameters
              </h3>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Customize the architecture target, styling nodes, and recipient perspective. The prompt generator dynamically reconfigures Shaik Tousiff's real profile parameters (excluding Java) for professional code-generation.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Framework target Option */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 uppercase">Framework Architecture</label>
              <select
                value={config.framework}
                onChange={(e: any) => setConfig({ ...config, framework: e.target.value })}
                className="w-full bg-slate-900 text-slate-200 border border-slate-800 rounded-lg p-3 text-xs font-mono outline-hidden focus:border-red-500/40 transition"
              >
                <option value="React + Tailwind">React + Tailwind</option>
                <option value="React + Three.js">React + Three.js (Holographic Canvas)</option>
                <option value="Next.js + Three.js">Next.js + Three.js</option>
                <option value="HTML + CSS + JS (Vanilla)">Vanilla HTML + CSS + JS</option>
              </select>
            </div>

            {/* Color Themes */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 uppercase">Interactive Color Theme</label>
              <select
                value={config.colorTheme}
                onChange={(e: any) => setConfig({ ...config, colorTheme: e.target.value })}
                className="w-full bg-slate-900 text-slate-200 border border-slate-800 rounded-lg p-3 text-xs font-mono outline-hidden focus:border-red-500/40 transition"
              >
                <option value="Cyberpunk Glow (Neon Pink & Cyber Blue)">Cyberpunk Neon (Pink / Cyan)</option>
                <option value="AI Matrix (Emerald & Deep Dark)">Matrix Code (Emerald Green)</option>
                <option value="Minimalist Slate (Silver & Neon Purple)">Retro Minimalist Arcade (Purple)</option>
                <option value="Monochrome Tech (Cool White & Shadow)">Stealth Technology (Gold / Charcoal)</option>
              </select>
            </div>

            {/* Layout structures */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 uppercase">3D Perspective Style</label>
              <select
                value={config.visualStyle}
                onChange={(e: any) => setConfig({ ...config, visualStyle: e.target.value })}
                className="w-full bg-slate-900 text-slate-200 border border-slate-800 rounded-lg p-3 text-xs font-mono outline-hidden focus:border-red-500/40 transition"
              >
                <option value="Semi-3D Grid & Cards">Semi-3D Isometric Cards Layout</option>
                <option value="True 3D Interactive Canvas">Interactive Canvas Render Engine</option>
                <option value="Bento Box Dynamic Layout">Dynamic Grid Dashboard UI</option>
                <option value="Futuristic CLI Terminal">Retro Hacker CLI Command Deck</option>
              </select>
            </div>

            {/* Target Perspectives */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 uppercase">Target Audience focus</label>
              <select
                value={config.targetedAudience}
                onChange={(e: any) => setConfig({ ...config, targetedAudience: e.target.value })}
                className="w-full bg-slate-900 text-slate-200 border border-slate-800 rounded-lg p-3 text-xs font-mono outline-hidden focus:border-red-500/40 transition"
              >
                <option value="Tech Recruiter">Tech Recruiter (Scorecards & Quick Actions)</option>
                <option value="Engineering Manager">Engineering Manager (ML/Python Pipelines)</option>
                <option value="Startup Founder">Startup Founder (Interpersonal & Execution)</option>
                <option value="General Visitor">General Developer Portfolio (Standard Aesthetic)</option>
              </select>
            </div>

            {/* Extra details switch */}
            <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-800">
              <div>
                <span className="text-xs font-mono text-slate-300 block">Include Personal Details</span>
                <span className="text-[10px] text-slate-500">Enable family logs, DOB and location specs</span>
              </div>
              <input
                type="checkbox"
                checked={config.includeExtraDetails}
                onChange={(e) => setConfig({ ...config, includeExtraDetails: e.target.checked })}
                className="rounded text-red-500 focus:ring-red-500 bg-slate-900 border-slate-800 h-4 w-4"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Prompt Code Terminal Right Panel */}
        <div className="lg:col-span-7 flex flex-col min-h-[400px]">
          <div className="flex-1 bg-slate-900/40 border border-slate-800 rounded-xl relative p-5 font-mono overflow-hidden flex flex-col justify-between">
            {/* Hologram Overlay line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/[0.005] to-transparent pointer-events-none" />

            {activeTab === "interactive" ? (
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 text-xs text-red-400 border-b border-red-500/5 pb-2">
                  <Sparkles className="h-4 w-4 shrink-0" />
                  <span>PRE-COMPILED GENERATOR SCHEMA INJECTANTS:</span>
                </div>
                
                <div className="space-y-3.5 text-xs text-slate-400 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  <div>
                    <span className="text-slate-300 font-semibold text-red-400/80">[FRAMEWORK ARCHITECTURE]:</span>
                    <span className="text-white bg-slate-950 px-2 py-0.5 rounded ml-2 border border-slate-800">{config.framework}</span>
                  </div>
                  <div>
                    <span className="text-slate-300 font-semibold text-red-400/80">[THEME PROFILE ACCENTS]:</span>
                    <span className="text-white bg-slate-950 px-2 py-0.5 rounded ml-2 border border-slate-800">{config.colorTheme}</span>
                  </div>
                  <div>
                    <span className="text-slate-300 font-semibold text-red-400/80">[PERSPECTIVE TARGET]:</span>
                    <span className="text-white bg-slate-950 px-2 py-0.5 rounded ml-2 border border-slate-800">{config.targetedAudience}</span>
                  </div>
                  <div>
                    <span className="text-slate-300 font-semibold text-red-300/80">[EXCLUDED COMPETENCIES]:</span>
                    <span className="text-red-400 bg-red-950/20 px-2 py-0.5 rounded ml-2 border border-red-500/20 font-bold">CORE JAVA / JAVA (Excised!)</span>
                  </div>
                  <div className="border-t border-slate-800/60 pt-3">
                    <span className="text-slate-500 block pb-1">COMPILATION METADATA INTEGRATION:</span>
                    <ul className="list-disc pl-4 space-y-1 text-slate-400 text-[11px]">
                      <li>MITS Computer Science B.Tech Details (CGPA 7.51)</li>
                      <li>Standardized Diabetes Risk Prediction Python Engine Modules</li>
                      <li>Inspire Co. Core ML internship + Industrial visiting archives</li>
                      <li>Cricket running championship trophy metrics</li>
                    </ul>
                  </div>
                </div>

                <div className="p-3 bg-red-950/20 border border-red-500/10 rounded-lg text-[11px] text-red-300 leading-relaxed mt-2">
                  <strong>Hacker Insight:</strong> This prompt template is custom-engineered using rigorous instruction delimiters to yield modular, scalable, clean, and bug-free code with complex isometric animations on any AI visual builder.
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col justify-between">
                <div className="text-xs text-slate-500 flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span>RAW PROMPT METADATA: 1640 CHARS</span>
                  <span className="text-red-400/60 uppercase">Ready For Copier Injection</span>
                </div>
                <div className="flex-1 overflow-y-auto max-h-[300px] my-3 pr-2 scrollbar-thin scrollbar-thumb-slate-800">
                  <pre className="text-[11px] text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {generatedPrompt}
                  </pre>
                </div>
              </div>
            )}

            {/* Action buttons footer inside card */}
            <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
              <span className="text-[10px] text-slate-500">
                STATUS: COMPILATION LIVE
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2.5 bg-red-500 hover:bg-red-600 font-semibold text-white rounded-lg transition-transform active:scale-95 shadow-lg shadow-red-500/20 text-xs text-center pr-5"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    COPIED MASTER PROMPT!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    COPY PROMPT TO CLIPBOARD
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
