import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';
import { Box, Circle, HStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };
  let count = 0;
  return (
    <>
      <HStack marginY={2} width='max-content'>
        {platforms.map((platform) => (
          <Circle
            key={platform.id}
            size='25px'
            bg={useColorModeValue('gray.700', 'gray.200')}
          >
            <Icon
              as={iconMap[platform.slug]}
              color={useColorModeValue('gray.200', 'gray.700')}
              size='25px'
            />
          </Circle>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
