import Image from "next/image";
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
    <main className="w-screen full-body-height flex font-sunbatang justify-center relative overflow-hidden text-black">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={`/album/${album}.jpeg`}
            alt={`${album} album cover`}
            fill
            sizes="100vw"
            className="object-contain blur-3xl z-0 opacity-40"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center z-30">
        <div className="w-full flex justify-center relative bg-gradient-to-b from-white/30 to-black/15 z-10 shadow-down">
          <div className="w-full flex items-center justify-between max-w-xl py-2 z-30">
            <div>{"<"}</div>
            <div className="flex flex-col items-center">
              <p className="text-lg">{title}</p>
              <p className="font-light">{albumTitle}</p>
            </div>
            <div>{">"}</div>
          </div>
        </div>
        <div className="w-full flex justify-center overflow-y-auto">
          <div className="w-fit h-fit font-light pb-20 pt-3 md:pt-6">
            {lyrics.map((l, idx) => (
              <p key={idx}>{l}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
