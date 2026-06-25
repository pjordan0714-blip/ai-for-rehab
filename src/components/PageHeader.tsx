interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">{title}</h1>
        <p className="text-lg text-slate-600 max-w-2xl">{description}</p>
      </div>
    </div>
  );
}
