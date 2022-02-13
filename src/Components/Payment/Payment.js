import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
            <h1 className='text-xl my-5 fs-1 fw-bolder'>payment Methode Comming soon</h1>
           
            <Link to='/home' className='btn btn-success'> Continue Shop </Link>
        </div>

    );
};

export default Payment;