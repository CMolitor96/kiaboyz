import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/pages/header";
import Homepage from "./components/homepage";
import CarMake from "./components/pages/carMake";
import CarModel from './components/pages/carModel';
import CarYear from './components/pages/carYear';
import CarTrim from "./components/pages/carTrim";
import CarBodytype from "./components/pages/carBodytype";
import CarImmobilizer from "./components/pages/carImmobilizer";
import Footer from "./components/pages/footer";
import './styles/App.css'


function App() {
  return (
    <Router>
      <header><Header /></header><br></br>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/search" element={<CarMake />} />
        <Route exact path="/search/:make" element={<CarModel />} />
        <Route exact path="/search/:make/:model" element={<CarYear />} />
        <Route exact path="/search/:make/:model/:year" element={<CarTrim />} />
        <Route exact path="/search/:make/:model/:year/:trim" element={<CarBodytype />} />
        <Route exact path="/search/:make/:model/:year/:trim/:bodytype" element={<CarImmobilizer />} />
      </Routes>
      <footer><Footer /></footer>
    </Router>
  );
}

export default App;
