import * as ActionType from './constants';

let initialState = {
    loading: false,
    data: null,
    err: null,
}

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ACT_SEARCH_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return {...state};
        case ActionType.ACT_SEARCH_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return {...state};
        case ActionType.ACT_SEARCH_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return {...state};   
        default:
            return {...state};
    }
}

export default SearchReducer;