import { flatten, range } from "@/common/utils";
import { SchedulePage } from "@/components/schedule/schedulePage";
import data, { minYear, maxYear, holidays } from "@/data/schedule";

const getSchedules = (year: number, month: number) =>
  (data[year] ?? {})[month] ?? [];

interface PageParams {
  year: string;
  month: string;
  slug: string;
}

export const generateStaticParams = () =>
  flatten(
    flatten(
      range(maxYear - minYear + 1, minYear).map((y) =>
        range(12, 1).map((m) =>
          getSchedules(y, m).map((s) => ({
            year: y.toString(),
            month: m.toString(),
            slug: s.slug,
          }))
        )
      )
    )
  );

export const dynamicParams = false;

export default ({ params: { year, month, slug } }: { params: PageParams }) => {
  const y = parseInt(year),
    m = parseInt(month);
  const schedules = getSchedules(y, m);
  const thisHolidays = (holidays[y] ?? {})[m] ?? {};
  const schedule = schedules.find((s) => s.slug === slug);

  return (
    <SchedulePage
      year={y}
      month={m}
      schedules={schedules}
      minYear={minYear}
      maxYear={maxYear}
      holidays={thisHolidays}
      modal={schedule}
    />
  );
};
