import { Video } from "@/types";
import { SONGS as S } from "./constant";

export const replaceLogic = [
  { pattern: /언플러그드|unplug[^\s]*|acous[^\s]*/g, result: "어쿠" },
  { pattern: /doc[^\s]*/g, result: "다큐" },
  { pattern: /piano/g, result: "피아노" },
  { pattern: /버전|ver[^\s]+/g, result: "ver" },
  { pattern: /데모/g, result: "demo" },
  { pattern: /live/g, result: "라이브" },
  { pattern: /session/g, result: "세션" },
  { pattern: /뮤비|mv|music\s*video/g, result: "뮤직비디오" },
  { pattern: /teaser|트레일러|trailer/g, result: "티저" },
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

interface VideoRaw {
  title: string;
  subtitle?: string;
  slug: string;
  thumbnail?: string;
  setlist: string[];
  info: string[];
  links: { text: string; link: string }[];
  date: string;
}

const processVideo = (data: VideoRaw[]) =>
  data.map(
    ({ title, slug, thumbnail, subtitle, setlist, info, links, date }) => ({
      title,
      subtitle: subtitle ?? setlist.join(" / "),
      slug,
      thumbnail: thumbnail ?? slug + ".jpg",
      setlist,
      info,
      links,
      date,
    })
  );

const data: VideoRaw[] = [
  {
    title: "불구경 2022",
    subtitle: "라이브 콘서트 필름",
    slug: "2022-fire-live",
    setlist: [
      S.whale,
      S.witchcraft,
      S.kirin,
      S.living,
      S.salamander,
      S.gills,
      S.rain,
      S.antarctica,
      S.shimmer,
      S.bloom,
      S.romanesque,
      S.february,
      S.seoul,
      S.noon,
      S.peter,
      S.spring,
      S.reason,
      "은하 (피아노 ver.)",
    ],
    info: ["불구경 2022", "라이브 콘서트 필름"],
    links: [yt("https://www.youtube.com/watch?v=M3DnmCFHB6o")],
    date: "2024.02.09",
  },
  {
    title: "불구경 2023",
    subtitle: "빨간 피터 POV",
    slug: "2023-fire-peter",
    setlist: [S.peter],
    info: ["라이브", "불구경 2023", "POV"],
    links: [yt("https://www.youtube.com/watch?v=gEHLMNn8WT0")],
    date: "2024.01.26",
  },
  {
    title: "불구경 2023",
    slug: "2023-fire",
    setlist: [S.flies, S.noon, S.mercury, S.cicadas, S.extinction],
    info: ["라이브", "불구경 2023"],
    links: [yt("https://www.youtube.com/watch?v=BrPyTb65Fhc")],
    date: "2024.1.12",
  },
  {
    title: "[동물] 라이브 세션",
    slug: "live-crab",
    setlist: [S.crab],
    info: ["라이브 세션"],
    links: [yt("https://www.youtube.com/watch?v=p0ewNfkvasA")],
    date: "2023.9.22",
  },
  {
    title: "[동물] 라이브 세션",
    slug: "live-flesh",
    setlist: [S.flesh],
    info: ["라이브 세션"],
    links: [yt("https://www.youtube.com/watch?v=QidaDWIjkxo")],
    date: "2023.9.15",
  },
  {
    title: "[동물] 라이브 세션",
    slug: "live-halcyon",
    setlist: [S.halcyon],
    info: ["라이브 세션"],
    links: [yt("https://www.youtube.com/watch?v=v0xlhHBJWEQ")],
    date: "2023.9.8",
  },
  {
    title: "[동물] 라이브 세션",
    slug: "live-flies",
    setlist: [S.flies],
    info: ["라이브 세션"],
    links: [yt("https://www.youtube.com/watch?v=1m7UuGN67S0")],
    date: "2023.9.1",
  },
  {
    title: "[동물] 라이브 세션",
    slug: "live-extinction",
    setlist: [S.extinction],
    info: ["라이브 세션"],
    links: [yt("https://www.youtube.com/watch?v=R7bnVUiU25k")],
    date: "2023.8.30",
  },
  {
    title: "Music Video",
    slug: "mv-crab",
    setlist: [S.crab],
    info: ["뮤직비디오"],
    links: [yt("https://www.youtube.com/watch?v=e5Zgh8nTuQM")],
    date: "2023.8.28",
  },
  {
    title: "Music Video",
    slug: "mv-extinction",
    setlist: [S.extinction],
    info: ["뮤직비디오"],
    links: [yt("https://www.youtube.com/watch?v=aezBwpaHxD8")],
    date: "2023.8.28",
  },
  {
    title: "Teaser",
    slug: "teaser-crab",
    setlist: [S.crab],
    info: ["티저"],
    links: [yt("https://www.youtube.com/watch?v=wV9g8tQPmHA")],
    date: "2023.8.27",
  },
  {
    title: "Teaser",
    slug: "teaser-extinction",
    setlist: [S.extinction],
    info: ["티저"],
    links: [yt("https://www.youtube.com/watch?v=7DaPiJofNuM")],
    date: "2023.8.25",
  },
  {
    title: "Official Trailer",
    subtitle: "동물",
    slug: "trailer-animal",
    setlist: [S.extinction, S.halcyon, S.flesh, S.flies, S.crab],
    info: ["동물", "티저"],
    links: [yt("https://www.youtube.com/watch?v=9n-sNfA1_oo")],
    date: "2023.8.24",
  },
  {
    title: "Teaser",
    subtitle: "동물",
    slug: "teaser-animal",
    setlist: [S.extinction],
    info: ["동물", "티저"],
    links: [yt("https://www.youtube.com/watch?v=t_ip-79a18A")],
    date: "2023.8.11",
  },
  {
    title: "검은 별 콘서트",
    slug: "black-reason",
    setlist: [S.reason],
    info: ["라이브", "검은 별 콘서트"],
    links: [yt("https://www.youtube.com/watch?v=f7N6cQgU9U0")],
    date: "2023.5.12",
  },
];

export default processVideo(data);
