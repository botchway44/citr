import React from "react";
import { createRoot } from "react-dom/client";
// import Pet from "./Pet"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, lazy, Suspense  } from 'react';

import AdoptedPetContext from './context/AdoptedPetContext';


const SearchParams  = lazy( () =>  import("./pages/SearchParams"));
const DetailsPage  = lazy( () =>  import("./pages/Details"));

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
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <Suspense fallback ={ <div> <h2>Loading Default 🚀</h2> </div> }>
        <AdoptedPetContext.Provider value={adoptedPet}>
        <header>
          <Link to="/">
            <h1>Adopt Me</h1>
          </Link>
        </header>
        {/* <SearchParams /> */}

        <Routes>
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
        </AdoptedPetContext.Provider>
      </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
