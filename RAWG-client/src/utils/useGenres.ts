import { Genre } from './types';
import useData from './useData';

const useGenres = () => useData<Genre>('/genres');

export default useGenres;
