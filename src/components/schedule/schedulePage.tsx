"use client";

import { useState } from "react";
import { Schedule } from "@/types";
import { MonthSelecter } from "./monthSelecter";

export interface SchedulePageProps {
  year: number;
  month: number;
  schedules: Schedule[];
  minYear: number;
  maxYear: number;
}

export const SchedulePage = ({
  year,
  month,
  schedules,
  minYear,
  maxYear,
}: SchedulePageProps) => {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <main className="w-full flex flex-col items-center">
      <MonthSelecter
        year={year}
        month={month}
        minYear={minYear}
        maxYear={maxYear}
      />
    </main>
  );
};
