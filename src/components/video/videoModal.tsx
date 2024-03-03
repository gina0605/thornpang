import Image from "next/image";
import { Video } from "@/types";
import { DivUnclick } from "../common/divUnclick";

export interface VideoModalProps {
  video: Video;
}

export const VideoModal = ({ video }: VideoModalProps) => {
  const { title, thumbnail, subtitle, setlist, info, links, date } = video;
  const setlistText = setlist.join(", ");
  const infoText = info.join(", ");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <DivUnclick className="w-[75vw] h-[42vw] max-w-[89vh] max-h-[50vh] relative shrink-0 rounded-t overflow-hidden z-40">
        <Image
          src={`/video/${thumbnail}`}
          alt="thumbnail"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPU2wQAARQA4liArccAAAAASUVORK5CYII="
          className="object-fill"
          sizes="(max-width: 768px) 75vw, 89vh"
        />
      </DivUnclick>
      <DivUnclick className="w-[75vw] max-w-[89vh] bg-white font-pretendard py-2 px-3 shrink rounded-b z-40">
        <p className="text-lg font-semibold">
          {title} - {subtitle}
        </p>
        <p className="text-sm -mt-1 md:mt-0">{date}</p>
        <p className="text-sm text-slate-500 mt-2 -mb-1 md:-mb-0.5">곡명</p>
        <p>{setlistText}</p>
        <p className="text-sm text-slate-500 mt-2 -mb-1 md:-mb-0.5">정보</p>
        <p>{infoText}</p>
        <div className="flex flex-col mt-2 pt-2 space-y-0.5 border-t border-slate-300 text-slate-500">
          {links.map(({ text, link }) => (
            <a
              target="_blank"
              href={link}
              key={link}
              className="flex hover:bg-slate-100 rounded-sm px-1 w-fit -ml-1"
            >
              <Image
                src="/icon/link.svg"
                alt="link"
                width={16}
                height={16}
                className="mr-1"
              />
              <p>{text}</p>
            </a>
          ))}
        </div>
      </DivUnclick>
    </div>
  );
};
