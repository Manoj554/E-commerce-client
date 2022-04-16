import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import styles from './addtocart.module.css';
import CartItemDiv from '../../components/CartItemDiv/CartItemDiv';
const AddToCart = () => {
    return (
        <div className={styles.maindiv}>
            <div className={styles.orderbox}>
                <div className={styles.deliverto}>
                    <h1><MdLocationOn /></h1>
                    <div className={styles.deliverdetails}>
                        Deliver to: <b>Sukanya Sahoo, 769005</b>
                        <p>Qr No:d/472,Sector-20, Rourkela Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloribus est quae nostrum consequatur alias, quas rem inventore.</p>
                    </div>
                    <div className={styles.changeaddress}>
                        <button>
                            CHANGE&nbsp;ADDRESS
                        </button>
                    </div>
                </div>
                <div className={styles.mycartheader}>
                    My Cart (3)
                </div>
                <div className={styles.cartitemsdiv}>
                    <CartItemDiv />
                    <CartItemDiv />
                    <CartItemDiv />
                </div>
            </div>

            <div className={styles.pricebox}>
                <div className={styles.pricedetails}>
                    PRICE DETAILS (3 Items)
                </div>
                <div className={styles.priceboxvaluenames}>
                    <div className={styles.leftnameside}>
                        Total MRP
                    </div>
                    <div className={styles.rightvalueside}>
                        ₹ 8247
                    </div>
                </div>
                <div className={styles.priceboxvaluenames}>
                    <div className={styles.leftnameside}>
                        Discount on MRP
                    </div>
                    <div className={`${styles.rightvalueside} ${styles.discount}`}>
                        - ₹ 4205
                    </div>
                </div>
                <div className={styles.priceboxvaluenames}>
                    <div className={styles.leftnameside}>
                        Delivery Charge
                    </div>
                    <div className={styles.rightvalueside}>
                        ₹ 100
                    </div>
                </div>
                <div className={`${styles.priceboxvaluenames} ${styles.totalamount}`}>
                    <div className={styles.leftnameside}>
                        Total Amount
                    </div>
                    <div className={styles.rightvalueside}>
                        ₹ 4142
                    </div>
                </div>
                <div className={`${styles.priceboxvaluenames} ${styles.totaldiscount}`}>
                    You will save ₹ 4205 on this order
                </div>
                <div className={styles.placeorderbtn}>
                    <button>
                        PLACE ORDER
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddToCart