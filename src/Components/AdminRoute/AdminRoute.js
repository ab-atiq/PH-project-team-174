import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Context/AuthProvider/useAuth';

const AdminRoute = ({children}) => {

    const location = useLocation();
    const { user, isLoading,admin } = useAuth();

    if (isLoading) {
        <Spinner className="mx-auto" animation="grow" />
    }
    if (user.email && admin) {
       return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;



 
};

export default AdminRoute;