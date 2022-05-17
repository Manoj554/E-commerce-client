import React from 'react'
import PrivateRoute from '../layout/PrivateRoute'
import MyOrders from '../contents/MyOrders/MyOrders'

const myorders = () => {
  return (
    <PrivateRoute>
            <MyOrders />
    </PrivateRoute>
  )
}

export default myorders