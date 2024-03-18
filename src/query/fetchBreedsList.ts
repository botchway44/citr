import { QueryFunction } from "@tanstack/react-query";
import { BreedListAPIResponse } from "../models/apiResponsesTypes";

const fetchBreedsList: QueryFunction<
  BreedListAPIResponse,
  ["breeds", string]
> = async ({ queryKey }) => {
  const animal = queryKey[1];

  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`details/${animal} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchBreedsList;
