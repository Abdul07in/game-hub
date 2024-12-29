import useGenres from '../hooks/useGenres';
import {
  HStack,
  Image,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
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
                <Text fontSize='lg'>{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};

export default GenreList;
