import { range } from "@/common/utils";
import { SchedulePage } from "@/components/schedule/schedulePage";
import data, { minYear, maxYear, holidays } from "@/data/schedule";

interface PageProps {
  year: string;
  month: string;
}

export const generateStaticParams = () => {
  const x = range(maxYear - minYear + 1, minYear).map((y) =>
    range(12, 1).map((m) => ({ year: y.toString(), month: m.toString() }))
  );
  return ([] as PageProps[]).concat(...x);
};
export const dynamicParams = false;

export default ({ params: { year, month } }: { params: PageProps }) => {
  const y = parseInt(year),
    m = parseInt(month);
  const schedules = (data[y] ?? {})[m] ?? [];
  const thisHolidays = (holidays[y] ?? {})[m] ?? {};

  return (
    <SchedulePage
      year={y}
      month={m}
      schedules={schedules}
      minYear={minYear}
      maxYear={maxYear}
      holidays={thisHolidays}
    />
  );
};
