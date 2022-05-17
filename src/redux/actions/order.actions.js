import { orderConstraints } from "./actionConstraints"
import * as api from '../../apis/apis';
import { errorMessage } from "./actionHelper";
import { getCartDetailsAction } from "./cart.actions";


export const setPriceAmount = (obj) => async (dispatch) => {
    dispatch({ type: orderConstraints.SET_PRICE, payload: obj });
}

export const placeOrderAction = (obj, router) => async (dispatch) => {
    dispatch({ type: orderConstraints.PLACE_ORDER_REQUEST });

    try {
        const { data } = await api.placeOrderApi(obj);
        dispatch(getCartDetailsAction());
        dispatch({
            type: orderConstraints.PLACE_ORDER_SUCCESS, payload: {
                data: data?.orderDetails, msg: data?.msg
            }
        });
        router.push('/orderplaced');
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: orderConstraints.PLACE_ORDER_FAILED, payload: msg });
    }
}