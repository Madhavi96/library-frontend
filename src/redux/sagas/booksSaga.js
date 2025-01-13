import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from '../types/bookActionTypes';

const apiUrl = 'http://localhost:8080/api/';

function* fetchBooks() {
    try {
        const response = yield call(axios.get, apiUrl);
        yield put({ type: FETCH_BOOKS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: FETCH_BOOKS_FAILURE, payload: error.message });
    }
}


function* watchFetchBooks() {
    yield takeLatest(FETCH_BOOKS_REQUEST, fetchBooks);
}

export default function* rootSaga() {
    yield all([
        fork(watchFetchBooks),
    ]);
}
