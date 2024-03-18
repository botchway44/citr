import { useParams, useNavigate } from "react-router-dom";

 import Carousel from "../components/Carousel"
import ErrorBoundary from "../boundaries/ErrorBoundary";
import Modal from "../components/Modal"
import { useState } from 'react';
import {useDispatch} from "react-redux";
import {adopt} from "../store/slice/AdoptedPetSlice"
import { useGetPetQuery } from '../store/services/petApiService';

const DetailsPageContainer = () => {
  const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

  const { id } = useParams();

  const {isLoading, data : pet} = useGetPetQuery(id);

 const dispatch = useDispatch()

  // if(result.isError){
  //   return ( <div>Error while fetching</div> );
  // }

  if(isLoading){
    return (
      <div className='loading-pane'>
        <h2 className='loader'>@</h2>
      </div>
    )
  }


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
                     dispatch(adopt(pet))
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
