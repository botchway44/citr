import React from "react";
import { createRoot } from "react-dom/client";
// import Pet from "./Pet"
import SearchParams from "./pages/SearchParams";
import DetailsPage from "./pages/Details";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 import {Provider} from "react-redux";
import store from "./store/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
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
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
