const  fetchBreedsList = async ({queryKey}) =>{

  const animal = queryKey[1];

  if(!animal){
    throw new Error(`${animal} is required`)
  }

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

  if(!apiRes.ok){
    throw new Error(`details/${animal} fetch not ok`)
  }

  return apiRes.json()
}

export default fetchBreedsList;