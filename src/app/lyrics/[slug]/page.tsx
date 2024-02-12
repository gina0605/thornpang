import { readJson } from "@/common/utils";
import { Song } from "@/types";

export const generateStaticParams = async () => {
  const data = await readJson("/src/data/lyrics.json");
  return data.map((song: Song) => ({ slug: song.slug }));
};

export const dynamicParams = false;

interface PageProps {
  slug: string;
}

export default async ({ params: { slug } }: { params: PageProps }) => {
  const data = (await readJson("/src/data/lyrics.json")) as Song[];
  const songIdx = data.findIndex((s) => s.slug === slug);
  const { title, album, lyrics } = data[songIdx];

  let albumTitle;
  if (album === "1") albumTitle = "난 자꾸 말을 더듬고 잠드는 법도 잊었네";
  else if (album === "2") albumTitle = "이상기후";
  else if (album === "seoul") albumTitle = "서울병";
  else if (album === "3") albumTitle = "계몽";
  else if (album === "animal") albumTitle = "동물";

  return (
    <main className="w-screen h-screen flex font-sunbatang">
      <div className="w-0 grow h-screen" />
      <div className="w-full max-w-xl flex flex-col items-center">
        <div className="w-full flex justify-between">
          <div>{"<"}</div>
          <div className="flex flex-col items-center">
            <p>{title}</p>
            <p>{albumTitle}</p>
          </div>
          <div>{">"}</div>
        </div>
        <div className="w-fit flex flex-col">
          {lyrics.map((l) => (
            <p>{l}</p>
          ))}
        </div>
      </div>
      <div className="w-0 grow" />
    </main>
  );
};
