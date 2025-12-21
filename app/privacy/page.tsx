export const metadata = {
  title: "Privacy Policy – CodeForge AI",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="text-sm text-gray-500 mb-8">
        Last updated: 21 December 2025
      </p>

      <section className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          CodeForge AI is an early-stage software product operated by an individual
          developer. This Privacy Policy explains how information is handled when
          you use our website and software.
        </p>

        <h2 className="text-xl font-semibold">Information We Do and Do Not Collect</h2>
        <p>
          We do not require account creation and do not collect personal data unless
          you voluntarily contact us.
        </p>

        <h2 className="text-xl font-semibold">Local and Cloud Modes</h2>
        <p>
          In local mode, all processing happens on your device. In cloud mode,
          selected inputs may be sent to third-party AI services to provide the
          requested functionality.
        </p>

        <h2 className="text-xl font-semibold">Cookies and Analytics</h2>
        <p>
          We may use minimal cookies or analytics to understand website usage.
        </p>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          Email: support@codeforgeai.app
        </p>
      </section>
    </main>
  );
}
