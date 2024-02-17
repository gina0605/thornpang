import { Schedule } from "@/types";

export const minYear = 2023;
export const maxYear = 2024;

const data: { [key: number]: { [key: number]: Schedule[] } } = {
  2024: {
    3: [
      {
        dates: [17],
        title: "어쩌다 페스티벌",
        image: "202403_suddenly.jpeg",
        dateText: "2024.03.17",
        text: ["장소: 부산 소향씨어터 신한카드홀"],
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
