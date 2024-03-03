import { VideoModal } from "@/components/video/videoModal";
import { Video } from "@/types";
import data from "@/data/video";

interface PageParams {
  slug: string;
}

export default ({ params: { slug } }: { params: PageParams }) => {
  const video = data.find((v) => v.slug === slug) as Video;

  return <VideoModal video={video} closeLink="/" />;
};
