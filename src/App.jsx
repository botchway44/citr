import React from 'react';
import { createRoot } from 'react-dom/client';
// import Pet from "./Pet"
import SearchParams from "./SearchParams"


// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { key: 1 }, "Adopt Me!"),
//     React.createElement(Pet, {
//       key: 2,
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havenese",
//     }),
//     React.createElement(Pet, {
//       key: 3,
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       key: 4,
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mixed",
//     }),
//   ]);
// };


const App = () => {

  return (
    <div>
      <h1>Adopt Me</h1>

      <SearchParams />
      {/* <Pet name= "Luna" animal= "Dog" breed= "Havenese" />
      <Pet name= "Pepper" animal= "Bird" breed= "Cockatiel" />
      <Pet name= "Doink" animal= "Cat" breed= "Mixed" /> */}
    </div>
  );

}
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
