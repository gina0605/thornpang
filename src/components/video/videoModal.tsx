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
    { subtitle: "곡명", text: [setlist.join(", ")] },
    { subtitle: "정보", text: [info.join(", ")] },
  ];

  return (
    <div className="w-full h-full max-h-[90vh] flex flex-col items-center justify-center">
      <DivUnclick className="w-[85vw] h-[48vw] max-w-[80vh] max-h-[45vh] relative shrink-0 rounded-t overflow-hidden z-40">
        <Image
          src={`/video/${thumbnail}`}
          alt="thumbnail"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPU2wQAARQA4liArccAAAAASUVORK5CYII="
          className="object-cover"
          sizes="(max-width: 768px) 75vw, 89vh"
        />
      </DivUnclick>
      <DivUnclick className="w-[85vw] max-w-[80vh] bg-white font-pretendard px-4 py-3 shrink rounded-b z-40 overflow-y-auto">
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
