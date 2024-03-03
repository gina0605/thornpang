import Image from "next/image";
import { Schedule } from "@/types";
import { ServerModal } from "@/components/common/serverModal";
import { ModalBody } from "../common/modalBody";

export interface ScheduleModalProps {
  schedule: Schedule;
  closeLink: string;
}

export const ScheduleModal = ({ schedule, closeLink }: ScheduleModalProps) => {
  const { image, title, dateText, setlist, links } = schedule;
  const content = [{ subtitle: "셋리스트", text: setlist }];
  return (
    <ServerModal closeLink={closeLink}>
      <div className="w-[75vw] h-[106vw] max-w-[35vh] max-h-[50vh] md:w-[50vw] md:h-[70vw] md:max-w-[57vh] md:max-h-[80vh] relative shrink-0 rounded-t md:rounded-r-none md:rounded-l overflow-hidden z-40">
        <Image
          src={`/schedule/${image}`}
          alt="poster"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPU2wQAARQA4liArccAAAAASUVORK5CYII="
          className="object-fill"
          sizes="(max-width: 768px) 75vw, 57vh"
        />
      </div>
      <div className="w-[75vw] max-w-[35vh] md:w-80 md:max-w-80 md:h-[70vw] md:max-h-[80vh] bg-white font-pretendard py-2 px-3 md:px-4 md:py-4 shrink rounded-b md:rounded-l-none md:rounded-r z-40">
        <ModalBody
          title={title}
          date={dateText}
          content={content}
          links={links}
        />
      </div>
    </ServerModal>
  );
};
