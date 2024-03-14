import { useContext, useState } from "react";
import Results from "../components/Results";
import useBreedList from "../hooks/useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
 import { useQuery } from '@tanstack/react-query';
import fetchSearch from "../query/fetchSearch";
import AdoptedPetContext from '../context/AdoptedPetContext';

const SearchParams = () => {
  // const [location, setLocation] = useState("Seattle, WA");
  
  const [requestParams, setRequestParams] = useState({
    location : "", 
    animal : "",
    breed : ""
  });

  const [adoptedPet] = useContext(AdoptedPetContext);

  const animalHook = useState("");
  const animal = animalHook[0];
  const setAnimal = animalHook[1];

  const [breeds] = useBreedList(animal);

  const result = useQuery(["search", requestParams], fetchSearch);

  const pets = result?.data?.pets ?? [];

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
      className='p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center'
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);

          const obj ={ 
            animal : formData.get('animal') ?? "",
            breed : formData.get('breed') ?? "",
            location : formData.get('location') ?? "",
          }

          setRequestParams(obj);
        }}
      >

{
  adoptedPet ? (
    <div className='pet image-container'>
      <img src={adoptedPet.images[0]} alt={pets.name}/>
    </div>
  ): null
}


        <label htmlFor="location">
          Location
          <input
            className='search-input'
            type="text"
            id="location"
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            className='search-input'
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {ANIMALS.map((_animal) => {
              return <option value={_animal} key={_animal}>{_animal}</option>;
            })}
          </select>
        </label>

        <label htmlFor="animal">
          Breed
          <select
          className='search-input grayed-out-disabled'
            disabled={breeds.length <= 0}
            name="breed"
            id="breed"
          >
            <option value=""></option>
            {breeds.map((breed) => {
              return <option key={breed}>{breed}</option>;
            })}
          </select>
        </label>

        <button 
        className='px-6 rounded py-2 text-white hover:opacity-50 border-none bg-orange-500'
        type="submit">Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
