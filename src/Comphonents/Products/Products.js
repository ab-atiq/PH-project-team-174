import React, { useEffect, useState } from 'react';
import ProductBar from '../ProductBar/ProductBar';
import SingleProduct from '../SingleProduct/SingleProduct';
// import allProducts from '../../FakeData/FakeData.json';
// import './Products.css'

const Products = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch("./FakeData.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='container'>
            <ProductBar />
            <h1 className='text-primary'>All Products</h1>
            <div className='products row'>
                {
                    products?.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;