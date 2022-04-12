import React from 'react'
import styles from './styles/recombar.module.css';
import Link from 'next/link';
import { GoSearch } from 'react-icons/go';
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
			<div className={styles.recombardiv}>
				<div className={styles.adddiv}>
					Men's Shirts
				</div>
				<div className={styles.searchdiv}>
					<ul>
						<li >
							<div className={styles.searchbox}>
								<button ><GoSearch /></button>
								<input type="search"
									placeholder="Search for products and brands"
									name="search"
									// value={searchField}
									// onChange={(e) => setSearrchField(e.target.value)}
								/>
							</div>
						</li>
						<li >
							<select  name="sortby">
								<option >Sort By: Recommemded</option>
								{/* {category.categories.length > 0 && (
									category.categories.map((val) => (
										<option key={val.id} value={val.id}>{val.name}</option>
									))
								)} */}
							</select>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Recombar