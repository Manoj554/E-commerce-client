import axios from 'axios';
import * as api from '../../apis/apis';
import { authConstraints } from "./actionConstraints";
import { errorMessage } from './actionHelper';

export const signUpAction = (userData, setState, defaultValue, router) => async (dispatch) => {
    dispatch({ type: authConstraints.SIGNUP_REQUEST });

    try {
        const { data } = await api.signUpApi(userData);
        setState(defaultValue);
        dispatch({ type: authConstraints.SIGNUP_SUCCESS, payload: data.msg });
        router.push('/signin');
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: authConstraints.SIGNUP_FAILED, payload: msg });
    }
}

export const signInAction = (userData, setState, defaultValue) => async (dispatch) => {
    dispatch({ type: authConstraints.SIGNIN_REQUEST });

    try {
        const { data } = await api.signInApi(userData);
        await axios.post('/api/login', { token: data.user.token });
        setState({ user: '', password: '' });
        dispatch({
            type: authConstraints.SIGNIN_SUCCESS, payload: {
                data: data?.user, msg: data?.msg
            }
        });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: authConstraints.SIGNIN_FAILED, payload: msg });
    }
}

export const signOutAction = () => async (dispatch) => {
    dispatch({ type: authConstraints.SIGNOUT_REQUEST });

    try {
        console.log('i am signout');
        const { data } = await api.signOutApi();
        await axios.get('/api/logout');
        alert(data.msg);
        dispatch({ type: authConstraints.SIGNOUT_SUCCESS });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: authConstraints.SIGNOUT_FAILED, payload: msg });
    }
}

export const userLoggedInStatus = () => async (dispatch) => {
    dispatch({ type: authConstraints.CHECKING_LOGIN_STATUS });

    try {
        const { data } = await api.getUserInfoApi();
        dispatch({
            type: authConstraints.USER_LOGGEDIN, payload: {
                data: data?.user, msg: data?.msg
            }
        });
    } catch (error) {
        signOutAction();
        let msg = errorMessage(error);
        dispatch({ type: authConstraints.USER_NOT_FOUND, payload: msg });
    }
}

export const addNewDeliveryAddress = (formData) => async (dispatch) => {
    dispatch({ type: authConstraints.ADD_NEW_ADDRESS_REQUEST });

    try {
        const { data } = await api.addNewAddressApi(formData);
        dispatch({
            type: authConstraints.ADD_NEW_ADDRESS_SUCCESS, payload: {
                data: data?.addresses, msg: data?.msg
            }
        });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: authConstraints.ADD_NEW_ADDRESS_FAILED, payload: msg });
    }
}

export const getAllAddress = () => async (dispatch) => {
    dispatch({ type: authConstraints.GET_ALL_ADDRESS_REQUEST });

    try {
        const { data } = await api.getAllAddresssApi();
        dispatch({
            type: authConstraints.GET_ALL_ADDRESS_SUCCESS, payload: {
                data: data?.addresses, msg: data?.msg
            }
        });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: authConstraints.GET_ALL_ADDRESS_FAILED, payload: msg });
    }
}