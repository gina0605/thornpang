import { Video } from "@/types";
import { ServerModal } from "@/components/common/serverModal";
import { VideoSearchBar } from "@/components/video/videoSearchBar";
import { Row } from "@/components/video/row";
import { VideoModal } from "@/components/video/videoModal";
import data from "@/data/video";

interface PageParams {
  slug: string;
}

export default ({ params: { slug } }: { params: PageParams }) => {
  const video = data.find((v) => v.slug === slug) as Video;

  return (
    <>
      <VideoSearchBar search="" target="all" />
      <div className="w-full max-w-5xl flex flex-col md:px-1.5">
        {data.map((v) => (
          <Row video={v} key={v.link} />
        ))}
      </div>
      <ServerModal closeLink="/video">
        <VideoModal video={video} />
      </ServerModal>
    </>
  );
};
