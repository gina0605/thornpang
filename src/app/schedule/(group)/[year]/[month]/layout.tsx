import { createMetadata } from "@/common/seo";
import { flatten, range } from "@/common/utils";
import { Calendar } from "@/components/schedule/calendar";
import data, { holidays, maxYear, minYear } from "@/data/schedule";

export const generateStaticParams = () =>
  flatten(
    range(maxYear - minYear + 1, minYear).map((y) =>
      range(12, 1).map((m) => ({ year: y.toString(), month: m.toString() }))
    )
  );
export const dynamicParams = false;

const getSchedules = (year: number, month: number) =>
  (data[year] ?? {})[month] ?? {};

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
    Object.entries(schedules)
      .map(([date, { title }]) => `${date}일: ${title}`)
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
    <>
      <Calendar
        year={y}
        month={m}
        schedules={schedules}
        holidays={thisHolidays}
      />
      {children}
    </>
  );
};
