import { createMetadata } from "@/common/seo";
import { ScheduleModal } from "@/components/schedule/scheduleModal";
import { getScheduleYM, getScheduleYMD } from "@/data/schedule";

export const generateStaticParams = ({
  params: { year, month },
}: {
  params: { year: number; month: number };
}) =>
  getScheduleYM(year, month).map(({ date }) => ({
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
  const { title, setlist, etc } = getScheduleYMD(
    parseInt(year),
    parseInt(month),
    parseInt(date)
  )!;
  const dateText = `일자: ${year}. ${month}. ${date}`;
  const setlistText = setlist ? ` · 셋리스트: ${setlist.join(", ")}` : "";
  const etcText = etc ? ` · ${etc.join(", ")}` : "";
  return createMetadata(title, dateText + setlistText + etcText);
};

export default ({ params: { year, month, date } }: { params: PageParams }) => {
  const schedule = getScheduleYMD(
    parseInt(year),
    parseInt(month),
    parseInt(date)
  )!;

  return (
    <ScheduleModal
      dateText={`${year}. ${month.padStart(2, "0")}. ${date.padStart(2, "0")}`}
      schedule={schedule}
      closeLink={`/schedule/${year}/${month}/`}
    />
  );
};
