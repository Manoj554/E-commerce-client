import React from 'react';
import styles from './ordercard.module.css';

const OrderCard = () => {
  return (
    <>
        <div className={styles.maindiv}>
            <div className={styles.imgdiv}>
                <img src="glowing.jpg" />
            </div>
            <div className={styles.descdiv}>
                Description Lorem ipsum dolor sit amet consectetur, adipisic
                <div>
                    seller 
                </div>
            </div>
            <div className={styles.pricediv}>
                ₹ 567/-
            </div>
            <div className={styles.statusdiv}>
               <span className={styles.greentick}>✓</span> Delivery by monday
            </div>
        </div>
    </>
  )
}

export default OrderCard