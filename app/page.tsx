'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleDownload = (platform: string) => {
    // TODO: Replace with your actual GitHub release download link
    const links: { [key: string]: string } = {
      'Windows': 'https://github.com/Edu124/Codeforge-ai.git',
      'Mac': '#', // Coming soon
    }
    
    const url = links[platform]
    if (url && url !== '#') {
      window.location.href = url
    } else {
      alert('Coming soon for ' + platform)
    }
  }

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thanks! We\'ll notify you when available.')
    setEmail('')
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
            <a href="#setup" className="text-slate-300 hover:text-white transition-colors">Setup</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            <button onClick={() => handleDownload('Windows')} className="btn-primary text-sm py-2 px-6">
              Download Free
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
            Your <span className="gradient-text">Offline</span> AI
            <br />
            Code Assistant
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Code faster with AI. <span className="text-codeforge-green font-semibold">100% private</span>, works offline, completely free.
            <br />
            Generate code, write SQL, and get instant AI help.
          </p>

          {/* Big FREE badge */}
          <div className="inline-flex items-center gap-3 bg-codeforge-green/10 border-2 border-codeforge-green rounded-full px-8 py-3 mb-12">
            <span className="text-3xl">💚</span>
            <div className="text-left">
              <div className="text-2xl font-bold text-codeforge-green">100% FREE</div>
              <div className="text-sm text-slate-300">No subscriptions • No signup • Forever</div>
            </div>
          </div>

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

      {/* Why Free Section */}
      <section className="py-20 px-6 bg-codeforge-dark-light">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why is it Free?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            We believe AI coding tools should be accessible to everyone.
            <br />
            No subscriptions. No hidden costs. Just powerful AI at your fingertips.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🔒', title: '100% Private', desc: 'Your code never leaves your machine in offline mode' },
              { icon: '💰', title: 'Always Free', desc: 'No monthly fees, no trials, no credit cards' },
              { icon: '⚡', title: 'Fast & Powerful', desc: 'Generate code in seconds, not minutes' },
              { icon: '🌍', title: 'Works Offline', desc: 'No internet required for offline mode' },
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
                title: 'Offline Mode',
                desc: 'Uses LM Studio locally. 100% private, unlimited, free forever. 60-90 seconds per generation.',
              },
              {
                icon: '⚡',
                title: 'Cloud Mode (Optional)',
                desc: 'Bring your own Claude API key for 2-3 second generation. You pay Anthropic directly (~$0.01/request).',
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
                desc: 'Your workspace persists across sessions. Just like VS Code.',
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
              Get Started in 3 Steps
            </h2>
            <p className="text-xl text-slate-300">
              Start coding with AI in under 5 minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Download & Install',
                desc: 'One-click installer for Windows or Mac. No signup, no email required.',
                icon: '📦'
              },
              {
                step: '2',
                title: 'Choose Your Mode',
                desc: 'Offline mode (free, private) or Cloud mode (fast, optional). Your choice.',
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

      {/* Setup Guide */}
      <section id="setup" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Quick Setup Guide
            </h2>
            <p className="text-xl text-slate-300">
              Two options: Offline (100% free) or Cloud (optional, faster)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Offline Setup */}
            <div className="feature-card border-2 border-codeforge-green">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-2">Offline Mode Setup</h3>
                <div className="inline-block bg-codeforge-green text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                  RECOMMENDED • FREE
                </div>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-codeforge-green rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Download CodeForge AI</h4>
                    <p className="text-sm text-slate-400">Install our desktop app (2 minutes)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-codeforge-green rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Install LM Studio</h4>
                    <p className="text-sm text-slate-400">
                      Download from{' '}
                      <a href="https://lmstudio.ai" target="_blank" className="text-codeforge-cyan hover:underline">
                        lmstudio.ai
                      </a>
                      {' '}(5 minutes)
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-codeforge-green rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Download AI Model</h4>
                    <p className="text-sm text-slate-400">In LM Studio, search "DeepSeek Coder 1.3B" and download</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-codeforge-green rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Start Local Server</h4>
                    <p className="text-sm text-slate-400">Click "Start Server" in LM Studio (port 1234)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-codeforge-green rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-codeforge-green">Ready to Code!</h4>
                    <p className="text-sm text-slate-400">100% private, unlimited, free forever</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud Setup */}
            <div className="feature-card border-2 border-codeforge-cyan">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-2">Cloud Mode Setup</h3>
                <div className="inline-block bg-codeforge-cyan text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                  OPTIONAL • FAST
                </div>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-codeforge-cyan rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Download CodeForge AI</h4>
                    <p className="text-sm text-slate-400">Install our desktop app (2 minutes)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-codeforge-cyan rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Get Claude API Key</h4>
                    <p className="text-sm text-slate-400">
                      Sign up at{' '}
                      <a href="https://console.anthropic.com" target="_blank" className="text-codeforge-cyan hover:underline">
                        console.anthropic.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-codeforge-cyan rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Add Payment Method</h4>
                    <p className="text-sm text-slate-400">Add $5-10 credits to your Anthropic account</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-codeforge-cyan rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Enter API Key</h4>
                    <p className="text-sm text-slate-400">In CodeForge AI, click Settings and paste your key</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-codeforge-cyan rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-codeforge-cyan">Ready to Code!</h4>
                    <p className="text-sm text-slate-400">2-3 second generation, ~$0.01 per request</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-codeforge-dark rounded-lg border border-slate-700">
                <p className="text-xs text-slate-400">
                  <strong className="text-white">Note:</strong> You pay Anthropic directly. 
                  We don't charge anything. You control your own spending and can set limits.
                </p>
              </div>
            </div>
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
                q: 'Is CodeForge AI really 100% free?',
                a: 'Yes! The offline mode is completely free forever. No trials, no subscriptions, no hidden costs. If you choose to use cloud mode (optional), you pay Anthropic directly for API usage (~$0.01-0.03 per generation), but we don\'t charge anything.'
              },
              {
                q: 'Is my code private and secure?',
                a: 'Absolutely! When using offline mode, your code never leaves your computer. Everything runs locally on your machine. Even in cloud mode, only your prompts are sent to Claude API - your full codebase stays private on your computer.'
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
                a: 'Unlike Copilot, CodeForge AI works 100% offline (no internet needed), has no monthly subscription ($0 forever), and gives you full control over your privacy. You can use it without sharing your code with any cloud service.'
              },
              {
                q: 'Do I need LM Studio to use this?',
                a: 'Only if you want to use offline mode. You have two options: (1) Offline mode with LM Studio (free, private, slower) or (2) Cloud mode with your own Claude API key (fast, low cost). Your choice!'
              },
              {
                q: 'Can I use this commercially?',
                a: 'Yes! CodeForge AI is free to use for both personal and commercial projects. The code you generate belongs to you. Use it however you want.'
              },
              {
                q: 'How do I get support?',
                a: 'Join our GitHub community to report bugs, request features, or get help from other users. We\'re actively developing and improving CodeForge AI based on user feedback.'
              },
              {
                q: 'Will this stay free forever?',
                a: 'Yes! The core offline mode will always be free. We believe AI coding tools should be accessible to everyone. We may add optional premium features in the future, but the free version will always be powerful and fully functional.'
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
          <p className="text-xl text-slate-300 mb-8">
            Join developers coding smarter with AI
          </p>

          <div className="inline-flex items-center gap-3 bg-codeforge-green/10 border-2 border-codeforge-green rounded-full px-8 py-3 mb-12">
            <span className="text-3xl">💚</span>
            <div className="text-left">
              <div className="text-2xl font-bold text-codeforge-green">100% FREE FOREVER</div>
              <div className="text-sm text-slate-300">No subscriptions • No trials • No credit card</div>
            </div>
          </div>

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
                Your offline AI code assistant. Code faster, privately, for free.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#setup" className="hover:text-white transition-colors">Setup Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="https://github.com/Edu124/Codeforge-ai.git" target="_blank" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Report Bug</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
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
            <p className="mt-2 text-xs">100% free, open source, and privacy-focused.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}