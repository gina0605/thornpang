import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Tab } from "@/components/header/tab";
import { ScheduleLoader } from "@/components/common/scheduleLoader";

const sunbatang = localFont({
  src: [
    { path: "../font/SunBatang-Light.otf", weight: "300", style: "normal" },
    { path: "../font/SunBatang-Medium.otf", weight: "400", style: "normal" },
    { path: "../font/SunBatang-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-sunbatang",
});

const pyeongchang = localFont({
  src: [
    { path: "../font/PyeongChang-BoldA1.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-pyeongchang",
});

const yuniverse = localFont({
  src: [{ path: "../font/YUniverse-B00.otf", weight: "400", style: "normal" }],
  variable: "--font-yuniverse",
});

const pretendard = localFont({
  src: [
    {
      path: "../font/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/Pretendard-SemiBold.subset.woff2",
      weight: "600",
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
      className={`${sunbatang.variable} ${pyeongchang.variable} ${pretendard.variable} ${yuniverse.variable}`}
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
      <ScheduleLoader />
      <body className="bg-white font-normal">
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
            <p className="font-yuniverse -mt-0.5">팬사이트 by 어떤 쏜팡이</p>
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
        <Analytics />
      </body>
    </html>
  );
};
