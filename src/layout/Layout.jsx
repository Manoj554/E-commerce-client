import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '../components/SnackBar';
import Nprogress from 'nextjs-progressbar';
import Navbar from '../components/Header/Navbar';
import { getAllCategories, getAllProducts, getCartDetailsAction } from '../redux/actions';
import store from '../redux/store';

const Layout = ({ children }) => {
    const { auth, category, product, cart, order } = useSelector(state => state);
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getCartDetailsAction());
        }

    }, [auth.authenticate, dispatch]);

    useEffect(() => {
        if (auth.error) {
            setError(auth.error);
        } else if (category.error) {
            setError(category.error);
        } else if (product.error) {
            setError(product.error);
        } else if (cart.error) {
            setError(cart.error);
        } else {
            setError(order.error)
        }

    }, [auth.error, category.error, product.error, cart.error, order.error]);

    return (
        <div>
            {/* {console.log(store.getState())} */}
            <Nprogress
                height={3}
                color="white"
            />
            <Navbar />
            {children}
            <Footer />
            {error && (
                <Snackbar type="error" message={error} />
            )}
        </div>
    )
}

export default Layout;