"use client";

import { useRef } from "react";

export const useThrottle = (handler: () => void) => {
  const throttle = useRef<NodeJS.Timeout | undefined>(undefined);

  return () => {
    if (!throttle.current) {
      throttle.current = setTimeout(() => {
        handler();
        clearTimeout(throttle.current);
        throttle.current = undefined;
      }, 50);
    }
  };
};
