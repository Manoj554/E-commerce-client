import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";
import categoryReducers from "./category.reducer";
import orderReducer from "./order.reducer";
import productReducers from "./product.reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    category: categoryReducers,
    product: productReducers,
    cart: cartReducer,
    order: orderReducer
});

export default rootReducers;