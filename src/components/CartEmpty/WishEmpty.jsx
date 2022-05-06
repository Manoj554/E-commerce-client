import React from 'react'
import styles from './cardempty.module.css';
import Link from 'next/link';

const WishEmpty = () => {
  return (
    <>
    <div className={styles.maindiv}>
    
        <div className={styles.content}>
            <div  className={styles.cartemptyimg}>
                <img src="./emptywish.jpg"  />
            </div>
            <div className={styles.cardemptytxt1}>
                Empty Wishlist
            </div>
            <div className={styles.cardemptytxt2}>
            You have no item in your wishlist. Start adding!
            </div>
            <div className={styles.shopnow}>
                <Link href="./products">
                    <button className={styles.pink}>Add now</button>
                </Link>
            </div>
        </div>
    </div>
</>
  )
}

export default WishEmpty