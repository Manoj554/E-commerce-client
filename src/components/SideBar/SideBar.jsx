import React from 'react'
import styles from './sidebar.module.css';

const SideBar = () => {
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
                    <div><input type="checkbox" /> T-shirt</div>
                    <div><input type="checkbox" /> Trouser</div>
                    <div><input type="checkbox" /> Joggers</div>
                </div>
            </div>
            <div className={styles.filters}>
                <div className={styles.heading}>
                    BRANDS
                </div>
                <div className={styles.checkboxes}>
                    <div><input type="checkbox" /> Puma</div>
                    <div><input type="checkbox" /> HRX</div>
                    <div><input type="checkbox" /> Reeboke</div>
                    <div><input type="checkbox" /> Puma</div>
                    <div><input type="checkbox" /> HRX</div>
                    <div><input type="checkbox" /> Reeboke</div>
                    <div><input type="checkbox" /> Puma</div>
                    <div><input type="checkbox" /> HRX</div>
                    <div><input type="checkbox" /> Reeboke</div>
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