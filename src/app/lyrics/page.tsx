import { Line, Song } from "@/types";
import { LineItem } from "@/components/lyrics/lineItem";
import { SongItem } from "@/components/lyrics/songItem";
import { readJson } from "@/common/utils";
import { SearchBar } from "@/components/lyrics/searchBar";

export default async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const data = (await readJson("/src/data/lyrics.json")) as Song[];

  const getParam = () => {
    const keyword = searchParams.keyword;
    if (Object.prototype.toString.call(keyword) === "[object Array]") {
      const keywordString = keyword as string;
      return keywordString.length ? decodeURI(keywordString[0]) : "";
    } else return keyword === undefined ? null : decodeURI(keyword as string);
  };
  const param = getParam() as string | null;

  const getFiltered = () => {
    if (!param) return [];
    const pattern = param?.replaceAll(/[\s.⋯?,'!"]+/g, "");

    return data
      .map(({ title, slug, album, lyrics }) => {
        const filtered = lyrics.filter((l) => l !== "");
        const stripped = filtered
          .map((l) => l.replaceAll(/[\s.⋯?,'!"]+/g, ""))
          .concat([""]);

        const matched: string[] = [];
        for (let i = 0; i < stripped.length - 1; i++) {
          if (matched.includes(filtered[i])) continue;
          const str = stripped[i] + stripped[i + 1];
          const matchIdx = str.indexOf(pattern);
          if (matchIdx >= 0) {
            if (matchIdx < stripped[i].length) matched.push(filtered[i]);
            else {
              if (!matched.includes(filtered[i + 1]))
                matched.push(filtered[i + 1]);
              i++;
            }
          }
        }

        return matched.map((l) => ({ title, slug, album, line: l }));
      })
      .reduce((x, y) => x.concat(y), []);
  };

  const filtered: Line[] = getFiltered();

  return (
    <main className="w-screen flex flex-col items-center">
      <SearchBar param={param} />
      <div className="flex flex-col w-full">
        {param
          ? filtered.map((line, idx) => <LineItem line={line} key={idx} />)
          : data.map((song, idx) => (
              <SongItem idx={idx} song={song} key={idx} move={param === null} />
            ))}
      </div>
    </main>
  );
};
