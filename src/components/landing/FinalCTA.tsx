import { Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { PrimaryButton } from '../ui';

export function FinalCTA() {
  return (
    <section
      className="py-20 md:py-28 bg-gradient-to-br from-midnight via-slate to-midnight text-white relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-lavender/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-sage/5 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 lg:px-12 text-center">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-sage-light mb-6">
          Your Ritual Starts Tonight
        </span>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Sleep Better,<br />Feel Everything Better
        </h2>

        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
          One mist, every evening. Calm Mist helps you draw a clear line between your day and your rest — so you wake up feeling genuinely renewed.
        </p>

        <PrimaryButton size="lg" className="bg-white! text-midnight! hover:bg-cream! shadow-lg shadow-white/10 hover:shadow-white/20">
          Shop Calm Mist &mdash; $38
        </PrimaryButton>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm text-white/50">
          <span className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            Free shipping over $50
          </span>
          <span className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            30-day returns
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Satisfaction guaranteed
          </span>
        </div>
      </div>
    </section>
  );
}
