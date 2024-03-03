import { Video } from "@/types";
import { createMetadata } from "@/common/seo";
import { ServerModal } from "@/components/common/serverModal";
import { VideoSearchBar } from "@/components/video/videoSearchBar";
import { Row } from "@/components/video/row";
import { VideoModal } from "@/components/video/videoModal";
import data from "@/data/video";

export const generateStaticParams = () => data.map(({ slug }) => ({ slug }));
export const dynamicParams = false;

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
