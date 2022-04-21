import React from 'react'
import styles from './styles/recombar.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProductByCategory, getProductsByRootCategory } from '../../redux/actions';
import { useRouter } from 'next/router';

const SubCategory = ({ id, name, children, handleClick, i, handleClick2 }) => {
	return (
		<>
			<div key={id} className={styles.content} id={i % 2 == 0 ? styles.violet : styles.orange}>
				<span onClick={handleClick2.bind(this, { name: name, id: id })}>
					{name}
				</span>
				{children.length > 0 && (
					<>
						<div className={styles.suggestion}>
							{children.map((val) => (
								<div key={val.id} className={styles.suglst} onClick={handleClick.bind(this, { name: val.name, id: val.id })} >{val.name}
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</>
	)
}

const Recombar = () => {
	const { loading, categories } = useSelector(state => state.category);
	const dispatch = useDispatch();
	const router = useRouter();

	const handleClick = (val) => {
		dispatch(getProductByCategory(val, router));
	}

	const handleClick2 = (val) => {
		dispatch(getProductsByRootCategory(val, router));
	}

	const handleAllClick = () => {
		dispatch(getAllProducts());
		router.push('/products')
	}

	return (
		<>
			<div className={styles.maindiv}>
				<div className={styles.content} id={styles.yellow} onClick={handleAllClick}>
					All Products
				</div>
				{loading ? <p>Loading categories ...</p> :
					categories.length > 0 && categories.map((val, i) => (
						<SubCategory key={val.id} id={val.id} name={val.name} children={val.children} handleClick={handleClick} handleClick2={handleClick2} i={i} />
					))}
			</div>
		</>
	)
}

export default Recombar