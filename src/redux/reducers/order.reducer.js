import { orderConstraints } from "../actions/actionConstraints";

const initialState = {
    loading: false,
    message: null,
    error: null,
    orderId: null,
    priceDetails: null,
    myOrders: []
};

const orderReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case orderConstraints.PLACE_ORDER_REQUEST:
            state = {
                ...state,
                loading: true,
                message: null,
                error: null
            };
            break;
        case orderConstraints.PLACE_ORDER_FAILED:
            state = {
                ...state,
                loading: true,
                error: payload
            };
            break;
        case orderConstraints.PLACE_ORDER_SUCCESS:
            state = {
                ...state,
                loading: true,
                message: payload?.msg,
                orderId: payload?.data?.orderId
            };
            break;

        //Get My Orders
        case orderConstraints.GET_MY_ORDER_REQUEST:
            state = {
                ...state,
                loading: true,
                message: null,
                error: null
            };
            break;
        case orderConstraints.GET_MY_ORDER_FAILED:
            state = {
                ...state,
                loading: true,
                error: payload
            };
            break;
        case orderConstraints.GET_MY_ORDER_SUCCESS:
            state = {
                ...state,
                loading: true,
                message: payload?.msg,
                myOrders: payload?.data
            };
            break;

        case orderConstraints.SET_PRICE:
            state = {
                ...state,
                priceDetails: payload
            };
            break;

        default:
            break;
    }
    return state;
}

export default orderReducer;