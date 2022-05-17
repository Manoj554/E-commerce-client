import React, { useState } from 'react'
import OrderCard from './OrderCard'

const OrderTemplate = ({ orderId, orderAmount, orderDate, deliveredBy, products, orderStatus }) => {
    const [viewProducts, setViewProducts] = useState(false);

    return (
        <div>
            <div style={{ border: '1px solid black', width: '100%', padding: '1rem', margin: '2rem 0', display: 'flex', justifyContent: 'space-evenly' }}>
                <p>{orderId}</p>
                <p>{orderAmount}</p>
                <p>{orderDate}</p>
                <p>{deliveredBy}</p>
                <p>{orderStatus}</p>
                <button onClick={() => setViewProducts(prev => !prev)}>{viewProducts ? 'hide' : 'view'} products</button>
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