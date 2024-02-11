"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/common/hooks";

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

  const { setTarget } = useIntersectionObserver(() => setActivated(true), 0.7);

  return (
    <div
      className={`w-full max-w-4xl flex items-center space-x-4 px-6 justify-start md:-my-12 transition-appear duration-1000 ease-out h-fit ${
        left ? "flex-row" : "flex-row-reverse space-x-reverse"
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
        className={`font-sunbatang flex flex-col transition-appear duration-1000 ease-out ${
          left ? "items-start" : "items-end"
        } ${activated ? "" : `${left ? "translate-x-4" : "-translate-x-4"}`}`}
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
