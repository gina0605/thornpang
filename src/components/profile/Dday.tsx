"use client";

import { useIntersectionObserver } from "@/common/hooks";
import { useEffect, useRef, useState } from "react";

export const Dday = () => {
  const [cnt, setCnt] = useState(0);
  const timer = useRef<NodeJS.Timeout | undefined>(undefined);
  const result = Math.floor((Date.now() - 1261580400000) / 86400000);
  const [activated, setActivated] = useState(false);

  const { setTarget } = useIntersectionObserver(() => setActivated(true), 0.9);

  useEffect(() => {
    if (activated) {
      timer.current = setInterval(() => {
        setCnt((x) => (x >= 50 ? 50 : x + 1));
      }, 20);
      const timer2 = setTimeout(() => {
        setCnt(50);
        if (timer.current) clearInterval(timer.current);
      }, 1000);
      return () => {
        if (timer.current) clearInterval(timer.current);
        clearTimeout(timer2);
      };
    }
  }, [activated]);

  return (
    <div
      className="flex items-center font-pretendard text-4xl font-semibold pt-6"
      ref={setTarget}
    >
      <p className="">데뷔 D+</p>
      <p className="w-20">
        {String(Math.floor((result * cnt) / 50)).padStart(4, "0")}
      </p>
    </div>
  );
};
