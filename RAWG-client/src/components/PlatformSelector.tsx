import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import usePlatforms from '../utils/usePlatforms';
import { Platform } from '../utils/types';

interface Props {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  console.log('platforms', data);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {selectedPlatform ? selectedPlatform.name : 'Select Platform'}
      </MenuButton>
      <MenuList>
        {data.map(platform => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              onSelectedPlatform(platform);
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
