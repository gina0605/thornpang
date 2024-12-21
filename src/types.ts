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
  imageR?: string;
  imageS?: string;
  imageA?: string;
  title: string;
  location?: string[];
  setlist?: string[];
  etc?: string[];
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
