import { Game, Genre, Platform } from './types';
import useData from './useData';
import { Store } from './useStores';

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedStore: Store | null
) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
        stores: selectedStore?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedStore?.id]
  );

export default useGames;
