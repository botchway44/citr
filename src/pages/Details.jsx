
import { useParams } from 'react-router-dom';
const DetailsPage = () => {

  const {id} = useParams()
 
  return (
    <div className='search-params'>
      {id}
</div>
  );

}


export default DetailsPage;