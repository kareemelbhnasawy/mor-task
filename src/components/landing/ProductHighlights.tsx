import { SectionHeading, ProductHighlightBlock } from '../ui';
import { products } from '../../data/content';

export function ProductHighlights() {
  return (
    <section className="py-20 md:py-28 bg-cream" aria-label="Products">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <SectionHeading
          label="The Relax Range"
          title="Build Your Evening Ritual"
          description="Calm Mist is just the beginning. Layer with our bath oil and balm for a complete wind-down routine."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductHighlightBlock
              key={product.id}
              product={product}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
