import { ShoppingBag } from 'lucide-react';
import type { Product } from '../../data/types';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';

interface ProductHighlightBlockProps {
  product: Product;
  featured?: boolean;
}

export function ProductHighlightBlock({ product, featured = false }: ProductHighlightBlockProps) {
  return (
    <article
      className={`
        group relative rounded-2xl overflow-hidden
        ${featured ? 'md:col-span-2 md:row-span-2' : ''}
        bg-white shadow-sm hover:shadow-md transition-all duration-300
      `}
    >
      {product.badge && (
        <span className="absolute top-4 right-4 z-10 bg-sage text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      <div className={`aspect-square md:aspect-[4/3] bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.imageAlt || product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <span className="font-heading text-2xl md:text-3xl font-semibold text-sage-dark">
                {product.name.charAt(0)}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="font-heading text-xl font-semibold text-midnight">
              {product.name}
            </h3>
            <span className="text-sm text-sage font-medium">{product.tagline}</span>
          </div>
          <span className="text-xl font-heading font-semibold text-midnight whitespace-nowrap">
            {product.price}
          </span>
        </div>
        <p className="text-sm text-muted leading-relaxed mt-3 mb-5">
          {product.description}
        </p>
        {featured ? (
          <PrimaryButton fullWidth>
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </PrimaryButton>
        ) : (
          <SecondaryButton fullWidth size="sm">
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </SecondaryButton>
        )}
      </div>
    </article>
  );
}
