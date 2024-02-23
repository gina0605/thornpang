"use client";

import { useEffect, useRef, useState } from "react";

export interface TimelineProps {
  date: string;
  text: string;
  index: number;
  istop?: boolean;
  isbottom?: boolean;
}

export const Timeline = ({
  date,
  text,
  index,
  istop,
  isbottom,
}: TimelineProps) => {
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
      {istop || (
        <div className="absolute bg-black w-2 top-0 mb-2 left-2 bottom-1/2" />
      )}
      <div className="absolute rounded-full border-black border-4 w-6 h-6 top-1/2 -mt-3 left-0" />
      <div
        className={`absolute w-2 top-1/2 mt-2 left-2 bg-black ${
          isbottom ? "bottom-1/4" : "bottom-0"
        }`}
      />
      {isbottom && (
        <div className="absolute w-2 top-3/4 h-16 md:h-20 left-2 from-black to-transparent bg-gradient-to-b" />
      )}
    </div>
  );
};
