import { useEffect, useState } from 'react';

const fetchFieldHook = <T,>(mangaId: string, fieldId: string) => {
  const [field, setField] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchChapter = async () => {
      const ENDPOINT_URL = `http://localhost:6900/manga/${mangaId}/${fieldId}`;
      console.log(ENDPOINT_URL);
      try {
        const response = await fetch(ENDPOINT_URL);
        const data = await response.json();
        setField(data);
      } catch (err: any) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchChapter();
  }, [mangaId, fieldId]);

  return { field, loading };
};

export default fetchFieldHook;
