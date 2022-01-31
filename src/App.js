import React from "react";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Header/HeroSection";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Comphonents/Products/Products';
import Supplements from './Comphonents/Supplements/Supplements';
import Fruits from './Comphonents/Fruits/Fruits';
import Beverages from './Comphonents/Beverages/Beverages';
import Dried from './Comphonents/Dried/Dried';
import Juice from './Comphonents/Juice/Juice';
import Meat from './Comphonents/Meat/Meat';
import Food from './Comphonents/Food/Food';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header></Header>
      <HeroSection></HeroSection>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path='supplements' element={<Supplements />} />
          <Route path='fruits' element={<Fruits />} />
          <Route path='beverages' element={<Beverages />} />
          <Route path='dried' element={<Dried />} />
          <Route path='juice' element={<Juice />} />
          <Route path='meat' element={<Meat />} />
          <Route path='food' element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
