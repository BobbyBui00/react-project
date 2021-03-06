import * as ActionType from './constants';

let initialState = {
    loading: false,
    data: null,
    err: null,
}

export const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ACT_DETAIL_MOVIE_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return {...state};
        case ActionType.ACT_DETAIL_MOVIE_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return {...state};
        case ActionType.ACT_DETAIL_MOVIE_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return {...state};
        default:
            return {...state};
    }
}

export default detailReducer;