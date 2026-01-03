import { GraduationCap, Award, ShieldCheck, Landmark } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4 text-center">
            About [Your Name]
          </h1>
          <p className="text-xl text-slate-600 text-center max-w-2xl mx-auto">
            Providing expert legal guidance with a commitment to integrity, transparency, and client care.
          </p>
        </div>
      </section>

      {/* Professional Bio Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            
            {/* Sidebar Stats */}
            <div className="md:col-span-1 space-y-6">
              <div className="p-6 bg-slate-900 rounded-2xl text-white">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Admitted</p>
                <p className="text-xl font-serif font-bold">[Year of Admission]</p>
                <div className="h-px bg-slate-700 my-4"></div>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">SRA Number</p>
                <p className="text-xl font-serif font-bold">[123456]</p>
              </div>

              <div className="space-y-4 text-sm text-slate-500 italic px-2">
                <p>“Legal excellence is not just about knowing the law; it’s about applying it with empathy and precision.”</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 prose prose-slate max-w-none">
              <h2 className="text-2xl font-serif font-bold text-slate-900">Professional Background</h2>
              <p>
                I am a qualified Solicitor of the Senior Courts of England and Wales. With over [X] years of experience in the legal sector, I specialize in [Your Practice Areas], helping clients navigate complex legal landscapes with confidence.
              </p>
              <p>
                Before establishing my own practice, I worked with [Previous Firm/Experience], where I developed a deep understanding of [Specific Legal Challenge].
              </p>

              <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10">Regulatory Commitment</h2>
              <p>
                As a solicitor, I am bound by the strict <strong>SRA Code of Conduct</strong>. This means my clients benefit from:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Strict professional confidentiality and legal privilege.</li>
                <li>Full Professional Indemnity Insurance (PII) coverage.</li>
                <li>Transparent pricing and fixed-fee options wherever possible.</li>
                <li>A commitment to acting in your best interests at all times.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl font-serif font-bold mb-12">Qualifications & Regulation</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex gap-4">
              <div className="text-blue-600"><GraduationCap size={32} /></div>
              <div>
                <h4 className="font-bold">Education</h4>
                <p className="text-sm text-slate-600">LLB (Hons) — [University]<br />Legal Practice Course — [Institution]</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex gap-4">
              <div className="text-blue-600"><ShieldCheck size={32} /></div>
              <div>
                <h4 className="font-bold">Insurance</h4>
                <p className="text-sm text-slate-600">Professional Indemnity Insurance provided by [Insurer Name].</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}