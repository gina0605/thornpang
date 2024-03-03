import { flatten, range } from "@/common/utils";
import { createMetadata } from "@/common/seo";
import { Schedule } from "@/types";
import { ScheduleModal } from "@/components/schedule/scheduleModal";
import data, { minYear, maxYear } from "@/data/schedule";

const getSchedules = (year: number, month: number) =>
  (data[year] ?? {})[month] ?? [];

const getSchedule = (year: string, month: string, slug: string) =>
  getSchedules(parseInt(year), parseInt(month)).find(
    (s) => s.slug === slug
  ) as Schedule;

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

export const generateMetadata = ({
  params: { year, month, slug },
}: {
  params: PageParams;
}) => {
  const { title, dateText, location, setlist } = getSchedule(year, month, slug);
  return createMetadata(
    title,
    `${dateText} · 장소: ${location} · 셋리스트: ${setlist}`
  );
};

export default ({ params: { year, month, slug } }: { params: PageParams }) => {
  const schedule = getSchedule(year, month, slug);

  return (
    <ScheduleModal
      schedule={schedule}
      closeLink={`/schedule/${year}/${month}/`}
    />
  );
};
