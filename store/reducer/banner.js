import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility"
const initialState = {
    bannerData: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_BANNER:
            return updateObject(state, action.payload)

        default: return state;

    }
}

export default reducer;
