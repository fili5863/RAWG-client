import { Grid, GridItem } from '@chakra-ui/react';
import { Show } from '@chakra-ui/react';
import './index.css';
import NavBar from './components/NavBar';
import GamesList from './components/GamesList';

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          lg: `"nav nav"
                  "aside main"`,
          base: `"nav" "main"`,
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
            bg='pink.300'
            area={'aside'}
          ></GridItem>
        </Show>
        <GridItem
          pl='2'
          bg='green.300'
          area={'main'}
        >
          <GamesList />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
