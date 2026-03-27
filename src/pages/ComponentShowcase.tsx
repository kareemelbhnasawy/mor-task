import { Link } from 'react-router-dom';
import { ArrowLeft, Palette } from 'lucide-react';
import {
  PrimaryButton,
  SecondaryButton,
  SectionHeading,
  BenefitCard,
  TestimonialCard,
  ProductHighlightBlock,
  FAQAccordionRow,
} from '../components/ui';
import { benefits, testimonials, products, faqs } from '../data/content';

function ShowcaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16" aria-label={title}>
      <h2 className="font-heading text-xl font-semibold text-midnight mb-2">{title}</h2>
      <div className="w-12 h-0.5 bg-sage mb-8" />
      {children}
    </section>
  );
}

export function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-cream-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-6 md:py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-sage transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Landing Page
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <Palette className="w-6 h-6 text-sage" />
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-midnight">
              Component Showcase
            </h1>
          </div>
          <p className="text-sm text-muted max-w-xl">
            A visual inventory of all reusable UI components in the Stillwell design system.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-10 md:py-14">
        {/* Color Palette */}
        <ShowcaseSection title="Color Palette">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Sage', class: 'bg-sage', hex: '#7B8F6B' },
              { name: 'Sage Dark', class: 'bg-sage-dark', hex: '#5A6E4C' },
              { name: 'Sage Light', class: 'bg-sage-light', hex: '#9AAD8C' },
              { name: 'Lavender', class: 'bg-lavender', hex: '#9B8EC4' },
              { name: 'Stone', class: 'bg-stone', hex: '#8C7E72' },
              { name: 'Sand', class: 'bg-sand', hex: '#D4C5B5' },
              { name: 'Cream', class: 'bg-cream', hex: '#FAF8F5' },
              { name: 'Midnight', class: 'bg-midnight', hex: '#2C2C35' },
              { name: 'Slate', class: 'bg-slate', hex: '#4A4A56' },
              { name: 'Muted', class: 'bg-muted', hex: '#7A7A86' },
              { name: 'Blush', class: 'bg-blush', hex: '#D4A0A0' },
              { name: 'Sand Light', class: 'bg-sand-light', hex: '#E8DDD2' },
            ].map((color) => (
              <div key={color.name} className="text-center">
                <div className={`${color.class} w-full aspect-square rounded-xl shadow-sm border border-cream-dark/30`} />
                <p className="text-xs font-semibold text-midnight mt-2">{color.name}</p>
                <p className="text-[10px] text-muted">{color.hex}</p>
              </div>
            ))}
          </div>
        </ShowcaseSection>

        {/* Typography */}
        <ShowcaseSection title="Typography">
          <div className="bg-white rounded-2xl p-6 md:p-8 space-y-6">
            <div>
              <span className="text-xs text-muted uppercase tracking-wider">Heading — Lora</span>
              <p className="font-heading text-4xl font-bold text-midnight mt-1">The Art of Rest</p>
            </div>
            <div>
              <span className="text-xs text-muted uppercase tracking-wider">Subheading — Lora</span>
              <p className="font-heading text-2xl font-semibold text-midnight mt-1">Crafted for Calm</p>
            </div>
            <div>
              <span className="text-xs text-muted uppercase tracking-wider">Body — Raleway</span>
              <p className="font-body text-base text-slate mt-1 leading-relaxed max-w-lg">
                Every ingredient is plant-derived and ethically sourced. No synthetics, no parabens, no compromises. Formulated for real rest.
              </p>
            </div>
            <div>
              <span className="text-xs text-muted uppercase tracking-wider">Label — Raleway</span>
              <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-sage mt-1">
                The Relax Collection
              </p>
            </div>
          </div>
        </ShowcaseSection>

        {/* Buttons */}
        <ShowcaseSection title="Buttons">
          <div className="bg-white rounded-2xl p-6 md:p-8 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-midnight mb-4">PrimaryButton</h3>
              <div className="flex flex-wrap gap-3">
                <PrimaryButton size="sm">Small</PrimaryButton>
                <PrimaryButton size="md">Medium</PrimaryButton>
                <PrimaryButton size="lg">Large</PrimaryButton>
                <PrimaryButton disabled>Disabled</PrimaryButton>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-midnight mb-4">SecondaryButton</h3>
              <div className="flex flex-wrap gap-3">
                <SecondaryButton size="sm">Small</SecondaryButton>
                <SecondaryButton size="md">Medium</SecondaryButton>
                <SecondaryButton size="lg">Large</SecondaryButton>
                <SecondaryButton disabled>Disabled</SecondaryButton>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        {/* SectionHeading */}
        <ShowcaseSection title="SectionHeading">
          <div className="bg-white rounded-2xl p-6 md:p-8 space-y-12">
            <SectionHeading
              label="Label Text"
              title="Centered Heading"
              description="This is a centered section heading with label, title, and description text."
            />
            <SectionHeading
              label="Left Aligned"
              title="Left-Aligned Heading"
              description="This variant is left-aligned for asymmetric layouts."
              align="left"
            />
          </div>
        </ShowcaseSection>

        {/* BenefitCard */}
        <ShowcaseSection title="BenefitCard">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <BenefitCard key={b.id} benefit={b} index={i} />
            ))}
          </div>
        </ShowcaseSection>

        {/* TestimonialCard */}
        <ShowcaseSection title="TestimonialCard">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </ShowcaseSection>

        {/* ProductHighlightBlock */}
        <ShowcaseSection title="ProductHighlightBlock">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ProductHighlightBlock key={p.id} product={p} featured={i === 0} />
            ))}
          </div>
        </ShowcaseSection>

        {/* FAQAccordionRow */}
        <ShowcaseSection title="FAQAccordionRow">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            {faqs.slice(0, 3).map((item, i) => (
              <FAQAccordionRow key={item.id} item={item} defaultOpen={i === 0} />
            ))}
          </div>
        </ShowcaseSection>
      </main>
    </div>
  );
}
