import { notFound } from 'next/navigation';
import TransparencyTable from '@/components/regulatory/TransparencyTable';

// 1. Define a strict Interface to avoid 'any'
interface ServiceDetail {
  title: string;
  priceRange: string;
  basis: string;
  vat: string;
  disbursements: Array<{ item: string; cost: string }>;
  stages: string[];
  timescale: string;
  exclusions: string[];
}

const servicesData: Record<string, ServiceDetail> = {
  "conveyancing": {
    title: "Residential Property Purchase",
    priceRange: "£900 - £1,800",
    basis: "Fixed fee based on property value up to £500,000",
    vat: "Charged at 20% on our legal fees",
    disbursements: [
      { item: "HM Land Registry Fee", cost: "£150.00" },
      { item: "Search Bundle", cost: "£350.00" },
      { item: "Electronic Money Transfer Fee", cost: "£40.00" }
    ],
    stages: [
      "Initial instructions and ID checks",
      "Review of contract documents",
      "Conducting searches",
      "Exchange and Completion"
    ],
    timescale: "8 to 12 weeks on average",
    exclusions: ["Advice on tax", "Unregistered land issues"]
  },
};

// 2. Define the types for Next.js 15 Dynamic Routes
type Props = {
  params: Promise<{ service: string }>;
};

// 3. Make the function 'async' to await the params
export default async function ServicePage({ params }: Props) {
  // Await the params promise (Required in Next.js 15)
  const resolvedParams = await params;
  const serviceSlug = resolvedParams.service;

  const data = servicesData[serviceSlug];

  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <header className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">
          {data.title}
        </h1>
        <p className="text-lg text-slate-600">
          Transparent pricing and clear stages for your legal matter.
        </p>
      </header>

      {/* The SRA Compliant Table */}
      <TransparencyTable data={data} />

      {/* MANDATORY: Experience & Qualifications Section */}
      <section className="mt-16 p-8 bg-slate-50 rounded-xl border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Who will be handling your matter?</h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h3 className="text-lg font-bold">[Your Name]</h3>
            <p className="text-slate-700 font-medium">Solicitor & Founder</p>
            <p className="text-sm text-slate-500 mt-1 italic">SRA Number: [Your Individual SRA ID]</p>
            
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p><strong>Qualifications:</strong> [e.g., LLB (Hons), LPC]</p>
              <p><strong>Year of Admission:</strong> [e.g., 2015]</p>
              <p>
                [Your Name] has over [X] years of experience in {data.title}. 
                They are supervised by [Name/Self-Supervised].
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}