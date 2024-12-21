import Image from "next/image";

export interface ModalBodyProps {
  title: string;
  date: string;
  content: { subtitle: string; text: string[] }[];
  links: { text: string; link: string }[];
}

export const ModalBody = ({ title, date, content, links }: ModalBodyProps) => (
  <>
    <p className="text-sm -my-0.5 md:-my-0">{date}</p>
    <p className="text-lg font-semibold leading-tight">{title}</p>
    {content.map(({ subtitle, text }, idx) => [
      <p className="text-sm text-slate-500 mt-2 -mb-1 md:-mb-0.5" key={idx * 2}>
        {subtitle}
      </p>,
      ...text.map((t) => (
        <p className="leading-snug md:leading-normal" key={idx * 2 + 1}>
          {text}
        </p>
      )),
    ])}
    <div className="flex flex-col mt-3 pt-3 space-y-0.5 text-slate-500 border-slate-300 border-t">
      {links.map(({ text, link }, idx) => (
        <a
          target="_blank"
          href={link}
          key={idx}
          className="flex hover:bg-slate-100 rounded-sm px-1 w-fit -ml-1 items-center"
        >
          <Image
            src="/icon/link.svg"
            alt="link"
            width={16}
            height={16}
            className="w-4 h-4 mr-1"
          />
          <p>{text}</p>
        </a>
      ))}
    </div>
  </>
);
