import { Metadata } from "next";

export const createMetadata = (title: string, description: string) => {
  const titleWrapped = `${title} | 쏜애플 팬사이트`;

  const metadata: Metadata = {
    title: titleWrapped,
    description,
    openGraph: {
      title,
      description,
      url: `https://${process.env.VERCEL_URL}`,
      siteName: "쏜애플 팬사이트",
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      title: titleWrapped,
      description,
      card: "summary_large_image",
    },
  };
  return metadata;
};
