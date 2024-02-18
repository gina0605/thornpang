"use client";

import { useState } from "react";
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
}

export const SchedulePage = ({
  year,
  month,
  schedules,
  minYear,
  maxYear,
  holidays,
}: SchedulePageProps) => {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <main className="w-full flex flex-col items-center">
      {modal !== null && (
        <Modal schedule={schedules[modal]} onClose={() => setModal(null)} />
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
        onClick={setModal}
      />
    </main>
  );
};
