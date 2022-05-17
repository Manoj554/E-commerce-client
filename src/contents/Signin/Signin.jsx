import React, { useEffect, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import styles from './signin.module.css';
import Input from "../../components/InputField/Input";
import Link from 'next/link';
import Skeleton from '../../components/Loader/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../../redux/actions';
import { useRouter } from 'next/router';


const Signin = () => {
    const [formData, setFormData] = useState({ user: '', password: '' });
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signInAction(formData, setFormData));
    }

    if (auth.authenticate) {
        router.push(auth.pathName ? auth.pathName : '/');
    }

    return (
        <>
            <div className={styles.backimg}>
                <form className={styles.signinform} autoComplete='off' onSubmit={handleSubmit} >
                    <div className={styles.maindiv}>
                        <div className={styles.contentdiv}>
                            <div className={styles.headmargin}>
                                <div className={styles.head}>Welcome to Cartany!</div>
                            </div>
                        </div>
                    </div>
                    {auth.loading ? <Skeleton login /> : (
                        <>
                            <div className={styles.maindiv}>
                                <Input
                                    label="Email or Phone No."
                                    type="text"
                                    placeholder="Enter your email or phone number"
                                    name="user"
                                    value={formData.user}
                                    onChange={handleChange}
                                />

                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />

                                <div className={styles.contentdiv}>
                                    <div className={`${styles.subcontent}   ${styles.extradiv}`}>
                                        <div className={styles.spandiv}><input type="checkbox" />  Keep me signed in</div>
                                        <div className={`${styles.spandiv} ${styles.forgot}`}>Forgot password?</div>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.maindiv}>
                                <div className={styles.contentdiv}>
                                    <div className={styles.buttonmargin}>
                                        <button className={styles.button} type='submit'>Sign in</button>
                                    </div>
                                    {/* <div className={styles.googlemargin}>
                                        <button className={`${styles.googlebtn} ${styles.button}`} type='button' onClick={signInWithGoogle}><span id={styles.googlelogo}><FaGoogle /></span> Sign in with Google </button>

                                    </div> */}
                                </div>

                            </div>
                        </>
                    )}
                    <div className={styles.helper}>
                        <p>New to Cartany? <span>
                            <Link href="/signup">
                                Create an Account
                            </Link>
                        </span></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signin