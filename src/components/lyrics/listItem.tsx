import { ReactElement, RefObject } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ListItemProps {
  album: string;
  title: string;
  text: ReactElement;
  slug: string;
  className?: string;
  linkClassName?: string;
  scrollRef?: RefObject<HTMLDivElement>;
}

export const ListItem = ({
  album,
  title,
  text,
  slug,
  className,
  linkClassName,
  scrollRef,
}: ListItemProps) => {
  let bgColor;
  if (album === "1") bgColor = "to-stammer";
  else if (album === "2") bgColor = "to-weather";
  else if (album === "seoul") bgColor = "to-seoul";
  else if (album === "3") bgColor = "to-enlight";
  else if (album === "animal") bgColor = "to-animal";

  return (
    <div
      className={`w-full h-14 md:h-17 flex justify-center relative ${className} overflow-x-hidden`}
      ref={scrollRef}
    >
      <div
        className={`absolute top-0 bottom-0 left-0 w-4 md:w-[calc(50vw_-_380px)] bg-gradient-to-l opacity-20 md:opacity-30 from-white ${bgColor}`}
      />
      <div
        className={`absolute top-0 bottom-0 right-0 left-4 md:left-[calc(50vw_-_380px)] bg-gradient-to-r from-white ${bgColor}`}
      />
      <Link
        href={`/lyrics/${slug}`}
        className={`w-full max-w-screen-md h-full flex items-center justify-start px-1.5 z-30 ${linkClassName}`}
      >
        <div className="w-12 h-12 md:w-14 md:h-14 relative shrink-0">
          <Image
            src={`/album/${album}.jpeg`}
            alt={`${album} album cover`}
            fill
            sizes="(max-width: 768px) 52px, 48px"
            className="rounded-sm object-contain"
          />
        </div>
        <div className="h-full flex flex-col grow p-2 md:p-2.5 justify-center">
          <p className="font-sunbatang -mb-1 md:mb-0">{title}</p>
          {text}
        </div>
      </Link>
    </div>
  );
};
