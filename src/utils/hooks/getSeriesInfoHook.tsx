import { useEffect, useState } from 'react';
import { SeriesInfo } from '../types';
import path from 'path';
import { API_BASE_URL } from '../api';

const getSeriesInfoHook = (mangaId: string) => {
  const [seriesInfo, setSeriesInfo] = useState<SeriesInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSeriesInfo = async () => {
      const ENDPOINT_URL = `${API_BASE_URL}/manga/${mangaId}`;
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

export default getSeriesInfoHook;
