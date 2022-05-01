import React from 'react';
import { useSelector } from 'react-redux';
import Wishlist from '../contents/Wishlist/Wishlist';
import PrivateRoute from '../layout/PrivateRoute';
import store from '../redux/store';


const wishlist = () => {

    return (
        <PrivateRoute>
            <Wishlist />
        </PrivateRoute>
    )
}

export default wishlist;