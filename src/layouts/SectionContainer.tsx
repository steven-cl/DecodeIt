import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "mb-16 scroll-mt-20 animate-in fade-in slide-in-from-bottom-4 duration-700",
        className
      )}
    >
      {children}
    </section>
  );
}
