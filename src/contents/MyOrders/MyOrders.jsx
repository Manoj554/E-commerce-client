import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoOrders from '../../components/CartEmpty/NoOrders';
import OrderCard from '../../components/OrderCard/OrderCard'
import OrderTemplate from '../../components/OrderCard/OrderTemplate';
import { getMyOrdersAction } from '../../redux/actions';
import styles from './myorders.module.css';

const MyOrders = () => {
  const { myOrders } = useSelector(state => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyOrdersAction());
  }, [dispatch]);

  return (
    <>
      {myOrders.length > 0 ? (
        <div className={styles.maindiv}>
          <div className={styles.header}>
            My Orders ▶
          </div>
          <>
            {myOrders.map((val, index) => (
              <OrderTemplate
                key={val.orderId}
                orderId={val.orderId}
                orderAmount={val.orderAmount}
                orderDate={val.orderDate}
                deliveredBy={val.deliverdBy}
                products={val.products}
                orderStatus={val.orderStatus}
              />
            ))}
          </>
        </div>
      ) : (
        <NoOrders/>
      )}
    </>
  )
}

export default MyOrders