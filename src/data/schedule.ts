import { Schedule } from "@/types";

export const minYear = 2023;
export const maxYear = 2024;

export const holidays: Record<
  number,
  Record<number, Record<number, string>>
> = {
  2024: {
    1: { 1: "신정" },
    2: { 9: "", 10: "설날", 12: "대체공휴일" },
    3: { 1: "삼일절" },
    4: { 10: "국회의원 선거" },
    5: { 5: "어린이날", 6: "대체공휴일", 15: "부처님 오신 날" },
    6: { 6: "현충일" },
    8: { 15: "광복절" },
    9: { 16: "", 17: "추석", 18: "" },
    10: { 3: "개천절", 9: "한글날" },
    12: { 25: "크리스마스" },
  },
};

const data: { [key: number]: { [key: number]: Schedule[] } } = {
  2024: {
    3: [
      {
        slug: "suddenly",
        dates: [17],
        title: "어쩌다 페스티벌",
        image: "202403_suddenly.jpeg",
        dateText: "2024.03.17",
        location: "부산 소향씨어터 신한카드홀",
        setlist: "-",
        links: [
          {
            text: "인스타 공지",
            link: "https://www.instagram.com/p/C3CqhVbrnph",
          },
        ],
      },
    ],
  },
};

export default data;
