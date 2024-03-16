import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, lazy, Suspense } from "react";

import AdoptedPetContext from "./context/AdoptedPetContext";

const SearchParams = lazy(() => import("./pages/SearchParams"));
const DetailsPage = lazy(() => import("./pages/Details"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense :  true
    },
  },
});
const App = () => {
  const adoptedPet = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div>
            {" "}
            <h2>Loading Default 🚀</h2>{" "}
          </div>
        }
      >
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
  );
};

export default App;
