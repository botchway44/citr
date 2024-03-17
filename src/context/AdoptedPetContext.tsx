import { createContext } from "react";

import { Pet } from "../models/apiResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    description: "Lorem Ipsum",
    breed: "Beagle",
    images: [],
    city: "Seattle",
    state: "WA",
  },
  () => {},
]);

// const AdoptedPetContext = createContext<
//   [Pet, (adoptedPet: Pet) => void] | null
// >(null);

export default AdoptedPetContext;
