import { Dday } from "@/components/Dday";
import { AppleProfile } from "@/components/appleProfile";

interface TimelineProps {
  date: string;
  text: string;
  istop?: boolean;
  isbottom?: boolean;
}

const Timeline = ({ date, text, istop, isbottom }: TimelineProps) => (
  <div className="pl-12 w-full relative py-8 md:py-10">
    <div className="h-fit font-sunbatang text-slate-800">
      <p className="text-rose-700">{date}</p>
      <p className="font-sunbatang">{text}</p>
    </div>
    {istop || (
      <div className="absolute bg-black w-2 top-0 mb-2 left-2 bottom-1/2" />
    )}
    <div className="absolute rounded-full border-black border-4 w-6 h-6 top-1/2 -mt-3 left-0" />
    <div
      className={`absolute w-2 top-1/2 mt-2 left-2 bottom-0 ${
        isbottom ? "from-black to-transparent bg-gradient-to-b" : "bg-black"
      }`}
    />
  </div>
);

export default () => (
  <main className="w-screen flex flex-col items-center">
    <div className="w-full bg-gradient-to-b from-white to-gray-pfp flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <AppleProfile />
      </div>
      <Dday />
      <div className="w-full max-w-2xl flex flex-col px-6 pt-4">
        <Timeline
          date="2009.12.24"
          text="데뷔공연 'THE 조용한 크리스마스' @살롱바다비"
          istop
        />
        <Timeline
          date="2010.07.09"
          text="밴드명 '가시사과'에서 쏜애플(THORNAPPLE)로 개명"
        />
        <Timeline
          date="2010.07.17"
          text="정규 1집 [난 자꾸 말을 더듬고 잠드는 법도 잊었네] 발매"
        />
        <Timeline date="2014.06.12" text="정규 2집 [이상기후] 발매" />
        <Timeline date="2016.05.19" text="EP [서울병] 발매" />
        <Timeline date="2019.07.04" text="정규 3집 [계몽] 발매" />
        <Timeline date="2023.08.28" text="EP [동물] 발매" isbottom />
      </div>
    </div>
  </main>
);
