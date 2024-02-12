"use client";

import { Song } from "@/types";
import { ListItem } from "@/components/lyrics/listItem";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (move) {
      const timer = setTimeout(() => setActivated(true), idx * 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <ListItem
      album={album}
      title={title}
      text={<p className="font-sunbatang text-slate-500 text-sm">{info}</p>}
      slug={slug}
      className={`transition-opacity duration-700 ease-in-out ${
        activated ? "opacity-100" : "opacity-0"
      }`}
      linkClassName={`transition-[transform] duration-200 ease-in-out ${
        activated ? "" : "-translate-y-8"
      }`}
    />
  );
};
