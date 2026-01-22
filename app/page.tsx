'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [conversationStep, setConversationStep] = useState(0)
  const [showHero, setShowHero] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setConversationStep(1), 500)
    const timer2 = setTimeout(() => setConversationStep(2), 2000)
    const timer3 = setTimeout(() => setConversationStep(3), 3500)
    const timer4 = setTimeout(() => setShowHero(true), 4500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  const handleDownload = (platform: string) => {
    // TODO: Replace with your actual GitHub release download link
    const links: { [key: string]: string } = {
      'Windows': 'https://github.com/Edu124/Codeforge-ai/releases/download/v1.0.0/CodeForge.AI_1.1.0_x64_en-US.msi',
      'Mac': '#', // Coming soon
    }
    
    const url = links[platform]
    if (url && url !== '#') {
      window.location.href = url
    } else {
      alert('Coming soon for ' + platform)
    }
  }

   const handleContactSubmit = async (e: React.FormEvent) => {
   e.preventDefault()
  
   // Show loading state (optional)
   const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement
   const originalText = submitButton?.textContent
   if (submitButton) submitButton.textContent = 'Sending...'
  
   try {
    const response = await fetch('https://formspree.io/f/meoywgny', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message || 'No message provided',
        _subject: `New Contact from ${contactForm.name}`, // Custom subject line
      }),
    })

    if (response.ok) {
      alert(`Thanks ${contactForm.name}! Our team will get in touch with you soon at ${contactForm.email}.`)
      setContactForm({ name: '', email: '', message: '' })
    } else {
      alert('Oops! Something went wrong. Please try again or email us directly.')
    }
   } catch (error) {
    console.error('Form submission error:', error)
    alert('Oops! Something went wrong. Please try again or email us directly.')
   } finally {
    // Reset button text
    if (submitButton && originalText) submitButton.textContent = originalText
   }
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-20 -left-20 w-96 h-96 bg-codeforge-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-codeforge-green/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-xl border-b border-codeforge-green/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="text-3xl">🌲</span>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-codeforge-green rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-codeforge-green to-emerald-400 bg-clip-text text-transparent">CodeForge AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-codeforge-green transition-all duration-300 hover:scale-105">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-codeforge-green transition-all duration-300 hover:scale-105">How It Works</a>
            <a href="#setup" className="text-slate-300 hover:text-codeforge-green transition-all duration-300 hover:scale-105">Get Started</a>
            <a href="#faq" className="text-slate-300 hover:text-codeforge-green transition-all duration-300 hover:scale-105">FAQ</a>
            <button onClick={() => handleDownload('Windows')} className="btn-primary text-sm py-2 px-6 shadow-lg shadow-codeforge-green/20">
              Download
            </button>
          </div>
        </div>
      </nav>

      {/* Conversational Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* Conversation Interface */}
          <div className="mb-16 space-y-6">
            {/* User Message 1 */}
            {conversationStep >= 1 && (
              <div className="flex justify-end animate-slide-in-right">
                <div className="max-w-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl rounded-tr-sm p-4 shadow-xl">
                  <p className="text-slate-200 text-lg">Hey CodeForge, can you help me keeping my files secret?</p>
                </div>
              </div>
            )}

            {/* AI Response 1 */}
            {conversationStep >= 2 && (
              <div className="flex justify-start animate-slide-in-left">
                <div className="max-w-lg bg-gradient-to-br from-codeforge-green/20 to-emerald-900/20 border border-codeforge-green/40 rounded-2xl rounded-tl-sm p-4 shadow-xl shadow-codeforge-green/10">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-1">🌲</span>
                    <div>
                      <p className="text-codeforge-green font-semibold mb-1">CodeForge AI</p>
                      <p className="text-slate-200 text-lg">Yes, I can help! I work 100% offline, so your code never leaves your machine. Complete privacy guaranteed.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* User Message 2 */}
            {conversationStep >= 3 && (
              <div className="flex justify-end animate-slide-in-right">
                <div className="max-w-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl rounded-tr-sm p-4 shadow-xl">
                  <p className="text-slate-200 text-lg">That's amazing! How fast can you generate code?</p>
                </div>
              </div>
            )}

            {/* AI Response 2 */}
            {conversationStep >= 3 && (
              <div className="flex justify-start animate-slide-in-left delay-500">
                <div className="max-w-lg bg-gradient-to-br from-codeforge-green/20 to-emerald-900/20 border border-codeforge-green/40 rounded-2xl rounded-tl-sm p-4 shadow-xl shadow-codeforge-green/10">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-1">🌲</span>
                    <div>
                      <p className="text-codeforge-green font-semibold mb-1">CodeForge AI</p>
                      <p className="text-slate-200 text-lg">In firewall-safe mode, 1-2 minutes per generation. With cloud mode, just 2-3 seconds!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Hero Content */}
          {showHero && (
            <div className="text-center space-y-8 animate-fade-in-up">
              <div className="inline-block">
                <div className="relative">
                  <div className="absolute inset-0 bg-codeforge-green/20 blur-3xl rounded-full"></div>
                  <span className="text-9xl animate-float relative z-10 inline-block">🌲</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Your <span className="bg-gradient-to-r from-codeforge-green via-emerald-400 to-codeforge-green bg-clip-text text-transparent animate-gradient">Private</span> AI
                <br />
                Code Assistant
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Code faster with AI. <span className="text-codeforge-green font-bold">100% private</span>.
                <br />
                Generate code, write SQL, and get instant AI help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button onClick={() => handleDownload('Windows')} className="group relative btn-primary flex items-center justify-center gap-3 text-lg py-4 px-10 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-codeforge-green to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  <span className="relative z-10">📦</span>
                  <span className="relative z-10">Download for Windows</span>
                </button>
                <button onClick={() => handleDownload('Mac')} className="btn-secondary flex items-center justify-center gap-3 text-lg py-4 px-10 hover:border-codeforge-green/50">
                  <span>🍎</span>
                  Download for Mac
                </button>
              </div>

              <div className="space-y-2 pt-4">
                <p className="text-sm text-slate-400">
                  Windows 10/11 • Mac • Linux
                </p>
                <p className="text-xs text-slate-500">
                  No credit card • No email • No account required
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why CodeForge Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-codeforge-green">CodeForge AI</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Powerful AI coding assistance with privacy and performance.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🔒', title: '100% Private', desc: 'Your code never leaves your machine' },
              { icon: '💰', title: 'Own your software', desc: 'Download once, use unlimited' },
              { icon: '⚡', title: 'Fast Generation', desc: 'Generate code in seconds' },
              { icon: '🌍', title: 'Firewall-safe', desc: 'Firewall-safe operation' },
            ].map((item, i) => (
              <div key={i} className="group feature-card text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-codeforge-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-codeforge-green">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-codeforge-green bg-codeforge-green/10 px-4 py-2 rounded-full border border-codeforge-green/30">FEATURES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful <span className="text-codeforge-green">Features</span>
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to code faster and smarter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🔒',
                title: 'Firewall-safe',
                desc: '100% private, unlimited.1-2 minutes per generation.',
              },
              {
                icon: '⚡',
                title: 'Cloud Mode',
                desc: 'Bring your own Claude API key for 2-3 second generation. You pay Anthropic directly.',
              },
              {
                icon: '💻',
                title: 'Code Generation',
                desc: 'Generate complete functions, APIs, components instantly. Supports all major languages.',
              },
              {
                icon: '🗄️',
                title: 'SQL Query Assistant',
                desc: 'Write complex SQL queries with natural language. Supports joins, aggregations, and more.',
              },
              {
                icon: '💬',
                title: 'AI Chat Assistant',
                desc: 'Ask questions about your code. Get explanations, find bugs, optimize performance.',
              },
              {
                icon: '📁',
                title: 'Multi-Workspace',
                desc: 'Work on multiple projects simultaneously. Switch between folders instantly.',
              },
              {
                icon: '🎨',
                title: 'Syntax Highlighting',
                desc: 'Monaco editor with support for JavaScript, Python, Rust, SQL, and 10+ languages.',
              },
              {
                icon: '⌨️',
                title: 'Keyboard Shortcuts',
                desc: 'Save time with Ctrl+S to save, Ctrl+N for new file, Ctrl+Enter to generate.',
              },
              {
                icon: '💾',
                title: 'Auto-Save Workspace',
                desc: 'Your workspace persists across sessions.',
              },
            ].map((feature, i) => (
              <div key={i} className="group feature-card">
                <div className="flex items-start gap-4">
                  <div className="text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-codeforge-green transition-colors">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-codeforge-green bg-codeforge-green/10 px-4 py-2 rounded-full border border-codeforge-green/30">HOW IT WORKS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="text-codeforge-green">Works</span>
            </h2>
            <p className="text-xl text-slate-300">
              Start coding with AI in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-codeforge-green via-emerald-400 to-codeforge-green"></div>

            {[
              {
                step: '1',
                title: 'Download & Install',
                desc: 'One-click installer for Windows or Mac. No signup required.',
                icon: '📦'
              },
              {
                step: '2',
                title: 'Choose Your Mode',
                desc: 'Firewall-safe mode (private) or Cloud mode (fast). Your choice.',
                icon: '⚙️'
              },
              {
                step: '3',
                title: 'Start Coding',
                desc: 'Generate code, write SQL queries, and get AI help instantly.',
                icon: '🚀'
              },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-codeforge-green/20 rounded-full blur-xl group-hover:bg-codeforge-green/40 transition-all duration-500"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-codeforge-green to-emerald-600 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl shadow-codeforge-green/50 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                </div>
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-codeforge-green transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started - Contact Form */}
      <section id="setup" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-codeforge-green bg-codeforge-green/10 px-4 py-2 rounded-full border border-codeforge-green/30">GET STARTED</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Started with <span className="text-codeforge-green">CodeForge AI</span>
            </h2>
            <p className="text-xl text-slate-300">
              Need help getting set up? Contact us and our team will get in touch with you
            </p>
          </div>

          <div className="feature-card max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-codeforge-green via-emerald-400 to-codeforge-green"></div>
            <form onSubmit={handleContactSubmit} className="space-y-6 p-2">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-codeforge-green">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-slate-800 rounded-xl focus:outline-none focus:border-codeforge-green transition-all duration-300 text-white placeholder-slate-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-codeforge-green">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-slate-800 rounded-xl focus:outline-none focus:border-codeforge-green transition-all duration-300 text-white placeholder-slate-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-codeforge-green">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-slate-800 rounded-xl focus:outline-none focus:border-codeforge-green transition-all duration-300 resize-none text-white placeholder-slate-500"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-bold shadow-xl shadow-codeforge-green/30 hover:shadow-codeforge-green/50"
              >
                Contact Us
              </button>

              <p className="text-center text-sm text-slate-400">
                Our team typically responds within 24 hours
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-codeforge-green bg-codeforge-green/10 px-4 py-2 rounded-full border border-codeforge-green/30">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-codeforge-green">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Is my code private and secure?',
                a: 'Absolutely! When using Firewall-safe mode, your code never leaves your computer. Everything runs locally on your machine. Even in cloud mode, only your prompts are sent to Claude API - your full codebase stays private on your computer.'
              },
              {
                q: 'Do I need to create an account?',
                a: 'No! Just download, install, and start using. No email, no signup, no account required. We don\'t track you or collect your data.'
              },
              {
                q: 'What programming languages are supported?',
                a: 'CodeForge AI supports all major programming languages including JavaScript, TypeScript, Python, Rust, Java, C++, Go, SQL, HTML, CSS, and more. The AI can generate code in any language you request.'
              },
              {
                q: 'How is this different from GitHub Copilot?',
                a: 'Unlike Copilot, CodeForge AI works 100% Firewall-safe, and gives you full control over your privacy. You can use it without sharing your code with any cloud service.'
              },
              {
                q: 'Can I use this commercially?',
                a: 'Yes! CodeForge AI can be used for both personal and commercial projects. The code you generate belongs to you. Use it however you want.'
              },
            ].map((faq, i) => (
              <div key={i} className="group feature-card relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-codeforge-green transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <div className="pl-4">
                  <h3 className="text-xl font-bold mb-3 text-codeforge-green flex items-start gap-2">
                    <span className="text-codeforge-green/50 text-2xl">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-slate-300 leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-codeforge-green/5 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-codeforge-green/10 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="text-6xl inline-block animate-float">🌲</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Code <span className="text-codeforge-green">Faster</span>?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12">
            Join developers coding smarter with AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button onClick={() => handleDownload('Windows')} className="group relative btn-primary flex items-center justify-center gap-3 text-lg py-5 px-12 overflow-hidden shadow-2xl shadow-codeforge-green/40">
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-codeforge-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              <span className="relative z-10 text-2xl">📦</span>
              <span className="relative z-10 font-bold">Download for Windows</span>
            </button>
            <button onClick={() => handleDownload('Mac')} className="btn-secondary flex items-center justify-center gap-3 text-lg py-5 px-12 hover:border-codeforge-green/50 shadow-xl">
              <span className="text-2xl">🍎</span>
              <span className="font-bold">Download for Mac</span>
            </button>
          </div>

          <p className="text-sm text-slate-400 mb-2">
            Windows 10/11 • Mac • Linux
          </p>
          <p className="text-xs text-slate-500">
            No signup • No email • No account
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-codeforge-green/20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌲</span>
                <span className="font-bold text-lg bg-gradient-to-r from-codeforge-green to-emerald-400 bg-clip-text text-transparent">CodeForge AI</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your Private AI code assistant. Code faster, privately.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-codeforge-green">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-codeforge-green transition-colors hover:translate-x-1 inline-block">Features</a></li>
                <li><a href="#setup" className="hover:text-codeforge-green transition-colors hover:translate-x-1 inline-block">Get Started</a></li>
                <li><a href="#" className="hover:text-codeforge-green transition-colors hover:translate-x-1 inline-block">Download</a></li>
                <li><a href="#" className="hover:text-codeforge-green transition-colors hover:translate-x-1 inline-block">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-codeforge-green">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#faq" className="hover:text-codeforge-green transition-colors hover:translate-x-1 inline-block">FAQ</a></li>
                <li><a href="https://github.com/Edu124/Codeforge-ai/releases/download/v1.0.0/CodeForge.AI_1.1.0_x64_en-US.msi" target="_blank" className="hover:text-codeforge-green transition-colors hover:translate-x-1 inline-block">GitHub</a></li>
                <li><a href="#setup" className="hover:text-codeforge-green transition-colors hover:translate-x-1 inline-block">Contact Us</a></li>
                <li><a href="#" className="hover:text-codeforge-green transition-colors hover:translate-x-1 inline-block">Report Bug</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-codeforge-green">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/privacy" className="hover:text-codeforge-green transition-colors hover:translate-x-1 inline-block">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-codeforge-green transition-colors hover:translate-x-1 inline-block">Terms of Service</a></li>
                <li><a href="/license" className="hover:text-codeforge-green transition-colors hover:translate-x-1 inline-block">License</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-codeforge-green/20 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 CodeForge AI. All rights reserved. Made with <span className="text-codeforge-green">💚</span> for developers.</p>
            <p className="mt-2 text-xs text-slate-500">100% privacy-focused AI code assistant.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}