import { promises as fs } from "fs";
import { Line, Song } from "@/types";
import { LineItem } from "@/components/lyrics/lineItem";
import { SongItem } from "@/components/lyrics/songItem";

export default async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const file = await fs.readFile(
    process.cwd() + "/src/data/lyrics.json",
    "utf8"
  );
  const data = JSON.parse(file) as Song[];

  const getParam = () => {
    const keyword = searchParams.keyword;
    if (Object.prototype.toString.call(keyword) === "[object Array]") {
      const keywordString = keyword as string;
      return keywordString.length ? keywordString[0] : "";
    } else return keyword;
  };
  const param = getParam() as string | undefined;

  const filtered: Line[] = []; // TODO

  return (
    <main className="w-screen flex flex-col items-center">
      <div>searchbar</div>
      <div className="flex flex-col w-full">
        {param
          ? filtered.map((line, idx) => <LineItem line={line} key={idx} />)
          : data.map((song, idx) => (
              <SongItem
                idx={idx}
                song={song}
                key={idx}
                move={param === undefined}
              />
            ))}
      </div>
    </main>
  );
};
