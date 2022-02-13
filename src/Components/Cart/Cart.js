import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removerFromCart } from '../../redux/cartSlice';
import { Table } from 'react-bootstrap';

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    let itemNo = 0;

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    return (
        <div style={{overflow: 'scroll'}}>
            <h2>Cart</h2>
            <div className='container my-5 mx-auto'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Product Name</th>
                            <th>Img</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.length !== 0 ? cart?.map((item, index) => {
                                return (
                                    <tr key={item._id}>
                                        <td >{itemNo = itemNo += 1}</td>
                                        <td>{item.productName}</td>
                                        <td><img className='img-fluid' src={item.image} alt="" style={{ maxWidth: '70px' }} /></td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.quantity * item.price}</td>
                                        <td><button onClick={() => dispatch(removerFromCart(item._id))} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Remove</button></td>
                                    </tr>
                                )
                            }) : <p>No items in cart</p>
                        }
                        <tr>
                            <td colSpan={4}></td>
                            <td>Total:</td>
                            <td>
                                {
                                 total   
                                }
                            </td>
                            <td><Link to='/checkout' className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Checkout</Link></td>
                        </tr>
                    </tbody>
                </Table>
                
            </div>
        </div>
    );
};

export default Cart;