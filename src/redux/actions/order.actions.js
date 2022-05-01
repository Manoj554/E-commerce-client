import { orderConstraints } from "./actionConstraints"
import * as api from '../../apis/apis';
import { errorMessage } from "./actionHelper";


export const setPriceAmount = (obj) => async (dispatch) => {
    dispatch({ type: orderConstraints.SET_PRICE, payload: obj });
}

export const placeOrderAction = (obj) => async (dispatch) => {
    dispatch({ type: orderConstraints.PLACE_ORDER_REQUEST });

    try {
        const { data } = await api.placeOrderApi(obj);
        dispatch({
            type: orderConstraints.PLACE_ORDER_SUCCESS, payload: {
                data: data?.orderDetails, msg: data?.msg
            }
        });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: orderConstraints.PLACE_ORDER_FAILED, payload: msg });
    }
}