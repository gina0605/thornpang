import Image from "next/image";
import { Video } from "@/types";
import Link from "next/link";

export interface RowProps {
  video: Video;
}

export const Row = ({
  video: { title, slug, thumbnail, subtitle, setlist },
}: RowProps) => {
  const setlistText = setlist.join(", ");

  return (
    <Link
      className="w-full flex items-start px-1.5 md:px-0 py-1 md:py-2 border-b border-slate-300"
      href={`/video/${slug}`}
      scroll={false}
    >
      <div className="w-32 md:w-40 h-18 md:h-[90px] relative shrink-0">
        <Image
          src={`/video/${thumbnail}`}
          fill
          sizes="128px"
          alt={title}
          className="object-cover rounded-sm"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNc8h8AAk0BpWsR4hwAAAAASUVORK5CYII="
        />
      </div>
      <div className="w-0 grow flex flex-col justify-center font-pretendard pr-1 pl-2 md:pl-3 pt-0.5 md:pt-2">
        <p>{title}</p>
        <p className="md:pb-1.5 md:pt-1">{subtitle}</p>
        <p className="text-nowrap truncate grow text-slate-500 text-sm">
          {setlistText}
        </p>
      </div>
    </Link>
  );
};
