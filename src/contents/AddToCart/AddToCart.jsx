import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MdLocationOn } from 'react-icons/md';
import styles from './addtocart.module.css';
import CartItemDiv from '../../components/CartItemDiv/CartItemDiv';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFromCartAction } from '../../redux/actions';
import PriceBox from './PriceBox';
import Link from 'next/link';
import CardEmpty from '../../components/CartEmpty/CardEmpty';
const AddToCart = () => {
    const { cart, cartList, cartProducts, loading } = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.authenticate && cart != null) {
            dispatch(getProductsFromCartAction());
        }
    }, [auth.authenticate, cart, cartList]);


    return (
        <>
            {cartProducts.length > 0 ? (
                <div className={styles.maindiv}>
                    <div className={styles.orderbox}>
                        <div className={styles.mycartheader}>
                            My Cart ({cartProducts.length})
                        </div>
                        <div className={styles.cartitemsdiv}>
                            {cartProducts.length > 0 ? (
                                <>
                                    {cartProducts.map((val) => (
                                        <CartItemDiv
                                            key={val.id}
                                            base64={val.productImage}
                                            name={val.name}
                                            price={val.price}
                                            priceOffered={val.priceOffered}
                                            id={val.id}
                                            discount={val.percentageOff}
                                            quantity={cartList.filter(data => data.productId == val.id)[0]?.quantity}
                                        />
                                    ))}
                                    <div className={styles.placeorderbtn}>
                                        <Link href="/orderconfirmation">
                                            <button>Continue</button>
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <p>No Product Available</p>
                            )}
                        </div>
                    </div>
                    <PriceBox />
                </div>

            ) : (
                <CardEmpty/>
            )}
        </>
    )
}

export default AddToCart;