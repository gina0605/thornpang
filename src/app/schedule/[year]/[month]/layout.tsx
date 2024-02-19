import { Calendar } from "@/components/schedule/calendar";
import { MonthSelecter } from "@/components/schedule/monthSelecter";
import data, { minYear, maxYear, holidays } from "@/data/schedule";

interface PageParams {
  year: string;
  month: string;
}

export default ({
  children,
  params: { year, month },
}: Readonly<{
  children: React.ReactNode;
  params: PageParams;
}>) => {
  const y = parseInt(year),
    m = parseInt(month);
  const schedules = (data[y] ?? {})[m] ?? [];
  const thisHolidays = (holidays[y] ?? {})[m] ?? {};

  return (
    <main className="w-full flex flex-col items-center">
      {children}
      <MonthSelecter year={y} month={m} minYear={minYear} maxYear={maxYear} />
      <Calendar
        year={y}
        month={m}
        schedules={schedules}
        holidays={thisHolidays}
      />
    </main>
  );
};
