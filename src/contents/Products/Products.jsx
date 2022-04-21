import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './products.module.css';
import Card from '../../components/Card/Card';
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
    const { filter, allProducts, products, loading, subCategory } = useSelector(state => state.product);
    const [result, setResult] = useState('');
    const router = useRouter();
    const { search } = router.query;

    const Mapping = (arr) => {
        return arr.map((val) => (
            <Card
                key={val.id}
                base64={val.productImage}
                name={val.name}
                price={val.price}
                priceOffered={val.priceOffered}
                id={val.id}
                retailPrice={val.retailPrice}
                discount={val.percentageOff}
            />
        ));
    }

    return (
        <>
            <div className={styles.flexbox}>
                <SideBar category={subCategory} setResult={setResult} />
                <div className={styles.contentbox}>
                    <p className={styles.msgbox}>
                        Showing result for :
                        {result ? `${result}` : search != undefined ? ` ${search}` : ` All Products`}
                    </p>
                    <div className={styles.galdiv}>
                        {loading ? (
                            <>
                                <Card l />
                                <Card l />
                                <Card l />
                                <Card l />
                            </>
                        ) : (
                            search == undefined && !filter ? Mapping(allProducts) : Mapping(products)
                        )
                        }
                    </div>
                    {!loading && (products.length == 0 || allProducts.length == 0) && filter && (
                        <p className={styles.noproduct}>No Product Available:😕😕😕</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Products;