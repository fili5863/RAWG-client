import { useState, useEffect } from 'react';
import apiClient from './api-client';
import { AxiosRequestConfig } from 'axios';

interface Response<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get<Response<T>>(endpoint, { ...requestConfig })
        .then(response => setData(response.data.results))
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    },
    dependencies ? [...dependencies] : []
  );

  return { data, isLoading, error };
};

export default useData;
