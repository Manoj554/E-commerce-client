import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import categoryReducers from "./category.reducer";
import productReducers from "./product.reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    category: categoryReducers,
    product: productReducers
});

export default rootReducers;