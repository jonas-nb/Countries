import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./Components/Container/Container";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </div>
  );
};

export default App;
