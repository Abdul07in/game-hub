import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow='hidden'
      border='1px'
      borderColor='gray.800'
      shadow='lg'
      width='400px'
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
