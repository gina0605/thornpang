import { VideoModal } from "@/components/video/videoModal";
import data from "@/data/video";
import { Video } from "@/types";

interface PageParams {
  slug: string;
}

export default ({ params: { slug } }: { params: PageParams }) => {
  const video = data.find((v) => v.slug === slug) as Video;
  console.log(video);

  return <VideoModal video={video} closeLink="/" />;
};
