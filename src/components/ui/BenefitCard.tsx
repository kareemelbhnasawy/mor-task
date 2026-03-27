import { Moon, Leaf, Droplets, Shield } from 'lucide-react';
import type { Benefit } from '../../data/types';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Moon,
  Leaf,
  Droplets,
  Shield,
};

interface BenefitCardProps {
  benefit: Benefit;
  index?: number;
}

export function BenefitCard({ benefit, index = 0 }: BenefitCardProps) {
  const Icon = iconMap[benefit.icon] || Leaf;

  return (
    <article
      className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center mb-5 group-hover:bg-sage/15 transition-colors duration-300">
        <Icon className="w-6 h-6 text-sage" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-midnight mb-2">
        {benefit.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">
        {benefit.description}
      </p>
    </article>
  );
}
