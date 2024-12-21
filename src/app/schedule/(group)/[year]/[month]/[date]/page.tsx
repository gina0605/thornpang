import { createMetadata } from "@/common/seo";
import { Schedule } from "@/types";
import { ScheduleModal } from "@/components/schedule/scheduleModal";
import data from "@/data/schedule";

const getSchedules = (year: number, month: number): Record<number, Schedule> =>
  (data[year] ?? {})[month] ?? {};

const getSchedule = (year: string, month: string, date: string) =>
  getSchedules(parseInt(year), parseInt(month))[parseInt(date)] as Schedule;

export const generateStaticParams = ({
  params: { year, month },
}: {
  params: { year: number; month: number };
}) =>
  Object.entries(getSchedules(year, month)).map(([date, schedule]) => ({
    year,
    month,
    date,
  }));
export const dynamicParams = false;

interface PageParams {
  year: string;
  month: string;
  date: string;
}

export const generateMetadata = ({
  params: { year, month, date },
}: {
  params: PageParams;
}) => {
  const { title, setlist } = getSchedule(year, month, date);
  return createMetadata(
    title,
    `일자: ${year}. ${month}. ${date} · 셋리스트: ${setlist.join(", ")}`
  );
};

export default ({ params: { year, month, date } }: { params: PageParams }) => {
  const schedule = getSchedule(year, month, date);

  return (
    <ScheduleModal
      dateText={`${year}. ${month.padStart(2, "0")}. ${date.padStart(2, "0")}`}
      schedule={schedule}
      closeLink={`/schedule/${year}/${month}/`}
    />
  );
};
