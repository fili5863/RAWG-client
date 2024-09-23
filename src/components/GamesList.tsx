import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useGames from '../utils/useGames';
import { Genre } from '../utils/types';

interface Props {
  selectedGenre: Genre | null;
}

function GamesList({ selectedGenre }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletonsArr = [...Array(20).keys()];

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
