import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useGames from '../utils/useGames';
import { Genre, Platform } from '../utils/types';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

function GamesList({ selectedGenre, selectedPlatform }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletonsArr = [...Array(20).keys()];

  if (error) return null;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3 }}
      spacing={3}
    >
      {isLoading &&
        skeletonsArr.map(skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data &&
        !isLoading &&
        data.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
}

export default GamesList;
