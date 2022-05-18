import React, { useState } from 'react'
import OrderCard from './OrderCard'
import styles from './ordertemplates.module.css';

const OrderTemplate = ({ orderId, orderAmount, orderDate, deliveredBy, products, orderStatus }) => {
    const [viewProducts, setViewProducts] = useState(false);

    return (
        <div>
            <div className={styles.maindiv}>

                <p className={styles.Id}><span className={styles.bold}>Order ID</span> : <span className={styles.ID}>{orderId}</span></p>
                <p><span className={styles.bold}>Total Amount</span> : ₹{orderAmount}</p>
                <p><span className={styles.bold}>On</span>  {orderDate}</p>
                <p><span className={styles.bold}>By</span>  {deliveredBy}</p>
                <p className={styles.pending}>{orderStatus}</p>
                <button onClick={() => setViewProducts(prev => !prev)}>{viewProducts ? 'Hide products 👆' : 'View products 👇'} </button>
            </div>
            {
                viewProducts && (
                    <div>
                        {products.map((val, i) => (
                            <OrderCard
                                key={i}
                                productName={val.productName}
                                productImage={val.productImage}
                                price={val.price}
                                quantity={val.quantity}
                                deliveredBy={deliveredBy}
                            />
                        ))}
                    </div>
                )
            }

        </div>
    )
}

export default OrderTemplate