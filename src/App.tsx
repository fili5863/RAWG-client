import { Grid, GridItem } from '@chakra-ui/react';
import { Show } from '@chakra-ui/react';
import './index.css';
import NavBar from './components/NavBar';
import GamesList from './components/GamesList';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre, Platform } from './utils/types';
import PlatformSelector from './components/PlatformSelector';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  console.log('sheesh', selectedGenre);

  return (
    <>
      <Grid
        templateAreas={{
          lg: `"nav  nav"
                  "aside  main"`,
          base: `"nav" "main"`,
        }}
        templateColumns={{
          lg: '200px 1fr',
          base: '1fr',
        }}
        gap='1'
        fontWeight='bold'
      >
        <GridItem
          pl='2'
          area={'nav'}
          className='h-fit'
        >
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem
            pl='2'
            area={'aside'}
          >
            <GenreList
              selectedGenre={selectedGenre}
              onSelectedGenre={genre => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem
          paddingInline='10'
          area={'main'}
        >
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectedPlatform={platform => setSelectedPlatform(platform)}
          />
          <GamesList
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
