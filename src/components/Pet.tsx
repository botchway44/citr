// import React from 'react';
import { Link } from "react-router-dom";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { key: 1 }, props.name),
//     React.createElement("h2", { key: 2 }, props.animal),
//     React.createElement("h3", { key: 3 }, props.breed),
//   ]);
// };

interface IProps {
  name: string;
  animal: string;
  breed: string;
  images: string[];
  location: string;
  id: number;
}

const Pet = ({ name, animal, breed, images, location, id }: IProps) => {
  let hero = "https://pets-images.dev.apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
