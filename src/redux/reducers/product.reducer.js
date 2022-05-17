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
    ItemsBySearchResult: [],
    productInfo: null
}

const productReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        //Products By Category
        case productConstraints.GET_PRODUCTS_BY_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            };
            break;
        case productConstraints.GET_PRODUCTS_BY_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload,
                products: [],
                subCategory: []
            };
            break;
        case productConstraints.GET_PRODUCTS_BY_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
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
                loading: true,
                error: null,
                message: null
            };
            break;
        case productConstraints.GET_PRODUCTS_BY_ROOT_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload,
                products: [],
                subCategory: []
            };
            break;
        case productConstraints.GET_PRODUCTS_BY_ROOT_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
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
                loading: true,
                error: null,
                message: null
            };
            break;
        case productConstraints.FILTER_PRODUCTS_BY_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload,
                products: state.backupProducts,
            };
            break;
        case productConstraints.FILTER_PRODUCTS_BY_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: payload?.msg,
                products: payload?.data,
                filter: true
            };
            break;

        // Filter products by  Root Category
        case productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            };
            break;
        case productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload,
                products: state.backupProducts,
            };
            break;
        case productConstraints.FILTER_PRODUCTS_BY_SUBROOT_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
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
                filter: false,
                error: null,
                message: null
            };
            break;
        case productConstraints.GET_ALL_PRODUCT_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload,
            };
            break;
        case productConstraints.GET_ALL_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: payload?.msg,
                allProducts: payload?.data,
                subCategory: payload?.subCategory,
                backupProducts: payload?.data,
                filter: false
            };
            break;

        //Search By Query
        case productConstraints.SEARCH_PRODUCT_BY_QUERY_REQUEST:
            state = {
                ...state,
                ItemsBySearchResult: [],
                error: null,
                message: null
            };
            break;
        case productConstraints.SEARCH_PRODUCT_BY_QUERY_FAILED:
            state = {
                ...state,
                error: payload,
            };
            break;
        case productConstraints.SEARCH_PRODUCT_BY_QUERY_SUCCESS:
            state = {
                ...state,
                message: payload?.msg,
                ItemsBySearchResult: payload?.data
            };
            break;

        //Get Product BY Name
        case productConstraints.GET_PRODUCTS_BY_NAME_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            };
            break;
        case productConstraints.GET_PRODUCTS_BY_NAME_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload,
                products: state.backupProducts,
            };
            break;
        case productConstraints.GET_PRODUCTS_BY_NAME_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: payload?.msg,
                products: payload?.data,
                filter: true
            };
            break;

        //Get Product Info
        case productConstraints.GET_PRODUCT_INFO_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null,
                productInfo: null
            };
            break;
        case productConstraints.GET_PRODUCT_INFO_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload,
            };
            break;
        case productConstraints.GET_PRODUCT_INFO_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: payload?.msg,
                productInfo: payload?.data,
            };
            break;
        default:
    }
    return state;
}

export default productReducers;