import { ReactElement, RefObject } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ListItemProps {
  ref?: RefObject<HTMLDivElement>;
  album: string;
  title: string;
  text: ReactElement;
  slug: string;
}

export const ListItem = ({ ref, album, title, text, slug }: ListItemProps) => (
  <Link href={`/lyrics/${slug}`}>
    <div
      className="flex h-12 items-center p-1 border-b border-l border-r from-white to-rose-100 bg-gradient-to-r"
      ref={ref}
    >
      <Image
        src={`/album/${album}.jpeg`}
        alt={`${album} album cover`}
        width={40}
        height={40}
      />
      <div className="flex flex-col pl-1">
        <p className="font-sunbatang font-semibold">{title}</p>
        {text}
      </div>
    </div>
  </Link>
);
