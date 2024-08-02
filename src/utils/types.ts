interface Rating {
  ratingAvg: string;
  totalVotes: string;
}

interface Chapter {
  id: string;
  title: string;
  link: string;
}

interface SeriesInfo {
  title: string;
  author: string;
  image: string;
  rating: Rating;
  description: string;
  status: string;
  genres: string[];
  chapters: Chapter[];
}

export { SeriesInfo, Chapter };
