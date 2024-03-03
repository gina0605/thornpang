import { Video } from "@/types";
import { ServerModal } from "@/components/common/serverModal";
import { VideoModal } from "@/components/video/videoModal";
import data from "@/data/video";

export const generateStaticParams = () => data.map(({ slug }) => ({ slug }));
export const dynamicParams = false;

interface PageParams {
  slug: string;
}

export default ({ params: { slug } }: { params: PageParams }) => {
  const video = data.find((v) => v.slug === slug) as Video;

  return (
    <ServerModal closeLink="/video">
      <VideoModal video={video} />
    </ServerModal>
  );
};
