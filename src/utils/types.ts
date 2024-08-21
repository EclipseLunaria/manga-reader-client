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

type SearchCategory = 'last_updated' | 'popular' | 'newest';

type OAuthProvider = 'mal' | 'google' | 'facebook';

interface IMALRegistration {
  username: string;
  email: string;
  access_token: string;
  refresh_token: string;
  token_expires_at: Date;
  provider: string;
  provider_id: string;
}

export { SeriesInfo, Chapter, SearchCategory, OAuthProvider, IMALRegistration };
