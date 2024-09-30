import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const GameRating = ({ score }: Props) => {
  return (
    <Badge
      variant='outline'
      borderRadius='4px'
      paddingX={2}
      border='1px solid'
      colorScheme={score >= 75 ? 'green' : score >= 50 ? 'yellow' : 'red'}
    >
      {score ? score : 'No rating'}
    </Badge>
  );
};

export default GameRating;
