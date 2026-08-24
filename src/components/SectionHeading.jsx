import React from 'react';
import { cn } from './Button';

export function SectionHeading({ title, subtitle, className, center = false }) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
