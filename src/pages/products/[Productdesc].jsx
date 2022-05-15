/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from './productdesc.module.css';
import { BsCart3 } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction, wishListAction } from '../../redux/actions';

const Productdesc = ({ product }) => {
    const { cart, cartList, wishList } = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth);
    const [itemsInCart, setCart] = useState([]);
    const [itemsInWish, setWish] = useState([]);
    const [state, setState] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        let list1 = cartList.map(val => val.productId);
        setCart(list1);
        let list2 = wishList.map(val => val.productId);
        setWish(list2);
        console.log('i am working');
    }, [state, cart, cartList, wishList]);


    const handleWishList = (val) => {
        dispatch(wishListAction(val));
        setState(prev => !prev);
    }

    const handleAddToCart = (val) => {
        dispatch(cartAction(val));
        setState(prev => !prev);
    }

    return (
        <>
            {/* {console.log(wishList)}
            {console.log(itemsInWish)} */}
            <div className={styles.maindiv}>
                <div className={styles.productdescbox}>
                    <div className={styles.description}>

                        <div>
                            <p className={styles.brand}>{product.name.split(" ")[0].toUpperCase()}</p>
                        </div>

                        <div>
                            <h1 className={styles.productname}>
                                {product.name}
                            </h1>
                            <div className={styles.ratingdiv}>
                                <span id="starrating">4.3</span>
                                <span className={styles.star}><AiFillStar /></span>
                                <span className={styles.line}></span>
                                <span id="ratings">133</span>ratings
                            </div>

                        </div>

                        <div>
                            <h2 className={styles.price}>Rs. {product.priceOffered}&emsp;
                                <del>Rs. {product.price}</del>&emsp;
                                <span className={styles.discount}>({product.percentageOff}% off)</span>
                            </h2>
                        </div>

                        <h2>Description</h2>
                        <div className={styles.desctxt}>
                            {product.description}
                        </div>
                        <div className={styles.buttondiv}>
                            <div className={styles.cart}>
                                {itemsInCart.includes(product._id) ? (
                                    <Link href="/cart" passHref>
                                        <button><BsCart3 /> Go To Cart</button>
                                    </Link>
                                ) : (
                                    <button onClick={handleAddToCart.bind(this, product._id)}><BsCart3 />
                                        &nbsp;Add To Cart
                                    </button>
                                )}
                            </div>
                            <div className={styles.wish}>
                                <button onClick={handleWishList.bind(this, product._id)}><AiFillHeart />
                                    {itemsInWish.includes(product._id) ? ' remove from wishlist' : ' Wishlist'}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.prodimg}>
                        <img alt='productImage' src={product.productImage} height="100%" width="100%" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productdesc;

export async function getServerSideProps(context) {
    // Fetch data from external API
    const id = context.query.id;
    const baseurl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL : process.env.NEXT_PUBLIC_LOCAL_BASE_URL;
    try {
        const { data } = await axios.get(`${baseurl}/product/get-product-info/${id}`);
        return { props: { product: data?.product } }
    } catch (error) {
        console.log(error);
    }

    return { props: { product: null } };

    // Pass data to the page via props
}