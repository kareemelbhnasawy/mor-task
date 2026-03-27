interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
      {label && (
        <span
          className={`
            inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4
            ${light ? 'text-sage-light' : 'text-sage'}
          `}
        >
          {label}
        </span>
      )}
      <h2
        className={`
          font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight
          ${light ? 'text-cream' : 'text-midnight'}
        `}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`
            mt-4 text-base md:text-lg leading-relaxed
            ${light ? 'text-cream/70' : 'text-muted'}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
}
