import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Products from '../contents/Products/Products';
import Productdesc from '../contents/Products/Productdesc';

const test = () => {
    const [selected, setSelectedId] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [val, setval] = useState('');

    const handleChange = (e) => {
        let value = e.target.value;
        let check = selected.includes(value);
        console.log(check);
        if (check) {
            let newArr = selected.filter(val => val != value);
            setSelectedId(newArr);
        } else {
            setSelectedId(old => [...old, e.target.value]);
        }
    }

    return (
        <>
            {console.log(selected)}
            <input type="checkbox" name="" id="" value={1} onClick={handleChange} />
            <input type="checkbox" name="" id="" value={2} onClick={handleChange} />
            <input type="checkbox" name="" id="" value={3} onClick={handleChange} />
        </>
    )
}

export default test