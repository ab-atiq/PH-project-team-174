import React from 'react';
import Products from '../../Comphonents/Products/Products';
import HeroSection from '../Header/HeroSection';
import Navber from '../Header/Navber';

const Home = () => {
    return (
        <>
            <Navber></Navber>
            <HeroSection></HeroSection>
            <Products></Products>
        </>
    );
};

export default Home;