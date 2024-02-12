import Link from "next/link";
import { Line } from "@/types";

export interface LineItemProps {
  line: Line;
}

export const LineItem = ({ line: { title, album, line } }: LineItemProps) => (
  <Link href={`/lyrics/${title}`}>{line}</Link>
);
