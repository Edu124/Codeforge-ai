import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "Terms of Service – Codeforge AI",
  description: "Codeforge AI terms of service — offline-first AI desktop application.",
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#060d1a] text-white">

      {/* Nav */}
      <nav className="border-b border-white/5 bg-[#060d1a]/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="w-7 h-7 rounded-lg overflow-hidden ring-1 ring-white/10">
              <Image src="/logo.png" alt="Codeforge AI" width={28} height={28} className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-sm">Codeforge <span className="text-cyan-400">AI</span></span>
          </Link>
          <span className="text-slate-600 text-sm">/</span>
          <span className="text-slate-400 text-sm">Terms of Service</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] font-bold text-cyan-400 tracking-[0.2em] uppercase mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Terms of Service</h1>
          <p className="text-slate-400 text-sm">Last updated: January 2025</p>
        </div>

        {/* Highlight box */}
        <div className="mb-10 p-5 rounded-xl bg-blue-500/5 border border-blue-500/20">
          <p className="text-blue-300 text-sm font-medium leading-relaxed">
            <span className="font-bold text-blue-400">Short version:</span> Codeforge AI is free to use for personal and
            professional purposes. All AI processing runs on your machine. You own your data, we never see it.
          </p>
        </div>

        <div className="space-y-10 text-slate-300 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using Codeforge AI (the &quot;Software&quot;) or visiting our website
              (the &quot;Site&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you
              do not agree to these Terms, do not use the Software or Site.
            </p>
            <p className="mt-3">
              These Terms apply to all users of the Software and Site, including visitors, registered users,
              and contributors.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              2. Description of the Software
            </h2>
            <p>
              Codeforge AI is a desktop application that runs open-source artificial intelligence language models
              entirely on your local device. Key characteristics of the Software include:
            </p>
            <ul className="mt-3 space-y-2 ml-4">
              {[
                'All AI inference is performed locally on your CPU or GPU — no cloud API calls are made',
                'Supported document types include PDF, Word (.docx), Excel (.xlsx), and plain text files',
                'A VS Code / Cursor extension connects to the desktop app via a local WebSocket (loopback only)',
                'AI model files are downloaded directly from HuggingFace to your device',
                'The Software is provided as a Windows desktop application built with Tauri',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-400">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              3. License Grant
            </h2>
            <p>
              Subject to your compliance with these Terms, Codeforge AI grants you a limited, non-exclusive,
              non-transferable, revocable licence to download and use the Software for your personal or
              professional purposes on devices that you own or control.
            </p>
            <p className="mt-3">
              You may not sublicense, sell, resell, transfer, assign, or otherwise commercially exploit the
              Software. You may not reverse-engineer, decompile, or create derivative works based on the
              Software except to the extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              4. AI Models &amp; Third-Party Licences
            </h2>
            <p>
              Codeforge AI ships with or facilitates the download of open-source language models including
              Qwen, Phi-3.5, and Gemma 2. These models are governed by their respective open-source licences
              (MIT, Apache 2.0, or similar). By downloading and using these models through Codeforge AI,
              you agree to comply with the applicable model licence.
            </p>
            <p className="mt-3">
              Model files are fetched directly from HuggingFace.co. Your use of HuggingFace is subject to
              HuggingFace&apos;s own Terms of Service. Codeforge AI has no affiliation with HuggingFace,
              Qwen/Alibaba, Microsoft (Phi), or Google (Gemma).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              5. Acceptable Use
            </h2>
            <p className="mb-3">You agree not to use the Software or Site to:</p>
            <ul className="space-y-2 ml-4">
              {[
                'Generate, distribute, or promote illegal, harmful, defamatory, or abusive content',
                'Attempt to circumvent any security feature of the Software',
                'Use the Software in any way that violates applicable local, national, or international law',
                'Impersonate any person or entity or misrepresent your affiliation with a person or entity',
                'Collect or harvest personal information about other individuals without their consent',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-400">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Because all processing occurs on your device, you are solely responsible for the content you
              input into the Software and the outputs you act upon.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              6. Intellectual Property
            </h2>
            <p>
              The Codeforge AI name, logo, website design, and Software (excluding bundled third-party
              open-source components) are the intellectual property of Codeforge AI. Nothing in these Terms
              transfers any ownership of intellectual property to you.
            </p>
            <p className="mt-3">
              You retain full ownership of any documents, code, or data you process through the Software.
              Because the Software operates entirely offline, we never receive, store, or claim any rights
              over your content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              7. VS Code / Cursor Extension
            </h2>
            <p>
              The Codeforge AI VS Code extension is an optional companion that connects to your local
              desktop app via a WebSocket on <code className="text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded text-xs">ws://127.0.0.1:7471</code>.
              This connection is local-only and never transmits data over the internet.
            </p>
            <p className="mt-3">
              The extension is provided under the same licence as the main Software. Use of the extension
              within VS Code, Cursor, or any compatible editor is subject to that editor&apos;s own Terms
              of Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              8. Disclaimer of Warranties
            </h2>
            <p>
              The Software and Site are provided <strong className="text-white">&quot;as is&quot;</strong> and
              <strong className="text-white"> &quot;as available&quot;</strong> without warranties of any kind,
              either express or implied, including but not limited to implied warranties of merchantability,
              fitness for a particular purpose, or non-infringement.
            </p>
            <p className="mt-3">
              AI-generated outputs may be inaccurate, incomplete, or misleading. You should independently
              verify any information produced by the Software before relying on it for important decisions.
              Codeforge AI does not warrant that the Software will be error-free or uninterrupted.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Codeforge AI and its developer(s) shall
              not be liable for any indirect, incidental, special, consequential, or punitive damages,
              including but not limited to loss of profits, data, goodwill, or other intangible losses,
              arising out of or in connection with:
            </p>
            <ul className="mt-3 space-y-2 ml-4">
              {[
                'Your use of or inability to use the Software or Site',
                'Any content generated by the AI models',
                'Unauthorised access to or alteration of your data',
                'Any third-party conduct or content',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-400">
                  <span className="text-cyan-400 mt-0.5 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              In no event shall our total aggregate liability exceed the amount you paid for the Software
              in the twelve months preceding the claim (or £50 if you have not made any payment).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              10. Early-Stage Product
            </h2>
            <p>
              Codeforge AI is an actively developed, early-stage product. Features, model support, user
              interface, and pricing (if introduced in the future) may change at any time without prior
              notice. We may add, modify, or remove features to improve the product.
            </p>
            <p className="mt-3">
              We appreciate feedback from early users and will do our best to communicate significant
              changes via the website or within the Software itself.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              11. Updates &amp; Auto-Update
            </h2>
            <p>
              Codeforge AI may include an automatic update mechanism that downloads and installs new
              versions of the Software. By using the Software, you consent to such updates being applied
              automatically. You may disable automatic updates in the application settings.
            </p>
            <p className="mt-3">
              Update packages are served from our official GitHub releases and are cryptographically
              verified before installation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              12. Termination
            </h2>
            <p>
              You may stop using the Software at any time by uninstalling it from your device.
              We reserve the right to suspend or terminate access to the Site or future updates at
              our discretion, particularly if we believe you have violated these Terms.
            </p>
            <p className="mt-3">
              Upon termination, the licence granted to you under Section 3 will immediately cease.
              Sections 6, 8, 9, and 13 survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              13. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable law. Any disputes
              arising out of or relating to these Terms or the Software shall be resolved through good-faith
              negotiation in the first instance. If a dispute cannot be resolved informally, it shall be
              subject to the exclusive jurisdiction of the relevant courts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              14. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. When we do, we will update the &quot;Last updated&quot;
              date at the top of this page. Continued use of the Software or Site after changes are posted
              constitutes your acceptance of the revised Terms. We encourage you to review these Terms
              periodically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
              15. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about these Terms of Service, please reach out:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-white/3 border border-white/8 inline-block">
              <p className="text-white font-medium">Codeforge AI</p>
              <a href="mailto:codeforeai.app@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                codeforeai.app@gmail.com
              </a>
            </div>
          </section>

        </div>

        {/* Back link */}
        <div className="mt-14 pt-8 border-t border-white/5">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors flex items-center gap-2">
            ← Back to Codeforge AI
          </Link>
        </div>
      </div>
    </main>
  )
}
