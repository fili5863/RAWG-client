import { Grid, GridItem } from '@chakra-ui/react';
import { Show } from '@chakra-ui/react';
import './index.css';
import NavBar from './components/NavBar';

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
        color='blackAlpha.700'
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
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
