import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai';
import styles from './cartitemdiv.module.css';
const CartItemDiv = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.headerdiv}>
        <img src='./dress.jpg' />
        <div className={styles.details}>
          <p>KRISKA blue floral A-line Dress</p>
          <div className={styles.detailsgrey}>Size:&nbsp;M</div>
          <div className={`${styles.detailsseller} ${styles.detailsgrey}`}>Sold By: Kriska Creation</div>
          <div className={styles.pricesingleline}>
            <div>₹ 949</div>
            <div className={`${styles.cross} ${styles.detailsgrey}`}>₹ 2499</div>
            <div className={styles.greenoff}>62% OFF</div>
          </div>
          <div className={styles.deliverydiv}>
            <h3><AiOutlineCheck /></h3><span className={styles.delvryby}>Delivery by&nbsp;</span><span className={styles.deliverydate}>19 Apr 2022</span>
          </div>
        </div>
      </div>
      <div className={styles.footerdiv}>
        <div className={styles.qnty}>
          <button className={`${styles.qntychng} ${styles.decrease}`}>-</button>
          <input type="text" name="Quantity" value="1" />
          <button className={styles.qntychng}>+</button>
        </div>
        <button className={styles.movetowishlist}>MOVE TO WISHLIST</button>
        <button className={`${styles.movetowishlist} ${styles.remove}`}>REMOVE</button>
      </div>
    </div>
  )
}

export default CartItemDiv