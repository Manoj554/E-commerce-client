import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import styles from './placeordermainpage.module.css';
import DeliveryAddressForm from '../../components/DeliveryAddressForm/DeliveryAddressForm';
import AddAddressDiv from '../../components/DeliveryAddressForm/AddAddressDiv';
import CartItemDiv from '../../components/CartItemDiv/CartItemDiv';
import PaymentOptions from '../../components/PaymentOptions/PaymentOptions';
import PriceBox from '../AddToCart/PriceBox';
import { useDispatch, useSelector } from 'react-redux';
import { getCartDetailsAction, placeOrderAction } from '../../redux/actions';


const PlaceOrderMainPage = () => {
    const [showDeliveryOption, setDeliveryOption] = useState(false);
    const [showPaymentOption, setPaymentOption] = useState(false);
    const [addressVal, setAddressVal] = useState({});
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();
    const { priceDetails } = useSelector(state => state.order);

    const placeOrder = () => {
        let obj = {
            amount: priceDetails.finalPrice, addressId: addressVal._id
        }
        dispatch(placeOrderAction(obj));
        dispatch(getCartDetailsAction());
    }

    return (
        <div className={styles.maindiv}>
            <div className={styles.orderbox}>
                {console.log(priceDetails)}
                {/* delivery address after filling details */}
                {!showDeliveryOption ? (
                    <div className={styles.plcordrdiv}>
                        <div className={styles.plcordrdetails}>
                            <button>1</button>
                            <div className={styles.plcordrname}>DELIVERY ADDRESS <h3><AiOutlineCheck /></h3></div>
                            <p>{addressVal.name} <strong>{addressVal.phone}</strong>
                                <br />
                                {addressVal.address} <b>{addressVal.pincode}</b>
                            </p>
                        </div>
                        <div className={styles.changebtn}>
                            <button onClick={() => setDeliveryOption(true)}>CHANGE</button>
                        </div>
                    </div>
                ) : (
                    <AddAddressDiv setShow={setDeliveryOption} setAddressVal={setAddressVal} />
                )}

                {/* payment options after clicking continue button */}

                {!showPaymentOption ? (
                    <div className={styles.plcordrdiv}>
                        <div className={styles.plcordrdetails}>
                            <button>3</button>
                            <div className={styles.plcordrname}>PAYMENT OPTIONS <h3><AiOutlineCheck /></h3></div>
                            <p>Cash on delivery</p>
                        </div>
                        <div className={styles.changebtn}>
                            <button onClick={() => setPaymentOption(true)}>CHANGE</button>
                        </div>
                    </div>
                ) : (
                    <PaymentOptions setShow={setPaymentOption} />
                )}
            </div>
            <PriceBox place placeOrder={placeOrder} />

        </div>
    )
}

export default PlaceOrderMainPage