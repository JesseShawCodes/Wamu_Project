import {
    RECEIVE_DATA,
    SEARCH_DATA,
    SEARCH_ERROR
} from './actions'

const initialState = {
    data: [],
    loading: false,
    error: null
};

export default function dataReducer(state=initialState, action) {
    if (action.type === SEARCH_DATA) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === RECEIVE_DATA) {
        return Object.assign({}, state, {
            data: action.data,
            loading: false,
            error: null
        });
    }
    else if (action.type === SEARCH_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}
