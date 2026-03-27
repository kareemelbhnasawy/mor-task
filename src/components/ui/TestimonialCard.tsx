import { Star, BadgeCheck } from 'lucide-react';
import type { Testimonial } from '../../data/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="flex items-center gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
          />
        ))}
      </div>

      <blockquote className="text-slate text-sm md:text-base leading-relaxed flex-1 mb-6">
        "{testimonial.text}"
      </blockquote>

      <footer className="flex items-center gap-3 pt-4 border-t border-cream-dark">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender-light/40 to-sage/20 flex items-center justify-center text-sage font-heading font-semibold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-midnight">
              {testimonial.name}
            </span>
            {testimonial.verified && (
              <BadgeCheck className="w-4 h-4 text-sage" aria-label="Verified purchase" />
            )}
          </div>
          <span className="text-xs text-muted">{testimonial.location}</span>
        </div>
      </footer>
    </article>
  );
}
