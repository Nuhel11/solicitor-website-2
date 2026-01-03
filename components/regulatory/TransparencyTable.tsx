// components/regulatory/TransparencyTable.tsx

interface Disbursement {
  item: string;
  cost: string;
}

interface PricingProps {
  title: string;
  priceRange: string;
  basis: string; // e.g., "Fixed Fee" or "Hourly rate of £250"
  vat: string;
  disbursements: Disbursement[];
  stages: string[];
  timescale: string;
  exclusions: string[];
}

export default function TransparencyTable({ data }: { data: PricingProps }) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden my-8">
      <div className="bg-slate-900 text-white p-4">
        <h3 className="text-xl font-serif font-bold">{data.title} - Price & Service Information</h3>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Costs Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-2">Estimated Costs</h4>
            <p className="text-2xl font-bold text-slate-900">{data.priceRange}</p>
            <p className="text-sm text-slate-500">Basis: {data.basis}</p>
            <p className="text-sm font-medium mt-1">VAT: {data.vat}</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-2">Likely Disbursements</h4>
            <ul className="text-sm space-y-1">
              {data.disbursements.map((d, i) => (
                <li key={i} className="flex justify-between border-b border-slate-100 py-1">
                  <span>{d.item}</span>
                  <span className="font-mono">{d.cost}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stages and Timeline */}
        <section className="border-t pt-6">
          <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-4">Key Stages & Timescales</h4>
          <div className="relative pl-6 border-l-2 border-slate-200 space-y-4">
            {data.stages.map((stage, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-900 border-4 border-white"></span>
                <p className="text-sm text-slate-700">{stage}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-900 italic">
            Typical Timescale: {data.timescale}
          </p>
        </section>

        {/* Mandatory Exclusions */}
        <section className="bg-amber-50 p-4 rounded text-sm">
          <h4 className="font-bold text-amber-900 mb-2">What is not included?</h4>
          <ul className="list-disc pl-5 text-amber-800 space-y-1">
            {data.exclusions.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>
      </div>
    </div>
  );
}