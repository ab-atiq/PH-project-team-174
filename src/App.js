import React from "react";
import Header from "./Components/Header/Header";
import './App.css';
import './App.scss';
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
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Feature from "./Components/Feature/Feature";
import AddService from "./Components/AddService/AddService";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import Checkout from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";
import Footer from "./Components/Footer/Footer";
import CoustomerReview from "./Components/CoustomerReview/CoustomerReview";
import NotFound from "./Components/NotFound/NotFound";
import Contact from "./Components/Contact/Contact";
import Review from "./Components/Review/Review"
import Makeadmin from "./Components/Makeadmin/Makeadmin";
import AdminRoute from "./Components/AdminRoute/AdminRoute";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<PrivetRoute><Cart /></PrivetRoute>} />
            <Route path="/home" element={< Home />} />
            <Route path="/checkout" element={<PrivetRoute>< Checkout /></PrivetRoute>} />
            <Route path="/feature" element={< Feature />} />
            <Route path='/login' element={<Login />} />
            <Route path='/payment' element={<PrivetRoute><Payment /></PrivetRoute>} />
            <Route path='/addService' element={<AdminRoute><AddService></AddService></AdminRoute>} />
            <Route path='/register' element={<Register />} />
            <Route path="/contact" element={< Contact />} />
            <Route path="/review" element={<AdminRoute>< Review /></AdminRoute>} />
            <Route path="/admin" element={<AdminRoute>< Makeadmin /></AdminRoute>} />
            <Route path='supplements' element={<Supplements />} />
            <Route path='fruits' element={<Fruits />} />
            <Route path='beverages' element={<Beverages />} />
            <Route path='dried' element={<Dried />} />
            <Route path='juice' element={<Juice />} />
            <Route path='meat' element={<Meat />} />
            <Route path='food' element={<Food />} />
            <Route path='review' element={<CoustomerReview />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
