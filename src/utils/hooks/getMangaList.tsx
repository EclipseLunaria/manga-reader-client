import React, {useState, useEffect} from "react";
import { SeriesInfo } from "../types";
import { API_BASE_URL } from '../api';
import { SearchCategory } from "../types";

const getSeriesListHook = (type:SearchCategory) => {
    const [seriesInfoList, setSeriesInfo] = useState<SeriesInfo[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const categoryPath = {
        "last_updated" : "latest/updated",
        "popular": "most/popular",
        "newest" : "latest/added"
    }

    console.log(API_BASE_URL);
    useEffect(() => {
      const fetchSeriesInfo = async () => {
        const ENDPOINT_URL = `${API_BASE_URL}/manga/${categoryPath[type]}`;
        try {
          const response = await fetch(ENDPOINT_URL);
          const data = await response.json();
          setSeriesInfo(data.results);
        } catch (err: any) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchSeriesInfo();
    }, [type]);
    return { seriesInfoList, loading };
  };

export default getSeriesListHook;