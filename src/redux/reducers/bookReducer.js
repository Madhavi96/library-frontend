import {
    FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS
} from '../types/bookActionTypes';

const initialState = {
    books: []
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_SUCCESS:
            return { ...state, books: action.payload };
        
        default:
            return state;
    }
};

export default bookReducer;