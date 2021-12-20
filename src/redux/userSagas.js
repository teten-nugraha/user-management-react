import {
    take, 
    takeEvery,
    takeLatest,
    put,
    all,
    delay,
    fork,
    call
} from "redux-saga/effects";

import { loadUserSuccess, loadUserError } from "./action";
import { loadUserApi } from "./api";
import * as types from "./actionType";

export function* onLoadUsersStartAsync() {

}

export function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}

const userSagas = [
    fork(onLoadUsers)
];

export default function *rootSaga(){
    yield all([...userSagas])
}