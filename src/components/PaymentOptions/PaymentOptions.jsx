import React, { useState } from 'react';
import styles from './paymentoptions.module.css';

const PaymentOptions = () => {

    const [selectedRadioBtn, setSelectedRadioBtn] = useState();
    const handleRadioClick = e => setSelectedRadioBtn(e.target.value);
    return (
        <div className={styles.maindiv}>
            <div className={styles.plcordrheader}>
                <button>3</button>
                <div className={styles.plcordrname}>PAYMENT OPTIONS</div>
            </div>
            <div className={styles.body}>
                <div className={styles.parentlst}>
                    <input type='radio' value='upi' name='paymntradio' onChange={handleRadioClick} /><span>UPI</span>
                    {selectedRadioBtn === "upi" && (
                        <div className={styles.sublist}>
                            <p><input type='radio' value='phonepe' name='paymntradio1' /><span>PhonePe</span></p>
                            <p><input type='radio' value='upiid' name='paymntradio1' /><span>Your UPI Id</span></p>
                        </div>
                    )}
                </div>

                <div className={styles.parentlst}>
                    <input type='radio' value='atmcard' name='paymntradio' onChange={handleRadioClick} /><span>Credit / Debit / ATM Card</span>
                    {selectedRadioBtn === "atmcard" && (
                        <div className={styles.atmcardsublist}>
                            <p><input type='text' name='cardno' placeholder='Card Number' /></p>
                            <p><input type='text' name='nameoncard' placeholder='Name on Card' /></p>
                            <p>
                                <input type='text' name='valid' placeHolder='Valid Thru MM/YY' />
                                <input type='text' name='cvv' placeholder='CVV' />
                            </p>
                            <div className={styles.btnpay}>
                                <button>PAY NOW</button>

                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.parentlst}>
                    <input type='radio' value='netbanking' name='paymntradio' onChange={handleRadioClick} /><span>Net Banking</span>
                    {selectedRadioBtn === "netbanking" && (
                        <div className={styles.sublist}>
                            <p><b>Popular Banks</b></p>
                            <div className={styles.subsubdiv}>
                                <span><input type='radio' value='hdfc' name='paymntradio1' />&nbsp;&nbsp;&nbsp;HDFC Bank</span>
                                <span><input type='radio' value='sbi' name='paymntradio1' />&nbsp;&nbsp;&nbsp;State Bank of India</span>
                                <span><input type='radio' value='icici' name='paymntradio1' />&nbsp;&nbsp;&nbsp;ICICI Bank</span>
                                <span><input type='radio' value='hdfc' name='paymntradio1' />&nbsp;&nbsp;&nbsp;Axis Bank</span>
                                <span><input type='radio' value='sbi' name='paymntradio1' />&nbsp;&nbsp;&nbsp;Kotak Mahindra Bank</span>
                                <span><input type='radio' value='icici' name='paymntradio1' />&nbsp;&nbsp;&nbsp;ICICI Bank</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.parentlst}>
                    <input type='radio' value='cod' name='paymntradio' onChange={handleRadioClick} /><span>Cash on Delivery</span>
                    {/* {selectedRadioBtn === "cod" && ( */}
                    <div className={styles.sublist}>
                        <p><input type='radio' value='phonepe' /><span>PhonePe</span></p>
                        <p><input type='radio' value='upiid' /><span>Your UPI Id</span></p>
                    </div>
                    {/* )} */}
                </div>
            </div>
        </div>
    )
}

export default PaymentOptions