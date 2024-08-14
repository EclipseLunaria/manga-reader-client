import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../api';

const fetchChapterHook = (mangaId: string, chapterId: string) => {
  const [chapter, setChapter] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchChapter = async () => {
      const ENDPOINT_URL = `${API_BASE_URL}/fetch/${mangaId}/${chapterId}`;
      console.log(ENDPOINT_URL);
      try {
        const response = await fetch(ENDPOINT_URL);
        const data = await response.json();
        setChapter(data);
      } catch (err: any) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchChapter();
  }, [mangaId, chapterId]);

  return { chapter, loading };
};

export default fetchChapterHook;
