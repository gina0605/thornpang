import { Video } from "@/types";
import { paramToString } from "@/common/utils";
import { Row } from "@/components/video/row";
import { VideoSearchBar } from "@/components/video/videoSearchBar";
import { createMetadata } from "@/common/seo";
import data, { replaceLogic } from "@/data/video";

export const metadata = createMetadata(
  "영상",
  data
    .slice(0, 5)
    .map(({ title, subtitle }) => `${title} - ${subtitle}`)
    .join(" · ")
);

export default ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search = paramToString(searchParams.search);
  const target = paramToString(searchParams.target);

  const keywords = search
    ? replaceLogic
        .reduce(
          (s, { pattern, result }) => s.replaceAll(pattern, result),
          search.toLowerCase().replaceAll(/[\s.,()\[\]~!?\-\/]+/g, " ")
        )
        .split(" ")
        .map((k) => (k === "살" ? "살살" : k))
    : [];

  const normalizeStr = (s: string[]) =>
    s
      .map((v) => v.replaceAll(/[\s()]+/g, ""))
      .join(" ")
      .replaceAll(/살[^아]|살$/g, "살살")
      .toLowerCase();

  const match = ({ setlist, info }: Video) => {
    if (keywords.length === 0) return true;
    let s: string;
    if (target === "setlist") s = normalizeStr(setlist);
    else if (target === "info") s = normalizeStr(info);
    else s = normalizeStr(setlist) + " " + normalizeStr(info);

    return keywords.every((p) => s.includes(p));
  };

  return (
    <>
      <VideoSearchBar search={search} target={target} />
      <div className="w-full max-w-4xl flex flex-col md:px-1.5">
        {data.map((v) => (match(v) ? <Row video={v} key={v.slug} /> : null))}
      </div>
    </>
  );
};
