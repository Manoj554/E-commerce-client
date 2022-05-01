import React from 'react';
import Link from 'next/link';
import styles from './orderplaced.module.css';
import { FcApproval } from 'react-icons/fc';
import { useSelector } from 'react-redux';

const OrderPlaced = () => {
  const { orderId } = useSelector(state => state.order);


  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.container}>
          <div className={styles.correctsymbl}>
            <FcApproval size={100} />
          </div>
          <div className={styles.para1}>
            Congraluations<p>Your order {orderId} is placed and confirmed.</p>
          </div>
          <div className={styles.para2}>
            Thankyou for choosing to shop with us.<p>We hope you enjoyed shopping with Cartany.</p>
          </div>
          <div className={styles.cntshping}>
            <Link href="/products">
              <button>CONTINUE SHOPPING</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderPlaced