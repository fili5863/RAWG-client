import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { GameCardProps } from '../utils/types';
import PlatformList from './PlatformList';
import GameRating from './GameRating';

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div>
      <Card>
        <Image
          className='rounded-t-lg'
          src={game.background_image}
          objectFit='cover'
          aspectRatio={4 / 3}
        ></Image>

        <CardBody>
          <HStack justifyContent={'space-between'}>
            <PlatformList platforms={game.parent_platforms.map(({ platform }) => platform)} />
            <GameRating score={game.metacritic} />
          </HStack>
          <Heading
            marginTop={4}
            as={'h2'}
            size={'lg'}
          >
            {game.name}
          </Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
