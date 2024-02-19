"use client";

import { Video } from "@/types";
import Image from "next/image";
import { useState } from "react";

export interface RowProps {
  video: Video;
}

export const Row = ({
  video: { title, thumbnail, subtitle, content, link },
}: RowProps) => {
  const [detail, setDetail] = useState(false);

  return (
    <div className="w-full flex items-start py-1 border-b border-slate-300">
      <a className="w-32 h-18 relative shrink-0" href={link} target="_blank">
        <Image
          src={`/video/${thumbnail}`}
          fill
          sizes="128px"
          alt={title}
          className="object-cover"
        />
      </a>
      <div className="flex flex-col font-pretendard px-2 md:pl-3 w-[calc(100vw_-_144px)] md:w-[624px] justify-center h-18 grow">
        <a href={link} target="_blank">
          <p>{title}</p>
        </a>
        <a href={link} target="_blank">
          <p>{subtitle}</p>
        </a>
        <div className="flex text-slate-500 text-sm">
          <p className="text-nowrap truncate grow">{content.join(", ")}</p>
          <p
            className="underline shrink-0 pl-1 md:pl-2 cursor-pointer"
            onClick={() => setDetail(true)}
          >
            자세히
          </p>
        </div>
      </div>
    </div>
  );
};
