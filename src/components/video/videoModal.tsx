import Image from "next/image";
import { Video } from "@/types";
import { Modal } from "@/components/common/modal";

export interface VideoModalProps {
  video: Video;
  closeLink: string;
}

export const VideoModal = ({ video, closeLink }: VideoModalProps) => {
  const { title, thumbnail, subtitle, setlist, info, link, date } = video;
  const setlistText = setlist.join(", ");
  const infoText = info.join(" / ");

  return (
    <Modal closeLink={closeLink}>
      <div className="w-[75vw] h-[106vw] max-w-[50vh] max-h-[70vh] relative shrink-0 rounded-t overflow-hidden z-40">
        <Image
          src={`/video/${thumbnail}`}
          alt="thumbnail"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPU2wQAARQA4liArccAAAAASUVORK5CYII="
          className="object-fill"
          sizes="(max-width: 768px) 75vw, 50vh"
        />
      </div>
      <div className="w-[75vw] max-w-[50vh] bg-white font-pretendard py-2 px-3 shrink rounded-b z-40">
        <p className="text-lg font-semibold">
          {title} - {subtitle}
        </p>
        <p className="text-sm -mt-1 md:mt-0 mb-1 md:mb-2">{date}</p>
        <p>셋리스트</p>
        <p>{setlistText}</p>
        <p>정보</p>
        <p>{infoText}</p>
        <a className="underline" target="_blank" href={link}>
          링크
        </a>
      </div>
    </Modal>
  );
};
