import { Schedule } from "@/types";
import { MonthSelecter } from "./monthSelecter";
import { Calendar } from "./calendar";
import { Modal } from "./modal";

export interface SchedulePageProps {
  year: number;
  month: number;
  schedules: Schedule[];
  minYear: number;
  maxYear: number;
  holidays: Record<number, string>;
  modal?: Schedule;
}

export const SchedulePage = ({
  year,
  month,
  schedules,
  minYear,
  maxYear,
  holidays,
  modal,
}: SchedulePageProps) => (
  <main className="w-full flex flex-col items-center">
    {modal && (
      <Modal schedule={modal} closeLink={`/schedule/${year}/${month}`} />
    )}
    <MonthSelecter
      year={year}
      month={month}
      minYear={minYear}
      maxYear={maxYear}
    />
    <Calendar
      year={year}
      month={month}
      schedules={schedules}
      holidays={holidays}
    />
  </main>
);
