import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  icon?: ReactNode;
}

export default function InfoCard({ children, className, title, icon }: InfoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1",
        className
      )}
    >
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && (
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              {icon}
            </div>
          )}
          {title && (
            <h3 className="text-xl font-semibold text-foreground">
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}
