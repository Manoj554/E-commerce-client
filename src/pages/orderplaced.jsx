import React from 'react';
import OrderPlaced from '../contents/OrderPlaced/OrderPlaced';
import PrivateRoute from '../layout/PrivateRoute';


const orderplaced = () => {
    return (
        <PrivateRoute>
            <OrderPlaced />
        </PrivateRoute>
    )
}

export default orderplaced