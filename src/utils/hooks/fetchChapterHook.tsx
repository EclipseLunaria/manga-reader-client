import { useEffect, useState } from 'react';

const fetchChapterHook = (mangaId: string, chapterId: string) => {
  const [chapter, setChapter] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchChapter = async () => {
      const ENDPOINT_URL = `http://localhost:6900/fetch/manga/${mangaId}/chapter/${chapterId}`;
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
