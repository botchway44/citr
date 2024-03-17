export type Animal = "dog" | "cat" | "bird" | "reptile" | "reptile" | "rabbit";

export interface Pet {
  id: number;
  name: string;
  animal: string;
  description: string;
  breed: string;
  images: string[];
  city: string;
  state: string;
}

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: number;
  pets: Pet[];
}

export interface BreedListAPIResponse {
  animal: Animal;
  breeds: string[];
}
