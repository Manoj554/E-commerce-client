import React, { useEffect, useState } from 'react'
import styles from './slideshow.module.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { slideshowData } from '../../utils/staticData/slideshow';

const SlideShow = () => {
    const [imgNumber, setImageNumber] = useState(0);

    const changeImage = () => {
        let num = (imgNumber + 1) % slideshowData.length;
        setImageNumber(num);
    }

    const handleClick = (val) => {
        let num;
        if (val == -1 && imgNumber == 0) {
            num = slideshowData.length - 1;
        } else {
            num = (imgNumber + val) % slideshowData.length;
        }
        setImageNumber(num);
    }

    useEffect(() => {
        const interval = setInterval(changeImage, 4000);
        return () => clearInterval(interval);
    }, [imgNumber]);

    return (
        <div className={styles.maindiv}>
            <div className={styles.wrapper}>
                <div className={styles.prevbn} onClick={handleClick.bind(this, -1)}>
                    <MdArrowBackIos />
                </div>
                <div className={styles.slide_container}>
                    <div className={styles.slide_image}>
                        <img src={slideshowData[imgNumber].src} />
                    </div>
                </div>
                <div className={styles.frwdbn} onClick={handleClick.bind(this, 1)}>
                    <MdArrowForwardIos />
                </div>
            </div>
        </div>
    )
}

export default SlideShow