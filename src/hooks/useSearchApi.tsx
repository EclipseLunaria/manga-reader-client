import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import path from 'path';
import { API_BASE_URL } from '../utils/api';
interface UseApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

const useSeriesSearchApi = <T,>(searchTerm: string): UseApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const ENDPOINT_URL = `${API_BASE_URL}/search?q=${searchTerm}`;
      console.log('fetching data from', ENDPOINT_URL);
      try {
        const response: AxiosResponse<T> = await axios.get<T>(ENDPOINT_URL);
        console.log('response', (response.data as any).results);
        setData((response.data as any).results);
      } catch (err: any) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchTerm]);

  return { data, loading, error };
};

export default useSeriesSearchApi;
