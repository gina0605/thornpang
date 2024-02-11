"use client";

import { useThrottle } from "@/common/hooks";
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

  const shouldActivate = () =>
    ref.current &&
    ref.current.getBoundingClientRect().bottom < window.innerHeight;

  const scrollThrottled = useThrottle(() => {
    if (shouldActivate()) setActivated(true);
  });

  useEffect(() => {
    if (shouldActivate())
      setTimeout(() => setActivated(true), 300 * (index + 1));
    else {
      window.addEventListener("scroll", () => {
        scrollThrottled();
        window.removeEventListener("scroll", scrollThrottled);
      });
    }
  }, []);

  return (
    <div className="pl-12 w-full relative py-8 md:py-10" ref={ref}>
      <div
        className={`h-fit font-sunbatang text-black transition-all duration-1000 ease-out ${
          activated ? "mx-0 opacity-100" : "ml-4 -mr-4 opacity-0"
        }`}
      >
        <p className="text-rose-700">{date}</p>
        <p className="font-sunbatang">{text}</p>
      </div>
      {istop || (
        <div className="absolute bg-black w-2 top-0 mb-2 left-2 bottom-1/2" />
      )}
      <div className="absolute rounded-full border-black border-4 w-6 h-6 top-1/2 -mt-3 left-0" />
      <div
        className={`absolute w-2 top-1/2 mt-2 left-2 bottom-0 ${
          isbottom ? "from-black to-transparent bg-gradient-to-b" : "bg-black"
        }`}
      />
    </div>
  );
};
