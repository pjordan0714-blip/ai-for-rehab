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
        description="Copy-and-paste prompts built for rehab workflows. Each one has been tested in real clinic and leadership settings."
      />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          {/* PHI Warning */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-10">
            <h3 className="text-lg font-bold text-red-800 mb-2">
              Do Not Enter Patient Information
            </h3>
            <p className="text-sm text-red-700 mb-2">
              These prompts are designed for use with general-purpose AI tools
              like ChatGPT, Claude, or Gemini. <strong>Do not paste
              protected health information (PHI)</strong> into any of these
              tools unless your organization has a signed BAA with the provider
              and has approved the tool for that use.
            </p>
            <p className="text-sm text-red-700">
              When a prompt says &quot;paste your text here,&quot; use
              de-identified or example content. If you need to work with real
              patient data, use only tools your compliance team has approved.
            </p>
          </div>

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
