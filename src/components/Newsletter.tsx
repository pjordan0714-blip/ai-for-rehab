'use client';

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Newsletter signup coming soon! This will be connected to an email service.');
  };

  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-3">
          Get practical AI workflows for rehab leaders.
        </h2>
        <p className="text-slate-600 mb-8">
          No spam. No hype. Just useful tools and lessons from the field.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="you@example.com"
            required
            className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
