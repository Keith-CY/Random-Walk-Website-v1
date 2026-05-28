import type { ReactNode } from "react";

type InstitutionalGridProps = {
  children: ReactNode;
  columns?: 2 | 3 | 5 | 6 | 7;
  variant?: "paper" | "ink";
  className?: string;
};

export function InstitutionalGrid({ children, columns = 3, variant = "paper", className = "" }: InstitutionalGridProps) {
  return (
    <div className={`rw-institutional-grid rw-institutional-grid-cols-${columns} ${variant === "ink" ? "rw-institutional-grid-ink" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function InstitutionalCell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`rw-institutional-cell ${className}`}>{children}</article>;
}
