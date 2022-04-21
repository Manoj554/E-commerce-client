import React from 'react';
import style from './styles/navbar.module.css';
import Link from 'next/link';
// import { useDispatch, useSelector } from 'react-redux';
// import { signOutAction } from '../../redux/actions';
// import { useRouter } from 'next/router';
import React from 'react'
import { VscAccount } from 'react-icons/vsc';
import { BsCart3 } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { GoSearch } from 'react-icons/go';


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

                </div>
                <div className={style.right}>
                    <div className={style.searchbox}>
                        <button ><GoSearch /></button>
                        <input type="search"
                            placeholder="Search for products and brands"
                            name="search"
                        // value={searchField}
                        // onChange={(e) => setSearrchField(e.target.value)}
                        />
                    </div>
                    <div className={style.contentlogin}>
                        {/* {auth.authenticate ? (
                            <a className={style.logoutbtn} onClick={handleLogout}>Logout</a>
                        ) : ( */}
                        <Link href="/signin">
                            <a id={style.log}><VscAccount /></a>
                        </Link>
                        {/* )}*/}

                    </div>
                    <div className={style.contentlogin}>
                        <Link href="/signin">
                            <a id={style.log}><AiFillHeart /></a>
                        </Link>
                    </div>
                    <div className={style.contentlogin}>
                        <Link href="/signin">
                            <a id={style.log}><BsCart3 /></a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.navmargin}>

            </div>
        </>
    )
}

export default Navbar;