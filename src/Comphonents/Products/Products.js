import React, { useEffect, useState } from 'react';
import ProductBar from '../ProductBar/ProductBar';
import SingleProduct from '../SingleProduct/SingleProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../../redux/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => dispatch(addProducts(data)))
    }, []);
    // console.log(products);
    return (
        <div className='container'>
            <ProductBar />
            <h1 className='text-primary'>All Products</h1>
            <div className='products row'>
                <div className="container">
                    <div className="row">
                    {
                        products.length === 0 ? "Loading..." : 
                    products?.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                    } 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;