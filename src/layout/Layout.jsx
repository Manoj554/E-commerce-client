import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
// import { userLoggedInStatus } from '../redux/actions';
import Nprogress from 'nextjs-progressbar';
import Navbar from '../components/Header/Navbar';
import { getAllCategories, getAllProducts } from '../redux/actions';

const Layout = ({ children }) => {
    // const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAllCategories());
    //     dispatch(getAllProducts());
    // }, []);

    return (
        <div>
            <Nprogress
                height={3}
                color="white"
            />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;