import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewDeliveryAddress } from '../../redux/actions';
import Loader from '../Loader/Loader';
import styles from './deliveryaddressform.module.css';


const DeliveryAddressForm = ({ setShow }) => {
    const initialFormData = { name: '', phone: '', address: '', city: '', pincode: '', altPhone: '', email: '', deliveryType: '' };
    const [formData, setFormData] = useState(initialFormData);
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.auth);

    const HandleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewDeliveryAddress(formData));
    }

    return (
        <>
            {loading && <Loader />}
            <div className={styles.plcordrdiv}>

                

                <form autoComplete='off' onSubmit={handleSubmit} className={styles.body}>

                    <div className={styles.inptname}>
                        <input type="text" name='name' required placeholder='Name' value={formData.name} onChange={HandleChange} />
                        <input type="tel" name="phone" placeholder='Phone Number' value={formData.phone} onChange={HandleChange} />
                    </div>

                    <div className={styles.inptpaddress}>
                        <textarea type="text" name="address" value={formData.address} onChange={HandleChange} required placeholder='Address(Area and Street)' />
                    </div>

                    <div className={styles.inptname}>
                        <input type="text" name="city" required placeholder='City/District/Town' value={formData.city} onChange={HandleChange} />
                        <input type="tel" name="pincode" placeholder='Pincode' value={formData.pincode} onChange={HandleChange} />
                    </div>

                    <div className={styles.inptname}>
                        <input type="text" name='altPhone' placeholder='Alternate Phone(Optional)' value={formData.altPhone} onChange={HandleChange} />
                        <input type="email" name='email' placeholder='Email(Optional)' value={formData.email} onChange={HandleChange} />
                    </div>

                    <div className={styles.inptadrstype}>
                        <p>Address Type</p>
                        <input type="radio" name="deliveryType" value="home" onClick={(e) => setFormData({ ...formData, deliveryType: e.target.value })} /><span>Home(All Day Delivery)</span>
                        <input type="radio" name="deliveryType" value="work" onClick={(e) => setFormData({ ...formData, deliveryType: e.target.value })} /><span>Work(Delivery between 10AM - 5PM)</span>
                    </div>

                    <div className={styles.btsavehere}>
                        <button>SAVE AND DELIVER HERE</button>
                        <button className={styles.cancelbtn} onClick={() => setShow(false)}>CANCEL</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default DeliveryAddressForm