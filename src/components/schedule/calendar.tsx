import Image from "next/image";
import Link from "next/link";
import { Schedule } from "@/types";
import { range } from "@/common/utils";

interface CalendarCellInnerProps {
  red: boolean;
  day: number;
  holiday?: string;
}

const CalendarCellIner = ({ red, day, holiday }: CalendarCellInnerProps) => (
  <>
    <div className="w-fit h-fit relative" key="day">
      <p className={`text-center relative p-0.5 ${red ? "text-rose-700" : ""}`}>
        {day}
      </p>
      <div className="absolute top-1 bottom-1 -left-px -right-px bg-white bg-opacity-50 rounded -z-10" />
    </div>
    <div className="w-fit h-fit relative" key="info">
      <p className="relative text-center text-rose-700 text-xs -mt-1 break-normal">
        {holiday}
      </p>
      <div className="absolute inset-0 -top-1 bg-white bg-opacity-50 rounded -z-10" />
    </div>
  </>
);

interface CalendarCellProps {
  year: number;
  month: number;
  day: number;
  schedule?: Schedule;
  holiday?: string;
  out?: boolean;
}

const CalendarCell = ({
  year,
  month,
  day,
  schedule,
  holiday,
  out,
}: CalendarCellProps) => {
  const d = new Date(year, month - 1, day);
  const red = d.getDay() === 0 || holiday !== undefined;
  const outerClassName = `h-[20vw] md:h-36 relative border-slate-200 border-b border-r flex flex-col items-center overflow-hidden ${
    d.getDay() === 0 ? "border-l" : ""
  } ${schedule ? "cursor-pointer" : ""}`;

  return out ? (
    <div className={outerClassName}>
      <p className="opacity-40 text-center">
        {d.getMonth() + 1}/{d.getDate()}
      </p>
    </div>
  ) : schedule ? (
    <Link
      href={`/schedule/${year}/${month}/${d.getDate()}`}
      className={outerClassName}
      scroll={false}
    >
      <CalendarCellIner red={red} day={day} holiday={holiday} />
      <Image
        src={`/schedule/${
          schedule.imageR ?? schedule.imageA ?? schedule.imageS ?? "apple-r.png"
        }`}
        fill
        className="object-fill -z-20"
        alt={schedule.title}
        key="image"
        sizes="(max-width: 896px) 14vw, 110px"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNc8h8AAk0BpWsR4hwAAAAASUVORK5CYII="
      />
    </Link>
  ) : (
    <div className={outerClassName}>
      <CalendarCellIner red={red} day={day} holiday={holiday} />
    </div>
  );
};

export interface CalendarProps {
  year: number;
  month: number;
  schedules: Schedule[];
  holidays: Record<number, string>;
}

export const Calendar = ({
  year,
  month,
  schedules,
  holidays,
}: CalendarProps) => {
  const first = new Date(year, month - 1);
  const monthLength = new Date(year, month, 0).getDate();

  return (
    <div className="w-full max-w-3xl font-sunbatang mb-8">
      <div className="w-full grid grid-cols-7 border-b border-slate-200 py-1 md:pb-2">
        <p className="text-center text-rose-700">일</p>
        {"월화수목금토".split("").map((s) => (
          <p className="text-center" key={s}>
            {s}
          </p>
        ))}
      </div>
      <div className="w-full grid grid-cols-7 md:shadow-md">
        {range(
          Math.ceil((first.getDay() + monthLength) / 7) * 7,
          -first.getDay() + 1
        ).map((x, idx) => (
          <CalendarCell
            year={year}
            month={month}
            day={x}
            schedule={schedules.find(({ date }) => date === x)}
            holiday={holidays[x]}
            out={x < 1 || x > monthLength}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};
