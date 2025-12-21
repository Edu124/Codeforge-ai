export const metadata = {
  title: "Privacy Policy – CodeForge AI",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">
        Privacy Policy
      </h1>

      <p className="text-sm text-gray-400 mb-8">
        Last updated: 21 December 2025
      </p>

      <section className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          CodeForge AI is an early-stage software product operated by an individual
          developer. This Privacy Policy explains how information is handled when
          you use our website and software.
        </p>

        <h2 className="text-xl font-semibold text-white">
          Information We Do and Do Not Collect
        </h2>

        <p>
          We do not require account creation and do not collect personal data
          unless you voluntarily contact us.
        </p>

        <p>
          We do not sell, rent, or share personal data with third parties.
        </p>

        <h2 className="text-xl font-semibold text-white">
          Local and Cloud Modes
        </h2>

        <p>
          In local mode, all AI processing happens entirely on your device.
          Your code and inputs do not leave your machine.
        </p>

        <p>
          In cloud mode, selected inputs may be sent to third-party AI services
          to provide the requested functionality. We do not store or reuse
          this data beyond providing the feature.
        </p>

        <h2 className="text-xl font-semibold text-white">
          Cookies and Analytics
        </h2>

        <p>
          We may use minimal cookies or analytics to understand website usage
          and improve performance. You can disable cookies through your browser
          settings.
        </p>

        <h2 className="text-xl font-semibold text-white">
          Data Security
        </h2>

        <p>
          We take reasonable measures to protect information. However, no method
          of electronic transmission or storage is completely secure.
        </p>

        <h2 className="text-xl font-semibold text-white">
          Contact
        </h2>

        <p>
          If you have questions about this Privacy Policy, contact us at:
          <br />
          <span className="text-gray-200">
            support@codeforgeai.app
          </span>
        </p>
      </section>
    </main>
  );
}
