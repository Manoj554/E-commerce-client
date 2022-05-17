/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './ordercard.module.css';

const OrderCard = ({ quantity, price, productImage, productName, deliveredBy }) => {
    return (
        <>
            <div className={styles.maindiv}>
                <div className={styles.imgdiv}>
                    <img src={productImage} alt='image' />
                </div>
                <div className={styles.descdiv}>
                    {productName}
                </div>
                <div className={styles.pricediv}>
                    {price} X {quantity}
                </div>
                <div className={styles.statusdiv}>
                    <span className={styles.greentick}>✓</span> Delivery by {deliveredBy}
                </div>
            </div>
        </>
    )
}

export default OrderCard