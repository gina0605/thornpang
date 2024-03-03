import Image from "next/image";

export interface ModalBodyProps {
  title: string;
  date: string;
  content: { subtitle: string; text: string }[];
  links: { text: string; link: string }[];
}

export const ModalBody = ({ title, date, content, links }: ModalBodyProps) => (
  <>
    <p className="text-lg font-semibold">{title}</p>
    <p className="text-sm -mt-1 -mb-0.5 md:-mt-0.5 md:mb-0">{date}</p>
    {content.map(({ subtitle, text }) => (
      <>
        <p className="text-sm text-slate-500 mt-2 -mb-1 md:-mb-0.5">
          {subtitle}
        </p>
        <p>{text}</p>
      </>
    ))}
    <div className="flex flex-col mt-3 pt-3 pb-1 space-y-0.5 text-slate-500 border-slate-300 border-t">
      {links.map(({ text, link }, idx) => (
        <a
          target="_blank"
          href={link}
          key={idx}
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
  </>
);
