import Image from "next/image";
import { readJson } from "@/common/serverUtils";

export default async () => {
  const data = await readJson("/src/data/video.json");

  return (
    <Image
      src={`/video/${data[0].thumbnail}`}
      alt="alt"
      width={164}
      height={32}
    />
  );
};
