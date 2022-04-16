import React from 'react'
import styles from './deliveryaddressform.module.css';
const DeliveryAddressForm = () => {
    return (
        <>
            <div className={styles.plcordrdiv}>

                <div className={styles.plcordrheader}>
                    <button>1</button>
                    <div className={styles.plcordrname}>DELIVERY ADDRESS</div>
                </div>

                <div className={styles.body}>
                    <div className={styles.addnewadrsradiobtn}>
                        <input type="radio" name="radioaddress" />
                        <span>ADD A NEW ADDRESS</span>
                    </div>

                    <div className={styles.inptname}>
                        <input type="text" name="pin" pattern="[0-9] {6}" maxLength="4" required placeholder='Pincode' />
                        <input type="text" name='locality' required placeholder='Locality' />
                    </div>
                    <div className={styles.inptpaddress}>
                        <textarea type="text" name="address" required placeholder='Address(Area and Street)' />
                    </div>
                    <div className={styles.inptname}>
                        <input type="text" name="city" required placeholder='City/District/Town' />
                        <select name='state' required>
                            <option value="Select State">--Select State--</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujurat">Gujurat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Ladakh">Ladakh</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>
                    <div className={styles.inptname}>
                    <input type="text" name="landmark" placeholder='Landmark(Optional)' />
                        <input type="text" name='alternatephno' placeholder='Alternate Phone(Optional)' />
                    </div>
                    <div className={styles.inptadrstype}>
                        <p>Address Type</p>
                        <input type="radio" name="radiohome" /><span>Home(All Day Delivery)</span>
                        <input type="radio" name="radiowork" /><span>Work(Delivery between 10AM - 5PM)</span>
                    </div>
                    <div className={styles.btsavehere}>
                        <button>SAVE AND DELIVER HERE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeliveryAddressForm