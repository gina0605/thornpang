"use client";

import { Video } from "@/types";
import Image from "next/image";
import { useState } from "react";

export interface RowProps {
  video: Video;
}

export const Row = ({
  video: { title, thumbnail, subtitle, content, contentDetail, link, date },
}: RowProps) => {
  const [detail, setDetail] = useState(false);
  const contentText = content.join(", ");
  const contentDetailText = contentDetail.join(" / ");

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
      <div
        className={`flex flex-col font-pretendard px-2 md:pl-3 pt-0.5 w-[calc(100vw_-_144px)] md:w-[624px] grow ${
          detail ? "" : "h-18"
        }`}
      >
        <a href={link} target="_blank" className="w-fit">
          <p>{title}</p>
        </a>
        <a href={link} target="_blank" className="w-fit">
          <p>{subtitle}</p>
        </a>
        {detail ? (
          <div className="flex flex-col w-full text-slate-500 text-sm">
            <p className="text-wrap w-full">{contentText}</p>
            {contentDetailText && (
              <p className="text-nowrap truncate grow my-0.5">
                {contentDetailText}
              </p>
            )}
            <div className="flex w-full justify-between">
              <p>{date}</p>
              <p
                className="underline cursor-pointer"
                onClick={() => setDetail(false)}
              >
                간단히
              </p>
            </div>
          </div>
        ) : (
          <div className="flex text-slate-500 text-sm">
            <p className="text-nowrap truncate grow">{contentText}</p>
            <p
              className="underline shrink-0 pl-1 md:pl-2 cursor-pointer"
              onClick={() => setDetail(true)}
            >
              자세히
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
