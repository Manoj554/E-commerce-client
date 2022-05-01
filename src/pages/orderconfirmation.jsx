import React from 'react';
import PlaceOrder from '../contents/PlaceOrder/PlaceOrderMainPage';
import PrivateRoute from '../layout/PrivateRoute';

const ordercomfirmation = () => {
    return (
        <PrivateRoute>
            <PlaceOrder />
        </PrivateRoute>
    )
}

export default ordercomfirmation