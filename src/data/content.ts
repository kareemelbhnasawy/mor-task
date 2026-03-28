import type { Benefit, Ingredient, Testimonial, Product, FAQItem, TestHypothesis } from './types';
import { images } from './images';

export const heroContent = {
  badge: 'The Relax Collection',
  headline: 'Let the Day\nFall Away',
  subheadline: 'Stillwell Calm Mist — a ritual of French lavender, wild chamomile, and vetiver root. One breath and your body remembers how to rest.',
  cta: 'Shop Calm Mist',
  secondaryCta: 'Explore the Range',
  rating: '4.9',
  reviewCount: '2,847',
  priceFrom: '$38',
};

export const benefits: Benefit[] = [
  {
    id: 'b1',
    icon: 'Moon',
    title: 'Clinically Calming',
    description: 'Independent sleep studies show 73% of users fell asleep faster within one week of nightly use.',
  },
  {
    id: 'b2',
    icon: 'Leaf',
    title: '100% Natural Origin',
    description: 'Every ingredient is plant-derived and ethically sourced. No synthetics, no parabens, no compromises.',
  },
  {
    id: 'b3',
    icon: 'Droplets',
    title: 'Micro-Fine Mist',
    description: 'Our patented atomiser delivers an ultra-light veil that settles gently on skin, linen, and hair without residue.',
  },
  {
    id: 'b4',
    icon: 'Shield',
    title: 'Dermatologist Tested',
    description: 'Formulated for sensitive skin. Hypoallergenic and pH-balanced to work in harmony with your body.',
  },
];

export const ingredients: Ingredient[] = [
  {
    id: 'i1',
    name: 'French Lavender',
    origin: 'Provence, France',
    description: 'Hand-harvested at peak bloom from high-altitude fields in Provence. Our lavender carries a deeper, more complex floral note than common varieties — rich in linalool, the compound linked to reduced cortisol levels.',
    color: 'bg-lavender-light/30',
  },
  {
    id: 'i2',
    name: 'Wild Chamomile',
    origin: 'Atlas Mountains, Morocco',
    description: 'Sourced from wild meadows in the Atlas range, this chamomile is steam-distilled within hours of harvest. Its warm, honeyed scent contains bisabolol — a natural anti-inflammatory that soothes both skin and mind.',
    color: 'bg-sand-light/40',
  },
  {
    id: 'i3',
    name: 'Vetiver Root',
    origin: 'Tamil Nadu, India',
    description: 'Deep-rooted vetiver is known as "the oil of tranquility" in Ayurvedic tradition. Our single-origin extract provides the earthy, grounding base note that anchors the blend and lingers gently through the night.',
    color: 'bg-sage/10',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah M.',
    location: 'London, UK',
    rating: 5,
    text: 'I was sceptical about pillow sprays, but Calm Mist is something else entirely. The scent is sophisticated — not overpowering — and I genuinely fall asleep faster. It\'s become my non-negotiable nightly ritual.',
    verified: true,
  },
  {
    id: 't2',
    name: 'James K.',
    location: 'Melbourne, AU',
    rating: 5,
    text: 'Bought this for my partner and ended up stealing it for myself. The mist is incredibly fine — no damp patches on the pillow. The vetiver gives it a depth that most lavender products lack. Outstanding quality.',
    verified: true,
  },
  {
    id: 't3',
    name: 'Dr. Priya Nair',
    location: 'Toronto, CA',
    rating: 5,
    text: 'As a neurologist, I recommend sensory rituals for better sleep hygiene. Stillwell\'s formulation is one of the few I\'ve seen that uses therapeutic-grade ingredients. Highly recommend for anyone building a wind-down routine.',
    verified: true,
  },
  {
    id: 't4',
    name: 'Elena R.',
    location: 'Brooklyn, NY',
    rating: 4,
    text: 'The packaging alone feels like a treat. I spray it on my sheets, my robe, even my yoga mat. The scent lasts all night without being cloying. The only reason it\'s not five stars is I wish the bottle were bigger.',
    verified: true,
  },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Calm Mist',
    tagline: 'Pillow & Body Spray',
    description: 'Our signature relaxation mist. A single spritz transforms your space into a sanctuary of calm.',
    price: '$38',
    size: '100ml',
    badge: 'Bestseller',
    gradient: 'from-lavender-light/20 to-sand-light/20',
    image: images.calmMist,
    imageAlt: 'Calm Mist botanical spray bottles on marble surface',
  },
  {
    id: 'p2',
    name: 'Deep Soak',
    tagline: 'Bath Oil Concentrate',
    description: 'A few drops turn any bath into a restorative ritual. Milky, moisturising, and deeply aromatic.',
    price: '$52',
    size: '200ml',
    gradient: 'from-sage/10 to-lavender-light/10',
    image: images.bathOil,
    imageAlt: 'Luxury bath scene with candle, bath salts, and essential oils',
  },
  {
    id: 'p3',
    name: 'Night Balm',
    tagline: 'Pulse-Point Salve',
    description: 'Warm between palms, press to pulse points, breathe deeply. Beeswax-based for slow, lasting release.',
    price: '$28',
    size: '30g',
    gradient: 'from-sand-light/30 to-blush/10',
    image: images.balm,
    imageAlt: 'Elegant cream jar with gold lid on neutral background',
  },
];

export const faqs: FAQItem[] = [
  {
    id: 'f1',
    question: 'What makes Calm Mist different from other pillow sprays?',
    answer: 'Calm Mist uses therapeutic-grade essential oils in a patented micro-fine atomiser that creates an ultra-light veil — no damp spots, no residue. Our blend is independently tested for sleep quality improvements, not just scent.',
  },
  {
    id: 'f2',
    question: 'Is it safe for sensitive skin?',
    answer: 'Yes. Every product in the Relax range is dermatologist-tested, hypoallergenic, and free from synthetic fragrances, parabens, and sulphates. It\'s pH-balanced to work in harmony with all skin types, including sensitive and reactive skin.',
  },
  {
    id: 'f3',
    question: 'How long does the scent last?',
    answer: 'On linen, the scent typically lasts 6-8 hours. On skin, expect 3-4 hours of gentle presence. The vetiver base note is the last to fade, providing a grounding whisper through the night.',
  },
  {
    id: 'f4',
    question: 'Can I use it on my body directly?',
    answer: 'Absolutely. Calm Mist is formulated for both body and linen use. Spray onto pulse points — wrists, neck, behind ears — or mist lightly over your chest before bed. It works beautifully on hair too.',
  },
  {
    id: 'f5',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely delighted with your purchase, return it for a full refund — no questions asked. We want you to feel confident trying Stillwell.',
  },
  {
    id: 'f6',
    question: 'Is the packaging recyclable?',
    answer: 'Yes. Our bottles are made from 40% post-consumer recycled glass and are fully recyclable. The atomiser cap is made from aluminium. Outer packaging is FSC-certified recyclable card with soy-based ink.',
  },
];

export const testHypotheses: TestHypothesis[] = [
  {
    id: 'h1',
    title: 'Hero Headline A/B',
    hypothesis: '"Let the Day Fall Away" vs "Sleep Isn\'t a Luxury" — emotional vs empowerment framing may shift CTR by 10-15%.',
    why: 'The hero headline is the first thing paid social users see. Emotional resonance vs aspirational framing speaks to different audience segments.',
    metric: 'Click-through rate (CTR)',
    priority: 'high',
    status: 'ready',
    expectedImpact: '+12% CTR',
  },
  {
    id: 'h2',
    title: 'CTA Wording Test',
    hypothesis: '"Shop Calm Mist" vs "Try Calm Mist" vs "Get Yours" — purchase-intent vs low-commitment language affects add-to-cart rate.',
    why: 'For cold paid social traffic, lower-commitment CTAs may reduce friction. For warm retargeted users, direct purchase language may convert better.',
    metric: 'Add-to-cart rate',
    priority: 'high',
    status: 'ready',
    expectedImpact: '+8% ATC',
  },
  {
    id: 'h3',
    title: 'Social Proof Placement',
    hypothesis: 'Moving testimonials above the product section (earlier in scroll) may increase conversion by reducing uncertainty sooner.',
    why: 'Paid social users have low trust. Surfacing social proof earlier in the journey may anchor credibility before the product pitch.',
    metric: 'Conversion rate',
    priority: 'high',
    status: 'ready',
    expectedImpact: '+6% CVR',
  },
  {
    id: 'h4',
    title: 'Scent Story Format',
    hypothesis: 'Visual ingredient cards with origin stories vs simple text list — rich storytelling may increase scroll depth and time on page.',
    why: 'Wellness buyers are emotionally driven. Ingredient provenance builds perceived quality and justifies premium pricing.',
    metric: 'Scroll depth',
    priority: 'medium',
    status: 'ready',
    expectedImpact: '+20% scroll depth',
  },
  {
    id: 'h5',
    title: 'FAQ Visibility',
    hypothesis: 'Showing 3 FAQs open by default vs all collapsed — pre-opening top objection-handling FAQs may reduce bounce rate.',
    why: 'Key objections (sensitive skin, scent longevity) need answering before CTA. If hidden behind a click, users may bounce instead.',
    metric: 'Bounce rate',
    priority: 'medium',
    status: 'ready',
    expectedImpact: '-5% bounce rate',
  },
  {
    id: 'h6',
    title: 'Product Image Style',
    hypothesis: 'Lifestyle imagery (product in bedroom scene) vs clean product-only shots — lifestyle may drive higher emotional engagement.',
    why: 'DTC wellness brands see higher conversion with aspirational lifestyle imagery, but clean product shots build trust and clarity.',
    metric: 'Click-through rate (CTR)',
    priority: 'medium',
    status: 'ready',
    expectedImpact: '+10% CTR',
  },
  {
    id: 'h7',
    title: 'Primary CTA Color',
    hypothesis: 'Sage green CTA vs warm gold CTA — testing whether earthy calm or premium warmth drives more clicks.',
    why: 'Green signals "natural" and "go," while gold signals "premium" and "luxury." Both align with brand but may convert differently.',
    metric: 'Click-through rate (CTR)',
    priority: 'low',
    status: 'ready',
    expectedImpact: '+5% CTR',
  },
  {
    id: 'h8',
    title: 'Trust Messaging Near CTA',
    hypothesis: 'Adding "Free shipping + 30-day returns" badge near CTA may reduce purchase anxiety and increase conversion.',
    why: 'Paid social users are impulse-driven. Removing friction signals near the conversion point addresses last-moment hesitation.',
    metric: 'Conversion rate',
    priority: 'low',
    status: 'ready',
    expectedImpact: '+4% CVR',
  },
];
