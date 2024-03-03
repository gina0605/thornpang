import { Row } from "@/components/video/row";
import { VideoSearchBar } from "@/components/video/videoSearchBar";
import data from "@/data/video";

export default () => {
  return (
    <>
      <VideoSearchBar search="" target="all" />
      <div className="w-full max-w-5xl flex flex-col md:px-1.5">
        {data.map((v) => (
          <Row video={v} key={v.link} />
        ))}
      </div>
    </>
  );
};
