import React from 'react';
import style from './styles/navbar.module.css';
import Link from 'next/link';
import { FaUserCircle, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { signOutAction } from '../../redux/actions';
import Recombar from './Recombar';


const Navbar = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(signOutAction());
    }

    return (
        <>
            <div className={style.maindiv}>
                <Link href="/" passHref>
                    <div className={style.contentlogo}><img src="/Cartany_old_white_crop.png" /></div>
                </Link>
                <div className={style.spacediv}></div>
                <div className={style.right}>
                    <div className={style.searchbox}>
                        <button ><GoSearch /></button>
                        <input type="search"
                            placeholder="Search for products and brands"
                            name="search"
                        // value={searchField}
                        // onChange={(e) => setSearrchField(e.target.value)}
                        />
                        <div className={style.suggestion}>
                            <div>suggestion</div>
                            <div>suggestion</div>
                            <div>suggestion</div>
                            <div>suggestion</div>
                            <div>suggestion</div>
                            <div>suggestion</div>
                        </div>
                    </div>
                    <div className={`${style.contentlogin} ${style.profile}`}>
                        {/* {auth.authenticate ? (
                            <a className={style.logoutbtn} onClick={handleLogout}>Logout</a>
                        ) : ( */}
                        {/* <Link href="/signin"> */}
                            <a className={style.log}><FaUserCircle /></a>
                        {/* </Link> */}
                            <div className={style.dropdown}>
                                <div className={style.welcome}>
                                    Welcome to Cartany!
                                </div>
                                <div className={style.welcome_content}>
                                    To access account and manage orders
                                </div>
                                <div className={style.loginbtn}>
                                    <button className={style.login}>LOGIN</button>
                                    <button className={style.signup}>SIGNUP</button>
                                </div>
                                <div className={style.dropdown_content}>
                                    Orders
                                </div>
                                <div className={style.dropdown_content}>
                                    Wishlist
                                </div>
                                
                            </div>
                        {/* )}*/}

                    </div>
                    <div className={style.contentlogin}>
                        <Link href="/signin">
                            <a className={`${style.log} ${style.heart}`}><FaHeart /></a>
                        </Link>
                    </div>
                    <div className={style.contentlogin}>
                        <Link href="/signin">
                            <a className={style.log}><FaShoppingCart /></a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.navmargin}></div>
            <Recombar />
            <div style={{ marginTop: '50px' }}></div>
        </>
    )
}

export default Navbar;