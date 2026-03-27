import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-40 md:hidden
        transition-transform duration-300 ease-out
        ${visible ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-cream-dark px-5 py-3 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-heading font-semibold text-midnight">Calm Mist</p>
          <p className="text-xs text-muted">From $38 &middot; Free shipping</p>
        </div>
        <button className="flex items-center gap-2 bg-sage text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-md shadow-sage/20 hover:bg-sage-dark transition-colors duration-200 cursor-pointer">
          <ShoppingBag className="w-4 h-4" />
          Add to Bag
        </button>
      </div>
    </div>
  );
}
