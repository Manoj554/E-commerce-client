import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getCartAction, userLoggedInStatus } from '../redux/actions';

const PrivateRoute = ({ children }) => {
    const auth = useSelector(state => state.auth);
    const [pageState, setPageState] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(userLoggedInStatus(router.pathname));
            setPageState(false);
            router.push('/signin');
        } else {
            setPageState(true);
        }
    }, [auth.authenticate, dispatch, router]);

    return (
        <div>
            {pageState && children}
        </div>
    )
}

export default PrivateRoute;