import React, { useState } from 'react';
import { 
  Terminal, Database, Cpu, Award, BookOpen, ExternalLink, 
  Mail, Phone, MapPin, ArrowDown, 
  Layers, Code2, Briefcase, GraduationCap, CheckCircle2, Copy, Wrench, Sparkles
} from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('work.harishchittanuri@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      index: "01",
      title: "SQL AI Copilot",
      subtitle: "Agentic Database Intelligence Platform",
      badge: "Agentic AI • RAG",
      description: "Converts natural-language questions into validated SQL queries via intent analysis, vector schema retrieval, execution, and self-correcting error recovery—generating automated insights and interactive Plotly charts.",
      pipeline: ["NL Query", "Intent & Schema RAG", "SQL Gen & Validation", "Self-Correction", "Plotly Insights"],
      stack: ["Python", "LangGraph", "FastAPI", "Streamlit", "PostgreSQL", "ChromaDB", "Sentence Transformers"],
      github: "github.com/HarishChittanuri",
      live: null,
    },
    {
      index: "02",
      title: "AgroMatch AI",
      subtitle: "Digital Farmer Assistant & Semantic Marketplace",
      badge: "Springer Published",
      description: "Full-stack agricultural marketplace featuring semantic job matching via Sentence Transformers and cosine similarity, backed by a RAG pipeline over PostgreSQL for multilingual agricultural and hiring support.",
      pipeline: ["User Query", "FAISS Vector Search", "PostgreSQL RAG", "Groq LLM Synthesis", "Role Workflow"],
      stack: ["Python", "FastAPI", "React", "PostgreSQL", "LangChain", "FAISS", "Groq API", "JWT"],
      github: "github.com/HarishChittanuri/AgroMatch-AI",
      live: "agro-match-ai.vercel.app",
    },
    {
      index: "03",
      title: "AI Career Path Recommender",
      subtitle: "Skill-Gap Analysis & Career Mapping Engine",
      badge: "Full-Stack ML",
      description: "Full-stack recommendation platform utilizing scikit-learn matching algorithms and Flask REST APIs to map user skill profiles to optimal career trajectories and highlight actionable skill gaps.",
      pipeline: ["Profile Input", "Feature Vectorization", "scikit-learn Matching", "Skill-Gap Delta"],
      stack: ["Python", "Flask", "React", "REST APIs", "scikit-learn"],
      github: "github.com/HarishChittanuri",
      live: null,
    }
  ];

  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="w-4 h-4 text-zinc-300" />,
      skills: ["Python", "SQL", "JavaScript", "C"]
    },
    {
      title: "AI / ML",
      icon: <Cpu className="w-4 h-4 text-zinc-300" />,
      skills: ["Scikit-learn", "NLP", "Hugging Face", "Sentence Transformers"]
    },
    {
      title: "GenAI",
      icon: <Sparkles className="w-4 h-4 text-zinc-300" />,
      skills: ["LLMs", "RAG", "LangChain", "LangGraph"]
    },
    {
      title: "Backend",
      icon: <Terminal className="w-4 h-4 text-zinc-300" />,
      skills: ["FastAPI", "Flask", "REST APIs"]
    },
    {
      title: "Databases",
      icon: <Database className="w-4 h-4 text-zinc-300" />,
      skills: ["PostgreSQL", "SQLite", "Firebase", "ChromaDB"]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-4 h-4 text-zinc-300" />,
      skills: ["Git", "Docker", "Pandas", "NumPy"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#060608] text-zinc-100 font-sans selection:bg-white selection:text-black">
      {/* Subtle Monochrome Grid Texture */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#121216_1px,transparent_1px),linear-gradient(to_bottom,#121216_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_65%,transparent_100%)] pointer-events-none" />

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-[#060608]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-black text-xl tracking-tighter text-white border border-zinc-700 px-2.5 py-0.5 bg-zinc-900 group-hover:border-white transition">
              CH
            </span>
            <span className="hidden sm:inline font-mono text-xs tracking-widest uppercase text-zinc-400">
              harishchittanuri.in
            </span>
          </a>

          <nav className="flex items-center gap-6 md:gap-8 text-xs font-mono uppercase tracking-widest text-zinc-300">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#experience" className="hover:text-white transition">Background</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* FULL-VIEWPORT HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-between max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-10">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
          <span>Portfolio // 2026</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Hyderabad, IN
          </span>
        </div>

        <div className="my-auto py-12 flex flex-col items-center text-center space-y-6">
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-zinc-300">
            AI/ML Enthusiast <span className="text-zinc-600 mx-1.5">|</span> GenAI Developer <span className="text-zinc-600 mx-1.5">|</span> CSE Graduate
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.95]">
            CHITTANURI
            <span className="block text-zinc-300 mt-1">HARISH</span>
          </h1>

          <p className="max-w-3xl text-zinc-200 text-base sm:text-lg md:text-xl leading-relaxed font-normal pt-3">
            Computer Science graduate specializing in AI &amp; ML, interested in building practical applications using machine learning, LLMs and modern backend technologies. Experienced in developing AI-powered applications, working with APIs and exploring retrieval-based systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a
              href="#projects"
              className="px-7 py-3.5 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-zinc-200 transition"
            >
              View Projects
            </a>
            <a
              href="https://github.com/HarishChittanuri"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 border border-zinc-700 hover:border-zinc-400 text-zinc-100 font-mono text-xs uppercase tracking-widest transition"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/chittanuriharish/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 border border-zinc-700 hover:border-zinc-400 text-zinc-100 font-mono text-xs uppercase tracking-widest transition"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-zinc-800/80 pt-6">
          <div className="flex items-center gap-5 text-zinc-400">
            <a href="https://github.com/HarishChittanuri" target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="GitHub">
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
            <a href="https://linkedin.com/in/chittanuriharish/" target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="LinkedIn">
              <LinkedinIcon className="w-4.5 h-4.5" />
            </a>
            <a href="mailto:work.harishchittanuri@gmail.com" className="hover:text-white transition" aria-label="Email">
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>

          <a
            href="#highlights"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-300 hover:text-white transition"
          >
            Scroll Down <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <div className="hidden sm:block font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            CSE (AI &amp; ML)
          </div>
        </div>
      </section>

      {/* MAIN SCROLLABLE CONTENT */}
      <main className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-32">

        {/* HIGHLIGHTS STRIP */}
        <section id="highlights" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 md:p-10 bg-zinc-900/80 border border-zinc-700/80 hover:border-zinc-500 transition shadow-lg flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-300">Research Publication</span>
              <BookOpen className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-xl md:text-2xl tracking-tight">Springer ICWSNUCA 2026</h3>
              <p className="text-sm md:text-base text-zinc-200 mt-2 leading-relaxed">
                Published &amp; presented research on &ldquo;Digital Farmer Assistant&rdquo; at the international conference.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 bg-zinc-900/80 border border-zinc-700/80 hover:border-zinc-500 transition shadow-lg flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-300">1st Place Winner</span>
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-xl md:text-2xl tracking-tight">Hackstrom 2025</h3>
              <p className="text-sm md:text-base text-zinc-200 mt-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0" /> Hyderabad, India • Built an AI-enabled solution in a 30-Hr Hackathon
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS (Styled distinct cards) */}
        <section id="projects" className="space-y-10">
          <div className="border-b border-zinc-800 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Selected Work</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mt-1 flex items-center gap-3">
                <Layers className="w-7 h-7 text-emerald-400" /> Featured Projects
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
              Agentic Workflows • RAG • Full-Stack ML
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-8 md:p-10 bg-[#0c0c0e] border border-zinc-700/90 hover:border-emerald-500/60 shadow-xl transition space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-zinc-400">{project.index}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-zinc-900 text-emerald-300 border border-zinc-700">
                        {project.badge}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-zinc-300 font-medium mt-1.5">{project.subtitle}</p>
                  </div>

                  <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
                    {project.live && (
                      <a
                        href={`https://${project.live}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition font-semibold"
                      >
                        Live Demo <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={`https://${project.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition"
                    >
                      Source Code <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-zinc-200 text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="p-5 bg-zinc-950 border border-zinc-800">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-3">
                    Architecture Pipeline
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    {project.pipeline.map((step, i) => (
                      <React.Fragment key={i}>
                        <span className="px-3 py-1.5 bg-zinc-900 text-zinc-100 border border-zinc-700">
                          {step}
                        </span>
                        {i < project.pipeline.length - 1 && (
                          <span className="text-emerald-400 font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-900/80 border border-zinc-700 text-zinc-300 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section id="skills" className="space-y-10">
          <div className="border-b border-zinc-800 pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mt-1 flex items-center gap-3">
              <Terminal className="w-7 h-7 text-emerald-400" /> Technical Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="p-8 bg-zinc-900/80 border border-zinc-700/80 hover:border-zinc-500 transition space-y-5 shadow-md">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3.5">
                  <span className="font-mono text-sm uppercase tracking-widest text-white font-bold">
                    {cat.title}
                  </span>
                  {cat.icon}
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-700 text-xs font-mono text-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 md:p-10 bg-zinc-900/80 border border-zinc-700/80 space-y-6 shadow-md">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-white">
              <Briefcase className="w-6 h-6 text-cyan-400" /> Experience &amp; Certifications
            </h2>
            <div className="space-y-8 border-l border-zinc-700 pl-6 ml-2">
              <div className="relative">
                <span className="w-3 h-3 bg-cyan-400 absolute -left-[29px] top-1 rounded-full" />
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-300">May 2026 – Aug 2026</div>
                <h3 className="font-bold text-white text-lg mt-1">Associate Analyst — Tech Mahindra Limited</h3>
                <p className="text-xs font-mono text-zinc-400 mb-2">Hyderabad, India</p>
                <p className="text-sm md:text-base text-zinc-200 leading-relaxed">
                  Supported examination operations for a global education client, ensuring high-accuracy data processing while adhering to strict quality and confidentiality standards.
                </p>
              </div>

              <div className="relative">
                <span className="w-3 h-3 bg-zinc-500 absolute -left-[29px] top-1 rounded-full" />
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">Certifications</div>
                <ul className="text-sm md:text-base text-zinc-200 space-y-2.5 mt-2">
                  <li>• Career Essentials in Generative AI — Microsoft &amp; LinkedIn</li>
                  <li>• Python Essentials 1 — Cisco Networking Academy (Mar 2026)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 bg-zinc-900/80 border border-zinc-700/80 space-y-6 shadow-md">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-white">
              <GraduationCap className="w-6 h-6 text-violet-400" /> Education
            </h2>
            <div className="space-y-8 border-l border-zinc-700 pl-6 ml-2">
              <div className="relative">
                <span className="w-3 h-3 bg-violet-400 absolute -left-[29px] top-1 rounded-full" />
                <div className="text-xs font-mono uppercase tracking-wider text-violet-300">2022 – 2026</div>
                <h3 className="font-bold text-white text-lg mt-1">B.Tech in Computer Science (AI &amp; ML)</h3>
                <p className="text-sm text-zinc-300 mt-0.5">KG Reddy College of Engineering &amp; Technology, Hyderabad</p>
                <div className="inline-block mt-3 px-3 py-1 bg-zinc-950 border border-zinc-700 text-xs font-mono text-emerald-400 font-semibold">
                  CGPA: 8.33
                </div>
              </div>

              <div className="relative">
                <span className="w-3 h-3 bg-zinc-500 absolute -left-[29px] top-1 rounded-full" />
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">2020 – 2022</div>
                <h3 className="font-bold text-white text-lg mt-1">Intermediate — MPC</h3>
                <p className="text-sm text-zinc-300 mt-0.5">Sri Chaitanya Junior College, Hyderabad</p>
                <div className="inline-block mt-3 px-3 py-1 bg-zinc-950 border border-zinc-700 text-xs font-mono text-zinc-200">
                  Score: 96.7%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLIFIED CONTACT SECTION */}
        <section id="contact" className="pt-8">
          <div className="border border-zinc-700/90 bg-zinc-900/90 p-10 md:p-16 max-w-2xl mx-auto text-center space-y-8 shadow-xl">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Get In Touch</span>
              <h2 className="text-4xl font-black uppercase tracking-tight text-white">CONTACT</h2>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 font-mono text-sm md:text-base">
              <div className="flex items-center gap-2.5 text-zinc-200">
                <MapPin className="w-4 h-4 text-emerald-400" /> Hyderabad, Telangana, India
              </div>
              <div className="flex items-center gap-2.5 text-zinc-200">
                <Phone className="w-4 h-4 text-cyan-400" /> +91-85228 76964
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="mailto:work.harishchittanuri@gmail.com"
                  className="text-white hover:text-emerald-300 underline underline-offset-4 flex items-center gap-2.5 transition text-base md:text-lg font-sans font-semibold"
                >
                  <Mail className="w-5 h-5 text-emerald-400" /> work.harishchittanuri@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  title="Copy Email"
                  className="p-2.5 rounded bg-zinc-950 hover:bg-zinc-800 text-zinc-300 hover:text-white transition cursor-pointer border border-zinc-700"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* MINIMAL FOOTER */}
        <footer className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <span>© 2026 CHITTANURI HARISH</span>
          <div className="flex items-center gap-6">
            <a href="https://github.com/HarishChittanuri" target="_blank" rel="noreferrer" className="hover:text-white transition">GITHUB</a>
            <a href="https://linkedin.com/in/chittanuriharish/" target="_blank" rel="noreferrer" className="hover:text-white transition">LINKEDIN</a>
            <a href="mailto:work.harishchittanuri@gmail.com" className="hover:text-white transition">EMAIL</a>
          </div>
        </footer>
      </main>
    </div>
  );
}