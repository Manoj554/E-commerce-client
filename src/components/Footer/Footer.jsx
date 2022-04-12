import React from 'react';
import FooterBox from './FooterBox';
import style from './footer.module.css';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer>
                <div className={style.footer}>
                    <div className={style.container}>
                        <div className={style.left}>
                            <div className={style.logo}>
                                <img src="/Cartanyorangecrop.png" alt="Logo" />

                            </div>
                            <p className={style.text}>Cart Anything - Bringing the art to the cart.</p>
                        </div>
                        <div className={style.right}>
                            <FooterBox />
                            <FooterBox />
                            <FooterBox />
                        </div>
                    </div>
                </div>
                <div className={style.copyright}>
                    <p>All rights reserved &copy; 2022 - Cartany</p>
                    <ul className={style.socialmedia}>
                        <li>
                            <FaFacebookF />
                        </li>
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            <FaTwitter />
                        </li>
                        <li>
                            <FaLinkedinIn />
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer