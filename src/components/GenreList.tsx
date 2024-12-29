import useGenres from '../hooks/useGenres';
import { ListItem, UnorderedList } from '@chakra-ui/react';

const GenreList = () => {
  const { data } = useGenres();
  return (
    <UnorderedList>
      {data.map((genre) => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default GenreList;
