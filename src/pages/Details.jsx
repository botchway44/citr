import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import fetchPet from '../query/fetchPet';

const DetailsPage = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);


  if(result.isError){
    return ( <div>Error while fetching</div> );
  }

  if(result.isLoading){
    return (
      <div className='loading-pane'>
        <h2 className='loader'>@</h2>
      </div>
    )
  }

  const pet = result.data.pets[0];

  return <div className="details">
    <div>
      <h1>{pet.name}</h1>
      <h2>{pet.animal} - { pet.breed} - {pet.city}, {pet.state}</h2>
      <button>Adopt {pet.name}</button>
      <p>{pet.description}</p>
    </div>
  </div>;
};

export default DetailsPage;
