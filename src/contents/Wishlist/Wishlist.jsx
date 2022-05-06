import React, { useEffect, useState } from 'react'
import styles from './wishlist.module.css';
import Card from '../../components/CardWishlist/CardWishlist';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsWhichisInWishList } from '../../redux/actions';
import Loader from '../../components/Loader/Loader';
import WishEmpty from '../../components/CartEmpty/WishEmpty';

const Wishlist = () => {
    const { cartList, wishList, products, loading } = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [itemInCart, setCartItems] = useState([]);

    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getProductsWhichisInWishList());
            let list = cartList.map(val => val.productId);
            setCartItems(list);
        }
    }, [auth.authenticate, wishList, cartList]);

    return (
        <div>
            {products.length==0 && <WishEmpty/>}
            <div className={styles.maindiv}>
                {loading ? <Loader /> :
                    products.length > 0 &&  (
                        products.map((val) => (
                            <Card
                                key={val.id}
                                base64={val.productImage}
                                name={val.name}
                                price={val.price}
                                priceOffered={val.priceOffered}
                                id={val.id}
                                iscart={itemInCart.includes(val.id) ? true : false}
                                retailPrice={val.retailPrice}
                                discount={val.percentageOff}
                            />
                        ))
                    ) }
            </div>
        </div>
    )
}

export default Wishlist
