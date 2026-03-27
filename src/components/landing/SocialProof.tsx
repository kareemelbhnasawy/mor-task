import { Star } from 'lucide-react';
import { SectionHeading, TestimonialCard } from '../ui';
import { testimonials } from '../../data/content';

export function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-cream to-cream-dark/30" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <SectionHeading
          label="Real Voices"
          title="Loved by Thousands"
          description="Don't just take our word for it. Here's what our community says about making Calm Mist part of their nightly ritual."
        />

        {/* Aggregate rating */}
        <div className="flex items-center justify-center gap-4 mt-8 mb-14">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-lg font-heading font-semibold text-midnight">4.9</span>
          <span className="text-sm text-muted">from 2,847 reviews</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
