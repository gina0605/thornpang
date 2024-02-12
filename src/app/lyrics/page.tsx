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
    } else return keyword ?? "";
  };
  const param = getParam();

  const filtered: Line[] = []; // TODO

  return (
    <main className="w-screen flex justify-center">
      <div className="w-full max-w-2xl flex flex-col">
        <div>searchbar</div>
        <div className="flex flex-col">
          {param
            ? filtered.map((line, idx) => <LineItem line={line} key={idx} />)
            : data.map((song, idx) => <SongItem song={song} key={idx} />)}
        </div>
      </div>
    </main>
  );
};
