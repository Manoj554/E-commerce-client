import * as api from '../../apis/apis';
import { productConstraints } from "./actionConstraints"

export const getProductByCategory = (val, router) => async (dispatch) => {
    dispatch({ type: productConstraints.GET_PRODUCTS_BY_CATEGORY_REQUEST });

    try {
        const { data } = await api.getProductsByCategoryApi(val.id);
        dispatch({ type: productConstraints.GET_PRODUCTS_BY_CATEGORY_SUCCESS, payload: { data: data.products, msg: data.msg, subCategory: data.subCategory } });
        router.push(`/products?search=${val.name}&id=${val.id}`);
    } catch (error) {
        dispatch({ type: productConstraints.GET_PRODUCTS_BY_CATEGORY_FAILED });
    }
}

export const getProductsByRootCategory = (val, router) => async (dispatch) => {
    dispatch({ type: productConstraints.GET_PRODUCTS_BY_ROOT_CATEGORY_REQUEST });

    try {
        const { data } = await api.getProductsByRootCategoryApi(val.id);
        dispatch({ type: productConstraints.GET_PRODUCTS_BY_ROOT_CATEGORY_SUCCESS, payload: { data: data.products, msg: data.msg, subCategory: data.subCategory } });
        router.push(`/products?search=${val.name}&id=${val.id}`);
    } catch (error) {
        dispatch({ type: productConstraints.GET_PRODUCTS_BY_ROOT_CATEGORY_FAILED });
    }
}

export const getAllProducts = () => async (dispatch) => {
    dispatch({ type: productConstraints.GET_ALL_PRODUCT_REQUEST });

    try {
        const { data } = await api.getAllProductApi();
        dispatch({ type: productConstraints.GET_ALL_PRODUCT_SUCCESS, payload: { data: data.products, subCategory: data.subCategory, msg: data.msg } });
    } catch (error) {
        dispatch({ type: productConstraints.GET_ALL_PRODUCT_FAILED });
    }
}

export const searchProductByCategory = (id) => async (dispatch) => {
    dispatch({ type: productConstraints.SEARCH_PRODUCT_BY_CATEGORY_REQUEST });

    try {
        const { data } = await api.getProductByCategory(id);
        dispatch({
            type: productConstraints.SEARCH_PRODUCT_BY_CATEGORY_SUCCESS, payload: {
                data: data.products, msg: data?.msg
            }
        });
    } catch (error) {
        dispatch({ type: productConstraints.SEARCH_PRODUCT_BY_CATEGORY_FAILED });
    }
}

export const filterProductByCategory = (ids) => async (dispatch) => {
    dispatch({ type: productConstraints.FILTER_PRODUCTS_BY_CATEGORY_REQUEST });

    try {
        const { data, status } = await api.filterProductsByCategoryApi(ids);
        if (status === 204) {
            dispatch({ type: productConstraints.FILTER_PRODUCTS_BY_CATEGORY_FAILED });
        } else {
            dispatch({
                type: productConstraints.FILTER_PRODUCTS_BY_CATEGORY_SUCCESS, payload: {
                    data: data.products, msg: data.msg
                }
            });
        }
    } catch (error) {
        dispatch({ type: productConstraints.FILTER_PRODUCTS_BY_CATEGORY_FAILED });
    }
}

export const filterProductBySubRootCategory = (ids) => async (dispatch) => {
    dispatch({ type: productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_REQUEST });

    try {
        const { data, status } = await api.filterProductsBySubRootCategoryApi(ids);
        if (status === 204) {
            dispatch({ type: productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_FAILED });
        } else {
            dispatch({
                type: productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_SUCCESS, payload: {
                    data: data.products, msg: data.msg
                }
            });
        }
    } catch (error) {
        dispatch({ type: productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_FAILED });
    }
}