import Image from "next/image";
import data from "@/data/video";
import { Row } from "@/components/video/row";

export default () => {
  return (
    <main className="w-full flex justify-center">
      <div className="w-full max-w-3xl flex flex-col">
        {data.map((v) => (
          <Row video={v} key={v.link} />
        ))}
      </div>
    </main>
  );
};
