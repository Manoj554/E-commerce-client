import React from 'react';
import Wishlist from '../contents/Wishlist/Wishlist';
import AddToCart from '../contents/AddToCart/AddToCart';
import PlaceOrder from '../contents/PlaceOrder/PlaceOrderMainPage';
import OrderPlaced from '../contents/OrderPlaced/OrderPlaced';
import CardEmpty from '../components/CartEmpty/CardEmpty';
import WishEmpty from '../components/CartEmpty/WishEmpty';

const test = () => {
    return (
        <div>
            {/* <AddToCart /> */}
            <WishEmpty/>
            <CardEmpty/>
        </div>
    )
}

export default test