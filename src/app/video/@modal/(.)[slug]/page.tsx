import { Video } from "@/types";
import { VideoModal } from "@/components/video/videoModal";
import { ClientModal } from "@/components/common/clientModal";
import data from "@/data/video";

interface PageParams {
  slug: string;
}

export default ({ params: { slug } }: { params: PageParams }) => {
  const video = data.find((v) => v.slug === slug) as Video;

  return (
    <ClientModal>
      <VideoModal video={video} />
    </ClientModal>
  );
};
