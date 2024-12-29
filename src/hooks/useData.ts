import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number;
  next: number;
  previous: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      const controller = new AbortController();
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then(
          (response) => {
            setData(response.data.results);
            setError(null);
            setIsLoading(false);
          },
          (error) => {
            if (error instanceof CanceledError) return;
            setError(error.message);
            setIsLoading(false);
          }
        );

      return () => {
        controller.abort();
      };
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
