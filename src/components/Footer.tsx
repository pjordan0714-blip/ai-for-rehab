import Link from 'next/link';
import { navigation } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-2">AI for Rehab</h3>
            <p className="text-slate-400 text-sm">
              Practical AI workflows for rehab professionals.
            </p>
            <p className="text-slate-400 text-sm mt-4">
              contact@aiforrehab.com
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Pages</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/safety" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Safety &amp; Compliance
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-500">
          &copy; 2026 AI for Rehab. All rights reserved. This site provides education, not legal, billing, compliance, or medical advice.
        </div>
      </div>
    </footer>
  );
}
