import API from "./axios";

export const signUpApi = (data) => API.post('/auth/signup', data);

export const signInApi = (data) => API.post('/auth/signin', data);

export const signOutApi = () => API.get('/auth/signout');

export const getAllCategoriesApi = () => API.get('/category/all-category');

export const getProductsByCategoryApi = (id) => API.get(`/product/get-product-by-category/${id}`);

export const getProductsByRootCategoryApi = (id) => API.get(`/product/get-product-by-root-category/${id}`);

export const getAllProductApi = () => API.get('/product/get-all-product');

export const searchProductByCategoryApi = (query) => API.get(`/product/search-by-category?query=${query}`);

export const filterProductsByCategoryApi = (ids) => API.post('/product/filter-product-by-category', ids);

export const filterProductsBySubRootCategoryApi = (ids) => API.post('/product/filter-product-by-subroot-category', ids);

// export const getUserInfoApi = () => API.get('/auth/get-user-info');

// export const addNewCategoryApi = (category) => API.post('/category/add-new-category', category);


// export const deleteCategoryApi = (id) => API.delete(`/category/delete-category/${id}`);

// export const getCategoryInfoApi = (id) => API.get(`/category/get-category-info/${id}`);

// export const editCategoryApi = (category) => API.patch('/category/edit-category', category);

// export const addNewProductApi = (product) => API.post('/product/add-new-product', product);

// export const editProductApi = (product) => API.patch('/product/edit-product', product);

// export const deleteProductApi = (id) => API.delete(`/product/delete-product/${id}`);

// export const searchProductApi = (query) => API.get(`/product/query-search?query=${query}`);

// export const searchProductByCategoryApi = (id) => API.get(`/product/get-product-bycategory/${id}`);

