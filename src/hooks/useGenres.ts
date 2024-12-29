import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Geners {
  id: number;
  name: number;
}

interface FetchGenresResponse {
  count: number;
  results: Geners[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Geners[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then(
        (response) => {
          setGenres(response.data.results);
          setError(null);
          setIsLoading(false);
        },
        (error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setIsLoading(false);
        }
      );

    //   setGenres(data.results);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 500);
    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
