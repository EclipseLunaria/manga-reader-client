import React, { useEffect, useState } from 'react';
interface Rating {
  ratingAvg: string;
  totalVotes: string;
}

export interface Chapter {
  title: string;
  link: string;
}

export interface SeriesInfo {
  title: string;
  author: string;
  image: string;
  rating: Rating;
  description: string;
  status: string;
  genres: string[];
  chapters: Chapter[];
}
export const getSeriesInfoHook = (mangaId: string) => {
  // Implement your hook here
  const [seriesInfo, setSeriesInfo] = useState<SeriesInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSeriesInfo = async () => {
      const ENDPOINT_URL = `http://localhost:6900/manga/${mangaId}`;
      try {
        const response = await fetch(ENDPOINT_URL);
        const data = await response.json();
        setSeriesInfo(data);
      } catch (err: any) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSeriesInfo();
  }, [mangaId]);
  return { seriesInfo, loading };
};
