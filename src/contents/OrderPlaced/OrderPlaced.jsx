import React from 'react';
import styles from './orderplaced.module.css';
import { FcApproval } from 'react-icons/fc';

const OrderPlaced = () => {

  return (
    <>
    <div className={styles.maindiv}>
      <div className={styles.container}>
        <div className={styles.correctsymbl}>
          <FcApproval size={100}/>
        </div>
        <div className={styles.para1}>
          Congraluations<p>Your order is placed and confirmed.</p>
        </div>
        <div className={styles.para2}>
          Thankyou for choosing to shop with us.<p>We hope you enjoyed shopping with Cartany.</p>
        </div>
        <div className={styles.cntshping}>
          <button>CONTINUE SHOPPING</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default OrderPlaced