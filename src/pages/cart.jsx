import React from 'react';
import AddToCart from '../contents/AddToCart/AddToCart';
import PrivateRoute from '../layout/PrivateRoute';

const cart = () => {
    return (
        <PrivateRoute>
            <AddToCart />
        </PrivateRoute>
    )
}

export default cart