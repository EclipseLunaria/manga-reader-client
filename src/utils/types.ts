interface Rating {
  ratingAvg: string;
  totalVotes: string;
}

interface Chapter {
  chapter_id: string;
  title: string;
  link: string;
}

interface SeriesInfo {
  manga_id: string;
  title: string;
  author: string;
  image: string;
  rating: Rating;
  description: string;
  status: string;
  genres: string[];
  chapters: Chapter[];
}

type SearchCategory = "last_updated" | "popular" | "newest";

export { SeriesInfo, Chapter, SearchCategory };
