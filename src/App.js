import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.component";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
