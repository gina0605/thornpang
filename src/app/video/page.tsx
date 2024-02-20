import { paramToString } from "@/common/utils";
import { Row } from "@/components/video/row";
import { VideoSearchBar } from "@/components/video/videoSearchBar";
import data from "@/data/video";

export default ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search = paramToString(searchParams.search);
  const target = paramToString(searchParams.target);

  return (
    <main className="w-full flex flex-col items-center">
      <VideoSearchBar search={search} target={target} />
      <div className="w-full max-w-5xl flex flex-col md:px-1.5">
        {data.map((v) => (
          <Row video={v} key={v.link} />
        ))}
      </div>
    </main>
  );
};
