import { Line, Song } from "@/types";
import Link from "next/link";

export interface SongItemProps {
  song: Song;
}

export const SongItem = ({
  song: { title, slug, album, lyrics },
}: SongItemProps) => <Link href={`/lyrics/${slug}`}>{title}</Link>;

export interface LineItemProps {
  line: Line;
}

export const LineItem = ({ line: { title, album, line } }: LineItemProps) => (
  <Link href={`/lyrics/${title}`}>{line}</Link>
);
