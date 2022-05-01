import API from "./axios";

export const signUpApi = (data) => API.post('/auth/signup', data);

export const signInApi = (data) => API.post('/auth/signin', data);

export const signOutApi = () => API.get('/auth/signout');

export const getUserInfoApi = () => API.get('/auth/get-user-info');

export const getAllCategoriesApi = () => API.get('/category/all-category');

export const getProductsByCategoryApi = (id) => API.get(`/product/get-product-by-category/${id}`);

export const getProductsByRootCategoryApi = (id) => API.get(`/product/get-product-by-root-category/${id}`);

export const getAllProductApi = () => API.get('/product/get-all-product');

export const searchProductByQueryApi = (query) => API.get(`/product/suggestion?query=${query}`);

export const getProductsByNameApi = (query) => API.get(`/product/search-by-name?query=${query}`);

export const filterProductsByCategoryApi = (ids) => API.post('/product/filter-product-by-category', ids);

export const filterProductsBySubRootCategoryApi = (ids) => API.post('/product/filter-product-by-subroot-category', ids);

export const wishListActionApi = (id) => API.post(`/cart/wishlist-action/${id}`);

export const cartActionApi = (id) => API.post(`/cart/cart-action/${id}`);

export const getProductsFromWishListApi = (ids) => API.post('/cart/get-products-from-wishlist', ids);

export const getCartApi = () => API.get('/cart/get-cart');

export const getProductsFromCartApi = () => API.get('/cart/get-products-from-cart');

export const modifyQuantityInCartApi = (obj) => API.patch('/cart/modify-quantity-in-cart', obj);

export const removeItemFromCartApi = (id) => API.delete(`/cart/remove-item-from-cart/${id}`);

export const getProductInfoApi = (id) => API.get(`product/get-product-info/${id}`);

export const addNewAddressApi = (data) => API.post('/auth/add-new-address', data);

export const getAllAddresssApi = () => API.get('/auth/get-all-address');

export const placeOrderApi = (data) => API.post('/order/place-order', data);



