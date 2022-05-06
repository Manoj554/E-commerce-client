import React from 'react'
import styles from './cardempty.module.css';
import Link from 'next/link';

const CardEmpty = () => {
  return (
    <>
        <div className={styles.maindiv}>
        
            <div className={styles.content}>
                <div  className={styles.cartemptyimg}>
                    <img src="./cartempty.jpg"  />
                </div>
                <div className={styles.cardemptytxt1}>
                    Your cart is empty!
                </div>
                <div className={styles.cardemptytxt2}>
                Add items to it now
                </div>
                <div className={styles.shopnow}>
                    <Link href="./products">
                        <button>Shop now</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardEmpty