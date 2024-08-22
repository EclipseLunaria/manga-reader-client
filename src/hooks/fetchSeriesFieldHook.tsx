import path from 'path';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../utils/api';

const fetchFieldHook = <T,>(mangaId: string, fieldId: string) => {
  const [field, setField] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchChapter = async () => {
      const ENDPOINT_URL = `${API_BASE_URL}/manga/${mangaId}/${fieldId}`;

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
  console.log("field:", field)
  return { field, loading };
};

export default fetchFieldHook;
