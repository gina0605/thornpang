import { Line } from "@/types";
import { LineItem } from "@/components/lyrics/lineItem";
import { SongItem } from "@/components/lyrics/songItem";
import { SearchBar } from "@/components/lyrics/searchBar";
import { paramToString } from "@/common/utils";
import data from "@/data/lyrics";

export default ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const param = paramToString(searchParams.keyword);

  const getFiltered = () => {
    const strip = (s: string) => s.replaceAll(/[\s.⋯?,'!"]+/g, " ");

    if (!param) return [];
    const pattern = strip(param);

    return data
      .map(({ title, slug, album, lyrics }) => {
        const filtered = lyrics.filter((l) => l !== "");
        const stripped = filtered.map((s) => strip(s).trim()).concat([""]);

        const matched: string[] = [];
        if (strip(title).includes(pattern)) matched.push("-");
        for (let i = 0; i < stripped.length - 1; i++) {
          if (matched.includes(filtered[i])) continue;
          const str = stripped[i] + " " + stripped[i + 1];
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
