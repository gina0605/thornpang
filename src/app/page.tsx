import { Dday } from "@/components/Dday";
import { AppleProfile } from "@/components/appleProfile";
import { Timeline } from "@/components/timeline";

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
          index={0}
          istop
        />
        <Timeline
          date="2010.07.09"
          text="밴드명 '가시사과'에서 쏜애플(THORNAPPLE)로 개명"
          index={1}
        />
        <Timeline
          date="2010.07.17"
          text="정규 1집 [난 자꾸 말을 더듬고 잠드는 법도 잊었네] 발매"
          index={2}
        />
        <Timeline date="2014.06.12" text="정규 2집 [이상기후] 발매" index={3} />
        <Timeline date="2016.05.19" text="EP [서울병] 발매" index={4} />
        <Timeline date="2019.07.04" text="정규 3집 [계몽] 발매" index={5} />
        <Timeline date="2023.08.28" text="EP [동물] 발매" index={6} isbottom />
      </div>
    </div>
  </main>
);
