import { genresData } from '../sample-responses/genres';
import useData from './useData';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genresData, isLoading: null, error: null });

export default useGenres;
