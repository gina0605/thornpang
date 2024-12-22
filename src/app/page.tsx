import { ALBUMS } from "@/data/constant";
import { readJson } from "@/common/serverUtils";
import { createMetadata } from "@/common/seo";
import { Dday } from "@/components/profile/Dday";
import { AppleProfile } from "@/components/profile/appleProfile";
import { IndivProfile } from "@/components/profile/indivProfile";
import { Timeline } from "@/components/profile/timeline";
import { ThornProfile } from "@/components/profile/thornProfile";

export const metadata = createMetadata(
  "",
  "2009.12.24 데뷔공연 'THE 조용한 크리스마스' @살롱바다비 · 2010.07.09 밴드명 '가시사과'에서 쏜애플(THORNAPPLE)로 개명 · 2010.07.17 정규 1집 [난 자꾸 말을 더듬고 잠드는 법도 잊었네] 발매 · 2014.06.12 정규 2집 [이상기후] 발매"
);

export default async () => {
  const data = await readJson("/src/data/profile.json");

  return (
    <main className="w-screen min-h-full-body flex flex-col items-center">
      <div className="w-full bg-gradient-to-b from-white to-gray-pfp flex flex-col items-center">
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
        <ThornProfile />
        <div className="flex flex-col w-screen items-center text-center font-pretendard text-xs pt-20 pb-4">
          <p>본 사이트는 개인이 제작한 것으로, 쏜애플 및 MPMG와 무관합니다.</p>
          <p>
            사이트에 사용된 모든 이미지의 저작권은 쏜애플, MPMG 및 해당 권리
            보유자에게 귀속됩니다.
          </p>
          <p>
            개발자 연락처:{" "}
            <a
              href="mailto:twinklepurple1117@gmail.com?subject=[쏜애플 팬사이트]"
              className="underline"
            >
              twinklepurple1117@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};
