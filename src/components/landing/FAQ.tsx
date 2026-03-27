import { SectionHeading, FAQAccordionRow } from '../ui';
import { faqs } from '../../data/content';

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-5 md:px-8 lg:px-12">
        <SectionHeading
          label="Questions"
          title="Everything You Need to Know"
          description="If there's something we haven't covered, our team is always happy to help."
        />

        <div className="mt-14">
          {faqs.map((item, i) => (
            <FAQAccordionRow
              key={item.id}
              item={item}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
