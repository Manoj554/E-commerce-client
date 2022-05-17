import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './products.module.css';
import Card from '../../components/Card/Card';
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions';

const Products = () => {
    const { filter, allProducts, products, loading, subCategory } = useSelector(state => state.product);
    const { wishList } = useSelector(state => state.cart);
    const [result, setResult] = useState('');
    const router = useRouter();
    const { search } = router.query;
    const dispatch = useDispatch();

    const Mapping = (arr) => {
        let listarr = wishList.map(data => data.productId);

        return arr.map((val) => (
            <div key={val.id}>
                <Card
                    base64={val.productImage}
                    name={val.name}
                    price={val.price}
                    priceOffered={val.priceOffered}
                    id={val.id}
                    wish={listarr.includes(val.id) ? true : false}
                    retailPrice={val.retailPrice}
                    discount={val.percentageOff}
                />
            </div>
        ));
    }

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <>

            <div className={styles.flexbox}>
                <SideBar category={subCategory} setResult={setResult} />
                <div className={styles.contentbox}>
                    {/* <p className={styles.msgbox}>
                        Showing result for :
                        {result ? `${result}` : search != undefined ? ` ${search}` : ` All Products`}
                    </p> */}
                    <div className={styles.galdiv}>
                        {loading ? (
                            <>
                                <Card l />
                                <Card l />
                                <Card l />
                                <Card l />
                            </>
                        ) : (
                            filter ? Mapping(products) : Mapping(allProducts)
                        )
                        }
                    </div>

                    {!loading && ((products.length == 0 && allProducts.length == 0) || (filter && products.length == 0)) && (
                        <p className={styles.noproduct}>No Products Available ⚠️ 😕</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Products;