import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import styles from './placeordermainpage.module.css';
import DeliveryAddressForm from '../../components/DeliveryAddressForm/DeliveryAddressForm';
import AddAddressDiv from '../../components/DeliveryAddressForm/AddAddressDiv';
import CartItemDiv from '../../components/CartItemDiv/CartItemDiv';
import PaymentOptions from '../../components/PaymentOptions/PaymentOptions';
const PlaceOrderMainPage = () => {
    return (
        <div className={styles.maindiv}>
            <div className={styles.orderbox}>
                {/* delivery address before filling details */}
                {/* <div className={styles.plcordrdiv}>
                    <div className={styles.plcordrdetails}>
                        <button>1</button>
                        <div className={styles.plcordrname}>DELIVERY ADDRESS</div>
                    </div>
                </div> */}

                {/* delivery address after filling details */}
                <div className={styles.plcordrdiv}>
                    <div className={styles.plcordrdetails}>
                        <button>1</button>
                        <div className={styles.plcordrname}>DELIVERY ADDRESS <h3><AiOutlineCheck /></h3></div>
                        <p><b>Sukanya Sahoo, 769005</b>Qr No:d/472,Sector-20, Rourkela Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloribus est quae nostrum consequatur alias, quas rem inventore.</p>
                    </div>
                    <div className={styles.changebtn}>
                        <button>CHANGE</button>
                    </div>
                </div>

                {/* delivery address while filling details */}
                {/* <DeliveryAddressForm /> */}

                {/* delivery address while filling mutilple details */}
                {/* <AddAddressDiv /> */}

                {/* order summary before filling address details */}
                {/* <div className={styles.plcordrdiv}>
                    <div className={styles.plcordrdetails}>
                        <button>2</button>
                        <div className={styles.plcordrname}>ORDER SUMMARY</div>
                    </div>
                </div> */}

                {/* order summary after filling address details */}
                {/* <div className={styles.plcordrcontinue}>
                <div className={styles.plcordrheader}>
                    <button>2</button>
                    <div className={styles.plcordrname}>ORDER SUMMARY</div>
                </div>
                    <CartItemDiv />
                    <CartItemDiv />
                    <CartItemDiv />
                <div className={styles.continue}>
                    <button>CONTINUE</button>
                </div>
                </div> */}

                {/* order summary after clicking continue button */}
                <div className={styles.plcordrdiv}>
                    <div className={styles.plcordrdetails}>
                        <button>2</button>
                        <div className={styles.plcordrname}>ORDER SUMMARY <h3><AiOutlineCheck /></h3></div>
                        <p>3 items</p>
                    </div>
                    <div className={styles.changebtn}>
                        <button>CHANGE</button>
                    </div>
                </div>


                {/* payment options before filling details */}
                {/* <div className={styles.plcordrdiv}>
                    <div className={styles.plcordrdetails}>
                        <button>3</button>
                        <div className={styles.plcordrname}>PAYMENT OPTIONS</div>
                    </div>
                </div> */}

                {/* payment options after clicking continue button */}
                <PaymentOptions />

                {/* <div className={styles.plcordrdiv}>
                    <div className={styles.plcordrdetails}>
                        <button>3</button>
                        <div className={styles.plcordrname}>PAYMENT OPTIONS <h3><AiOutlineCheck /></h3></div>
                        <p>Cash on delivery</p>
                    </div>
                    <div className={styles.changebtn}>
                        <button>CHANGE</button>
                    </div>
                </div> */}
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
                        Delivery Charge
                    </div>
                    <div className={styles.rightvalueside}>
                        ₹ 100
                    </div>
                </div>
                <div className={`${styles.priceboxvaluenames} ${styles.totalamount}`}>
                    <div className={styles.leftnameside}>
                        Amount Payable
                    </div>
                    <div className={styles.rightvalueside}>
                        ₹ 4142
                    </div>
                </div>
                <div className={`${styles.priceboxvaluenames} ${styles.totaldiscount}`}>
                    You will save ₹ 4205 on this order
                </div>
            </div>
        </div>
    )
}

export default PlaceOrderMainPage