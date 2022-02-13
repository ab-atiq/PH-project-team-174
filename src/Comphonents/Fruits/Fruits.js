import React, { useEffect, useState } from 'react';
import ProductBar from '../ProductBar/ProductBar';
import SingleProduct from '../SingleProduct/SingleProduct';

const Fruits = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const filterProduct = products?.filter(product => product.tagName === "FRUITS");

    return (
        <div className='container'>
            <ProductBar></ProductBar>
            <h1>Supplements</h1>
            <div className='products row'>
                {
                    filterProduct?.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Fruits;