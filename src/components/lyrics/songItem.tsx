"use client";

import { Song } from "@/types";
import { ListItem } from "@/components/lyrics/listItem";

export interface SongItemProps {
  song: Song;
}

export const SongItem = ({
  song: { title, slug, album, info },
}: SongItemProps) => {
  return (
    <ListItem
      album={album}
      title={title}
      text={<p className="font-sunbatang text-slate-500 text-sm">{info}</p>}
      slug={slug}
    />
  );
};
