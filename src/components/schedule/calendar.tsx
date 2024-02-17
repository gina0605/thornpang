import { Schedule } from "@/types";
import { range } from "@/common/utils";

export interface CalendarCellProps {
  year: number;
  month: number;
  day: number;
  holiday?: string;
  out?: boolean;
}

const CalendarCell = ({
  year,
  month,
  day,
  holiday,
  out,
}: CalendarCellProps) => {
  const d = new Date(year, month - 1, day);
  return (
    <div
      className={`h-24 border-slate-200 border-b border-r ${
        d.getDay() === 0 ? "border-l" : ""
      }`}
    >
      {out ? (
        <p className="opacity-40 text-center">
          {d.getMonth() + 1}/{d.getDate()}
        </p>
      ) : (
        [
          <p
            className={`text-center ${
              d.getDay() === 0 || holiday !== undefined ? "text-rose-700" : ""
            }`}
            key="day"
          >
            {day}
          </p>,
          <p className="text-center text-rose-700 text-xs -mt-1" key="info">
            {holiday}
          </p>,
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

  return (
    <div className="w-full max-w-5xl grid grid-cols-7 font-sunbatang mb-8">
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
      ).map((x) => (
        <CalendarCell
          year={year}
          month={month}
          day={x}
          holiday={holidays[x]}
          out={x < 1 || x > monthLength}
          key={x}
        />
      ))}
    </div>
  );
};
