import { Row } from "@/components/video/row";
import { SearchBar } from "@/components/common/searchBar";
import { paramToString } from "@/common/utils";
import data from "@/data/video";

export default ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const param = paramToString(searchParams.search);

  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-full max-w-3xl px-1.5 h-9 flex items-center">
        <SearchBar defaultText={param ?? ""} />
      </div>
      <div className="w-full max-w-5xl flex flex-col md:px-1.5">
        {data.map((v) => (
          <Row video={v} key={v.link} />
        ))}
      </div>
    </main>
  );
};
