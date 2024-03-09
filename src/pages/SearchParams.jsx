import { useState, useEffect } from 'react';
import Results from "../components/Results"
import useBreedList from '../hooks/useBreedList'
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']
// const BREEDS = ["poodle"]

const SearchParams = () => {

   const [location, setLocation] = useState('Seattle, WA');
   const [breed, setBreed] = useState('');
   const [pets, setPets] = useState([]);


   const animalHook  = useState('');
   const animal = animalHook[0];
   const setAnimal = animalHook[1];
   
   const [breeds] = useBreedList(animal);

   useEffect(()=>{
    requestPets();
   },[]);// eslint-disable-line react-hooks/exhaustive-deps



   async function requestPets(){
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);

    const json = await res.json();

    setPets(json.pets);
   }

  return (
    <div className='search-params'>

<form onSubmit={(e)=>{
  e.preventDefault();
  requestPets()
}}>
   <label htmlFor="location">
    Location
    <input type="text" id="location" value={location} placeholder='Location' onChange={ (e)=> { setLocation(e.target.value) }} />
  </label>
   <label htmlFor="animal">
    Animal

    <select name="animal" id="animal" value={animal} onChange={(e)=>{ 
      setAnimal(e.target.value)
      setBreed('')
      }}>
      <option value=""></option>

      {
        ANIMALS.map((animal)=>{ return <option key={animal} >{animal}</option> })
      }
    </select>
    </label>

    <label htmlFor="animal">
    Breed
    <select
    disabled = {breeds.length<=0}
     name="breed" id="breed" value={breed} onChange={(e)=>{ setBreed(e.target.value)}}>
      <option value=""></option>
      {
        breeds.map((breed)=>{ return <option key={breed} >{breed}</option> })
      }
    </select>
   </label>

<button type='submit'>Submit</button>
</form>


<Results pets={pets} />

    </div>
  );

}


export default SearchParams;