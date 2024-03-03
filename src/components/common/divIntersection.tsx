"use client";

import { useIntersectionObserver } from "@/common/hooks";
import { useMemo, useState } from "react";

export interface DivIntersectionProps {
  children: React.ReactNode;
  className?: string;
  activatedClassName?: string;
  deactivatedClassName?: string;
  threshold?: number;
}

export const DivIntersection = ({
  children,
  className = "",
  activatedClassName = "",
  deactivatedClassName = "",
  threshold = 0.7,
}: DivIntersectionProps) => {
  const [activated, setActivated] = useState(false);
  const onIntersect = useMemo(() => () => setActivated(true), []);
  const { setTarget } = useIntersectionObserver(onIntersect, threshold);

  return (
    <div
      className={`${className} ${
        activated ? activatedClassName : deactivatedClassName
      }`}
      ref={setTarget}
    >
      {children}
    </div>
  );
};
