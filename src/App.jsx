import React from "react";
  // import Pet from "./Pet"
// import SearchParams from "./pages/SearchParams";
// import DetailsPage from "./pages/Details";
import {  Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, lazy, Suspense } from 'react';
import AdoptedPetContext from './context/AdoptedPetContext';


const DetailsPageComponent = lazy(()=> import("./pages/Details"))
const SearchParamsPageComponent = lazy(()=> import("./pages/SearchParams"))

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
       <QueryClientProvider client={queryClient}>
        <Suspense fallback={ <div className='loading-pane'> <h2 className='loader'>Loading 🚀</h2> </div> }>
        <AdoptedPetContext.Provider value={adoptedPet}>
        <header className='w-full mb-10 text-center p-7 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 '>
          <Link className='text-6xl ' to="/">
            <h1>Adopt Me</h1>
          </Link>
        </header>
        {/* <SearchParams /> */}

        <Routes>
          <Route path="/details/:id" element={<DetailsPageComponent />} />
          <Route path="/" element={<SearchParamsPageComponent />} />
        </Routes>
        </AdoptedPetContext.Provider>
        </Suspense>
      </QueryClientProvider>
     </div>
  );
};

export default App;
