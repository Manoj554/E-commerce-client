import React from 'react'
import OrderCard from '../../components/OrderCard/OrderCard'
import styles from './myorders.module.css';

const MyOrders = () => {
  return (
    <>
      <div className={styles.maindiv}>
          <div className={styles.header}>
            My Orders ▶
          </div>
          <OrderCard/>
          <OrderCard/>
          <OrderCard/>
      </div>
    </>
  )
}

export default MyOrders