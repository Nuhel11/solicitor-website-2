import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <div>
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-8">
              To discuss a new instruction or for general enquiries, please use the form or contact us directly. We aim to respond to all enquiries within one working day.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-full text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Phone</p>
                  <p className="text-slate-600">020 7946 0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-full text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Email</p>
                  <p className="text-slate-600">contact@yourfirm.co.uk</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-full text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Office</p>
                  <p className="text-slate-600">123 Chancery Lane, London, WC2A 1PP</p>
                </div>
              </div>
            </div>

            {/* MANDATORY REGULATORY NOTE */}
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex gap-3 text-blue-800 mb-2">
                <ShieldCheck size={20} />
                <p className="font-bold text-sm uppercase tracking-wider">Important Notice</p>
              </div>
              <p className="text-xs text-blue-700 leading-relaxed">
                Please note that contacting us through this form does not create a solicitor-client relationship. Confidential or time-sensitive information should not be sent through this form until a formal engagement letter has been signed. We process your data in accordance with our <a href="/legal/privacy-policy" className="underline font-semibold">Privacy Policy</a>.
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Service Required</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                  <option>Residential Conveyancing</option>
                  <option>Probate & Estates</option>
                  <option>Other Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32" placeholder="Briefly describe your matter..."></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors">
                Send Enquiry
              </button>
              <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest">
                Protected by UK GDPR & Data Protection Act 2018
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}