"use client";

export interface DivUnclickProps {
  children: React.ReactNode;
  className?: string;
}

export const DivUnclick = ({ children, className }: DivUnclickProps) => (
  <div className={className} onClick={(e) => e.stopPropagation()}>
    {children}
  </div>
);
