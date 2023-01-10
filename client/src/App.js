import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage";
import CarMake from "./components/pages/carMake";
import CarModel from './components/pages/carModel';
import CarYear from './components/pages/carYear';
import CarTrim from "./components/pages/carTrim";
import CarBodytype from "./components/pages/carBodytype";
import CarImmobilizer from "./components/pages/carImmobilizer";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/search" element={<CarMake />} />
        <Route exact path="/search/:make" element={<CarModel />} />
        <Route exact path="/search/:make/:model" element={<CarYear />} />
        <Route exact path="/search/:make/:model/:year" element={<CarTrim />} />
        <Route exact path="/search/:make/:model/:year/:trim" element={<CarBodytype />} />
        <Route exact path="/search/:make/:model/:year/:trim/:bodytype" element={<CarImmobilizer />} />
      </Routes>
    </Router>
  );
}

export default App;
