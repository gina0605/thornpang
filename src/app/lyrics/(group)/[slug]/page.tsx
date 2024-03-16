import { Song } from "@/types";
import { createMetadata } from "@/common/seo";
import data from "@/data/lyrics";

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
  const { title, lyrics } = data.find((s) => s.slug === slug) as Song;
  return createMetadata(
    title,
    lyrics.length === 0 ? "연주곡" : lyrics.filter((l) => l).join(" ")
  );
};

export default ({ params: { slug } }: { params: PageParams }) => {
  const { lyrics } = data.find((s) => s.slug === slug) as Song;

  return (
    <div className="w-full flex justify-center overflow-y-auto px-2">
      <div className="w-fit h-fit font-light pb-20 pt-6 md:pt-8">
        {lyrics.length ? (
          <p>
            {lyrics.map((l, idx) =>
              l ? [<span>{l}</span>, <br />] : <br key={idx} />
            )}
          </p>
        ) : (
          <p className="text-slate-500">연주곡</p>
        )}
      </div>
    </div>
  );
};
