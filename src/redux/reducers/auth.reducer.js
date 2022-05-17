import { authConstraints } from "../actions/actionConstraints";

const initialState = {
    message: null,
    error: null,
    loading: false,
    user: null,
    authenticate: false,
    addresses: [],
    pathName: '/',
}

const authReducer = (state = initialState, action) => {
    console.log(action);
    const { type, payload } = action;

    switch (type) {
        //Signup
        case authConstraints.SIGNUP_REQUEST:
            state = {
                ...initialState,
                loading: true,
                error: null,
                message: null
            }
            break;
        case authConstraints.SIGNUP_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload
            }
            break;
        case authConstraints.SIGNUP_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: payload?.msg
            }
            break;

        //Signin
        case authConstraints.SIGNIN_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            }
            break;
        case authConstraints.SIGNIN_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload,
                authenticate: false
            }
            break;
        case authConstraints.SIGNIN_SUCCESS:
            state = {
                ...state,
                loading: false,
                authenticate: true,
                message: payload?.msg,
                user: payload?.data
            }
            break;

        //Google Signin
        case authConstraints.GOOGLE_SIGNIN_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            }
            break;
        case authConstraints.GOOGLE_SIGNIN_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload,
                authenticate: false
            }
            break;
        case authConstraints.GOOGLE_SIGNIN_SUCCESS:
            state = {
                ...state,
                loading: false,
                authenticate: true,
                message: payload?.msg,
                user: payload?.data
            }
            break;

        //Signout
        case authConstraints.SIGNOUT_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            }
            break;
        case authConstraints.SIGNOUT_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload
            }
            break;
        case authConstraints.SIGNOUT_SUCCESS:
            state = {
                ...initialState
            }
            break;

        //UserLoggedIn
        case authConstraints.CHECKING_LOGIN_STATUS:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null,
                pathName: payload
            }
            break;
        case authConstraints.USER_NOT_FOUND:
            state = {
                ...state,
                loading: false,
                authenticate: false,
                error: payload
            }
            break;
        case authConstraints.USER_LOGGEDIN:
            state = {
                ...state,
                authenticate: true,
                loading: false,
                message: payload?.msg,
                user: payload?.data
            }
            break;

        //Get All Address
        case authConstraints.GET_ALL_ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            }
            break;
        case authConstraints.GET_ALL_ADDRESS_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload
            }
            break;
        case authConstraints.GET_ALL_ADDRESS_SUCCESS:
            state = {
                ...state,
                loading: false,
                addresses: payload?.data,
                message: payload?.msg
            }
            break;

        //Add New Address
        case authConstraints.ADD_NEW_ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            }
            break;
        case authConstraints.ADD_NEW_ADDRESS_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload
            }
            break;
        case authConstraints.ADD_NEW_ADDRESS_SUCCESS:
            state = {
                ...state,
                loading: false,
                addresses: payload?.data,
                message: payload?.msg
            }
            break;
        default:

    }
    return state;
}

export default authReducer;