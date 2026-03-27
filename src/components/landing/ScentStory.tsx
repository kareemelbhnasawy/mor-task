import { MapPin } from 'lucide-react';
import { SectionHeading } from '../ui';
import { ingredients } from '../../data/content';

export function ScentStory() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-label="Scent story">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <SectionHeading
          label="The Blend"
          title="Three Botanicals, One Ritual"
          description="Each ingredient is chosen for its calming properties and sourced from its place of origin — where the soil, altitude, and climate produce the purest expression."
        />

        <div className="mt-14 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
          {ingredients.map((ingredient, i) => (
            <article
              key={ingredient.id}
              className={`
                relative rounded-2xl p-6 md:p-8 ${ingredient.color}
                border border-cream-dark/50
                hover:shadow-md transition-shadow duration-300
              `}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold tracking-wider uppercase text-sage">
                  0{i + 1}
                </span>
                <span className="w-8 h-px bg-sage/30" />
              </div>

              <h3 className="font-heading text-2xl font-semibold text-midnight mb-1">
                {ingredient.name}
              </h3>

              <div className="flex items-center gap-1.5 text-sm text-stone mb-4">
                <MapPin className="w-3.5 h-3.5" />
                {ingredient.origin}
              </div>

              <p className="text-sm md:text-base text-muted leading-relaxed">
                {ingredient.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
