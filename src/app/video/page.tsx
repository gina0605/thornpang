import { promises as fs } from "fs";
import Image from "next/image";

export default async () => {
  const file = await fs.readFile(
    process.cwd() + "/src/data/video.json",
    "utf8"
  );
  const data = JSON.parse(file);
  console.log(data);

  return (
    <Image
      src={`/video/${data[0].thumbnail}`}
      alt="alt"
      width={164}
      height={32}
    />
  );
};
