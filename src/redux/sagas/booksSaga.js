import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from '../types/bookActionTypes';
import { API_URL, PAGE_SIZE } from '../../constants/AppConstants';

function* fetchBooks(action) {
    try {
        const response = yield call(axios.get, `${API_URL}/books?page=${action.payload.page - 1}&size=${PAGE_SIZE}`
        );
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
