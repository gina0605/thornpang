"use client";

import { useEffect, useRef, useState } from "react";

export interface TimelineLayoutProps {
  children: React.ReactNode;
  index: number;
  date: string;
  text: string;
}

export const TimelineLayout = ({
  children,
  index,
  date,
  text,
}: TimelineLayoutProps) => {
  const [activated, setActivated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const shouldActivate = () =>
    ref.current &&
    ref.current.getBoundingClientRect().bottom < window.innerHeight;

  useEffect(() => {
    if (shouldActivate())
      setTimeout(() => setActivated(true), 300 * index + 150);
    else {
      if (!ref.current) return;
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActivated(true);
              if (ref.current) observer.current?.unobserve(ref.current);
            }
          });
        },
        { threshold: 0.7, rootMargin: "0px 0px -32px 0px" }
      );
      observer.current.observe(ref.current);
    }
  }, []);

  return (
    <div className="pl-12 w-full relative py-8 md:py-10" ref={ref}>
      <div
        className={`h-fit font-sunbatang transition-appear duration-1000 ease-out ${
          activated ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
        }`}
      >
        <p className="text-rose-700">{date}</p>
        <p className="text-black">{text}</p>
      </div>
      {children}
    </div>
  );
};
