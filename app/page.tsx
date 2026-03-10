'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// ── Privacy phrases that whisper across the hero ──────────────────────────────
const PRIVACY_WHISPERS = [
  "No one can see your chats.",
  "Your documents never leave this machine.",
  "Zero cloud. Zero logs. Zero tracking.",
  "What you ask stays with you — forever.",
  "The AI runs here. Not out there.",
  "Complete silence. Complete privacy.",
]

// ── Rotating action words in hero ────────────────────────────────────────────
const ROTATING_WORDS = ['Research', 'Analyze', 'Understand', 'Discover', 'Explore']

// ── FAQ accordion item ────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`faq-card cursor-pointer transition-all duration-300 ${open ? 'border-cyan-500/40' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <div className="p-5 flex items-center justify-between gap-4">
        <h3 className={`font-semibold text-sm md:text-base transition-colors duration-200 ${open ? 'text-cyan-400' : 'text-white'}`}>{q}</h3>
        <span className={`text-cyan-400 text-xl flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </div>
      {open && (
        <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

// ── Scroll-reveal wrapper ─────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [whisperIdx, setWhisperIdx] = useState(0)
  const [whisperVisible, setWhisperVisible] = useState(true)
  const [wordIdx, setWordIdx] = useState(0)
  const [wordVisible, setWordVisible] = useState(true)
  const [heroReady, setHeroReady] = useState(false)
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setWhisperVisible(false)
      setTimeout(() => { setWhisperIdx(i => (i + 1) % PRIVACY_WHISPERS.length); setWhisperVisible(true) }, 500)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setWordVisible(false)
      setTimeout(() => { setWordIdx(i => (i + 1) % ROTATING_WORDS.length); setWordVisible(true) }, 350)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  const handleDownload = () => {
    window.location.href = 'https://github.com/Edu124/Codeforge-ai/releases/download/v0.2.0/Codeforge.AI_0.2.0_x64_en-US.msi'
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/meoywgny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message || 'No message provided',
          _subject: `New Contact from ${contactForm.name}`,
        }),
      })
      if (res.ok) { setFormStatus('sent'); setContactForm({ name: '', email: '', message: '' }) }
      else setFormStatus('error')
    } catch { setFormStatus('error') }
  }

  return (
    <main className="min-h-screen bg-[#060d1a] text-white overflow-x-hidden">

      {/* ── Background: grid + radial glow ── */}
      <div className="fixed inset-0 -z-10 grid-bg" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(56,189,248,0.07),transparent)]" />
      <div className="fixed bottom-0 inset-x-0 h-[40vh] -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(59,130,246,0.05),transparent)]" />

      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl overflow-hidden ring-1 ring-white/10 flex-shrink-0">
              <Image src="/logo.png" alt="Codeforge AI" width={32} height={32} className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-[15px] tracking-tight">
              Codeforge <span className="text-cyan-400">AI</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-[13px] text-slate-400">
            <a href="#features"    className="hover:text-cyan-400 transition-colors duration-200">Features</a>
            <a href="#how-it-works" className="hover:text-cyan-400 transition-colors duration-200">How It Works</a>
            <a href="#models"      className="hover:text-cyan-400 transition-colors duration-200">Models</a>
            <a href="#faq"         className="hover:text-cyan-400 transition-colors duration-200">FAQ</a>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/25 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-200 font-medium"
            >
              Download
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">

        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[80px]  pointer-events-none" />

        <div
          className="text-center max-w-3xl mx-auto w-full"
          style={{
            opacity: heroReady ? 1 : 0,
            transform: heroReady ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Logo showcase in hero */}
          <div className="flex justify-center mb-7">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-xl" />
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-cyan-500/20">
                <Image src="/logo.png" alt="Codeforge AI" width={64} height={64} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-medium mb-7 tracking-wide">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            100% Offline &nbsp;·&nbsp; No Account &nbsp;·&nbsp; No Tracking
          </div>

          {/* Headline — professional size */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-5">
            <span className="hero-word block text-white"          style={{ animationDelay: '0.2s' }}>Your AI.</span>
            <span className="hero-word block text-cyan-400"       style={{ animationDelay: '0.45s' }}>Your Machine.</span>
            <span className="hero-word block text-slate-300"      style={{ animationDelay: '0.7s' }}>Your Rules.</span>
          </h1>

          {/* Rotating verb line */}
          <div className="flex items-center justify-center gap-2 text-base md:text-lg text-slate-400 mb-4 h-7">
            <span
              className="text-white font-medium"
              style={{
                opacity: wordVisible ? 1 : 0,
                transform: wordVisible ? 'translateY(0)' : 'translateY(-5px)',
                transition: 'opacity 0.35s ease, transform 0.35s ease',
                display: 'inline-block',
                minWidth: '100px',
                textAlign: 'right',
              }}
            >
              {ROTATING_WORDS[wordIdx]}
            </span>
            <span>documents and data — completely offline.</span>
          </div>

          {/* Privacy whisper */}
          <div className="h-6 flex items-center justify-center mb-9">
            <p
              className="text-slate-500 text-sm italic"
              style={{
                opacity: whisperVisible ? 1 : 0,
                transform: whisperVisible ? 'translateY(0)' : 'translateY(5px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              ✦&nbsp; {PRIVACY_WHISPERS[whisperIdx]}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={handleDownload}
              className="glow-btn px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm tracking-wide hover:bg-blue-500 transition-all duration-200 flex items-center gap-2.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
              </svg>
              Download for Windows
            </button>
            <button className="px-8 py-3.5 rounded-xl border border-white/8 text-slate-400 font-medium text-sm hover:border-white/15 hover:text-slate-300 transition-all duration-200 flex items-center gap-2">
              <span>🍎</span> Mac — Coming Soon
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-600">Free forever · Windows 10/11 · No signup required</p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 text-[10px] animate-bounce-slow">
          <span className="tracking-[0.15em] uppercase">scroll</span>
          <div className="w-px h-7 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </section>

      {/* ── PRIVACY STATEMENT ── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(56,189,248,0.04),transparent)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal className="text-center mb-16">
            <p className="text-[11px] font-bold text-cyan-400 tracking-[0.2em] uppercase mb-5">Privacy First</p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              <span className="text-slate-500">What happens on your machine</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">stays on your machine.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: '🗂️', title: 'Your Documents', desc: 'PDFs, Word docs, Excel files — processed entirely on-device. Never uploaded anywhere.' },
              { icon: '🤖', title: 'Your AI Models', desc: 'Downloaded once. Run offline forever. No API keys. No subscriptions.' },
              { icon: '💬', title: 'Your Conversations', desc: 'Lives only in memory on your machine. No server, no log, no history cloud.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="glass-card p-7 text-center group h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div className="w-8 h-px bg-cyan-500/40 mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="text-[11px] font-bold text-cyan-400 tracking-[0.2em] uppercase mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Built for <span className="text-cyan-400">real work</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              Not a demo. A serious offline AI tool for researchers, analysts, and developers.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { icon: '🔒', title: 'Fully Offline',          desc: 'AI models run on your CPU. Zero internet needed after initial setup. Firewall-safe.' },
              { icon: '📄', title: 'Document Intelligence', desc: 'Upload PDFs, Word docs, Excel files. Ask anything. Get cited answers from your own data.' },
              { icon: '📊', title: 'Analytics Engine',       desc: 'Auto-calculates financial & pharma formulas — gross margin, ROE, assay potency — from your spreadsheets.' },
              { icon: '🔌', title: 'VS Code Hub',            desc: 'Connect VS Code or Cursor. AI sees your code locally. Explain, refactor, fix — right-click.' },
              { icon: '🤖', title: '4 Free AI Models',       desc: 'Qwen 0.5B to Phi-3.5 Mini. No HuggingFace account, no token, no subscription.' },
              { icon: '🌐', title: 'Multi-language',         desc: 'Ask in English, Hindi, French or Spanish. Codeforge responds in your language automatically.' },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 55}>
                <div className="glass-card p-5 group hover:border-blue-500/30 h-full">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                  <h3 className="font-semibold text-white mb-1.5 text-sm group-hover:text-cyan-400 transition-colors duration-200">{f.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b17]/60 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal className="text-center mb-12">
            <p className="text-[11px] font-bold text-cyan-400 tracking-[0.2em] uppercase mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-black">Up and running <span className="text-cyan-400">in minutes</span></h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: '01', title: 'Download & Install', desc: 'One-click installer for Windows. No signup, no account, no internet required after install.', icon: '📦' },
              { n: '02', title: 'Pick an AI Model',   desc: 'Choose from 4 free models. All download directly with no HuggingFace account needed.', icon: '🤖' },
              { n: '03', title: 'Ask Anything',       desc: 'Chat with your documents, analyze Excel data, or connect VS Code for code assistance.', icon: '🚀' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="glass-card p-7 group hover:border-blue-500/20 transition-all duration-300 h-full">
                  <div className="text-4xl font-black text-blue-500/15 group-hover:text-blue-500/25 transition-colors duration-300 mb-3 font-mono">{s.n}</div>
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-semibold text-white mb-2 text-sm group-hover:text-cyan-400 transition-colors duration-200">{s.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODELS ── */}
      <section id="models" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="text-[11px] font-bold text-cyan-400 tracking-[0.2em] uppercase mb-4">AI Models</p>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Four models. <span className="text-cyan-400">Zero tokens.</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              All models download directly — no HuggingFace account or API key required.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-3.5">
            {[
              { name: 'Qwen2.5 0.5B', org: 'Alibaba',   orgColor: 'text-cyan-400',  size: '397 MB', speed: 'Very Fast', quality: 'Good',      rec: true,  desc: 'Best starting point. Fastest on any hardware. Recommended for most users.' },
              { name: 'Qwen2.5 1.5B', org: 'Alibaba',   orgColor: 'text-cyan-400',  size: '986 MB', speed: 'Fast',      quality: 'Very Good',  rec: false, desc: 'Better reasoning with minimal speed trade-off. Great for most tasks.' },
              { name: 'Phi-3.5 Mini', org: 'Microsoft', orgColor: 'text-blue-400',  size: '2.4 GB', speed: 'Moderate',  quality: 'Excellent',  rec: false, desc: 'Best reasoning quality. Ideal for complex documents and deep research.' },
              { name: 'Gemma 2 2B',   org: 'Google',    orgColor: 'text-green-400', size: '1.7 GB', speed: 'Fast',      quality: 'Good',       rec: false, desc: 'Efficient and accurate. Excellent for document Q&A and summarization.' },
            ].map((m, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className={`glass-card p-5 flex items-start gap-4 group hover:border-blue-500/25 transition-all duration-300 h-full ${m.rec ? 'border-cyan-500/25' : ''}`}>
                  <div className={`w-9 h-9 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center font-bold text-xs flex-shrink-0 ${m.orgColor}`}>
                    {m.org[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-white text-sm">{m.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded border ${m.orgColor} border-current bg-current/10`}>{m.org}</span>
                      {m.rec && <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Recommended</span>}
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed mb-2.5">{m.desc}</p>
                    <div className="flex gap-4 text-[11px] text-slate-500">
                      <span>📦 {m.size}</span>
                      <span>⚡ {m.speed}</span>
                      <span>✨ {m.quality}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VS CODE HUB ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(59,130,246,0.04),transparent)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="text-[11px] font-bold text-cyan-400 tracking-[0.2em] uppercase mb-5">VS Code Extension</p>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight">
                AI inside your editor.<br />
                <span className="text-blue-400">Not in the cloud.</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Install the Codeforge AI extension in VS Code, Cursor or Windsurf. Your code context goes to <span className="text-white font-medium">your local machine only</span> — never to any server.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Works in VS Code, Cursor & Windsurf',
                  'Explain, refactor, fix & comment — right-click',
                  'Apply AI suggestions directly to your editor',
                  'Zero telemetry · Completely local',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="glass-card p-0 overflow-hidden border-blue-500/15">
                <div className="bg-[#070e1b] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[11px] text-slate-500 ml-2 font-mono">Codeforge AI Hub — extension.ts</span>
                </div>
                <div className="p-5 font-mono text-[12px] leading-6 bg-[#050c18]">
                  <div>
                    <span className="text-purple-400">const</span>
                    <span className="text-slate-300"> socket </span>
                    <span className="text-slate-500">= </span>
                    <span className="text-yellow-300">new </span>
                    <span className="text-cyan-400">WebSocket</span>
                    <span className="text-slate-300">(</span>
                    <span className="text-orange-300">&quot;ws://127.0.0.1:7471&quot;</span>
                    <span className="text-slate-300">);</span>
                  </div>
                  <div className="text-slate-600 text-[11px] mt-1 mb-3">{'// ↑ connects to YOUR machine only'}</div>
                  <div>
                    <span className="text-purple-400">socket</span>
                    <span className="text-slate-300">.on(</span>
                    <span className="text-orange-300">&quot;message&quot;</span>
                    <span className="text-slate-300">, (msg) =&gt; {'{'}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-purple-400">if </span>
                    <span className="text-slate-300">(msg.type === </span>
                    <span className="text-orange-300">&quot;apply&quot;</span>
                    <span className="text-slate-300">)</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-blue-300">editor</span>
                    <span className="text-slate-300">.</span>
                    <span className="text-cyan-400">edit</span>
                    <span className="text-slate-300">(eb =&gt;</span>
                  </div>
                  <div className="ml-12">
                    <span className="text-blue-300">eb</span>
                    <span className="text-slate-300">.</span>
                    <span className="text-cyan-400">replace</span>
                    <span className="text-slate-300">(selection, msg.code))</span>
                  </div>
                  <div className="text-slate-300">{'}'+')'}</div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-cyan-400 text-[11px]">Connected — ws://127.0.0.1:7471</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="setup" className="py-24 px-6">
        <div className="max-w-md mx-auto">
          <Reveal className="text-center mb-8">
            <p className="text-[11px] font-bold text-cyan-400 tracking-[0.2em] uppercase mb-4">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              Need help? <span className="text-cyan-400">Let&apos;s talk.</span>
            </h2>
            <p className="text-slate-400 text-sm">We typically respond within 24 hours.</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass-card p-6">
              {formStatus === 'sent' ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="text-lg font-bold text-white mb-1">Message sent!</h3>
                  <p className="text-slate-400 text-sm">We&apos;ll be in touch soon.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-5 text-xs text-cyan-400 hover:underline">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1.5">Name</label>
                    <input
                      type="text" required value={contactForm.name}
                      onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/4 border border-white/8 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1.5">Email</label>
                    <input
                      type="email" required value={contactForm.email}
                      onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/4 border border-white/8 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1.5">
                      Message <span className="text-slate-600 font-normal normal-case">(optional)</span>
                    </label>
                    <textarea
                      rows={4} value={contactForm.message}
                      onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/4 border border-white/8 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors resize-none text-sm"
                      placeholder="How can we help?"
                    />
                  </div>
                  {formStatus === 'error' && <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>}
                  <button
                    type="submit" disabled={formStatus === 'sending'}
                    className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors disabled:opacity-50 text-sm"
                  >
                    {formStatus === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b17]/50 to-transparent pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10">
          <Reveal className="text-center mb-12">
            <p className="text-[11px] font-bold text-cyan-400 tracking-[0.2em] uppercase mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black">Common <span className="text-cyan-400">questions</span></h2>
          </Reveal>
          <div className="space-y-2.5">
            {[
              { q: 'Is my data really private?',                        a: 'Yes. All AI processing happens on your machine. No data is ever sent to a server. Your documents, chats, and questions stay exclusively on your computer — even when you\'re online.' },
              { q: 'Do I need a HuggingFace account or token?',         a: 'No. All four models download directly without any account, token, or sign-up. Just click download inside the app.' },
              { q: 'What can I use Codeforge AI for?',                  a: 'Research Q&A from your own documents, Excel data extraction and formula calculations (financial & pharma), AI chat, and code assistance via the VS Code/Cursor extension.' },
              { q: 'What are the system requirements?',                  a: 'Windows 10 or 11 (64-bit). Minimum 4 GB RAM for small models, 8 GB recommended for Phi-3.5. No GPU required — everything runs on CPU.' },
              { q: 'How is this different from ChatGPT or Copilot?',    a: 'ChatGPT and Copilot send your data to remote servers. Codeforge AI runs entirely on your device — your questions, documents and responses never leave your machine. Zero external calls after setup.' },
              { q: 'Is it really free?',                                 a: 'Yes — completely free, forever. No subscription, no trial, no credit card. Download, install, run.' },
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 40}>
                <FAQItem q={faq.q} a={faq.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.07),transparent)] pointer-events-none" />
        <Reveal className="max-w-2xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-2xl" />
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-blue-500/20">
                <Image src="/logo.png" alt="Codeforge AI" width={56} height={56} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight tracking-tight">
            Research smarter.<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Stay private.</span>
          </h2>
          <p className="text-slate-400 mb-8 text-sm max-w-sm mx-auto">
            Free forever. No account. No cloud. Just you and your AI.
          </p>
          <button
            onClick={handleDownload}
            className="glow-btn px-10 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-500 transition-all duration-200 inline-flex items-center gap-2.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
            Download Codeforge AI — Free
          </button>
          <p className="mt-4 text-xs text-slate-600">Windows 10/11 · 64-bit · ~400 MB to 2.4 GB depending on model</p>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-lg overflow-hidden ring-1 ring-white/10">
                  <Image src="/logo.png" alt="Codeforge AI" width={28} height={28} className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-sm">Codeforge <span className="text-cyan-400">AI</span></span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">Your private, offline AI research assistant. Runs on your machine. Always.</p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#features"    className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#models"      className="hover:text-cyan-400 transition-colors">Models</a></li>
                <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-wider mb-4">Support</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#faq"   className="hover:text-cyan-400 transition-colors">FAQ</a></li>
                <li><a href="#setup" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
                <li><a href="https://github.com/Edu124/Codeforge-ai/releases/download/v0.2.0/Codeforge.AI_0.2.0_x64_en-US.msi" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms"   className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-slate-600">
            <p>© 2025 Codeforge AI. All rights reserved.</p>
            <p>Built for privacy · Runs offline · Free forever</p>
          </div>
        </div>
      </footer>

    </main>
  )
}
