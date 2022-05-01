import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getCartAction, userLoggedInStatus } from '../redux/actions';

const PrivateRoute = ({ children }) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(userLoggedInStatus());
            router.push('/signin');
        }
    }, [auth.authenticate]);

    return (
        <div>
            {children}
        </div>
    )
}

export default PrivateRoute;