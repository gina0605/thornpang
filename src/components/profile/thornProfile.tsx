import Image from "next/image";

const links = [
  { link: "https://mpmgmusic.com/thornapple", text: "MPMG" },
  { link: "https://www.youtube.com/thornappleofficial", text: "YouTube" },
  { link: "https://www.instagram.com/thornapple_official", text: "instagram" },
  {
    link: "https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2FThornapple1224%2F",
    text: "facebook",
  },
];

export const ThornProfile = () => (
  <div className="w-full max-w-4xl pl-5 pr-4 flex flex-col items-center mt-12 md:mt-16 mb-4 opacity-100">
    <div className="w-full pt-[17%] relative">
      <Image
        src={"/logo-horizontal.png"}
        alt="thornapple logo"
        fill
        sizes="(max-width: 896px) 100vw, 860px"
        className="w-full drop-shadow-xl"
        style={{ objectFit: "contain" }}
        priority
      />
    </div>
    <div className="flex w-full justify-center space-x-4 mt-2">
      {links.map(({ link, text }, idx) => (
        <a href={link} key={idx} target="_blank">
          <p className="font-sunbatang underline decoration-black text-black underline-offset-4 decoration-1">
            {text}
          </p>
        </a>
      ))}
    </div>
  </div>
);
