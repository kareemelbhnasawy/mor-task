import { SectionHeading, BenefitCard } from '../ui';
import { benefits } from '../../data/content';

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-cream" aria-label="Benefits">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <SectionHeading
          label="Why Stillwell"
          title="Formulated for Real Rest"
          description="Every detail of Calm Mist is designed with one purpose: to help your body and mind transition from the noise of the day into genuine, restorative calm."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
