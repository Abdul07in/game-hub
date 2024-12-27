import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { data } from '../sample-request/data';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    // apiClient
    //   .get<FetchGamesResponse>('/games', { signal: controller.signal })
    //   .then(
    //     (response) => {
    //       setGames(response.data.results);
    //       setError(null);
    //       setIsLoading(false);
    //     },
    //     (error) => {
    //       if (error instanceof CanceledError) return;
    //       setError(error.message);
    //       setIsLoading(false);
    //     }
    //   );

    setGames(data.results);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => {
      controller.abort();
    };
  }, []);

  return { games, error, isLoading };
};

export default useGames;
