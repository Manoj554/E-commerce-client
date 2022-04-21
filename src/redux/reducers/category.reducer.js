import { categoryConstraints } from "../actions/actionConstraints";


const initialState = {
    message: null,
    error: null,
    loading: false,
    categories: []
}

const categoryReducers = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case categoryConstraints.GET_ALL_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;
        case categoryConstraints.GET_ALL_CATEGORY_FAILED:
            state = {
                ...state,
                loading: false,
                message: null,
                error: payload?.msg,
            };
            break;
        case categoryConstraints.GET_ALL_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                message: payload?.msg,
                categories: payload?.data
            };
            break;
        default:
    }
    return state;
}

export default categoryReducers;