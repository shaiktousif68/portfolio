/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShaikTousiffProfile, PromptConfig } from "./types";

export const profileData: ShaikTousiffProfile = {
  personal: {
    name: "SHAIK TOUSIFF",
    avatarSeed: "tousiff",
    email: "shaiktousiff26@gmail.com",
    altEmail: "23691a31i0@mits.ac.in",
    phone: "+91 7672073490",
    altPhone: "+91 6303507063",
    address: "H NO:4-48, Teleem Street, Gurramkonda",
    city: "Gurramkonda",
    state: "Andhra Pradesh",
    zipCode: "517297",
    dob: "14-07-2005",
    linkedin: "https://www.linkedin.com/in/shaik-tousiff-309519380",
    linkedinAlt: "https://www.linkedin.com/in/shaiktousiff26",
    bio: "Passionate Computer Science student and Machine Learning aspirant. Focused on creating smart data-driven solutions, software engineering design, and building visually stunning interactive web environments.",
    parentNames: {
      mother: "D. Kaleemnun",
      father: "S. Yousuff"
    }
  },
  education: [
    {
      degree: "Bachelors of Technology in Computer Science Engineering",
      institution: "Madanapalle Institute of Technology & Science",
      location: "Kadiri Road, Andhra Pradesh",
      session: "2023-2027",
      score: "7.51 CGPA",
      scoreType: "CGPA",
      level: "Bachelors"
    },
    {
      degree: "Intermediate Education (Class XII)",
      institution: "Govt Junior College",
      location: "Gurramkonda, Andhra Pradesh",
      session: "2021-2023",
      score: "86.0%",
      scoreType: "Percentage",
      level: "Intermediate"
    },
    {
      degree: "Matriculation (Class X)",
      institution: "Sri Viswa Bharathi School",
      location: "Gurramkonda, Andhra Pradesh",
      session: "2021",
      score: "97.16%",
      scoreType: "Percentage",
      level: "School"
    }
  ],
  skills: [
    { category: "Languages", name: "Python", level: 85 },
    { category: "Languages", name: "SQL", level: 80 },
    { category: "Languages", name: "HTML5 / CSS3", level: 90 },
    { category: "Core Concepts", name: "Machine Learning Solutions", level: 75 },
    { category: "Core Concepts", name: "Software Engineering Principles", level: 70 },
    { category: "Interpersonal", name: "Analytical Problem Solving", level: 85 },
    { category: "Interpersonal", name: "Data-Driven Decision Making", level: 80 },
    { category: "Interpersonal", name: "Technical Communication & Presentations", level: 85 },
    { category: "Interpersonal", name: "Team Collaboration", level: 90 },
    { category: "Hobbies", name: "Watching Anime", level: 95 },
    { category: "Hobbies", name: "Analytical Writing", level: 75 },
    { category: "Hobbies", name: "Reading & Research", level: 80 }
  ],
  projects: [
    {
      title: "Diabetes Prediction System with Python",
      duration: "1 Month",
      environment: "Python, Scikit-Learn, Pandas, Numpy, Jupyter Notebook",
      languages: ["Python", "Machine Learning"],
      description: "A fully functional diabetes diagnostic risk analysis and prediction tool developed using supervised learning models in Python. Features automated data processing pipelines and optimized accuracy scores to assist in healthcare risk assessments.",
      highlights: [
        "Preprocessed medical data metrics including glucose levels, insulin, blood pressure, and BMI.",
        "Created an end-to-end diagnostic risk engine.",
        "Utilized hyperparameter tuning on Machine Learning models to maximize diagnostic precision.",
        "Secured a standard prediction interface to run automated classification diagnostics on potential health indicators."
      ]
    }
  ],
  certifications: [
    {
      title: "Core Machine Learning Technical Internship",
      issuer: "Inspire Company",
      type: "Internship"
    },
    {
      title: "Industrial Core Operations Visit Certification",
      issuer: "Inspire Company",
      type: "Industrial"
    }
  ],
  achievements: [
    {
      title: "Sports Excellence Runner-Up: Cricket",
      category: "sports",
      description: "Secured runner-up standing in regional/college level cricket tournaments, showcasing leadership and peer collaboration under high performance expectations."
    },
    {
      title: "College Sports Coordinator & Participant",
      category: "sports",
      description: "Active contributor and coordinator in collegiate athletics and sports events, optimizing team scheduling and campus engagement."
    }
  ],
  languagesKnown: ["English", "Telugu"]
};

export function buildMasterPrompt(config: PromptConfig): string {
  const isRecruiter = config.targetedAudience === "Tech Recruiter" || config.targetedAudience === "Engineering Manager";
  
  return `Act as a top-tier frontend expert and Three.js/Tailwind CSS practitioner. Create a spectacular, highly polished, immersive 3D-feeling responsive Portfolio Website for SHAIK TOUSIFF, a computer science student specializing in Machine Learning and Software Engineering. 

The website should look premium, interesting, and incredibly eye-catching. Here is the configuration to use:
- **Framework Target**: ${config.framework}
- **Visual Style**: ${config.visualStyle} (Utilize elegant transformations, isometric card depth offsets, subtle neon cyber grids, glassmorphism card panels with dual backdrops, and interactive state expansions).
- **Core Aesthetic Theme**: ${config.colorTheme}
- **Target Audience Perspective**: Optimized for a **${config.targetedAudience}** (Make sure call-to-actions, skill gauges, and metrics are easy to read, with quick navigation to contact details and a "Recruiter Quick-Evaluation Module").

---
### PROFILE BIO-DATA TO REPRESENT:
(Note: Core Java has been explicitly removed from all records as requested)

1. **PERSONAL SPECS**:
   - **Name**: SHAIK TOUSIFF (Computer Science & Engineering Student)
   - **Primary Contact**: ${profileData.personal.email} / ${profileData.personal.phone}
   - **Secondary Contact**: ${profileData.personal.altEmail} / ${profileData.personal.altPhone}
   - **Location**: ${profileData.personal.address}, ${profileData.personal.city}, ${profileData.personal.state}, Pincode: ${profileData.personal.zipCode}
   - **Date of Birth**: ${profileData.personal.dob}
   - **LinkedIn Profiles**: 
     - Main Profile: ${profileData.personal.linkedin}
     - Alternate: ${profileData.personal.linkedinAlt}
   - **Personal Statement / Bio**: "${profileData.personal.bio}"
   - **Family Background Information**: Mother: ${profileData.personal.parentNames.mother}, Father: ${profileData.personal.parentNames.father}

2. **EDUCATION MILESTONES**:
${profileData.education.map(ed => `   - **${ed.degree}** at *${ed.institution}*, ${ed.location}. Session: ${ed.session} | Result: **${ed.score}**`).join("\n")}

3. **CORE TECHNICAL COMPETENCIES**:
   - **Languages**: Python, HTML5, CSS3, SQL (Robust database management)
   - **OS Systems**: Windows
   - **Core Domains**: Software Engineering, Machine Learning Pipeline development, Supervised Risk Classifications
   - **Interpersonal Skills**: ${profileData.skills.filter(s => s.category === "Interpersonal").map(s => s.name).join(", ")}

4. **INTELLIGENT MACHINE LEARNING PROJECT**:
   - **Title**: Diabetes Prediction System
   - **Duration**: 1 Month
   - **Tech Stack**: Python, Machine Learning Algorithms, Scikit-Learn, Pandas, NumPy, Jupyter Notebooks env.
   - **Key Architectural Deliverables**:
${profileData.projects[0].highlights.map(h => `     - ${h}`).join("\n")}

5. **PROFESSIONAL EXPEDITIONS & CERTIFICATIONS**:
${profileData.certifications.map(c => `   - **${c.title}** issued by *${c.issuer}* (${c.type})`).join("\n")}

6. **ATHLETIC & CO-CURRICULAR LOGS**:
${profileData.achievements.map(a => `   - **${a.title}**: ${a.description}`).join("\n")}

7. **LANGUAGES RECODED**:
   - ${profileData.languagesKnown.join(", ")}

8. **INTERESTS & PASSIONS**:
   - ${profileData.skills.filter(s => s.category === "Hobbies").map(s => s.name).join(", ")}

---
### STRUCTURAL & ANIMATION ARCHITECTURE:

1. **Immersive Floating 3D/Isometric Stage**:
   - Model the main layout as an interactive isometric control board or holographic array using pure CSS 3D transforms (\`rotateX(15deg) rotateY(-15deg)\`) or standard Three.js render loops.
   - Allow users to "orbit" or dynamically rotate the dashboard viewpoint slightly as they move their mouse or drag across the workspace wrapper.
   - Add a subtle shimmering scanline overlay effect, moving grid grids in the background, and particle sparkles representing "Holographic Sparks".

2. **Modular Bento Grid Cards with Depth**:
   - Frame the user data within glowing, semi-transparent frosted glass panels. Each panel should rise off the grid on hover, projecting light shadows on the base floor.
   - **Recruiter Matrix Panel**: Centered card featuring a beautiful 100-point breakdown scorecard evaluating "Core Analytical Depth", "Platform Adaptability", "Clean Coding Index", and "Communication Matrix" to instantly grab high-intent interest.
   - **Terminal Prompt Deck**: A gorgeous console output section featuring a copyable text module representing this entire set of instructions.

3. **Micro-Interactions**:
   - **Dynamic Sound Effects / Visual Glitch Triggers**: Hovering over menu inputs or navigation headers triggers a high-fidelity visual glitch animation with slight font scale adjustments.
   - **State Switchers**: Toggle between "Standard Portfolio" view and "Raw Sci-Fi Data Mode" showing technical JSON specifications of Shaik Tousiff's profile metrics.
   - **Progress Ribbons**: Style the skill bars as glowing, pulsing neon level bars that count up when the viewport intersects with them.

4. **Exquisite Typography & Polish**:
   - Use high-contrast font pairings like Space Grotesk (sans-serif display) paired with JetBrains Mono for a highly precise, technical, hacker-corporate look.
   - Employ beautiful, eye-catching visual accents, colored status nodes, and neon gradient buttons. 
   - Ensure the experience is fully responsive—translating beautifully to a single, compact vertical timeline on mobile while expanding into an amazing sci-fi cockpit control panel on wide desktop layouts.

Make the application absolute mastercraft! Build out the full code with high-performance animations, gorgeous visual transitions, and flawless operational safety. Do not mock anything. Use real functional items. Let's create an unforgettable impression on prospective recruiters.
`;
}
