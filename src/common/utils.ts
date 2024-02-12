import { promises as fs } from "fs";

export const readJson = async (filename: string) => {
  const file = await fs.readFile(process.cwd() + filename, "utf8");
  return JSON.parse(file);
};
