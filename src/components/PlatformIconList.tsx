import {
  FaWindows,
  FaApple,
  FaLinux,
  FaXbox,
  FaPlaystation,
  FaAndroid,
} from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    xbox: FaXbox,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack marginY="10px">
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          key={platform.id}
          marginRight={2}
          w={6}
          h={6}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
