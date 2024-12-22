import { Schedule } from "@/types";
import { createMetadata } from "@/common/seo";
import { ScheduleModal } from "@/components/schedule/scheduleModal";
import data, { getScheduleYM } from "@/data/schedule";

const getSlug = ({ date, slug }: Schedule) => slug ?? `${date}`;

export const generateStaticParams = ({
  params: { year, month },
}: {
  params: { year: string; month: string };
}) =>
  getScheduleYM(parseInt(year), parseInt(month)).map((s) => ({
    year,
    month,
    slug: getSlug(s),
  }));
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
  const { date, title, setlist, etc } = data.find(
    (s) =>
      s.year === parseInt(year) &&
      s.month === parseInt(month) &&
      getSlug(s) === slug
  )!;
  const dateText = `일자: ${year}. ${month}. ${date}`;
  const setlistText = setlist ? ` · 셋리스트: ${setlist.join(", ")}` : "";
  const etcText = etc ? ` · ${etc.join(", ")}` : "";
  return createMetadata(title, dateText + setlistText + etcText);
};

export default ({ params: { year, month, slug } }: { params: PageParams }) => {
  const idx = data.findIndex(
    (s) =>
      s.year === parseInt(year) &&
      s.month === parseInt(month) &&
      getSlug(s) === slug
  );
  const {
    year: nxtY,
    month: nxtM,
    date: nxtD,
    slug: nxtS,
  } = data[idx === data.length - 1 ? 0 : idx + 1];
  const {
    year: prvY,
    month: prvM,
    date: prvD,
    slug: prvS,
  } = data[idx === 0 ? data.length - 1 : idx - 1];

  return (
    <ScheduleModal
      dateText={`${year}. ${month.padStart(2, "0")}. ${data[idx].date
        .toString()
        .padStart(2, "0")}`}
      schedule={data[idx]}
      closeLink={`/schedule/${year}/${month}/`}
      nxtLink={`/schedule/${nxtY}/${nxtM}/${nxtS ?? nxtD}`}
      prvLink={`/schedule/${prvY}/${prvM}/${prvS ?? prvD}`}
    />
  );
};
