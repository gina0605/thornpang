import { flatten, range } from "@/common/utils";
import lyricsData from "../data/lyrics";
import scheduleData, { maxYear, minYear } from "@/data/schedule";
import videoData from "@/data/video";

const makeRoute = (url: string) => ({
  url: `https://thornpang.vercel.app${url}`,
});

export default () => [
  makeRoute("/"),
  makeRoute("/lyrics"),
  ...lyricsData.map(({ slug }) => makeRoute(`/lyrics/${slug}`)),
  ...flatten(
    range(maxYear - minYear + 1, minYear).map((y) =>
      range(12, 1).map((m) => makeRoute(`/schedule/${y}/${m}`))
    )
  ),
  ...scheduleData.map(({ year, month, date, slug }) =>
    makeRoute(`/schedule/${year}/${month}/${slug ?? date}`)
  ),
  makeRoute("/video"),
  ...videoData.map(({ slug }) => makeRoute(`/video/${slug}`)),
];
