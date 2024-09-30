import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ButtonColorMode from './ButtonColorMode';

export const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'}>
      <Image
        src={logo}
        boxSize='60px'
      ></Image>
      <ButtonColorMode />
    </HStack>
  );
};

export default NavBar;
