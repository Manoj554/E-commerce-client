import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styles from './addtocart.module.css';
import { setPriceAmount } from '../../redux/actions';

const PriceBox = ({ place, setAmount, placeOrder }) => {
    const { cart, cartList, cartProducts, loading, } = useSelector(state => state.cart);
    const [priceDetails, setPriceDetails] = useState({ totalPrice: 0, discountPrice: 0, discount: 0, finalPrice: 0 });
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        setPriceDetails(state => calculateTotalAmount(cartProducts));
        dispatch(setPriceAmount(calculateTotalAmount(cartProducts)));
    }, [cart, cartList, cartProducts, router.pathname]);


    const handlePlaceOrder = () => {
        placeOrder();
        // router.push('/orderplaced');
    }

    const calculateTotalAmount = (productArr) => {
        let totalPrice = 0, discountPrice = 0;

        for (let data of productArr) {
            let quantity = cartList.filter(val => val.productId == data.id)[0]?.quantity;
            totalPrice = totalPrice + (data.price * quantity);
            discountPrice = discountPrice + (data.price - data.priceOffered) * quantity;
        }

        let discount = Math.round((discountPrice / totalPrice) * 100);
        let finalPrice = totalPrice - discountPrice + 100;

        return {
            totalPrice, discountPrice, discount, finalPrice
        }

    }

    return (
        <div className={styles.pricebox}>
            <div className={styles.pricedetails}>
                PRICE DETAILS (3 Items)
            </div>
            <div className={styles.priceboxvaluenames}>
                <div className={styles.leftnameside}>
                    Total MRP
                </div>
                <div className={styles.rightvalueside}>
                    ₹ {priceDetails.totalPrice}
                </div>
            </div>
            <div className={styles.priceboxvaluenames}>
                <div className={styles.leftnameside}>
                    Discount on MRP
                </div>
                <div className={`${styles.rightvalueside} ${styles.discount}`}>
                    - ₹ {priceDetails.discountPrice}
                </div>
            </div>
            <div className={styles.priceboxvaluenames}>
                <div className={styles.totaldiscount}>
                    {priceDetails.discount}% off on your total order
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
                    ₹ {priceDetails.finalPrice}
                </div>
            </div>
            <div className={`${styles.priceboxvaluenames} ${styles.totaldiscount}`}>
                You will save ₹ {priceDetails.discountPrice} on this order
            </div>
            {place && (
                <div className={styles.placeorderbtn}>
                    <button onClick={handlePlaceOrder}>
                        PLACE ORDER
                    </button>
                </div>
            )}
        </div>
    )
}

export default PriceBox;