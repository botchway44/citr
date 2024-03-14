import React from "react";
import { createRoot } from "react-dom/client";
// import Pet from "./Pet"
import SearchParams from "./pages/SearchParams";
import DetailsPage from "./pages/Details";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState,  } from 'react';

import AdoptedPetContext from './context/AdoptedPetContext';


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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {


  const adoptedPet = useState(null);

  return (
    <div className='p-0 m-0' style={{background: 'url(http://pets-images.dev-apis.com/pets/wallpaperC.jpg)'}}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
        <header className='w-full mb-10 text-center p-7 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 '>
          <Link className='text-6xl ' to="/">
            <h1>Adopt Me</h1>
          </Link>
        </header>
        {/* <SearchParams /> */}

        <Routes>
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
    </div>
  );
};
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
