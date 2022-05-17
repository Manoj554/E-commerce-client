import { authConstraints, cartConstraints } from "../actions/actionConstraints";

const initialState = {
    cart: null,
    cartList: [],
    loading: false,
    error: null,
    message: null,
    wishList: [],
    products: [],
    cartProducts: [],
};

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        //Get Cart 
        case cartConstraints.GET_CART_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            };
            break;
        case cartConstraints.GET_CART_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload
            };
            break;
        case cartConstraints.GET_CART_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: payload?.msg,
                cart: payload?.data,
                wishList: payload?.data?.wishListItems,
                cartList: payload?.data?.cartItems
            };
            break;

        //Modify Quantity In  Cart 
        case cartConstraints.MODIFY_QUANTITY_IN_CART_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            };
            break;
        case cartConstraints.MODIFY_QUANTITY_IN_CART_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload
            };
            break;
        case cartConstraints.MODIFY_QUANTITY_IN_CART_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: payload?.msg,
                cart: payload?.data,
                wishList: payload?.data?.wishListItems,
                cartList: payload?.data?.cartItems
            };
            break;

        //Action to WishList
        case cartConstraints.WISHLIST_ACTION_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            };
            break;

        case cartConstraints.WISHLIST_ACTION_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload
            };
            break;
        case cartConstraints.WISHLIST_ACTION_SUCCESS:
            let cart = payload?.data;
            state = {
                ...state,
                loading: false,
                message: payload?.msg,
                cart: payload?.data,
                wishList: payload?.data?.wishListItems,
                cartList: payload?.data?.cartItems
            };
            break;

        //Cart Action
        case cartConstraints.CART_ACTION_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            };
            break;
        case cartConstraints.CART_ACTION_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload
            };
            break;
        case cartConstraints.CART_ACTION_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: payload?.msg,
                cart: payload?.data,
                wishList: payload?.data?.wishListItems,
                cartList: payload?.data?.cartItems
            };
            break;

        //Delete Items from Cart
        case cartConstraints.DELETE_ITEM_FROM_CART_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            };
            break;
        case cartConstraints.DELETE_ITEM_FROM_CART_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload
            };
            break;
        case cartConstraints.DELETE_ITEM_FROM_CART_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: payload?.msg,
                cart: payload?.data,
                wishList: payload?.data?.wishListItems,
                cartList: payload?.data?.cartItems
            };
            break;

        //Get all Products from wishlist
        case cartConstraints.GET_PRODUCTS_FROM_WISHLIST_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            };
            break;
        case cartConstraints.GET_PRODUCTS_FROM_WISHLIST_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload
            };
            break;
        case cartConstraints.GET_PRODUCTS_FROM_WISHLIST_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: payload?.msg,
                products: payload?.data
            };
            break;

        //Get all Products from Cart
        case cartConstraints.GET_PRODUCTS_FROM_CART_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            };
            break;
        case cartConstraints.GET_PRODUCTS_FROM_CART_FAILED:
            state = {
                ...state,
                loading: false,
                error: payload
            };
            break;
        case cartConstraints.GET_PRODUCTS_FROM_CART_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: payload?.msg,
                cartProducts: payload?.data
            };
            break;

        case authConstraints.SIGNOUT_SUCCESS:
            state = {
                ...initialState
            };
            break;


        default:
            break;
    }

    return state;
}

export default cartReducer;