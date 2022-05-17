/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './card.module.css';
import { AiFillHeart } from "react-icons/ai";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { wishListAction } from '../../redux/actions';
import ThreeDotAnimation from '../Loader/ThreeDotAnimation';
import Loader from '../Loader/Loader';

const Card = ({ l, id, base64, name, price, priceOffered, discount, wish, }) => {
	const dispatch = useDispatch();
	const { loading } = useSelector(state => state.cart);

	const handleADC = (id) => {
		dispatch(wishListAction(id));
	}

	if (l) {
		return (
			< div className={styles.card}>
				<Skeleton height={30} />
				<Skeleton />
				<Skeleton height={100} />
				<Skeleton />
				<Skeleton />
				<Skeleton height={70} />
				<Skeleton />
				<Skeleton />
				<Skeleton height={50} />
			</div>
		)
	} else {
		return (
			<>
				<div className={styles.card} key={id}>
					<Link href={`products/${id}?productName=${name}&id=${id}`} passHref>
						<div>
							<div className={styles.imgdiv}>
								<img src={base64} alt='product image' />
							</div>
							<div className={styles.descdiv}>
								<div className={styles.branddiv}>{name}</div>
								<div className={styles.typediv}> 4.3⭐ (1232)</div>
								<div className={styles.pricediv}>Rs.<span>{priceOffered}</span>&ensp;<span className={styles.strike}>Rs.<span>{price}</span></span>&ensp;
									<span className={styles.discspan}>(<span>{discount}</span>% off)</span>
								</div>
							</div>
						</div>
					</Link>
					<div className={styles.buttondiv}>
						<div className={wish ? styles.edit : styles.delete}>
							<button onClick={handleADC.bind(this, id)} >{loading ? <Loader /> : (
								<>
									<AiFillHeart />
									{!wish ? "Wishlist" : "Remove"}
								</>
							)}</button>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default Card;