import { useState, useEffect } from 'react';
import { GamesResponse, Game } from './types';
import apiClient from './api-client';

export const useFetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setError] = useState<string>('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await apiClient.get<GamesResponse>('/games');
        setGames(response.data.results);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        console.error(errors);
      }
    };

    fetchGames();
  }, []);

  return { games };
};
