'use client';

export default function WorkflowCTA() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Newsletter signup coming soon! This will be connected to an email service.');
  };

  return (
    <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center">
      <h3 className="text-lg font-bold text-teal-800 mb-2">
        Want more practical AI workflows for rehab clinics?
      </h3>
      <p className="text-teal-700 text-sm mb-6">
        Subscribe for field-tested prompts, checklists, and implementation lessons. No spam. No hype.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="you@example.com"
          required
          className="flex-1 px-4 py-3 rounded-lg border border-teal-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        <button type="submit" className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
          Subscribe
        </button>
      </form>
    </div>
  );
}
