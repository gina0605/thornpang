"use client";

import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import { Song } from "@/types";
import data from "@/data/lyrics";

export const Background = () => {
  const slug = useSelectedLayoutSegment();
  const { album } = data.find((s) => s.slug === slug) as Song;

  return (
    <div className="absolute inset-0 top-17">
      <div className="relative w-full h-full">
        <Image
          src={`/album/${album}.jpeg`}
          alt={`${album} album cover`}
          fill
          sizes="5vw"
          className="object-contain blur-3xl z-0 opacity-40"
        />
      </div>
    </div>
  );
};
