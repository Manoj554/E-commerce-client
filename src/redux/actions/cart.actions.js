import { cartConstraints } from "./actionConstraints";
import * as api from '../../apis/apis';
import { errorMessage } from "./actionHelper";

export const wishListAction = (id) => async (dispatch) => {
    dispatch({ type: cartConstraints.WISHLIST_ACTION_REQUEST });

    try {
        const { data } = await api.wishListActionApi(id);
        dispatch({ type: cartConstraints.WISHLIST_ACTION_SUCCESS, payload: { data: data.cart, msg: data?.data } });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: cartConstraints.WISHLIST_ACTION_FAILED, payload: msg });
    }
}

export const getProductsWhichisInWishList = (ids) => async (dispatch) => {
    dispatch({ type: cartConstraints.GET_PRODUCTS_FROM_WISHLIST_REQUEST });

    try {
        const { data } = await api.getProductsFromWishListApi(ids);
        dispatch({
            type: cartConstraints.GET_PRODUCTS_FROM_WISHLIST_SUCCESS, payload: {
                data: data.products, msg: data?.msg
            }
        })
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: cartConstraints.GET_PRODUCTS_FROM_WISHLIST_FAILED, payload: msg });
    }
}

export const cartAction = (id) => async (dispatch) => {
    dispatch({ type: cartConstraints.CART_ACTION_REQUEST });

    try {
        const { data } = await api.cartActionApi(id);
        dispatch({
            type: cartConstraints.CART_ACTION_SUCCESS, payload: {
                data: data.cart, msg: data?.msg
            }
        });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: cartConstraints.CART_ACTION_FAILED, payload: msg });
    }
}

export const getCartDetailsAction = () => async (dispatch) => {
    dispatch({ type: cartConstraints.GET_CART_REQUEST });

    try {
        const { data } = await api.getCartApi();
        dispatch({
            type: cartConstraints.GET_CART_SUCCESS, payload: {
                data: data.cart, msg: data?.msg
            }
        });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: cartConstraints.GET_CART_FAILED, payload: msg })
    }
}

export const getProductsFromCartAction = () => async (dispatch) => {
    dispatch({ type: cartConstraints.GET_PRODUCTS_FROM_CART_REQUEST });

    try {
        const { data } = await api.getProductsFromCartApi();
        dispatch({
            type: cartConstraints.GET_PRODUCTS_FROM_CART_SUCCESS, payload: {
                data: data?.products, msg: data?.msg
            }
        });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: cartConstraints.GET_PRODUCTS_FROM_CART_FAILED, payload: msg })
    }
}

export const modifyQuantityInCart = (obj) => async (dispatch) => {
    dispatch({ type: cartConstraints.MODIFY_QUANTITY_IN_CART_REQUEST });

    try {
        const { data } = await api.modifyQuantityInCartApi(obj);
        dispatch({
            type: cartConstraints.MODIFY_QUANTITY_IN_CART_SUCCESS, payload: {
                data: data?.cart, msg: data?.msg
            }
        });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: cartConstraints.MODIFY_QUANTITY_IN_CART_FAILED, payload: msg });
    }
}

export const removeItemFromCartAction = (id) => async (dispatch) => {
    dispatch({ type: cartConstraints.DELETE_ITEM_FROM_CART_REQUEST });

    try {
        const { data } = await api.removeItemFromCartApi(id);
        dispatch({
            type: cartConstraints.DELETE_ITEM_FROM_CART_SUCCESS, payload: {
                data: data?.cart, msg: data?.msg
            }
        });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: cartConstraints.DELETE_ITEM_FROM_CART_FAILED, payload: msg });
    }
}