import useGenres, { Genre } from '../hooks/useGenres';
import {
  Button,
  Heading,
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
    <>
      <Heading fontSize='2xl' marginBottom={4}>
        Genre
      </Heading>
      <List>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <ListItem key={index} paddingY='5px'>
                <HStack spacing='4'>
                  <SkeletonCircle size='32px' />
                  <SkeletonText
                    noOfLines={1}
                    skeletonHeight='2'
                    width='100px'
                  />
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
                    variant='link'
                    whiteSpace='normal'
                    textAlign='left'
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
    </>
  );
};

export default GenreList;
