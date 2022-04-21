import { productConstraints } from "../actions/actionConstraints";


const initialState = {
    message: null,
    error: null,
    loading: false,
    products: [],
    allProducts: [],
    subCategory: [],
    backupProducts: [],
    filter: false,
}

const productReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        //Products By Category
        case productConstraints.GET_PRODUCTS_BY_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case productConstraints.GET_PRODUCTS_BY_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
                products: [],
                subCategory: []
            };
            break;
        case productConstraints.GET_PRODUCTS_BY_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                products: payload?.data,
                backupProducts: payload?.data,
                subCategory: payload?.subCategory,
                filter: true
            };
            break;

        //Get Products By Root Category
        case productConstraints.GET_PRODUCTS_BY_ROOT_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case productConstraints.GET_PRODUCTS_BY_ROOT_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
                products: [],
                subCategory: []
            };
            break;
        case productConstraints.GET_PRODUCTS_BY_ROOT_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                products: payload?.data,
                backupProducts: payload?.data,
                subCategory: payload?.subCategory,
                filter: true
            };
            break;

        // Filter products by  Category
        case productConstraints.FILTER_PRODUCTS_BY_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case productConstraints.FILTER_PRODUCTS_BY_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
                products: state.backupProducts,
            };
            break;
        case productConstraints.FILTER_PRODUCTS_BY_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                products: payload?.data,
                filter: true
            };
            break;

        // Filter products by  Root Category
        case productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
                products: state.backupProducts,
            };
            break;
        case productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                products: payload?.data,
                filter: true
            };
            break;

        //All Products
        case productConstraints.GET_ALL_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true,
                products: [],
                filter: false
            };
            break;
        case productConstraints.GET_ALL_PRODUCT_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
            };
            break;
        case productConstraints.GET_ALL_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                allProducts: payload?.data,
                subCategory: payload?.subCategory,
                backupProducts: payload?.data
            };
            break;
        default:
    }
    return state;
}

export default productReducers;