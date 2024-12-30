import useGenres, { Genre } from '../hooks/useGenres';
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <List>
      {isLoading
        ? Array.from({ length: 15 }).map((_, index) => (
            <ListItem key={index} paddingY='5px'>
              <HStack spacing='4'>
                <SkeletonCircle size='32px' />
                <SkeletonText noOfLines={1} skeletonHeight='2' width='100px' />
              </HStack>
            </ListItem>
          ))
        : data.map((genre) => (
            <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                <Image
                  boxSize='32px'
                  borderRadius='8'
                  src={getCroppedImageUrl(genre.image_background)}
                  objectFit='cover'
                  alt={genre.name}
                />
                <Button
                  fontSize={{ base: 'md', md: 'md', lg: 'sm' }}
                  variant='link'
                  onClick={() => onSelectGenre(genre)}
                  fontWeight={
                    genre.id === selectedGenre?.id ? 'bold' : 'normal'
                  }
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};

export default GenreList;
