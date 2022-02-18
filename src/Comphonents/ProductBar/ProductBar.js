import React from 'react';
import { Link } from 'react-router-dom';
import './ProductBar.css';
;

const ProductBar = () => {
    return (
        <nav className='navbar justify-content-around bg-success rounded mt-3 fw-bolder'>
            <Link className='text-white ' to='/supplements'><button className='btn text-white'>Supplements</button></Link>{' '}
            <Link className='text-white' to='/fruits'><button className='btn text-white'>Fruits</button></Link>{' '}
            <Link className='text-white' to='/beverages'><button className='btn text-white'>Beverages</button></Link>{' '}
            <Link className='text-white' to='/dried'><button className='btn text-white'>Dried</button></Link>{' '}
            <Link className='text-white' to='/juice'><button className='btn text-white'>Juice</button></Link>{' '}
            <Link className='text-white' to='/meat'><button className='btn text-white'>Meat</button></Link>{' '}
            <Link className='text-white' to='/food'><button className='btn text-white'>Food</button></Link>{' '}
        </nav>
    );
};

export default ProductBar;