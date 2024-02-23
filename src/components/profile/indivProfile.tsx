"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useIntersectionObserver } from "@/common/hooks";

export interface SnsLink {
  link: string;
  type: string;
}

interface SnsIconProps {
  sns: SnsLink;
}

export const SnsIcon = ({ sns }: SnsIconProps) => (
  <a href={sns.link} target="_blank">
    <Image
      src={`/icon/${sns.type}.svg`}
      height={24}
      width={24}
      alt={`${sns.type} icon`}
      className="fill-black md:h-6 md:w-6 h-5 w-5"
    />
  </a>
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

  const onIntersect = useMemo(() => () => setActivated(true), []);

  const { setTarget } = useIntersectionObserver(onIntersect, 0.7);

  return (
    <div
      className={`w-full max-w-4xl flex items-center px-6 justify-start md:-my-12 transition-opacity duration-1000 ease-out h-fit ${
        left ? "flex-row" : "flex-row-reverse"
      } ${activated ? "opacity-100" : "opacity-0"}`}
      ref={setTarget}
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
        className={`font-sunbatang flex flex-col px-4 md:px-5 ${
          left ? "items-start" : "items-end"
        }`}
      >
        <p className="text-sm md:text-base">{bday}</p>
        <p className="text-2xl md:text-3xl font-bold -mx-0.5 md:-mx-1 my-0.5">
          {name}
        </p>
        <p className="md:text-xl -mt-1 md:mt-0 font-bold">{session}</p>
        <div className="flex space-x-1 pt-2">
          {sns.map((x, idx) => (
            <SnsIcon sns={x} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};
