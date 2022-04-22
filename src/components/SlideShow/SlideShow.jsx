import React from 'react'
import styles from './slideshow.module.css';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
const SlideShow = () => {
    
    return (
        <div className={styles.maindiv}>
            <div className={styles.wrapper}>
                <div className={styles.prevbn}>
                    <MdArrowBackIos />
                </div>
                <div className={styles.slide_container}>
                    <div className={styles.slide_image}>
                        <img src="collection.jpg" />
                    </div>
                    <div className={styles.slide_image}>
                        <img src="pinkheadphone.jpg" />
                    </div>
                    <div className={styles.slide_image}>
                        <img src="collection.jpg" />
                    </div>
                    <div className={styles.slide_image}>
                        <img src="sonyheadphone.jpg" />
                    </div>
                </div>
                <div className={styles.frwdbn}>
                    <MdArrowForwardIos />
                </div>
                {/* <div className={styles.navigation_dots}>
                    <div className={`${styles.single_dot} ${styles.active}`}/>
                    <div className={styles.single_dot}/>
                    <div className={`${styles.single_dot} ${styles.active}`}/>
                    <div className={`${styles.single_dot} ${styles.active}`}/>
                </div> */}
            </div>

        </div>
    )
}

export default SlideShow