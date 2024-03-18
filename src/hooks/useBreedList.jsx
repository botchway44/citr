import { useGetBreedsQuery } from '../store/services/petApiService';

export default function useBreedList(animal) {
    
  const {data:breeds, isLoading} = useGetBreedsQuery(animal, {
    skip : !animal
  })
  return [breeds ?? [], isLoading ? 'loading' : 'loaded' ];
}
