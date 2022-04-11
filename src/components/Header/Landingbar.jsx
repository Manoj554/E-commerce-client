import React from 'react'
import style from './styles/landingbar.module.css';
import Link from 'next/link';

const Landingbar = () => {
  return (
    <>
            <div className={style.maindiv}>
                <div className={style.contentlogo}><img src="/Cartanyorangecrop.png" /></div>
                <div className={style.spacediv}>
                    <ul className={style.navcontent}>
                        <li>
                            <Link href="/dashboard">
                                <a id={style.green}>Dashboard</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/orders">
                                <a id={style.orange}>Orders</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories">
                                <a id={style.yellow}>Categories</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/products">
                                <a id={style.violet}>Products</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.contentlogin}>
                    {/* {auth.authenticate ? (
                        <a className={style.logoutbtn} onClick={handleLogout}>Logout</a>
                    ) : ( */}
                        <Link href="/signin">
                            <a id={style.log}>Login</a>
                        </Link>
                    {/* )}*/}

                </div>
            </div>
            <div className={style.navmargin}>

            </div>
        </>
  )
}

export default Landingbar