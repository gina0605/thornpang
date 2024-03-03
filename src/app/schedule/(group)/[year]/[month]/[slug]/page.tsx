import { createMetadata } from "@/common/seo";
import { Schedule } from "@/types";
import { ScheduleModal } from "@/components/schedule/scheduleModal";
import data from "@/data/schedule";

const getSchedules = (year: number, month: number) =>
  (data[year] ?? {})[month] ?? [];

const getSchedule = (year: string, month: string, slug: string) =>
  getSchedules(parseInt(year), parseInt(month)).find(
    (s) => s.slug === slug
  ) as Schedule;

export const generateStaticParams = ({
  params: { year, month },
}: {
  params: { year: number; month: number };
}) => getSchedules(year, month).map(({ slug }) => ({ year, month, slug }));
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
  const { title, dateText, setlist } = getSchedule(year, month, slug);
  return createMetadata(title, `${dateText} · 셋리스트: ${setlist}`);
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
