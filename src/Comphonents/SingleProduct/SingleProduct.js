import React from 'react';
import Rating from 'react-rating';
import './SingleProduct.css'
const SingleProduct = (props) => {
    const { name, tagName, star, image, description, price } = props.product;
    return (
        <div className='col-4'>
            <div className="single-product">
                <img className='img-fluid' src={image} alt="" />
                <h2>{name}</h2>
                <h5>{tagName}</h5>
                <Rating
                className='text-warning'
                    initialRating={star}
                    emptySymbol="far fa-star fa-2x"
                    fullSymbol="fas fa-star fa-2x"
                    readonly
                />
                <h3>${price}</h3>
                <div className='hover'>
                    <button className='btn-primary p-2 rounded'>
                        <i class="fas fa-cart-plus fa-2x"></i>
                    </button>
                    <br />
                    <br />
                    <button className='btn-primary p-2 rounded'>
                        <i class="far fa-eye fa-2x"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;