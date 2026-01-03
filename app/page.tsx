// app/page.tsx
import Link from 'next/link';
import { 
  ShieldCheck, 
  Scale, 
  Clock, 
  ArrowRight, 
  Award, 
  Gavel, 
  GraduationCap,
  Home,
  FileText,
  Users
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <ShieldCheck size={16} />
                <span>SRA Regulated: 123456</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
                Expert Legal Guidance <br />
                <span className="text-blue-400">Tailored to Your Journey.</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-lg">
                Providing transparent, specialist legal services in Residential Conveyancing and Private Client law. Authorised and regulated by the Solicitors Regulation Authority.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services/conveyancing" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all group"
                >
                  View Fees & Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-lg transition-all"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <Scale className="text-blue-400 mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">Regulated Excellence</h3>
                <p className="text-slate-400 text-sm">Strict adherence to SRA standards and ethics.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 mt-8">
                <Clock className="text-blue-400 mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">Clear Timelines</h3>
                <p className="text-slate-400 text-sm">Transparent process stages for every case.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & CREDENTIALS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden relative z-10 border border-slate-200 shadow-xl flex items-center justify-center">
                 <span className="text-slate-400 italic font-serif text-sm">[Your Professional Image]</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border border-slate-100 z-20 max-w-[240px]">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Award size={20} />
                  <span className="font-bold text-[10px] uppercase tracking-widest text-slate-900">Verified Practitioner</span>
                </div>
                <p className="text-sm font-medium text-slate-700 leading-snug">
                  Admitted to the Roll of Solicitors in England & Wales.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight">
                Regulated Legal Expertise <br />
                <span className="text-blue-600 italic">Focused on Your Success.</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                I am [Your Name], a qualified solicitor dedicated to providing clear, fixed-fee legal advice. My practice is built on the pillars of transparency, integrity, and meticulous attention to detail.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600 h-fit">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 underline decoration-blue-200 underline-offset-4">Qualified & Insured</h4>
                    <p className="text-sm text-slate-600">Holding a full practicing certificate and professional indemnity insurance in accordance with SRA rules.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600 h-fit">
                    <Gavel size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 underline decoration-blue-200 underline-offset-4">SRA Code of Conduct</h4>
                    <p className="text-sm text-slate-600">Strictly operating under the professional standards set by the Solicitors Regulation Authority.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 flex items-center gap-10">
                <div>
                  <p className="text-3xl font-bold text-slate-900">[X]+</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">100%</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Fixed Fee Transparency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Practice Areas</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Providing specialist legal support with clear pricing and dedicated expertise.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Conveyancing', 
              icon: <Home className="text-blue-600" />, 
              desc: 'Expert support for buying, selling, or remortgaging your home.',
              link: '/services/conveyancing' 
            },
            { 
              title: 'Wills & Probate', 
              icon: <FileText className="text-blue-600" />, 
              desc: 'Clear guidance on estate planning and uncontested probate matters.',
              link: '/services/probate' 
            },
            { 
              title: 'Employment Law', 
              icon: <Users className="text-blue-600" />, 
              desc: 'Advising on tribunal claims and settlement agreements.',
              link: '/services/employment' 
            }
          ].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.desc}</p>
              <Link 
                href={service.link} 
                className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                View Fees & Process <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. QUICK LINKS SECTION (Compliance boost) */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
            Mandatory Regulatory Information
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-sm font-bold text-slate-600">
            <Link href="/legal/complaints" className="hover:text-blue-600 transition-colors">Complaints Procedure</Link>
            <Link href="/services/conveyancing" className="hover:text-blue-600 transition-colors">Fees & Services</Link>
            <Link href="/legal/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}