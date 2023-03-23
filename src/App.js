import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import React from "react";
import {
  Navbar,
  Feed,
  VedioDatiels,
  ChennalDatiels,
  SearchItem,
} from "./Components/AllImports";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/vedio/:id" element={<VedioDatiels />} />
          <Route path="/channel/:id" element={<ChennalDatiels />} />
          <Route path="/search/:searchTerm/:name?" element={<SearchItem />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
