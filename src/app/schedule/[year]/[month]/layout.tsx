import { createMetadata } from "@/common/seo";
import { Calendar } from "@/components/schedule/calendar";
import { MonthSelecter } from "@/components/schedule/monthSelecter";
import data, { minYear, maxYear, holidays } from "@/data/schedule";

const getSchedules = (year: number, month: number) =>
  (data[year] ?? {})[month] ?? [];

interface PageParams {
  year: string;
  month: string;
}

export const generateMetadata = ({
  params: { year, month },
}: {
  params: PageParams;
}) => {
  const schedules = getSchedules(parseInt(year), parseInt(month));
  return createMetadata(
    `${year}년 ${month}월 일정`,
    schedules
      .map(({ title, dates }) => `${dates.join(", ")}일: ${title}`)
      .join(" · ")
  );
};

export default ({
  children,
  params: { year, month },
}: Readonly<{
  children: React.ReactNode;
  params: PageParams;
}>) => {
  const y = parseInt(year),
    m = parseInt(month);
  const schedules = getSchedules(y, m);
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
