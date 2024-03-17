import { useContext, useState } from "react";
import Results from "../components/Results";
import useBreedList from "../hooks/useBreedList";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../query/fetchSearch";
import AdoptedPetContext from "../context/AdoptedPetContext";
import { Animal, Pet } from "../models/apiResponsesTypes";

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // const [location, setLocation] = useState("Seattle, WA");

  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "" as Animal,
    breed: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [adoptedPet, _] = useContext(AdoptedPetContext);

  const animalHook = useState("");
  const animal = animalHook[0];
  const setAnimal = animalHook[1];

  const [breeds] = useBreedList(animal as Animal);

  const result = useQuery(["search", requestParams], fetchSearch);

  const pets = result?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);

          const obj = {
            animal: (formData.get("animal")?.toString() ?? "") as Animal,
            breed: formData.get("breed")?.toString() ?? "",
            location: formData.get("location")?.toString() ?? "",
          };

          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}

        <label htmlFor="location">
          Location
          <input type="text" id="location" placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {ANIMALS.map((_animal) => {
              return (
                <option value={_animal} key={_animal}>
                  {_animal}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="animal">
          Breed
          <select disabled={breeds.length <= 0} name="breed" id="breed">
            <option value=""></option>
            {breeds.map((breed) => {
              return <option key={breed}>{breed}</option>;
            })}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
