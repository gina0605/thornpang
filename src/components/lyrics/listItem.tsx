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

export const ListItem = ({ ref, album, title, text, slug }: ListItemProps) => {
  let bgColor;
  if (album === "1") bgColor = "to-stammer";
  else if (album === "2") bgColor = "to-weather";
  else if (album === "seoul") bgColor = "to-seoul";
  else if (album === "3") bgColor = "to-enlight";
  else if (album === "animal") bgColor = "to-animal";

  return (
    <Link href={`/lyrics/${slug}`}>
      <div
        className="flex h-14 items-center border-b border-l border-r"
        ref={ref}
      >
        <div className="h-full w-14 flex items-center relative">
          <div
            className={`w-full h-full absolute from-white ${bgColor} bg-gradient-to-l opacity-20`}
          />
          <Image
            src={`/album/${album}.jpeg`}
            alt={`${album} album cover`}
            width={44}
            height={44}
            className="rounded-sm z-30 ml-3"
          />
        </div>
        <div
          className={`h-full flex flex-col grow p-2 from-white ${bgColor} bg-gradient-to-r`}
        >
          <p className="font-sunbatang font-semibold -mb-1">{title}</p>
          {text}
        </div>
      </div>
    </Link>
  );
};
