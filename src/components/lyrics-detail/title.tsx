"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ALBUMS } from "@/data/constant";
import { Chevron } from "../common/icons";
import data from "@/data/lyrics";

export const Title = () => {
  const slug = useSelectedLayoutSegment();
  const songIdx = data.findIndex((s) => s.slug === slug);
  const leftIdx = songIdx === 0 ? data.length - 1 : songIdx - 1;
  const rightIdx = songIdx === data.length - 1 ? 0 : songIdx + 1;
  const { title, album } = data[songIdx];

  let albumTitle, bgColor;
  if (album === "1") {
    albumTitle = ALBUMS.stammer;
    bgColor = "from-stammer/10";
  } else if (album === "2") {
    albumTitle = ALBUMS.weather;
    bgColor = "from-weather/10";
  } else if (album === "seoul") {
    albumTitle = ALBUMS.seoul;
    bgColor = "from-seoul/10";
  } else if (album === "3") {
    albumTitle = ALBUMS.enlight;
    bgColor = "from-enlight/10";
  } else if (album === "animal") {
    albumTitle = ALBUMS.animal;
    bgColor = "from-animal/10";
  }

  return (
    <div
      className={`w-full flex justify-center relative bg-gradient-to-b ${bgColor} to-transparent z-10 shadow-down`}
    >
      <div className="w-full flex items-center justify-between max-w-xl py-2 z-30">
        <Link href={`/lyrics/${data[leftIdx].slug}`} className="p-4 -m-2">
          <Chevron direction="left" />
        </Link>
        <div className="flex flex-col items-center">
          <p className="text-lg">{title}</p>
          <p className="font-light text-slate-500 font-pretendard">
            {albumTitle}
          </p>
        </div>
        <Link href={`/lyrics/${data[rightIdx].slug}`} className="p-4 -m-2">
          <Chevron direction="right" />
        </Link>
      </div>
    </div>
  );
};
