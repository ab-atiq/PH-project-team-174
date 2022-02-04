import React from "react";
import Header from "./Components/Header/Header";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Supplements from './Comphonents/Supplements/Supplements';
import Fruits from './Comphonents/Fruits/Fruits';
import Beverages from './Comphonents/Beverages/Beverages';
import Dried from './Comphonents/Dried/Dried';
import Juice from './Comphonents/Juice/Juice';
import Meat from './Comphonents/Meat/Meat';
import Food from './Comphonents/Food/Food';
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={< Home/>} />
          <Route path='/login' element={<Login/>} />
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
