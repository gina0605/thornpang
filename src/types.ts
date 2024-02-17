export interface Song {
  title: string;
  slug: string;
  album: string;
  info: string;
  lyrics: string[];
}

export interface Line {
  title: string;
  slug: string;
  album: string;
  line: string;
}

export interface Schedule {
  dates: number[];
  image: string;
  title: string;
  dateText: string;
  text: string[];
  links: { text: string; link: string }[];
}
