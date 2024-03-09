import Pet from "./Pet"


const Results = ({pets})=>{

  return (
    <div className='search'>

{
  !(pets.length) ? (
    <h1>No Pets Found</h1>
  ) : pets.map(pet => (
    <Pet 
    name ={pet.name}
    breed ={pet.breed}
    animal ={pet.animal}
    images = {pet.images}
    location = {`${pet.city}, ${pet.state}`}
    id={pet.id}
    key={pet.id}  />
  ))
}

    </div>
  )
}




export default Results;