import { Video } from "@/types";
import { createMetadata } from "@/common/seo";
import { VideoModal } from "@/components/video/videoModal";
import { ClientModal } from "@/components/common/clientModal";
import data from "@/data/video";

interface PageParams {
  slug: string;
}

export const generateMetadata = ({
  params: { slug },
}: {
  params: PageParams;
}) => {
  const { title, subtitle, setlist, info } = data.find(
    (v) => v.slug === slug
  ) as Video;
  return createMetadata(
    `${title} - ${subtitle}`,
    `셋리스트: ${setlist.join(", ")} · 정보: ${info.join(", ")}`
  );
};

export default ({ params: { slug } }: { params: PageParams }) => {
  const video = data.find((v) => v.slug === slug) as Video;

  return (
    <ClientModal>
      <VideoModal video={video} />
    </ClientModal>
  );
};
