import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  data: T[];
}

const useData = <T>(
  endpoint: string,
  searchString?: string,
  tagString?: string
) => {
  const [gifs, setGifs] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        params: {
          q: searchString || tagString,
        },
      })
      .then((res) => {
        setGifs(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });

    return () => controller.abort();
  }, [endpoint, searchString, tagString]);

  return { gifs, error, isLoading };
};

export default useData;
