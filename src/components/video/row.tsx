import Image from "next/image";
import { Video } from "@/types";
import { RowDetail } from "./rowDetail";

export interface RowProps {
  video: Video;
}

export const Row = ({
  video: { title, thumbnail, subtitle, setlist, info, link, date },
}: RowProps) => {
  const setlistText = setlist.join(", ");
  const infoText = info.join(" / ");

  return (
    <div className="w-full flex items-start px-1.5 md:px-0 py-1 border-b border-slate-300">
      <a className="w-32 h-18 relative shrink-0" href={link} target="_blank">
        <Image
          src={`/video/${thumbnail}`}
          fill
          sizes="128px"
          alt={title}
          className="object-cover"
        />
      </a>
      <div className="flex flex-col font-pretendard pr-1 pl-2 md:pl-3 pt-0.5 w-[calc(100vw_-_144px)] md:w-[624px] grow">
        <a href={link} target="_blank" className="w-fit">
          <p>{title}</p>
        </a>
        <a href={link} target="_blank" className="w-fit">
          <p>{subtitle}</p>
        </a>
        <RowDetail setlist={setlistText} info={infoText} date={date} />
      </div>
    </div>
  );
};
