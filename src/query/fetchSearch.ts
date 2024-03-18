import { QueryFunction } from "@tanstack/react-query";
import { PetAPIResponse } from "../models/apiResponsesTypes";

const fetchSearch: QueryFunction<
  PetAPIResponse,
  ["search", { animal: string; location: string; breed: string }]
> = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1];

  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!apiRes.ok) {
    throw new Error(`Pet Search not ok ${animal}, ${location}, ${breed}`);
  }

  return apiRes.json();
};

export default fetchSearch;
