import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function SecondaryButton({
  children,
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: SecondaryButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        bg-transparent text-sage font-medium font-body
        rounded-full
        border-2 border-sage/30
        transition-all duration-200 ease-out
        hover:border-sage hover:bg-sage/5 hover:-translate-y-0.5
        active:translate-y-0
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
