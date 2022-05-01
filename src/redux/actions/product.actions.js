import * as api from '../../apis/apis';
import { productConstraints } from "./actionConstraints"
import { errorMessage } from './actionHelper';

export const getProductByCategory = (val, router) => async (dispatch) => {
    dispatch({ type: productConstraints.GET_PRODUCTS_BY_CATEGORY_REQUEST });

    try {
        const { data } = await api.getProductsByCategoryApi(val.id);
        dispatch({ type: productConstraints.GET_PRODUCTS_BY_CATEGORY_SUCCESS, payload: { data: data.products, msg: data.msg, subCategory: data.subCategory } });
        router.push(`/products?search=${val.name}&id=${val.id}`);
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: productConstraints.GET_PRODUCTS_BY_CATEGORY_FAILED, payload: msg });
    }
}

export const getProductsByRootCategory = (val, router) => async (dispatch) => {
    dispatch({ type: productConstraints.GET_PRODUCTS_BY_ROOT_CATEGORY_REQUEST });

    try {
        const { data } = await api.getProductsByRootCategoryApi(val.id);
        dispatch({ type: productConstraints.GET_PRODUCTS_BY_ROOT_CATEGORY_SUCCESS, payload: { data: data.products, msg: data.msg, subCategory: data.subCategory } });
        router.push(`/products?search=${val.name}&id=${val.id}`);
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: productConstraints.GET_PRODUCTS_BY_ROOT_CATEGORY_FAILED, payload: msg });
    }
}

export const getAllProducts = () => async (dispatch) => {
    dispatch({ type: productConstraints.GET_ALL_PRODUCT_REQUEST });

    try {
        const { data } = await api.getAllProductApi();
        dispatch({ type: productConstraints.GET_ALL_PRODUCT_SUCCESS, payload: { data: data.products, subCategory: data.subCategory, msg: data.msg } });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: productConstraints.GET_ALL_PRODUCT_FAILED, payload: msg });
    }
}

export const filterProductByCategory = (ids) => async (dispatch) => {
    dispatch({ type: productConstraints.FILTER_PRODUCTS_BY_CATEGORY_REQUEST });

    try {
        const { data, status } = await api.filterProductsByCategoryApi(ids);
        if (status === 204) {
            dispatch({ type: productConstraints.FILTER_PRODUCTS_BY_CATEGORY_FAILED, payload: data?.msg });
        } else {
            dispatch({
                type: productConstraints.FILTER_PRODUCTS_BY_CATEGORY_SUCCESS, payload: {
                    data: data.products, msg: data.msg
                }
            });
        }
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: productConstraints.FILTER_PRODUCTS_BY_CATEGORY_FAILED, payload: msg });
    }
}

export const filterProductBySubRootCategory = (ids) => async (dispatch) => {
    dispatch({ type: productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_REQUEST });

    try {
        const { data, status } = await api.filterProductsBySubRootCategoryApi(ids);
        if (status === 204) {
            dispatch({ type: productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_FAILED, payload: data?.msg });
        } else {
            dispatch({
                type: productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_SUCCESS, payload: {
                    data: data.products, msg: data.msg
                }
            });
        }
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_FAILED, payload: msg });
    }
}

export const searchProductByQuery = (query) => async (dispatch) => {
    dispatch({ type: productConstraints.SEARCH_PRODUCT_BY_QUERY_REQUEST });

    try {
        const { data } = await api.searchProductByQueryApi(query);
        dispatch({
            type: productConstraints.SEARCH_PRODUCT_BY_QUERY_SUCCESS, payload: {
                data: data.products, msg: data?.msg
            }
        });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: productConstraints.SEARCH_PRODUCT_BY_QUERY_FAILED, payload: msg });
    }
}

export const getProductsByName = (val) => async (dispatch) => {
    dispatch({ type: productConstraints.GET_PRODUCTS_BY_NAME_REQUEST });

    try {
        const { data } = await api.getProductsByNameApi(val);
        dispatch({
            type: productConstraints.GET_PRODUCTS_BY_NAME_SUCCESS, payload: {
                data: data.products, msg: data?.msg
            }
        });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: productConstraints.GET_PRODUCTS_BY_NAME_FAILED, payload: msg });
    }
}

export const getProductInfo = (id) => async (dispatch) => {
    dispatch({ type: productConstraints.GET_PRODUCT_INFO_REQUEST });

    try {
        const { data } = await api.getProductInfoApi(id);
        dispatch({
            type: productConstraints.GET_PRODUCT_INFO_SUCCESS, payload: {
                data: data?.product, msg: data?.msg
            }
        });
    } catch (error) {
        let msg = errorMessage(error);
        dispatch({ type: productConstraints.GET_PRODUCTS_BY_NAME_FAILED, payload: msg });
    }
}