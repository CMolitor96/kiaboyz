import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage";
import CarMake from "./components/pages/carMake";
import CarModel from './components/pages/carModel';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/search" element={<CarMake />} />
        <Route exact path="/search/:model" element={<CarModel />} />
      </Routes>
    </Router>
  );
}

export default App;
