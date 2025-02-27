import { Metadata } from "next";

export const createMetadata = (title: string, description: string) => {
  const titleWrapped = title ? `${title} | 쏜애플 팬사이트` : "쏜애플 팬사이트";

  const metadata: Metadata = {
    title: titleWrapped,
    description,
    openGraph: {
      title: titleWrapped,
      description,
      url: "https://thornpang.vercel.app",
      images: [
        {
          url: "https://thornpang.vercel.app/opengraph-image.png",
          width: 1920,
          height: 1080,
        },
      ],
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      title: titleWrapped,
      description,
      card: "summary_large_image",
      images: ["https://thornpang.vercel.app/opengraph-image.png"],
    },
  };
  return metadata;
};
