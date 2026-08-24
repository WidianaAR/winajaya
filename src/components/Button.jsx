import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white",
        {
          "bg-primary text-white hover:bg-primary/90 font-semibold": variant === 'primary',
          "border border-primary text-primary hover:bg-primary/10 font-semibold": variant === 'outline',
          "bg-white text-primary hover:bg-stone-50 font-semibold": variant === 'secondary',
          "hover:bg-primary/10 hover:text-primary font-semibold": variant === 'ghost',
          "h-10 py-2 px-3 rounded-lg text-sm": size === 'md',
          "h-8 px-3 py-2 rounded-lg text-xs": size === 'sm',
          "h-11 px-8 rounded-xl": size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
