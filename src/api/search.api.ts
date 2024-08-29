import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchCategory, SeriesInfo } from '../utils/types';
const API_BASE_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'production'
    ? 'https://mangaflux.net/api'
    : 'http://localhost:6900';

const searchApi = axios.create({
  baseURL: `${API_BASE_URL}/search`,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getSeriesList = (
  type: SearchCategory,
  limit?: number,
  offset?: number,
) => {
  const [seriesResults, setSeriesResults] = useState<SeriesInfo[] | null>(null);
  const [loading, setLoading] = useState(true);
  offset = offset ? offset : 0;
  useEffect(() => {
    fetchSeries;
  });

  const fetchSeries = async () => {
    try {
      const response = await searchApi.get(
        `/${type}?limit=${limit ? limit : 25}&offset=${offset ? offset : 0}`,
      );
      setSeriesResults((await response.data) as SeriesInfo[]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
};

const getPopularSeries = (limit: number, offset: number) =>
  getSeriesList('popular', limit, offset);

const getNewestSeries = (limit: number, offset: number) =>
  getSeriesList('newest', limit, offset);

const getLatestSeries = (limit: number, offset: number) =>
  getSeriesList('latest', limit, offset);

export {getPopularSeries, getNewestSeries, getLatestSeries}