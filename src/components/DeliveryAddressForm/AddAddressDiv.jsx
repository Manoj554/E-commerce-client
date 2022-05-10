import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAddress } from '../../redux/actions';
import styles from './addaddressdiv.module.css';
import DeliveryAddressForm from './DeliveryAddressForm';

const AddAddressDiv = ({ setShow, setAddressVal }) => {
    const [showDeliveryForm, setDeliveryForm] = useState(false);
    const [selectedSAddress, setAddress] = useState('');
    const { addresses, loading } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllAddress());
    }, [dispatch]);

    const getRadioValue = (e) => {
        setAddress(e.target.value);
    }

    const handleSaveandDeliver = (val) => {
        setAddressVal(val);
        setShow(false);
    }

    const handleEdit = (val) => {

    }

    const DeliveryBox = ({ id, name, phone, address, pincode, val, deliveryType }) => {
        return (
            <div className={styles.body}>
                <div className={styles.radiobtn}>
                    <input type="radio" name="radioaddress" checked={id == selectedSAddress} value={id} onChange={getRadioValue} />
                </div>
                <div className={styles.addrfrstline}>
                    <div className={styles.frstlinevalue}>{name}
                        <span>{deliveryType}</span>
                        {phone}
                    </div>
                    <div className={styles.edit} onClick={handleEdit.bind(this, id)}>EDIT</div>
                </div>
                <div className={styles.scndline}>
                    {address} <div>
                        <span>
                            pin:- {pincode}
                        </span>
                    </div>
                </div>
                {selectedSAddress == id && (
                    <div className={styles.btsavehere}>
                        <button onClick={handleSaveandDeliver.bind(this, val)}>SAVE AND DELIVER HERE</button>
                    </div>
                )}
            </div>
        )
    }

    return (
        <>
            <div className={styles.plcordrdiv}>
                <div className={styles.plcordrheader}>
                    <button>1</button>
                    <div className={styles.plcordrname}>DELIVERY ADDRESS</div>
                </div>
                {addresses && addresses.length > 0 ? (
                    addresses.map((val) => (
                        <DeliveryBox
                            key={val._id}
                            val={val}
                            id={val._id}
                            name={val.name}
                            phone={val.phone}
                            address={val.address}
                            pincode={val.pincode}
                            deliveryType={val.deliveryType}
                        />
                    ))
                ) : (
                    <p>No address Found</p>
                )}
            </div>
            <div className={styles.addnewaddress} onClick={() => setDeliveryForm(true)}>
                <span><AiOutlinePlus /></span>Add a new address
            </div>
            {showDeliveryForm && <DeliveryAddressForm setShow={setDeliveryForm} />}

        </>
    )
}

export default AddAddressDiv