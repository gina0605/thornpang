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
  year: number;
  month: number;
  date: number;
  slug?: string;
  imageR?: string;
  imageS?: string;
  imageA?: string;
  info?: string;
  title: string;
  location?: string[];
  setlist?: string[];
  etc?: { subtitle: string; text: string[] }[];
  links: { text: string; link: string }[];
}

export interface Video {
  title: string;
  subtitle: string;
  slug: string;
  thumbnail: string;
  setlist: string[];
  info: string[];
  links: { text: string; link: string }[];
  date: string;
}
