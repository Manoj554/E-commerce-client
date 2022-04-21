import React from 'react'
import styles from './card.module.css';
import { BsCart3 } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import Link from 'next/link';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteProductAction } from '../../redux/actions';
import { Skeleton } from '@mui/material';
const Card = ({ l, id, base64, name, price, priceOffered, discount, deleteId, setDeleteId }) => {
	// const dispatch = useDispatch();
	// const product = useSelector(state => state.product);

	// const handleDelete = (e) => {
	// 	setDeleteId(e.target.value);
	// 	dispatch(deleteProductAction(e.target.value));
	// }
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
					<div className={styles.buttondiv}>
						<div className={styles.delete}>
							<button ><AiFillHeart /> Wishlist</button>
						</div>
						<div className={styles.edit}>
							<button><BsCart3 /> Add to cart</button>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default Card;