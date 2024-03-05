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
      const timerFunc = (i: number) => i * 90 - i * i * 0.8 - i * i * i * 0.005;
      if (idx <= 2) setTimeout(() => setActivated(true), timerFunc(idx));
      else {
        setTimeout(() => {
          const bound = ref.current?.getBoundingClientRect();
          const i = bound
            ? Math.min(Math.floor(bound.top / bound.height) + 5, idx)
            : idx;
          console.log(i);
          setTimeout(() => setActivated(true), Math.max(timerFunc(i) - 200, 0));
        }, 200);
      }
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
