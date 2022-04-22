import React from 'react'
import styles from './landing.module.css';
import SlideShow from '../../components/SlideShow/SlideShow';

const landing = () => {
    return (
        <>
            <div className={styles.maindiv}>
                <div className={styles.intro}>
                    {/* <div className={styles.introimgdiv}>
                        <img src="/tshirts.jpg" alt="logo" />
                    </div>
                    <div className={styles.introimgdiv}>
                        <img src="/Cartanyintocrop.png" alt="logo" />
                    </div>
                    <div className={styles.introimgdiv}>
                        <img src="/booksold.png" alt="logo" />
                    </div>
                    <div className={styles.introimgdiv}>
                        <img src="/decor.png" alt="logo" />
                    </div>
                    <div className={styles.introimgdiv}>
                        <img src="/lenovo.png" alt="logo" />
                    </div>
                    <div className={styles.introimgdiv}>
                        <img src="/shoe.jpg" alt="logo" />
                    </div> */}
                    <SlideShow />
                </div>

                <div className={styles.heading}>
                    Fashion
                </div>
                <div className={styles.fbox}>
                    <div className={styles.fashion}>
                        <img src="/sweater.jpg" />
                    </div>
                    <div className={styles.fashion}>
                        <div className={styles.twovertimg}>
                            <img src="/pinkshirt.jpg" />
                        </div>
                        <div className={styles.twovertimg}>
                            <img src="/jeans1.jpg" />
                        </div>
                    </div>
                    <div className={styles.fashion}>
                        <div className={styles.text}>
                            Grab your latest Fashion on Cartany.
                        </div>
                    </div>
                </div>
                <div className={styles.fbox}>
                    <div className={styles.fashion}>
                        <img src="/nikewhite.jpg" />
                    </div>
                    <div className={styles.fashion}>
                        <img src="/blackcoat.jpg" />
                    </div>

                </div>
                <div className={`${styles.parallax} ${styles.collection}`}>
                    <div >
                        Make your own fashion collection.
                    </div>
                </div>
                <div className={styles.heading}>
                    Electronics
                </div>
                <div className={styles.fbox}>
                    <div className={styles.fashion}>
                        <img src="/iphoneibud.jpg" />
                    </div>
                    <div className={styles.fashion}>
                        <div className={styles.twovertimg}>
                            <img src="/camera.jpg" />
                        </div>
                        <div className={styles.twovertimg}>
                            <img src="/laptop.jpg" />
                        </div>
                    </div>
                    <div className={styles.fashion}>
                        <div className={styles.text}>
                            Checkout your favourite gadgets on Cartany.
                        </div>
                    </div>
                </div>
                <div className={styles.fbox}>
                    <div className={styles.fashion}>
                        <img src="/marshall.jpg" />
                    </div>
                    <div className={styles.fashion}>
                        <img src="/apple.jpg" />
                    </div>

                </div>
                <div className={`${styles.parallax} ${styles.pinkheadphone}`}>
                    <div className={`${styles.parallaxcontent} ${styles.rightcontent}`}>
                        Fulfill your music needs. Plug it, feel it.
                    </div>
                </div>
                <div className={styles.fbox}>
                    <div className={styles.fashion}>
                        <div className={styles.twovertimg}>
                            <img src="/whitewatchcrop.jpg" />
                        </div>
                        <div className={styles.twovertimg}>
                            <img src="/ps4.jpg" />
                        </div>
                    </div>
                    <div className={styles.fashion}>
                        <img src="/xboxorange.jpg" />
                    </div>
                    <div className={styles.fashion}>
                        <div className={styles.twovertimg}>
                            <img src="/phone.png" />
                        </div>
                        <div className={styles.twovertimg}>
                            <img src="/wirelessheadphone.jpg" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default landing