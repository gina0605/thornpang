import Image from "next/image";
import { Schedule } from "@/types";
import { ServerModal } from "@/components/common/serverModal";
import { ModalBody } from "../common/modalBody";

export interface ScheduleModalProps {
  dateText: string;
  schedule: Schedule;
  closeLink: string;
}

export const ScheduleModal = ({
  dateText,
  schedule,
  closeLink,
}: ScheduleModalProps) => {
  const { imageR, imageS, imageA, title, location, setlist, etc, links } =
    schedule;
  const content = [
    ...(location ? [{ subtitle: "장소", text: location }] : []),
    ...(setlist ? [{ subtitle: "셋리스트", text: setlist }] : []),
    ...(etc ? [{ subtitle: "-", text: etc }] : []),
  ];

  return (
    <ServerModal closeLink={closeLink}>
      <div className="flex flex-col md:flex-row max-h-[80vh]">
        <div
          className={`md:hidden w-[80vw] h-[80vw] max-w-[50vh] max-h-[50vh] relative shrink-0 rounded-t overflow-hidden z-40 ${
            imageS ? "" : "bg-black/70"
          }`}
        >
          <Image
            src={`/schedule/${imageS ?? imageA ?? imageR ?? "apple-s.png"}`}
            alt="poster"
            fill
            placeholder={imageS ? "blur" : "empty"}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPU2wQAARQA4liArccAAAAASUVORK5CYII="
            className={imageS ? "object-fill" : "object-contain"}
            sizes="80vw"
          />
        </div>
        <div
          className={`hidden md:block w-[50vw] h-[70vw] max-w-[57vh] max-h-[80vh] relative shrink-0 rounded-l overflow-hidden z-40 ${
            imageR ? "" : "bg-black/70"
          }`}
        >
          <Image
            src={`/schedule/${imageR ?? imageA ?? imageS ?? "apple-r.png"}`}
            alt="poster"
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPU2wQAARQA4liArccAAAAASUVORK5CYII="
            className={imageR ? "object-fill" : "object-contain"}
            sizes="57vh"
          />
        </div>
        <div className="w-[80vw] max-w-[50vh] md:w-80 md:max-w-80 md:h-[70vw] md:max-h-[80vh] bg-white font-pretendard px-4 py-3 shrink rounded-b md:rounded-l-none md:rounded-r z-40 overflow-y-auto">
          <ModalBody
            title={title}
            date={dateText}
            content={content}
            links={links}
          />
        </div>
      </div>
    </ServerModal>
  );
};
