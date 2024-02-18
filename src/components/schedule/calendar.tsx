import { Schedule } from "@/types";
import { range } from "@/common/utils";
import Image from "next/image";

export interface CalendarCellProps {
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
  return (
    <div
      className={`h-20 md:h-36 relative border-slate-200 border-b border-r flex flex-col items-center overflow-hidden ${
        d.getDay() === 0 ? "border-l" : ""
      }`}
    >
      {out ? (
        <p className="opacity-40 text-center">
          {d.getMonth() + 1}/{d.getDate()}
        </p>
      ) : (
        [
          <div className="w-fit h-fit relative" key="day">
            <p
              className={`text-center relative ${
                d.getDay() === 0 || holiday !== undefined ? "text-rose-700" : ""
              }`}
            >
              {day}
            </p>
            <div className="absolute top-1 bottom-1 -left-px -right-px bg-white bg-opacity-30 rounded -z-10" />
          </div>,
          <div className="w-fit h-fit relative" key="info">
            <p className="relative text-center text-rose-700 text-xs -mt-1 break-normal">
              {holiday}
            </p>
            <div className="absolute inset-0 -top-1 bg-white bg-opacity-30 rounded -z-10" />
          </div>,
          schedule ? (
            <Image
              src={`/schedule/${schedule.image}`}
              fill
              className="object-fill -z-20"
              alt={schedule.title}
              key="image"
              sizes="(max-width: 896px) 14vw, 128px"
            />
          ) : null,
        ]
      )}
    </div>
  );
};

export interface CalendarProps {
  year: number;
  month: number;
  schedules: Schedule[];
  holidays: Record<number, string>;
  onClick: (d: number) => void;
}

export const Calendar = ({
  year,
  month,
  schedules,
  holidays,
  onClick,
}: CalendarProps) => {
  const first = new Date(year, month - 1);
  const monthLength = new Date(year, month, 0).getDate();

  const getScheduleDict = () => {
    const result: Record<number, Schedule> = {};
    schedules.forEach((s) =>
      s.dates.forEach((d) => {
        result[d] = s;
      })
    );
    return result;
  };
  const scheduleDict = getScheduleDict();

  return (
    <div className="w-full max-w-4xl grid grid-cols-7 font-sunbatang mb-8">
      <p className="text-center text-rose-700 border-b border-slate-200 py-1">
        일
      </p>
      {"월화수목금토".split("").map((s) => (
        <p className="text-center border-b border-slate-200 py-1" key={s}>
          {s}
        </p>
      ))}
      {range(
        Math.ceil((first.getDay() + monthLength) / 7) * 7,
        -first.getDay() + 1
      ).map((x, idx) => (
        <CalendarCell
          year={year}
          month={month}
          day={x}
          schedule={scheduleDict[x]}
          holiday={holidays[x]}
          out={x < 1 || x > monthLength}
          key={idx}
        />
      ))}
    </div>
  );
};
