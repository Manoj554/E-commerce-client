import React from 'react';
import style from './styles/navbar.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { signOutAction } from '../../redux/actions';


const Navbar = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(signOutAction());
    }

    return (
        <>
            <div className={style.maindiv}>
                <div className={style.contentlogo}><img src="/Cartanyorangecrop.png" /></div>
                <div className={style.spacediv}>
                    <ul className={style.navcontent}>
                        <li>
                            <Link href="/dashboard">
                                <a>Dashboard</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/orders">
                                <a>Orders</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories">
                                <a>Categories</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/products">
                                <a>Products</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.contentlogin}>
                    {auth.authenticate ? (
                        <a className={style.logoutbtn} onClick={handleLogout}>Logout</a>
                    ) : (
                        <Link href="/signin">
                            <a>Login</a>
                        </Link>
                    )}

                </div>
            </div>
            <div className={style.navmargin}>

            </div>
        </>
    )
}

export default Navbar