import React from 'react'
import styles from './landing.module.css';

const landing = () => {
    return (
        <>
            <div className={styles.maindiv}>
                {/* <div className={styles.intro}>
                    <div className={styles.introimgdiv}>
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
                    </div>
                </div> */}

                
                <div className={`${styles.heading} ${styles.backelec}`}>
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
                    <div className={`${styles.text} ${styles.electronics}`}>
                        Checkout your favourite gadgets on Cartany.
                        </div>
                    
                    </div>
                </div>

                <div className={`${styles.parallax} ${styles.oneplus}`}>
                    <div className={`${styles.parallaxcontent} ${styles.rightcontent}`}>
                        Phone Of Your Choice.
                    </div>
                </div>
                
                <div className={`${styles.parallax} ${styles.onepluspart}`}>
                    
                    <div className={`${styles.parallaxcontent} ${styles.rightcontent}`}>
                        With Detailed Specifications.
                    </div>
                </div>
                <div className={`${styles.parallax} ${styles.onepluspart}`}>
                <div className={styles.chip}>
                        <img src="/chip.png"  />
                    </div>
                    <div className={`${styles.parallaxcontent} ${styles.rightcontent}`}>
                        Latest Processors of Latest Technologies.
                    </div>
                </div>
                <div className={styles.fbox}>
                    <div className={styles.fashion}>
                        <img src="/marshall.jpg" />
                    </div>
                    <div className={styles.fashion}>
                        <img src="/wirelessheadphone.jpg" />
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
                        <img src="/apple.jpg" />
                        </div>
                    
                    </div>
                </div>
                <div className={`${styles.heading} ${styles.backfash}`}>
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
                        <div className={`${styles.text} ${styles.fashback}`}>
                            Grab your latest Fashion on Cartany.
                        </div>
                    </div>
                </div>
                <div className={`${styles.parallax} ${styles.collection}`}>
                    <div >
                        Make your own fashion collection.
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
                <div className={`${styles.heading} ${styles.backhome}`}>
                    Home & Furniture
                </div>
                <div className={styles.fbox}>
                    <div className={styles.fashion}>
                        <img src="/decor.jpg" />
                    </div>
                    <div className={styles.fashion}>
                        <div className={styles.twovertimg}>
                            <img src="/decor1.jpg" />
                        </div>
                        <div className={styles.twovertimg}>
                            <img src="/glowing.jpg" />
                        </div>
                    </div>
                    <div className={styles.fashion}>
                        <div className={`${styles.text} ${styles.chair}`}>
                            Decorate your Home with best home products.
                        </div>
                    </div>
                </div>
                <div className={`${styles.parallax} ${styles.furniture}`}>
                    <div >
                        Make your own decoration.
                    </div>
                </div>
                <div className={styles.fbox}>
                    <div className={styles.fashion}>
                        <img src="/flowerpots.jpg" />
                    </div>
                    <div className={styles.fashion}>
                        <img src="/ceilinglamp.jpg" />
                    </div>

                </div>

                <div className={`${styles.heading} ${styles.backbook}`}>
                    Books & Stationary
                </div>
                <div className={styles.fbox}>
                    <div className={styles.fashion}>
                        <img src="/books.jpg" />
                    </div>
                    <div className={styles.fashion}>
                        <div className={styles.twovertimg}>
                            <img src="/crayon.jpg" />
                        </div>
                        <div className={styles.twovertimg}>
                            <img src="/booksold.png" />
                        </div>
                    </div>
                    <div className={styles.fashion}>
                        <div className={`${styles.text} ${styles.notepad}`}>
                            Bring all your daily stationaries and books.
                        </div>
                    </div>
                </div>
                <div className={`${styles.parallax} ${styles.openbook}`}>
                    <div >
                        Collect your best story and novel books.
                    </div>
                </div>
                <div className={styles.fbox}>
                    <div className={styles.fashion}>
                        <img src="/colorpencil.jpg" />
                    </div>
                    <div className={styles.fashion}>
                        <img src="/mixedstationary.jpg" />
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default landing