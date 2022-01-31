import React from 'react';
import { Link } from 'react-router-dom';
import './ProductBar.css';
;

const ProductBar = () => {
    return (
        <nav className='bg-primary rounded'>
            <Link className='text-white' to='/supplements'>Supplements</Link>{' '}
            <Link className='text-white' to='/fruits'>Fruits</Link>{' '}
            <Link className='text-white' to='/beverages'>Beverages</Link>{' '}
            <Link className='text-white' to='/dried'>Dried</Link>{' '}
            <Link className='text-white' to='/juice'>Juice</Link>{' '}
            <Link className='text-white' to='/meat'>Meat</Link>{' '}
            <Link className='text-white' to='/food'>Food</Link>{' '}
        </nav>
    );
};

export default ProductBar;