import Image from "next/image";
import { Schedule } from "@/types";
import { ServerModal } from "@/components/common/serverModal";

export interface ScheduleModalProps {
  schedule: Schedule;
  closeLink: string;
}

export const ScheduleModal = ({ schedule, closeLink }: ScheduleModalProps) => {
  const { image, title, dateText, text, links } = schedule;
  return (
    <ServerModal closeLink={closeLink}>
      <div className="w-[75vw] h-[106vw] max-w-[50vh] max-h-[70vh] md:w-[50vw] md:h-[70vw] md:max-w-[57vh] md:max-h-[80vh] relative shrink-0 rounded-t md:rounded-r-none md:rounded-l overflow-hidden z-40">
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
      <div className="w-[75vw] max-w-[50vh] md:w-80 md:max-w-80 md:h-[70vw] md:max-h-[80vh] bg-white font-pretendard py-2 px-3 md:px-4 md:py-4 shrink rounded-b md:rounded-l-none md:rounded-r z-40">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm -mt-1 md:mt-0 mb-1 md:mb-2">{dateText}</p>
        {text.map((t, idx) => (
          <p key={idx}>{t}</p>
        ))}
        <div className="mt-1 md:mt-2 flex flex-wrap text-slate-500">
          {links.map(({ text, link }, idx) => (
            <a key={idx} href={link} target="_blank" className="pr-2">
              <p className="underline">{text}</p>
            </a>
          ))}
        </div>
      </div>
    </ServerModal>
  );
};
