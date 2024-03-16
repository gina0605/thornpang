import { Video } from "@/types";
import { SONGS } from "./constant";

export const replaceLogic = [
  { pattern: /언플러그드|unplug[^\s]*|acous[^\s]*/g, result: "어쿠" },
  { pattern: /doc[^\s]*/g, result: "다큐" },
  { pattern: /piano/g, result: "피아노" },
  { pattern: /버전|ver[^\s]+/g, result: "ver" },
  { pattern: /데모/g, result: "demo" },
  { pattern: /(^|[^\d])(\d\d)년/g, result: "$120$2" },
  { pattern: /(\d\d\d\d)년/g, result: "$1" },
  { pattern: /오시/g, result: "오렌지의" },
  { pattern: /빨피/g, result: "빨간피터" },
  { pattern: /도가미/g, result: "도롱뇽 아가미" },
  { pattern: /너무/g, result: "너의무리" },
  { pattern: /매비운/g, result: "매미는비" },
  { pattern: /시봄|시퍼런\s봄/g, result: "시퍼런봄" },
  { pattern: /살너밤/g, result: "살아있는" },
  { pattern: /낯열/g, result: "낯선열대" },
  { pattern: /물라/g, result: "물가의라" },
  { pattern: /석맛|석류의\s맛/g, result: "석류의맛" },
  { pattern: /어달|어려운\s달/g, result: "어려운달" },
  { pattern: /수하/g, result: "수성의하" },
  { pattern: /롬네|롬넼/g, result: "로마네스" },
  { pattern: /위그아/g, result: "위에서그" },
  { pattern: /넓은?\s?밤/g, result: "넓은밤" },
  { pattern: /검은?\s?별/g, result: "검은별" },
  { pattern: /파왕/g, result: "파리의왕" },
  { pattern: /게돗물/g, result: "게와수돗" },
  {
    pattern: /문방사우/g,
    result: "시퍼런봄 빨간피터 매미는비 물가의라",
  },
  { pattern: /매빨시멸/g, result: "매미는 빨간피터 시퍼런봄 멸종" },
  { pattern: /피는\s밤/g, result: "피는밤" },
  { pattern: /난자말/g, result: "난자꾸말" },
  { pattern: /춤별|춤추는 별/g, result: "춤추는별" },
  {
    pattern:
      /(라이온|열대|상기후|퍼런봄|려운달|한낮|6|서울병|서울|계몽|뭍|마술|은하|넓은밤|하루|에서도|류의맛|검은별|동물)\s콘/g,
    result: "$1콘",
  },
];

const yt = (link: string) => ({ text: "유튜브", link });
const melon = (link: string) => ({ text: "멜론", link });
const fb = (link: string) => ({ text: "페이스북", link });
const genie = (link: string) => ({ text: "지니", link });

const data: Video[] = [
  {
    title: "불구경 2022",
    slug: "2022-fire-live",
    thumbnail: "2022_fire_live.jpg",
    subtitle: "라이브 콘서트 필름",
    setlist: [
      SONGS.whale,
      SONGS.witchcraft,
      SONGS.kirin,
      SONGS.living,
      SONGS.salamander,
      SONGS.gills,
      SONGS.rain,
      SONGS.antarctica,
      SONGS.shimmer,
      SONGS.bloom,
      SONGS.romanesque,
      SONGS.february,
      SONGS.seoul,
      SONGS.noon,
      SONGS.peter,
      SONGS.spring,
      SONGS.reason,
      "은하 (피아노 ver.)",
    ],
    info: ["불구경 2022", "라이브 콘서트 필름"],
    links: [yt("https://www.youtube.com/watch?v=M3DnmCFHB6o")],
    date: "2024.02.09",
  },
  {
    title: "불구경 2023",
    slug: "2023-fire-peter",
    thumbnail: "2023_fire_peter.jpg",
    subtitle: "빨간 피터 POV",
    setlist: [SONGS.peter],
    info: ["라이브", "불구경 2023", "POV"],
    links: [yt("https://www.youtube.com/watch?v=gEHLMNn8WT0")],
    date: "2024.01.26",
  },
];

export default data;
