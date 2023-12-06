const currentTime = new Date().toLocaleTimeString('bg-BG', { hour: '2-digit', minute: '2-digit' });

// success
export const editSuccess = `Edit Successfull at ${currentTime}`;
export const addSuccess = `Add Successfull at ${currentTime}`;
export const deleteSuccess = `Delete Successfull at ${currentTime}`;
export const returnSuccess = `Return Successfull at ${currentTime}`;

// fail
export const editError = `Edit Failed at ${currentTime}`;
export const addError = `Add Failed at ${currentTime}`;
export const deleteError = `Delete Failed at ${currentTime}`;

// map
export const invalidCoordinates = "Invalid coordinates";

// auth
export const loginSucces = "Hello, ";
export const logoutSucces = "Logout Successfull";
export const registerSucces = "Registered";