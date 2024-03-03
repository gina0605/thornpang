import { Video } from "@/types";
import { paramToString } from "@/common/utils";
import { Row } from "@/components/video/row";
import { VideoSearchBar } from "@/components/video/videoSearchBar";
import { createMetadata } from "@/common/seo";
import data, { replaceLogic } from "@/data/video";

export const metadata = createMetadata(
  "영상",
  "불구경 2022 - 라이브 콘서트 필름 · 불구경 2023 - 빨간 피터 POV · 불구경 2023 파리의 왕 / 한낮 / 수성의 하루 / 매미는 비가 와도 운다 / 멸종 · [동물] 라이브 세션 - 게와 수돗물 · [동물] 라이브 세션 - 살 · [동물] 라이브 세션 - 할시온"
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
    <>
      <VideoSearchBar search={search} target={target} />
      <div className="w-full max-w-5xl flex flex-col md:px-1.5">
        {data.map((v) =>
          match(v) ? <Row video={v} key={v.links[0].link} /> : null
        )}
      </div>
    </>
  );
};
