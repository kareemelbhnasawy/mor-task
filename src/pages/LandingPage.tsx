import {
  Hero,
  Benefits,
  ScentStory,
  SocialProof,
  ProductHighlights,
  FAQ,
  FinalCTA,
  StickyMobileCTA,
} from '../components/landing';

export function LandingPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <div id="scent-story">
        <ScentStory />
      </div>
      <div id="reviews">
        <SocialProof />
      </div>
      <ProductHighlights />
      <div id="faq">
        <FAQ />
      </div>
      <FinalCTA />
      <StickyMobileCTA />
    </>
  );
}
