// app/legal/privacy-policy/page.tsx
export default function PrivacyPolicy() {
  return (
    <article className="max-w-4xl mx-auto py-16 px-6 prose prose-slate">
      <h1 className="text-3xl font-serif font-bold text-slate-900">Privacy Policy</h1>
      <p className="lead text-slate-600">
        This policy explains how we, <strong>[Your Firm Name]</strong>, collect and use your personal data in accordance with the UK General Data Protection Regulation (UK GDPR).
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold">1. Data Controller</h2>
        <p>
          [Your Name/Firm] is the data controller responsible for your personal data. 
          We are registered with the Information Commissioner’s Office (ICO) under registration number <strong>[Your ICO Number]</strong>.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">2. The Data We Collect</h2>
        <p>In the course of providing legal services, we may collect:</p>
        <ul>
          <li><strong>Identity Data:</strong> Names, date of birth, and copies of ID (passport/driving license).</li>
          <li><strong>Contact Data:</strong> Address, email, and telephone numbers.</li>
          <li><strong>Financial Data:</strong> Bank account details and source of wealth (for AML compliance).</li>
          <li><strong>Special Category Data:</strong> In specific cases (e.g., Probate or Employment), we may collect data regarding health, ethnicity, or criminal convictions.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">3. How We Use Your Data</h2>
        <p>We only use your data when the law allows us to. Most commonly:</p>
        <ul className="list-disc pl-5">
          <li>To perform the contract we are about to enter into or have entered into with you.</li>
          <li>To comply with a legal or regulatory obligation (e.g., Anti-Money Laundering checks).</li>
          <li>Where it is necessary for our legitimate interests and your interests do not override them.</li>
        </ul>
      </section>

      <section className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <h2 className="text-xl font-bold mt-0">4. Data Retention</h2>
        <p>
          As a regulated law firm, we are required to keep client files for a minimum period (usually <strong>6 to 15 years</strong> depending on the matter type) to comply with SRA regulations and professional indemnity requirements.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">5. Your Legal Rights</h2>
        <p>Under UK GDPR, you have the right to:</p>
        <ul className="list-disc pl-5">
          <li>Request access to your data (Subject Access Request).</li>
          <li>Request correction or erasure of your data.</li>
          <li>Object to or restrict the processing of your data.</li>
        </ul>
        <p className="mt-4">
          If you wish to exercise these rights, please contact us at <strong>[Your Email]</strong>.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-red-700">6. Right to Complain</h2>
        <p>
          You have the right to make a complaint at any time to the Information Commissioner’s Office (ICO), the UK supervisory authority for data protection issues.
        </p>
        <p><strong>Visit:</strong> <a href="https://ico.org.uk" target="_blank">www.ico.org.uk</a></p>
      </section>
    </article>
  );
}