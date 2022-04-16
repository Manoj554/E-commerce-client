import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import styles from './cardwishlist.module.css';
const Card = () => {
    return (
        <div className={styles.maindiv}>
            <div className={styles.imgdiv}>
                <img src="/dress.jpg" />
            </div>
            <div className={styles.descdiv}>
                <div className={styles.branddiv}>KRISKA blue floral A-line Dress</div>
                <div className={styles.typediv}> 4.3<span className={styles.star}><AiFillStar /></span>(1232)</div>
                <div className={styles.pricediv}>₹<span>5245</span>&ensp;<span className={styles.strike}>₹<span>9235</span></span>&ensp;
                    <span className={styles.discspan}>(<span>23</span>% off)</span>
                </div>
            </div>
            <div className={styles.buttondiv}>
                <div className={styles.delete}>
                    <button>DELETE</button>
                </div>
                <div className={styles.edit}>
                    <button>MOVE&nbsp;TO&nbsp;CART</button>
                </div>
            </div>
        </div>
    )
}

export default Card