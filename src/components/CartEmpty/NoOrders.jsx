import React from 'react'
import styles from './cardempty.module.css';
import Link from 'next/dist/client/link';

const NoOrders = () => {
  return (
   <>
         <div className={styles.maindiv}>
        
        <div className={styles.content}>
            <div  className={styles.cartemptyimg}>
                <img src="./emptybox.jpg"  />
            </div>
            <div className={styles.cardemptytxt1}>
                Empty Orders!
            </div>
            <div className={styles.cardemptytxt2}>
            You have no item in My Orders. Make Orders Now!
            </div>
            <div className={styles.shopnow}>
                <Link href="./products">
                    <button className={styles.green}>Order now</button>
                </Link>
            </div>
        </div>
      </div>
   </>
  )
}

export default NoOrders