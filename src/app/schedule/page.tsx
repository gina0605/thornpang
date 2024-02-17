import { minmax, paramToInt } from "@/common/utils";
import { SchedulePage } from "@/components/schedule/schedulePage";
import data, { minYear, maxYear } from "@/data/schedule";

export default ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const paramYear = paramToInt(searchParams.year);
  const paramMonth = paramToInt(searchParams.month);
  const currentDate = new Date(Date.now() + 32400000);
  const year =
    paramYear === null
      ? currentDate.getUTCFullYear()
      : minmax(paramYear, minYear, maxYear);
  const month =
    paramMonth === null ? currentDate.getUTCMonth() : minmax(paramMonth, 1, 12);

  const schedules = (data[year] ?? {})[month] ?? [];

  console.log(schedules);

  return (
    <SchedulePage
      year={year}
      month={month}
      schedules={schedules}
      minYear={minYear}
      maxYear={maxYear}
    />
  );
};
