import React from 'react';
import { createRoot } from 'react-dom/client';
// import Pet from "./Pet"
import SearchParams from "./pages/SearchParams"
import DetailsPage from "./pages/Details"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


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

/* <Pet name= "Luna" animal= "Dog" breed= "Havenese" />
      <Pet name= "Pepper" animal= "Bird" breed= "Cockatiel" />
      <Pet name= "Doink" animal= "Cat" breed= "Mixed" /> */
const App = () => {

  return (
    <BrowserRouter>
    <header>
      <Link to="/" >
         <h1>Adopt Me</h1>
       </Link>
    </header>
      {/* <SearchParams /> */}
 
 <Routes>
    <Route path='/details/:id' element ={<DetailsPage />} />
    <Route path='/' element ={<SearchParams />} />
 </Routes>
    </BrowserRouter>
  );

}
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
