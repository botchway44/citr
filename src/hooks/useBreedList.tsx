import { QueryStatus, useQuery } from "@tanstack/react-query";

import fetchBreedsList from "../query/fetchBreedsList";
import { Animal } from "../models/apiResponsesTypes";

export default function useBreedList(animal: Animal) {
  const results = useQuery(["breeds", animal], fetchBreedsList);
  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus
  ];
}
