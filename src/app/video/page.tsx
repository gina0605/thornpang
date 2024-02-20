import { Video } from "@/types";
import { paramToString } from "@/common/utils";
import { Row } from "@/components/video/row";
import { VideoSearchBar } from "@/components/video/videoSearchBar";
import data, { replaceLogic } from "@/data/video";

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
    : [];

  const normalizeStr = (s: string[]) =>
    s
      .map((v) => v.replaceAll(/[\s()]+/g, ""))
      .join(" ")
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
    <main className="w-full flex flex-col items-center">
      <VideoSearchBar search={search} target={target} />
      <div className="w-full max-w-5xl flex flex-col md:px-1.5">
        {data.map((v) => (match(v) ? <Row video={v} key={v.link} /> : null))}
      </div>
    </main>
  );
};
