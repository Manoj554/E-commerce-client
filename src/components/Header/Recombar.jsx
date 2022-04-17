import React from 'react'
import styles from './styles/recombar.module.css';
import Link from 'next/link';
//, { useEffect, useState } 
// import { useDispatch, useSelector } from 'react-redux';
// import { searchFieldAction, searchProductByCategoryAction } from '../../redux/actions';

const Recombar = () => {
	// const category = useSelector(state => state.category);
	// const [searchField, setSearrchField] = useState('');
	// const [searchByCategory, setSearchByCategory] = useState('');
	// const dispatch = useDispatch();

	// const handleSetCategory = (e) => {
	// 	setSearchByCategory(e.target.value);
	// 	if (e.target.value !== '') {
	// 		dispatch(searchProductByCategoryAction(e.target.value));
	// 	}
	// }

	// useEffect(() => {
	// 	if (searchField.length >= 3) {
	// 		dispatch(searchFieldAction(searchField));
	// 	}
	// 	if (searchField.length == 0) {
	// 		dispatch(searchFieldAction(searchField));
	// 	}
	// }, [searchField]);
	return (
		<>
			<div className={styles.maindiv}>
				<div className={styles.content} id={styles.green}>
					<span >
						Electronics
					</span>
					<div className={styles.suggestion}>
						<div className={styles.suglst}>Mobiles
						
							<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						<div className={styles.suglst}>Laptops
						<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						<div className={styles.suglst}>Camera
						<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						<div className={styles.suglst}>Smart Wearables
						<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						<div className={styles.suglst}>Mobile accesories
						<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.content} id={styles.violet}>
					<span >Men</span>
					<div className={styles.suggestion}>
						<div className={styles.suglst}>Topwear
						
							<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						<div className={styles.suglst}>Bottomwear
						<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						<div className={styles.suglst}>Men's Footwear
						<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.content} id={styles.orange}>
					<span >Women</span>
					<div className={styles.suggestion}>
						<div className={styles.suglst}>Women western wear
						
							<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						<div className={styles.suglst}>Women traditional wear
						<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						<div className={styles.suglst}>Women's Footwear
						<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						
					</div>
				</div>
				<div className={styles.content } id={styles.pink}>
					<span >Home and Furniture</span>
					<div className={styles.suggestion}>
						<div className={styles.suglst}>Home decor
						
							<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						<div className={styles.suglst}>Furniture
						<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						<div className={styles.suglst}>Kitchen tools
						<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						
					</div>
				</div>
				<div className={styles.content} id={styles.yellow}>
					<span >Books and more</span>
					<div className={styles.suggestion}>
						<div className={styles.suglst}>Books
						
							<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						<div className={styles.suglst}>Stationary
						<div className={styles.subsuggestion}>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
								<div className={styles.suglst}>suggestion</div>
							</div>
						</div>
						
						
					</div>
					
				</div>
			</div>
		</>
	)
}

export default Recombar