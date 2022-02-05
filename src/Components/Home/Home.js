import React from 'react';
import Products from '../../Comphonents/Products/Products';
import CoustomerReview from '../CoustomerReview/CoustomerReview';
import HeroSection from '../Header/HeroSection';


const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Products></Products>
            <CoustomerReview></CoustomerReview>
        </>
    );
};

export default Home;