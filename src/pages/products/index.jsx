import React from 'react';
import { useDispatch } from 'react-redux';
import Products from '../../contents/Products/Products';
import { searchProductByCategory } from '../../redux/actions';

const products = () => {
    return (
        <div>
            <Products />
        </div>
    )
}

export default products;