import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ButtonColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Text>Light mode</Text>
      <Switch
        isChecked={colorMode === 'dark'}
        colorScheme='green'
        onChange={toggleColorMode}
      ></Switch>
      <Text>Dark mode</Text>
    </HStack>
  );
};

export default ButtonColorMode;
