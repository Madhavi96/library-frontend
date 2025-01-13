import {
    FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE
} from '../types/bookActionTypes';

export const fetchBooksRequest = () => ({ type: FETCH_BOOKS_REQUEST });
export const fetchBooksSuccess = books => ({ type: FETCH_BOOKS_SUCCESS, payload: books });
export const fetchBooksFailure = error => ({ type: FETCH_BOOKS_FAILURE, payload: error });
