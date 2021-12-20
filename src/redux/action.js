import * as types from "./actionType";

export const loadUserStart = () => ({
    type: types.LOAD_USERS_START,
});

export const loadUserSuccess = (users) => ({
    type: types.LOAD_USERS_START,
    payload: users
});

export const loadUserError = (error) => ({
    type: types.LOAD_USERS_ERROR,
    payload: error
});