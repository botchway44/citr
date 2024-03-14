import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import fetchPet from '../query/fetchPet';
import Carousel from "../components/Carousel"
import ErrorBoundary from "../boundaries/ErrorBoundary";
import { useState, useContext, lazy } from 'react';
import AdoptedPetContext from '../context/AdoptedPetContext';


const  Modal  = lazy(()=> import("../components/Modal"));


const DetailsPageContainer = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [ _, setAdoptedPet] = useContext(AdoptedPetContext);


    const [showModal, setShowModal] = useState(false);

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
    <Carousel images={pet.images} />
    <div>
      <h1>{pet.name}</h1>
      <h2>{pet.animal} - { pet.breed} - {pet.city}, {pet.state}</h2>
      <button 
      onClick={ () => setShowModal(true)}
      > Adopt {pet.name}</button>
      <p>{pet.description}</p>

       {
      showModal ? (
        <Modal>
          <div>
              <h1>Would you like to adopt {pet.name}</h1>
              <div className='buttons'>
                <button onClick={
                  ()=>{
                    setAdoptedPet(pet)
                    navigate("/")
                  }
                }>Yes</button>
                <button onClick={()=> setShowModal(false)}>No</button>
              </div>
          </div>
        </Modal>
      ) : (null)
    }
    
    </div>


  </div>;
};

function DetailsPage(props){

  return (
    <ErrorBoundary >
      <DetailsPageContainer {...props} />
     </ErrorBoundary>
  )
}

export default DetailsPage;
