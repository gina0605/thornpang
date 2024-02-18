import { Schedule } from "@/types";
import Image from "next/image";

export interface ModalProps {
  schedule: Schedule;
  onClose: () => void;
}

export const Modal = ({ schedule, onClose }: ModalProps) => {
  const { image, title, dateText, text, links } = schedule;
  return (
    <div
      className="fixed inset-0 bg-black/65 z-30 flex items-center justify-center flex-col md:flex-row"
      onClick={onClose}
    >
      <Image
        src="/icon/x.svg"
        width={36}
        height={36}
        className="top-2 right-2 fixed z-40 cursor-pointer"
        alt="close button"
        onClick={onClose}
      />
      <div
        className="w-[75vw] h-[106vw] md:w-[57vh] md:h-[80vh] relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Image
          src={`/schedule/${image}`}
          alt="schedule"
          fill
          className="object-fill"
        />
      </div>
      <div
        className="w-[75vw] md:w-80 md:h-[80vh] bg-white font-pretendard py-2 px-3"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
    </div>
  );
};
