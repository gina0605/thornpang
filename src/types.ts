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
  slug: string;
  dates: number[];
  image: string;
  imageSquare?: string;
  title: string;
  dateText: string;
  location: string[];
  setlist: string[];
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
