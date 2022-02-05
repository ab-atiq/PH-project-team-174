import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removerFromCart } from '../../redux/cartSlice';

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Cart</h2>
            {
                cart.length !== 0 ? cart?.map(item => (
                    <>
                        <div className='col-4' key={item.name}>
                            <div className="single-product">
                                <img className='img-fluid' src={item.image} alt="" />
                                <h2>{item.name}</h2>
                                <h5>{item.tagName}</h5>
                                <button onClick={() => dispatch(removerFromCart(item))}>Remove</button>
                                <h3>Quantity: {item.quantity}</h3>
                                <h3>${item.price}</h3>
                                <h3>Total: ${item.quantity * item.price}</h3>
                            </div>
                        </div>
                    </>
                )) : <p>No items in cart</p>
            }
        </div>
    );
};

export default Cart;