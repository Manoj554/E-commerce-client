import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction, wishListAction } from '../../redux/actions';
import styles from './cardwishlist.module.css';
import Link from 'next/link';


const Card = ({ l, id, base64, name, price, priceOffered, discount, iscart, deleteId, setDeleteId }) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleRemoveFromWishList = (val) => {
        if (auth.authenticate) {
            dispatch(wishListAction(val));
        }
    }

    const handleMoveToCart = (val) => {
        if (auth.authenticate) {
            dispatch(cartAction(val));
        }
    }
    return (

            <div className={styles.maindiv}>
                        <Link href={`products/${id}?productName=${name}&id=${id}`}>
            <div className={styles.imgdiv}>
                <img src={base64} />
            </div>
            </Link>
            <div className={styles.descdiv}>
                <div className={styles.branddiv}>{name}</div>
                <div className={styles.typediv}> 4.3<span className={styles.star}><AiFillStar /></span>(1232)</div>
                <div className={styles.pricediv}>₹<span>{priceOffered}</span>&ensp;<span className={styles.strike}>₹<span>{price}</span></span>&ensp;
                    <span className={styles.discspan}>(<span>{discount}</span>% off)</span>
                </div>
            </div>
            <div className={styles.buttondiv}>
                <div className={styles.delete}>
                    <button onClick={handleRemoveFromWishList.bind(this, id)}>Remove</button>
                </div>
                {iscart ? (
                    <button className={styles.disabled} >Already In cart</button>
                ) : (
                    <div className={styles.edit}>
                        <button onClick={handleMoveToCart.bind(this, id)}>Move to cart</button>
                    </div>
                )}
            </div>
        </div>
        
    )
}

export default Card