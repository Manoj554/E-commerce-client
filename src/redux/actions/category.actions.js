import * as api from '../../apis/apis';
import { categoryConstraints } from './actionConstraints';

export const getAllCategories = () => async (dispatch) => {
    dispatch({ type: categoryConstraints.GET_ALL_CATEGORY_REQUEST });
    try {
        const { data } = await api.getAllCategoriesApi();
        dispatch({ type: categoryConstraints.GET_ALL_CATEGORY_SUCCESS, payload: { data: data.categories, msg: data.msg } });
    } catch (error) {
        console.log(error.response);
        dispatch({ type: categoryConstraints.GET_ALL_CATEGORY_FAILED });
    }
}