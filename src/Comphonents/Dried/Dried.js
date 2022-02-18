import React, { useEffect, useState } from 'react';
import ProductBar from '../ProductBar/ProductBar';
import SingleProduct from '../SingleProduct/SingleProduct';

const Dried = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch("https://safe-cliffs-35352.herokuapp.com/product")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const filterProduct = products?.filter(product => product.productName === "DRIED");

    return (
        <div className='container'>
            <ProductBar></ProductBar>
            <h1 className='fs-2 fw-bolder mt-3 text-success'>Dried</h1>
            <div className='products row'>
                {
                    filterProduct?.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Dried;