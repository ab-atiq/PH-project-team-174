import React from 'react';
import Rating from 'react-rating';
import './SingleProduct.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { Button } from 'react-bootstrap';

const SingleProduct = (props) => {
    const { productName, tagName, rating, image, price } = props.product;
    const dispatch = useDispatch();
    return (
        <div className='col-md-4 col-sm-12 col-lg-3 '>

            <div className="col-sm  single-product  border mt-4">
                <img className='img-fluid' src={image} alt="" />
                <h2>{productName}</h2>
                <h5>{tagName}</h5>
                <Rating
                    className='text-warning'
                    initialRating={rating}
                    emptySymbol="far fa-star fa-2x"
                    fullSymbol="fas fa-star fa-2x"
                    readonly
                />
                <h3>${price}</h3>
                <div className='hover'>
                    <Button variant='primary' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        onClick={() =>
                            dispatch(addToCart(props.product))
                        }
                    >
                        Add To Cart
                    </Button>
                    <br />
                    <br />
                    {/* <button className='btn-primary p-2 rounded'>
                        <i className="far fa-eye fa-2x"></i>
                    </button> */}
                </div>
            </div>











        </div>
    );
};

export default SingleProduct;