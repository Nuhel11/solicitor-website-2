// app/legal/complaints/page.tsx
export default function ComplaintsPage() {
  return (
    <article className="max-w-3xl mx-auto py-16 px-6 prose prose-slate">
      <h1 className="text-3xl font-serif font-bold text-slate-900 mb-6">Complaints Procedure</h1>
      <p className="text-lg text-slate-600 mb-8">
        We want to give you the best possible service. However, if at any point you become unhappy or concerned about the service we have provided, you should inform us immediately so that we can do our best to resolve the problem.
      </p>
      
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-bold border-b pb-2">Our Internal Process</h2>
        <p>
          <strong>Step 1:</strong> In the first instance, please contact the person working on your case to discuss your concerns. We will do our best to resolve any issues at this stage.
        </p>
        <p>
          <strong>Step 2:</strong> If you do not feel comfortable doing this, or if the issue remains unresolved, please contact <strong>[Your Name/Senior Partner]</strong> at <a href="mailto:[Your Email Address]" className="text-blue-600 underline">[Your Email Address]</a>.
        </p>
        <div className="bg-blue-50 p-4 rounded-md">
          <p className="m-0 text-sm">
            <strong>Timescale:</strong> We will acknowledge your complaint within <strong>5 working days</strong> and provide a full response within <strong>8 weeks</strong>. Making a complaint will not affect how we handle your case.
          </p>
        </div>
      </section>

      <section className="mt-12 p-6 bg-slate-50 border-l-4 border-slate-900 space-y-4">
        <h2 className="text-xl font-bold mt-0 text-slate-900">The Legal Ombudsman</h2>
        <p>
          If we are unable to resolve your complaint ourselves, you can then have the complaint independently looked at by the <strong>Legal Ombudsman</strong>. They investigate complaints about service issues with lawyers.
        </p>
        <p>
          You must take your complaint to the Legal Ombudsman:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Within <strong>six months</strong> of receiving a final response to your complaint from us; <strong>AND</strong></li>
          <li>No more than <strong>one year</strong> from the date of act/omission; <strong>OR</strong></li>
          <li>No more than <strong>one year</strong> from when you should reasonably have known there was cause for complaint.</li>
        </ul>
        
        <div className="text-sm space-y-1 pt-4">
          <p><strong>Visit:</strong> <a href="https://www.legalombudsman.org.uk" target="_blank" className="underline">www.legalombudsman.org.uk</a></p>
          <p><strong>Call:</strong> 0300 555 0333 (10am to 4pm)</p>
          <p><strong>Email:</strong> <a href="mailto:enquiries@legalombudsman.org.uk" className="underline">enquiries@legalombudsman.org.uk</a></p>
          <p><strong>Address:</strong> Legal Ombudsman, PO BOX 6167, Slough, SL1 0EH</p>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-bold border-b pb-2">Reporting to the SRA</h2>
        <p>
          If your concern is about our conduct (such as dishonesty, taking or losing your money, or unfair treatment), you can report us directly to the <strong>Solicitors Regulation Authority</strong>.
        </p>
        <p>
          <a 
            href="https://www.sra.org.uk/consumers/problems/report-solicitor" 
            target="_blank"
            className="inline-block bg-slate-900 text-white px-4 py-2 rounded text-sm no-underline hover:bg-slate-800"
          >
            Visit the SRA Website
          </a>
        </p>
      </section>
    </article>
  );
}