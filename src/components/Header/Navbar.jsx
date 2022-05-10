import React, { useState } from 'react';
import style from './styles/navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaUserCircle, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByName, searchProductByQuery, signOutAction } from '../../redux/actions';
import Recombar from './Recombar';
import { Badge } from '@mui/material';


const Navbar = () => {
    const [searchField, setSearrchField] = useState('');
    const auth = useSelector(state => state.auth);
    const { cartList, wishList } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSearchQuery = (e) => {
        let query = e.target.value;
        setSearrchField(query);
        if (query.length > 3 || query.length == 0) {
            dispatch(getProductsByName(query));
            router.push('/products');
        }
    }

    const handleSuggestion = (e) => {
        e.preventDefault();
        dispatch(getProductsByName(searchField));
    }

    // const handleSuggestionClick = (val) => {
    //     console.log('I am Val ');
    //     setSearrchField(val);
    // }

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
                    <form onSubmit={handleSuggestion} className={style.searchbox}>
                        <button type='submit' ><GoSearch /></button>
                        <input autoComplete='off' type="search"
                            placeholder="Search for products and brands"
                            name="search"
                            value={searchField}
                            onChange={handleSearchQuery}
                        />
                        {/* <div className={style.suggestion}>
                            {ItemsBySearchResult.length > 0 && ItemsBySearchResult.map(val => (
                                <div key={val} onClick={handleSuggestionClick.bind(this, val)}>{val}</div>
                            ))}
                        </div> */}
                        {/* {console.log(searchField)} */}
                    </form>
                    <div className={`${style.contentlogin} ${style.profile}`}>
                        <a className={style.log}><FaUserCircle /></a>
                        <div className={style.dropdown}>
                            <div className={style.welcome}>
                                Welcome {auth.user ? `back ${auth.user.name}` : ' to Cartany!'}
                            </div>
                            <div className={style.welcome_content}>
                                To access account and manage orders
                            </div>
                            <div className={style.loginbtn}>
                                {auth.authenticate ? (
                                    <>
                                        <button onClick={handleLogout} className={style.login}>LOGOUT</button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/signin" passHref>
                                            <button className={style.login}>LOGIN</button>
                                        </Link>
                                        <Link href="/signup" passHref>
                                            <button className={style.signup}>SIGNUP</button>
                                        </Link>
                                    </>
                                )}
                            </div>
                            <div className={style.dropdown_content}>
                                Orders
                            </div>

                            <Link href="/wishlist">
                                <div className={style.dropdown_content}>
                                    Wishlist
                                </div>
                            </Link>


                        </div>
                        {/* )}*/}

                    </div>
                    <div className={style.contentlogin}>
                        <Link href='/wishlist' passHref>
                            <Badge badgeContent={wishList?.length} color="primary">
                                <a className={`${style.log} ${style.heart}`}><FaHeart /></a>
                            </Badge>
                        </Link>
                    </div>
                    <div className={style.contentlogin}>
                        <Link href="/cart" passHref>
                            <Badge badgeContent={cartList?.length} color="warning">
                                <a className={style.log}><FaShoppingCart /></a>
                            </Badge>
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