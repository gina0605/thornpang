"use client";

import { Song } from "@/types";
import { ListItem } from "@/components/lyrics/listItem";
import { useEffect, useRef, useState } from "react";

export interface SongItemProps {
  song: Song;
  idx: number;
  move: boolean;
}

export const SongItem = ({
  song: { title, slug, album, info },
  idx,
  move,
}: SongItemProps) => {
  const [activated, setActivated] = useState(!move);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (move) {
      let i;
      if (idx <= 2) i = idx;
      else {
        const bound = ref.current?.getBoundingClientRect();
        i = bound
          ? Math.min(Math.floor(bound.top / bound.height) + 4, idx)
          : idx;
      }
      const timerFunc = (i: number) => 400 * (1 - Math.exp(-0.09 * i));
      setTimeout(() => setActivated(true), timerFunc(i));
    }
  }, []);

  return (
    <ListItem
      album={album}
      title={title}
      text={<p className="font-sunbatang text-slate-500 text-sm">{info}</p>}
      slug={slug}
      className={
        move
          ? `transition-opacity duration-700 ease-in-out ${
              activated ? "opacity-100" : "opacity-0"
            }`
          : ""
      }
      linkClassName={
        move
          ? `transition-[transform] duration-200 ease-in-out ${
              activated ? "" : "-translate-y-8"
            }`
          : ""
      }
      scrollRef={ref}
    />
  );
};
