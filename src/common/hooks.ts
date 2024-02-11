"use client";

import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (
  onIntersect: () => void,
  threshold: number,
  rootMargin: string = "0px 0px 0px 0px"
) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!target) return;
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect();
            observer.current?.unobserve(target);
          }
        });
      },
      { rootMargin, threshold }
    );
    observer.current.observe(target);

    return () => observer.current?.unobserve(target);
  }, [target, onIntersect, threshold, rootMargin]);

  return { target, setTarget };
};
