import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import styles from './addaddressdiv.module.css';
const AddAddressDiv = () => {
    return (
        <>
            <div className={styles.plcordrdiv}>

                <div className={styles.plcordrheader}>
                    <button>1</button>
                    <div className={styles.plcordrname}>DELIVERY ADDRESS</div>
                </div>

                <div className={styles.body}>
                    <div className={styles.radiobtn}>
                        <input type="radio" name="radioaddress" />
                    </div>
                    <div className={styles.addrfrstline}>
                        <div className={styles.frstlinevalue}>Sukanya Sahoo
                            <span>WORK</span>
                            7008265065
                        </div>
                        <div className={styles.edit}>EDIT</div>
                    </div>
                    <div className={styles.scndline}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus incidunt libero repellat eum laborum excepturi modi minima ipsam, aliquam dicta repudiandae quae omnis reiciendis, Odisha-<span>769005</span>
                    </div>

                    <div className={styles.btsavehere}>
                        <button>SAVE AND DELIVER HERE</button>
                    </div>
                </div>

                {/* css when radio button is not checked */}
                <div className={styles.notselected}>
                    <div className={styles.radiobtn}>
                        <input type="radio" name="radioaddress" />
                    </div>
                    <div className={styles.addrfrstline}>
                        <div className={styles.frstlinevalue}>Sukanya Sahoo
                            <span>WORK</span>
                            7008265065
                        </div>
                        {/* <div className={styles.edit}>EDIT</div> */}
                    </div>
                    <div className={styles.scndline}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus incidunt libero repellat eum laborum excepturi modi minima ipsam, aliquam dicta repudiandae quae omnis reiciendis, Odisha-<span>769005</span>
                    </div>
                </div>

            </div>
            <div className={styles.addnewaddress}>
                <span><AiOutlinePlus /></span>Add a new address
            </div>
        </>
    )
}

export default AddAddressDiv