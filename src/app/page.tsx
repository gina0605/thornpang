import { ALBUMS } from "@/data/constant";
import { readJson } from "@/common/serverUtils";
import { createMetadata } from "@/common/seo";
import { Dday } from "@/components/profile/Dday";
import { AppleProfile } from "@/components/profile/appleProfile";
import { IndivProfile } from "@/components/profile/indivProfile";
import { Timeline } from "@/components/profile/timeline";
import { ThornProfile } from "@/components/profile/thornProfile";
import { ExProfile } from "@/components/profile/exProfile";

export const metadata = createMetadata(
  "",
  "2009.12.24 데뷔공연 'THE 조용한 크리스마스' @살롱바다비 · 2010.07.09 밴드명 '가시사과'에서 쏜애플(THORNAPPLE)로 개명 · 2010.07.17 정규 1집 [난 자꾸 말을 더듬고 잠드는 법도 잊었네] 발매 · 2014.06.12 정규 2집 [이상기후] 발매"
);

export default async () => {
  const data = await readJson("/src/data/profile.json");

  return (
    <main className="w-screen min-h-full-body flex flex-col items-center">
      <div className="w-full bg-gradient-to-b from-white to-gray-pfp flex flex-col items-center pb-8">
        <div className="w-full max-w-5xl">
          <AppleProfile />
        </div>
        <Dday />
        <div className="w-full max-w-2xl flex flex-col px-6 pt-4 pb-16 md:pb-32">
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
            text={`정규 1집 [${ALBUMS.stammer}] 발매`}
            index={2}
          />
          <Timeline
            date="2014.06.12"
            text={`정규 2집 [${ALBUMS.weather}] 발매`}
            index={3}
          />
          <Timeline
            date="2016.05.19"
            text={`EP [${ALBUMS.seoul}] 발매`}
            index={4}
          />
          <Timeline
            date="2019.07.04"
            text={`정규 3집 [${ALBUMS.enlight}] 발매`}
            index={5}
          />
          <Timeline
            date="2023.08.28"
            text={`EP [${ALBUMS.animal}] 발매`}
            index={6}
            isbottom
          />
        </div>
        {data.map((x: any, idx: number) => (
          <IndivProfile
            image={x.image}
            name={x.name}
            bday={x.bday}
            session={x.session}
            sns={x.sns}
            left={idx % 2 == 0}
            key={idx}
          />
        ))}
        <div className="flex w-full max-w-2xl px-6 justify-around mt-8 md:mt-20">
          <ExProfile name="심재현" session="Bass" duration="2009~2024" />
          <ExProfile name="한승찬" session="Guitar" duration="2012~2015" />
          <ExProfile name="오정민" session="Guitar" duration="2009~2012" />
        </div>
        <ThornProfile />
      </div>
    </main>
  );
};
