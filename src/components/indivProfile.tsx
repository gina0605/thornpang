"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useThrottle } from "@/common/hooks";

export interface SnsLink {
  link: string;
  type: string;
}

interface SnsIconProps {
  sns: SnsLink;
}

export const SnsIcon = ({ sns }: SnsIconProps) => (
  <Link href={sns.link}>
    <Image
      src={`/icon/${sns.type}.svg`}
      height={24}
      width={24}
      alt={`${sns.type} icon`}
      className="fill-black md:h-6 md:w-6 h-5 w-5"
    />
  </Link>
);

export interface IndivProfileProps {
  image: string;
  name: string;
  bday: string;
  session: string;
  sns: SnsLink[];
  left: boolean;
}

export const IndivProfile = ({
  image,
  name,
  bday,
  session,
  sns,
  left,
}: IndivProfileProps) => {
  const [activated, setActivated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const scrollHandler = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top + rect.bottom * 2 < window.innerHeight * 3)
        setActivated(true);
    }
  };
  const scrollThrottled = useThrottle(scrollHandler);

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", () => {
      scrollThrottled();
      window.removeEventListener("scroll", scrollThrottled);
    });
  }, []);

  return (
    <div
      className={`w-full max-w-4xl flex items-center space-x-4 px-6 justify-start md:-my-12 transition-all duration-1000 ease-out h-fit ${
        left ? "flex-row" : "flex-row-reverse space-x-reverse"
      } ${
        activated
          ? "oapcity-100"
          : `opacity-0 ${left ? "ml-16 -mr-16" : "mr-16 -ml-16"}`
      }`}
      ref={ref}
    >
      <div className="w-4/12 max-w-lg">
        <div className="w-full pt-[133%] relative">
          <Image
            src={`/profile/${image}`}
            alt={`${name} profile picture`}
            fill
            priority
            sizes="33vw"
            className="drop-shadow object-contain"
          />
        </div>
      </div>
      <div
        className={`font-sunbatang flex flex-col ${
          left ? "items-start" : "items-end"
        }`}
      >
        <p className="text-sm md:pb-1">{bday}</p>
        <p className="text-2xl md:text-3xl font-bold">{name}</p>
        <p className="md:text-xl -mt-1 md:mt-0">{session}</p>
        <div className="flex space-x-1 pt-2">
          {sns.map((x, idx) => (
            <SnsIcon sns={x} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};
