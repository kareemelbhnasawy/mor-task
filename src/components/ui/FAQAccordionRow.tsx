import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../../data/types';

interface FAQAccordionRowProps {
  item: FAQItem;
  defaultOpen?: boolean;
}

export function FAQAccordionRow({ item, defaultOpen = false }: FAQAccordionRowProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-cream-dark last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="font-heading text-base md:text-lg font-medium text-midnight group-hover:text-sage transition-colors duration-200">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-sage shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        id={`faq-answer-${item.id}`}
        role="region"
        className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 md:pb-6 text-sm md:text-base text-muted leading-relaxed pr-8">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
