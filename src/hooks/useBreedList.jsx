import { useQuery } from "@tanstack/react-query";

import fetchBreedsList from "../query/fetchBreedsList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedsList);
  return [results?.data?.breeds ?? [], results.status];
}
