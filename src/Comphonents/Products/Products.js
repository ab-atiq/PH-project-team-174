import React, { useEffect } from 'react';
import ProductBar from '../ProductBar/ProductBar';
import SingleProduct from '../SingleProduct/SingleProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../../redux/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    useEffect(() => {
        fetch("https://safe-cliffs-35352.herokuapp.com/product")
            .then(res => res.json())
            .then(data => dispatch(addProducts(data)))
    }, []);
    // console.log(products);
    return (
        <div className='container'>
            <ProductBar />
            <h1 className='text-primary fs-2 fw-bolder mt-3 text-success'>All Products</h1>
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