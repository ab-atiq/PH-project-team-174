import React, { useEffect, useState } from 'react';
import ProductBar from '../ProductBar/ProductBar';
import SingleProduct from '../SingleProduct/SingleProduct';

const Supplements = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const filterProduct = products?.filter(product => product.productName === "SUPPLMEENTS");

    return (
        <div className='container'>
            <ProductBar></ProductBar>
            <h1 className='fs-2 fw-bolder mt-3 text-success'>Supplements</h1>
            <div className='products row'>
                {
                    filterProduct?.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Supplements;