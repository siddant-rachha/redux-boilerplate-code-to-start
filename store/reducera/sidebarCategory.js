import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility"
const initialState = {
    categories: null,
    loading: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_SIDEBAR_CATEGORY:
            return updateObject(state, action.payload)
        case actionTypes.SIDEBAR_CATEGORY_LOADING:
            return updateObject(state, action.payload)

        default: return state;

    }
}

export default reducer;