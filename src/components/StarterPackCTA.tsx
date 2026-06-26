'use client';

export default function StarterPackCTA() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Starter pack signup coming soon! This will be connected to an email service.');
  };

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border-2 border-teal-200 rounded-2xl p-8 md:p-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">Free Resource</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Get the Free AI for Rehab Starter Pack
            </h2>
            <p className="text-slate-600 mb-4">
              A simple starter pack with editable templates and prompts to help
              rehab teams use AI safely and practically.
            </p>
            <ul className="text-sm text-slate-600 space-y-2 mb-8 text-left max-w-md mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5 shrink-0">✓</span>
                AI Use Policy One-Page Template
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5 shrink-0">✓</span>
                Before You Paste Into AI Checklist
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5 shrink-0">✓</span>
                Low Visits Diagnostic Prompt
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5 shrink-0">✓</span>
                AI Scribe Rollout Checklist
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5 shrink-0">✓</span>
                Front Desk Safe Scripts Starter Set
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-teal-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap"
              >
                Send me the starter pack
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-4">
              Join the list and I&apos;ll send the starter pack when it&apos;s ready. No spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
