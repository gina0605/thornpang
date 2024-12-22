import { createMetadata } from "@/common/seo";
import { ScheduleModal } from "@/components/schedule/scheduleModal";
import data, { getScheduleYM } from "@/data/schedule";

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
  const { title, setlist, etc } = data.find(
    (s) =>
      s.year === parseInt(year) &&
      s.month === parseInt(month) &&
      s.date === parseInt(date)
  )!;
  const dateText = `일자: ${year}. ${month}. ${date}`;
  const setlistText = setlist ? ` · 셋리스트: ${setlist.join(", ")}` : "";
  const etcText = etc ? ` · ${etc.join(", ")}` : "";
  return createMetadata(title, dateText + setlistText + etcText);
};

export default ({ params: { year, month, date } }: { params: PageParams }) => {
  const idx = data.findIndex(
    ({ year: y, month: m, date: d }) =>
      y === parseInt(year) && m === parseInt(month) && d === parseInt(date)
  );
  const {
    year: nxtY,
    month: nxtM,
    date: nxtD,
  } = data[idx === data.length - 1 ? 0 : idx + 1];
  const {
    year: prvY,
    month: prvM,
    date: prvD,
  } = data[idx === 0 ? data.length - 1 : idx - 1];

  return (
    <ScheduleModal
      dateText={`${year}. ${month.padStart(2, "0")}. ${date.padStart(2, "0")}`}
      schedule={data[idx]}
      closeLink={`/schedule/${year}/${month}/`}
      nxtLink={`/schedule/${nxtY}/${nxtM}/${nxtD}`}
      prvLink={`/schedule/${prvY}/${prvM}/${prvD}`}
    />
  );
};
