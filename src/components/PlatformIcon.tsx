import { Icon, Text } from '@chakra-ui/react';
import { BsNintendoSwitch } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaAppStoreIos,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';

interface Props {
  platform: string;
}

const PlatformIcon = ({ platform }: Props) => {
  switch (platform) {
    case 'pc':
      return <Icon as={FaWindows} />;
    case 'playstation':
      return <Icon as={FaPlaystation} />;
    case 'xbox':
      return <Icon as={FaXbox} />;
    case 'nintendo':
      return <Icon as={BsNintendoSwitch} />;
    case 'mac':
      return <Icon as={FaApple} />;
    case 'ios':
      return <Icon as={FaAppStoreIos} />;
    case 'android':
      return <Icon as={FaAndroid} />;
    case 'linux':
      return <Icon as={FaLinux} />;

    default:
      return <Text>{platform ? platform : 'Unknown platform'}</Text>;
  }
};

export default PlatformIcon;
