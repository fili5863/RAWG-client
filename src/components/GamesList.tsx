import { Image } from '@chakra-ui/react';
import { useFetchGames } from '../utils/fetchers';

function GamesList() {
  const { games } = useFetchGames();

  return (
    <div>
      {games &&
        games.map(game => (
          <div>
            <h1>{game.name}</h1>
            <Image
              src={game.background_image}
              boxSize='120px'
              objectFit='contain'
            ></Image>
          </div>
        ))}
    </div>
  );
}

export default GamesList;
