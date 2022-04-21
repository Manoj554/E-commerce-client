import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterProductByCategory, filterProductBySubRootCategory } from '../../redux/actions';
import styles from './sidebar.module.css';

const SideBar = ({ category, setResult }) => {
    const [level2, setLevel2] = useState([]);
    const [level3, setLevel3] = useState([]);
    const [selectedId, setSelectedId] = useState([]);
    const [selectedsubrootId, setSelectedsubrootId] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        let lv2 = category.filter(val => val.level == 2);
        let lv3 = category.filter(val => val.level == 3);
        setLevel2([...lv2]);
        setLevel3([...lv3]);
    }, [category]);

    const MapCategory = (categories, handleClick) => (
        categories.map((val) => (
            <div key={val.id}><input type="checkbox" onClick={handleClick.bind(this, { id: val.id, name: val.name })} />{val.name}</div>
        ))
    )
    const handleClick = (val) => {
        let id = val.id;
        // setResult(val.name);
        let check = selectedId.includes(id);
        if (check) {
            let newArr = selectedId.filter(val => val != id);
            setSelectedId(newArr);
            dispatch(filterProductByCategory({ ids: newArr }));
        } else {
            setSelectedId(old => [...old, id]);
            dispatch(filterProductByCategory({ ids: [...selectedId, id] }));
        }
    }

    const handleClick2 = (val) => {
        let id = val.id;
        // setResult(val.name);
        let check = selectedsubrootId.includes(id);
        if (check) {
            let newArr = selectedsubrootId.filter(val => val != id);
            setSelectedsubrootId(newArr);
            dispatch(filterProductBySubRootCategory({ ids: newArr }));
        } else {
            setSelectedsubrootId(old => [...old, id]);
            dispatch(filterProductBySubRootCategory({ ids: [...selectedsubrootId, id] }));
        }
    }

    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.heading}>
                    FILTERS
                </div>
                <div className={styles.filters}>
                    <div className={styles.heading}>
                        CATEGORIES
                    </div>
                    <div className={styles.checkboxes}>
                        {level2.length == 0 && level3.length == 0 ? <p>No category Available</p> : (level2.length > 0 ? MapCategory(level2, handleClick2) : MapCategory(level3, handleClick))}
                    </div>
                </div>
                <div className={styles.filters}>
                    <div className={styles.heading}>
                        SUB CATEGORY
                    </div>
                    <div className={styles.checkboxes}>
                        {level2.length > 0 && level3.length > 0 ? MapCategory(level3, handleClick) : <p>No category Available</p>}
                    </div>
                </div>
                <div className={styles.filters}>
                    <div className={styles.heading}>
                        PRICE
                    </div>
                    <div className={styles.checkboxes}>
                        <div><input type="checkbox" /> Rs.400 to Rs.600</div>
                        <div><input type="checkbox" /> Rs.400 to Rs.600</div>
                        <div><input type="checkbox" /> Rs.400 to Rs.600</div>
                        <div><input type="checkbox" /> Rs.400 to Rs.600</div>
                        <div><input type="checkbox" /> Rs.400 to Rs.600</div>
                        <div><input type="checkbox" /> Rs.400 to Rs.600</div>
                    </div>
                </div>
                <div className={styles.filters}>
                    <div className={styles.heading}>
                        DISCOUNT
                    </div>
                    <div className={styles.checkboxes}>
                        <div><input type="checkbox" /> 10%</div>
                        <div><input type="checkbox" /> 20%</div>
                        <div><input type="checkbox" /> 30%</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar