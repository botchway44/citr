import React from "react";
import { createRoot } from "react-dom/client";
// import Pet from "./Pet"
import SearchParams from "./pages/SearchParams";
import DetailsPage from "./pages/Details";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import AdoptedPetContext from "./context/AdoptedPetContext";
import { Pet } from "./models/apiResponsesTypes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  const adoptedPet = useState(null as Pet | null);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.querySelector("#root");
if (!container) throw new Error("no container to render to");

const root = createRoot(container);
root.render(<App />);
