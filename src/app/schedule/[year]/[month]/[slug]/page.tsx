import { flatten, range } from "@/common/utils";
import { Modal } from "@/components/schedule/modal";
import data, { minYear, maxYear } from "@/data/schedule";
import { Schedule } from "@/types";

const getSchedules = (year: number, month: number) =>
  (data[year] ?? {})[month] ?? [];

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

interface PageParams {
  year: string;
  month: string;
  slug: string;
}

export default ({ params: { year, month, slug } }: { params: PageParams }) => {
  const y = parseInt(year),
    m = parseInt(month);
  const schedules = getSchedules(y, m);
  const schedule = schedules.find((s) => s.slug === slug) as Schedule;

  return <Modal schedule={schedule} closeLink={`/schedule/${y}/${m}/`} />;
};
