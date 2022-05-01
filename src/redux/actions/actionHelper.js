export const errorMessage = (error) => {
    let err = null;
    if (error?.response) {
        err = error?.response?.data?.msg;
        return err;
    } else if (error?.name) {
        return error.name
    }
    err = 'Network Error';
    return err;
}