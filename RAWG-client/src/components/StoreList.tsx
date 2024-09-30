import {
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Spinner,
  Button,
} from '@chakra-ui/react';

import useStores, { Store } from '../utils/useStores';

interface Props {
  onSelectedStore: (store: Store) => void;
  selectedStore: Store | null;
}

const StoreList = ({ onSelectedStore, selectedStore }: Props) => {
  const { data, isLoading, error } = useStores();
  const numberOfStores = 19;

  if (error) return null;
  return (
    <List spacing={4}>
      <Heading>Stores</Heading>
      {isLoading &&
        Array.from({ length: numberOfStores }).map((_, index) => (
          <ListItem key={index}>
            <HStack gap={4}>
              <Spinner size='lg' />
              <SkeletonText
                noOfLines={1}
                spacing={4}
              />
            </HStack>
          </ListItem>
        ))}
      {!isLoading &&
        data.map(store => {
          return (
            <ListItem key={store.id}>
              <HStack gap={4}>
                <Image
                  src={store.image_background}
                  boxSize={8}
                />
                <Button
                  colorScheme={selectedStore?.id === store.id ? 'blue' : 'gray'}
                  variant='link'
                  fontSize={'lg'}
                  as={'h4'}
                  size={'sm'}
                  onClick={() => {
                    onSelectedStore(store);
                  }}
                >
                  {store.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
    </List>
  );
};

export default StoreList;
