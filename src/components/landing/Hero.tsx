import { Star, ArrowDown } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../ui';
import { heroContent } from '../../data/content';
import { images } from '../../data/images';

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-lavender-light/15 via-cream to-cream" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage/5 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-lavender-light/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-sage/5 blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-sage mb-6 animate-fade-in-up">
              {heroContent.badge}
            </span>

            <h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-midnight leading-[1.1] mb-6 animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              {heroContent.headline.split('\n').map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h1>

            <p
              className="text-base md:text-lg text-muted leading-relaxed max-w-lg mb-8 animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              {heroContent.subheadline}
            </p>

            {/* Rating badge */}
            <div
              className="flex items-center gap-3 mb-8 animate-fade-in-up"
              style={{ animationDelay: '250ms' }}
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-midnight">
                {heroContent.rating}
              </span>
              <span className="text-sm text-muted">
                ({heroContent.reviewCount} reviews)
              </span>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              <PrimaryButton size="lg">
                {heroContent.cta} &mdash; from {heroContent.priceFrom}
              </PrimaryButton>
              <SecondaryButton size="lg">
                {heroContent.secondaryCta}
              </SecondaryButton>
            </div>

            {/* Trust signals */}
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-xs text-muted animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <span>Free shipping over $50</span>
              <span className="w-1 h-1 rounded-full bg-sand" />
              <span>30-day returns</span>
              <span className="w-1 h-1 rounded-full bg-sand" />
              <span>Cruelty-free</span>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="aspect-[3/4] rounded-3xl shadow-xl shadow-sage/10 overflow-hidden">
                <img
                  src={images.heroProduct}
                  alt="Stillwell Calm Mist — amber bottle with botanical shadow"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-midnight">Bestseller</p>
                  <p className="text-xs text-muted">2,847 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <button
            onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-muted hover:text-sage transition-colors duration-200 cursor-pointer"
            aria-label="Scroll to benefits"
          >
            <span className="text-xs tracking-wider uppercase">Discover</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
