import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { modifyQuantityInCart, removeItemFromCartAction } from '../../redux/actions';
import styles from './cartitemdiv.module.css';


const CartItemDiv = ({ l, id, base64, name, price, priceOffered, discount, quantity, wish, }) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (val) => {
        dispatch(modifyQuantityInCart(val));
    }

    const handleRemoveItem = (val) => {
        dispatch(removeItemFromCartAction(val));
    }

    return (
        <div className={styles.maindiv}>
            <div className={styles.headerdiv}>
                <div className={styles.imgdiv}>
                <img src={base64} />
                </div>
                <div className={styles.details}>
                    <p>{name}</p>
                    <div className={`${styles.detailsseller} ${styles.detailsgrey}`}>Category: Kriska Creation</div>
                    <div className={styles.pricesingleline}>
                        <div>₹ {priceOffered}</div>
                        <div className={`${styles.cross} ${styles.detailsgrey}`}>₹ {price}</div>
                        <div className={styles.greenoff}>{discount}% OFF</div>
                    </div>
                    <div className={styles.deliverydiv}>
                        <h3><AiOutlineCheck /></h3><span className={styles.delvryby}>Delivery by&nbsp;</span><span className={styles.deliverydate}>19 Apr 2022</span>
                    </div>
                </div>
            </div>
            <div className={styles.footerdiv}>
                <div className={styles.qnty}>
                    <button className={`${styles.qntychng} ${styles.decrease}`} disabled={quantity <= 1 ? true : false} onClick={handleQuantityChange.bind(this, { id: id, val: -1 })}> - </button>
                    <div className={styles.quantity}>
                        {quantity}
                    </div>
                    <button className={styles.qntychng} onClick={handleQuantityChange.bind(this, { id: id, val: 1 })}> + </button>
                </div>
                {/* <button className={styles.movetowishlist}>MOVE TO WISHLIST</button> */}
                <button className={`${styles.movetowishlist} ${styles.remove}`} onClick={handleRemoveItem.bind(this, id)}>
                    REMOVE
                </button>
            </div>
        </div>
    )
}

export default CartItemDiv