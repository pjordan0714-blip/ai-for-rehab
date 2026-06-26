import { LaptopIcon, PersonIcon, ChartIcon, TeamIcon, BandIcon, GraduationIcon } from "./Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  documentation: LaptopIcon,
  "patient-education": PersonIcon,
  "clinical-reasoning": ChartIcon,
  leadership: TeamIcon,
  hep: BandIcon,
  mentorship: GraduationIcon,
  default: LaptopIcon,
};

interface ImagePlaceholderProps {
  label: string;
  type?: string;
  aspect?: "wide" | "square";
}

export default function ImagePlaceholder({ label, type = "default", aspect = "wide" }: ImagePlaceholderProps) {
  const Icon = iconMap[type] || iconMap.default;
  return (
    <div className={`bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-3 ${aspect === "wide" ? "h-48 sm:h-56" : "h-40"}`}>
      <Icon className="w-12 h-12 text-slate-300" />
      <span className="text-xs text-slate-400 font-medium uppercase tracking-wider text-center px-4">{label}</span>
    </div>
  );
}
