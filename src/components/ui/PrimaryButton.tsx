import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function PrimaryButton({
  children,
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: PrimaryButtonProps) {
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
        bg-sage text-white font-medium font-body
        rounded-full
        shadow-md shadow-sage/20
        transition-all duration-200 ease-out
        hover:bg-sage-dark hover:shadow-lg hover:shadow-sage/30 hover:-translate-y-0.5
        active:translate-y-0 active:shadow-md
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
