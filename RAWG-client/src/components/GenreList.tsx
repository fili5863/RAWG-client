import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../utils/useGenres';
import { Genre } from '../utils/types';
import { useState } from 'react';

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data, isLoading, error } = useGenres();

  const displayedGenres = isExpanded ? data : data?.slice(0, 5);
  const numberOfGenres = 19;

  if (error) return null;

  return (
    <List spacing={4}>
      <Heading>Genre</Heading>
      {isLoading &&
        Array.from({ length: numberOfGenres }).map((_, index) => (
          <ListItem key={index}>
            <HStack gap={4}>
              <Spinner size='lg' />
              <SkeletonText />
            </HStack>
          </ListItem>
        ))}
      {data &&
        !isLoading &&
        displayedGenres.map(genre => {
          return (
            <ListItem key={genre.id}>
              <HStack
                key={genre.id}
                gap={4}
              >
                <Image
                  src={genre.image_background}
                  boxSize={8}
                ></Image>
                <Button
                  colorScheme={selectedGenre?.id === genre.id ? 'blue' : 'gray'}
                  variant='link'
                  fontSize={'lg'}
                  as={'h4'}
                  size={'sm'}
                  onClick={() => {
                    onSelectedGenre(genre);
                  }}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      <Button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </Button>
    </List>
  );
};

export default GenreList;
