import React from 'react'
import styles from './wishlist.module.css';
import Card from '../../components/Card/Card';
const Wishlist = () => {
    return (
        <div className={styles.maindiv}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Wishlist
