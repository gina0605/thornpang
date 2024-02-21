import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import "./globals.css";
import { Tab } from "@/components/header/tab";

const sunbatang = localFont({
  src: [
    { path: "../font/SunBatang-Light.otf", weight: "300", style: "normal" },
    { path: "../font/SunBatang-Medium.otf", weight: "500", style: "normal" },
    { path: "../font/SunBatang-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-sunbatang",
});

const pyeongchang = localFont({
  src: [
    { path: "../font/PyeongChang-Regular.otf", weight: "400", style: "normal" },
    { path: "../font/PyeongChang-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-pyeongchang",
});

const pretendard = localFont({
  src: [
    {
      path: "../font/Pretendard-Thin.subset.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../font/Pretendard-ExtraLight.subset.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../font/Pretendard-Light.subset.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../font/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/Pretendard-ExtraBold.subset.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../font/Pretendard-Black.subset.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="ko"
      className={`${sunbatang.variable} ${pyeongchang.variable} ${pretendard.variable}`}
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#be123c" />
        <meta name="msapplication-TileColor" content="#be123c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-white">
        <header className="flex flex-col w-screen prevent-select">
          <div className="bg-black flex flex-col items-center h-20 p-2 text-white text-center">
            <Link href="/">
              <Image
                src={"/logo-horizontal.png"}
                alt="thornapple logo"
                width={305}
                height={52}
                className="h-12"
                style={{ width: "auto" }}
                priority
              />
            </Link>
            <p className="text-sm font-sunbatang font-light -mt-0.5">
              팬 사이트 by 어떤 쏜팡이
            </p>
          </div>
          <div className="flex w-full h-10 justify-center border border-slate-200">
            <div className="flex w-full max-w-4xl items-center">
              <Tab text="프로필" link="/" exact />
              <Tab text="가사" link="/lyrics" />
              <Tab text="일정" link="/schedule" />
              <Tab text="영상" link="/video" />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
};
