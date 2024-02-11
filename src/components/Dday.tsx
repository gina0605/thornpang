"use client";

import { useThrottle } from "@/common/hooks";
import { useEffect, useRef, useState } from "react";

export const Dday = () => {
  const [cnt, setCnt] = useState(0);
  const timer = useRef<NodeJS.Timeout | undefined>(undefined);
  const result = Math.floor((Date.now() - 1261580400000) / 86400000);
  const [activated, setActivated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const scrollHandler = () => {
    if (
      ref.current &&
      ref.current.getBoundingClientRect().bottom < window.innerHeight
    )
      setActivated(true);
  };

  const scrollThrottled = useThrottle(scrollHandler);

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", () => {
      scrollThrottled();
    });
  }, []);

  useEffect(() => {
    if (activated) {
      timer.current = setInterval(() => {
        setCnt((x) => (x >= 500 ? 500 : x + 1));
      }, 20);
      const timer2 = setTimeout(() => {
        setCnt(125);
        if (timer.current) clearInterval(timer.current);
      }, 2500);
      return () => {
        if (timer.current) clearInterval(timer.current);
        clearTimeout(timer2);
      };
    }
  }, [activated]);

  return (
    <div
      className="flex items-center font-pyeongchang text-3xl font-bold pt-6"
      ref={ref}
    >
      <p className="">데뷔 D+</p>
      <p className="w-20">
        {String(Math.floor((result * cnt) / 125)).padStart(4, "0")}
      </p>
    </div>
  );
};
