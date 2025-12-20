'use client'

import { useState } from 'react'

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })

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
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-codeforge-dark/80 backdrop-blur-lg border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🌲</span>
            <span className="text-xl font-bold">CodeForge AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
            <a href="#setup" className="text-slate-300 hover:text-white transition-colors">Get Started</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            <button onClick={() => handleDownload('Windows')} className="btn-primary text-sm py-2 px-6">
              Download
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 animate-float">
            <span className="text-8xl">🌲</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Your <span className="gradient-text">Private</span> AI
            <br />
            Code Assistant
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto animate-slide-up">
            Code faster with AI. <span className="text-codeforge-green font-semibold">100% private</span>.
            <br />
            Generate code, write SQL, and get instant AI help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up">
            <button onClick={() => handleDownload('Windows')} className="btn-primary flex items-center justify-center gap-2 text-lg py-4 px-10">
              <span>📦</span>
              Download for Windows
            </button>
            <button onClick={() => handleDownload('Mac')} className="btn-secondary flex items-center justify-center gap-2 text-lg py-4 px-10">
              <span>🍎</span>
              Download for Mac
            </button>
          </div>

          <p className="text-sm text-slate-400 mb-4">
            Windows 10/11 • Mac • Linux
          </p>
          <p className="text-xs text-slate-500">
            No credit card • No email • No account required
          </p>

          {/* Demo Video Placeholder */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-codeforge-dark-light to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-xl text-slate-300">Watch Demo Video</p>
                  <p className="text-sm text-slate-400 mt-2">(2 minutes)</p>
                  <p className="text-xs text-slate-500 mt-4">Coming soon - app launching first!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CodeForge Section */}
      <section className="py-20 px-6 bg-codeforge-dark-light">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why CodeForge AI?
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
              <div key={i} className="feature-card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to code faster and smarter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={i} className="feature-card">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{feature.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-codeforge-dark-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-300">
              Start coding with AI in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-codeforge-green rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started - Contact Form */}
      <section id="setup" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Started with CodeForge AI
            </h2>
            <p className="text-xl text-slate-300">
              Need help getting set up? Contact us and our team will get in touch with you
            </p>
          </div>

          <div className="feature-card max-w-2xl mx-auto">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full px-4 py-3 bg-codeforge-dark border border-slate-700 rounded-lg focus:outline-none focus:border-codeforge-green transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-4 py-3 bg-codeforge-dark border border-slate-700 rounded-lg focus:outline-none focus:border-codeforge-green transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-4 py-3 bg-codeforge-dark border border-slate-700 rounded-lg focus:outline-none focus:border-codeforge-green transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg"
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
      <section id="faq" className="py-20 px-6 bg-codeforge-dark-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
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
              <div key={i} className="feature-card">
                <h3 className="text-xl font-semibold mb-3 text-codeforge-green">
                  {faq.q}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Code Faster?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Join developers coding smarter with AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button onClick={() => handleDownload('Windows')} className="btn-primary flex items-center justify-center gap-2 text-lg py-4 px-10">
              <span>📦</span>
              Download for Windows
            </button>
            <button onClick={() => handleDownload('Mac')} className="btn-secondary flex items-center justify-center gap-2 text-lg py-4 px-10">
              <span>🍎</span>
              Download for Mac
            </button>
          </div>

          <p className="text-sm text-slate-400">
            Windows 10/11 • Mac • Linux • No signup • No email • No account
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌲</span>
                <span className="font-bold text-lg">CodeForge AI</span>
              </div>
              <p className="text-slate-400 text-sm">
                Your Private AI code assistant. Code faster, privately.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#setup" className="hover:text-white transition-colors">Get Started</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="https://github.com/Edu124/Codeforge-ai/releases/download/v1.0.0/CodeForge.AI_1.1.0_x64_en-US.msi" target="_blank" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#setup" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Report Bug</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/license" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 CodeForge AI. All rights reserved. Made with 💚 for developers.</p>
            <p className="mt-2 text-xs">100% privacy-focused AI code assistant.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}