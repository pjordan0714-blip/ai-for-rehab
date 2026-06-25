'use client';

import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/Newsletter";
import { prompts } from "@/data/prompts";
import { useState } from "react";

function PromptCard({ prompt }: { prompt: typeof prompts[0] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 bg-white border border-slate-200 rounded-xl">
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-2 py-1 text-xs font-medium bg-teal-50 text-teal-700 rounded">
          {prompt.category}
        </span>
        <span className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded">
          {prompt.audience}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        {prompt.title}
      </h3>
      <p className="text-sm text-slate-600 mb-4">{prompt.description}</p>
      <div className="relative">
        <pre className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700 whitespace-pre-wrap font-mono">
          {prompt.prompt}
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-3 py-1 text-xs font-medium bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default function PromptsPage() {
  return (
    <>
      <PageHeader
        title="Prompt Library"
        description="Ready-to-use prompts tested in real rehab workflows. Copy, customize, and use them with any AI assistant."
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {prompts.map((prompt) => (
              <PromptCard key={prompt.title} prompt={prompt} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
