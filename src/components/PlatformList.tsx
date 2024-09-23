import { HStack, Text } from '@chakra-ui/react';
import { Platform } from '../utils/types';
import PlatformIcon from './PlatformIcon';

interface PlatformsProps {
  platforms: Platform[];
}

const PlatformList = ({ platforms }: PlatformsProps) => {
  return (
    <HStack>
      {platforms.slice(0, 3).map(platform => (
        <Text key={platform.id}>
          <PlatformIcon platform={platform.slug} />
        </Text>
      ))}
    </HStack>
  );
};

export default PlatformList;
