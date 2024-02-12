import { Line } from "@/types";
import { ListItem } from "./listItem";

export interface LineItemProps {
  line: Line;
}

export const LineItem = ({
  line: { title, slug, album, line },
}: LineItemProps) => (
  <ListItem
    album={album}
    title={title}
    text={<p className="font-sunbatang text-slate-500">{line}</p>}
    slug={slug}
  />
);
