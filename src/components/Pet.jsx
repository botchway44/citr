// import React from 'react';
import { Link } from "react-router-dom";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { key: 1 }, props.name),
//     React.createElement("h2", { key: 2 }, props.animal),
//     React.createElement("h3", { key: 3 }, props.breed),
//   ]);
// };

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev.apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="relative block">
      <div className="image-container">
        <img src={hero} alt={name} className='object-' />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
