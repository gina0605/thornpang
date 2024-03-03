import Image from "next/image";
import { Video } from "@/types";
import { DivUnclick } from "../common/divUnclick";
import { ModalBody } from "../common/modalBody";

export interface VideoModalProps {
  video: Video;
}

export const VideoModal = ({ video }: VideoModalProps) => {
  const { title, thumbnail, subtitle, setlist, info, links, date } = video;
  const content = [
    {
      subtitle: "곡명",
      text: setlist.join(", "),
    },
    { subtitle: "정보", text: info.join(", ") },
  ];

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
        <ModalBody
          title={`${title} - ${subtitle}`}
          date={date}
          content={content}
          links={links}
        />
      </DivUnclick>
    </div>
  );
};
