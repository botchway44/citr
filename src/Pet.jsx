// import React from 'react';


// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { key: 1 }, props.name),
//     React.createElement("h2", { key: 2 }, props.animal),
//     React.createElement("h3", { key: 3 }, props.breed),
//   ]);
// };


const Pet = (props) =>{
  return <div>
    <h1>{props.name}</h1>
    <h1>{props.animal}</h1>
    <h1>{props.breed}</h1>
  </div>
}




export default Pet;